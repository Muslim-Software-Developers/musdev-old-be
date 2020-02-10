<?php

namespace App\Http\Controllers\Api\Member;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Auth\StoreUserRequest;
use App\Http\Requests\User\UserLoginRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use DB;
use App\Models\Role;
use Illuminate\Http\Response;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    public function store(StoreUserRequest $request)
    {
    	DB::beginTransaction();
	    	try {
				$user = User::create([
		            'name' => $request->name,
		            'email' => $request->email,
		            'password' => Hash::make($request->password),
		            'phone_number' => $request->phone_number,
		        ]);
		        //create a member record in members table by mapping created user to a member

		        //attach all user to a default role called member (everyone is a member)
		        $user
	               ->roles()
	               ->attach(Role::where('name', 'member')->first());

	            $token = JWTAuth::fromUser($user);
	            
	            //send email verification link to user
				$user->sendApiEmailVerificationNotification();


		        DB::commit();
		        return response()->json([
		        	'status' => response::HTTP_CREATED,
		        	'message' => 'Registration successful! Kindly confirm your email by clicking on the verify user button sent to email address!',
		        	'data' => [
		        		'user' =>(new UserResource($user)),
		        		 'token' => $token
		        	]
		        ]);


	    	} catch (\Swift_TransportException $e) {
	    		DB::rollback();
	    		return response()->json([
	    			'status' => response::HTTP_INTERNAL_SERVER_ERROR,
	    			'message' => $e->getMessage(),
	    			'data' => null
	    		]);
	    	}
    }

    public function login(UserLoginRequest $request)
    {
	    try {

	    	if (! $token = JWTAuth::attempt($request->all())) {
				return response()->json([
		        	'status' => response::HTTP_INTERNAL_SERVER_ERROR,
		        	'message' => 'Invalid login credentials!',
		        	'data' => null
		        ]);
	    	}
	    	return response()->json([
	    		'status' => 200,
			    'message' => 'Authentication successful! Welcome.',
			    'data' => [
			    	'user' => new UserResource(auth()->user()),
			    	'access_token' => $token,
			    	'token_type' => 'bearer'
			    	// 'expires_in' => auth()->factory()->getTTL() * 60
			    ]], response::HTTP_OK);

	    	
	    } catch (\Exception $e) {
	    	return response()->json([
	    		'status' => response::HTTP_INTERNAL_SERVER_ERROR,
	    		'message' => $e->getMessage(),
	    		'data' => null
	    	]);
	    }
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(
            new UserResource(auth()->user()),
            response::HTTP_OK
        );
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'user' => new UserResource(auth()->user()),
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ], response::HTTP_OK);
    }

    /**
     * Get the login username to be used by the controller.
     *
     * @return string
     */
    public function username()
    {
        return 'email';
    }
}

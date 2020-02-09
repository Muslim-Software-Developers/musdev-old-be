<?php

namespace App\Http\Controllers\Auth\Api;

use Illuminate\Http\Request;
use App\Http\Requests\Auth\ChangePasswordRequest;
use App\Models\User;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Passwords\PasswordBrokerManager;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Response;

class ResetPasswordController extends Controller
{
    /**
     * Send reset password email
     */
    public function sendResetLink(Request $request)
    {
        // try {
        //     //check email address is valid
        //     $this->validate($request, ['email' => 'required|email']);
        //     $user = User::where('email', request()->only('email'))->first();
        //     $token = $this->broker()->getRepository()->create($user);

        //     $user->sendPasswordResetNotification($token.'&email='.$user->email);

        //     return response()->json([
        //         'message' => 'please click on reset password button on the email sent to you to reset your password'
        //     ], response::HTTP_CREATED);
        // } catch (\Swift_TransportException $e) {
        //     return response()->json([
        //         'message' => $e->getMessage()
        //     ], response::HTTP_INTERNAL_SERVER_ERROR);
        // }

        //check email address is valid
        $this->validate($request, ['email' => 'required|email']);

        //send password reset to the user with this email address
        $response = $this->broker()->sendResetLink(
            $request->only('email')
        );

        if ($response == Password::RESET_LINK_SENT) {
            return response()->json([
                "message" => "password reset link sent to email"
            ], response::HTTP_OK);
        } else {
            return response()->json([
                "message" => "unable to send password reset link"
            ], response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Reset the password
     */
    public function resetPassword(Request $request)
    {
        //check for valid input
        $rules = [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:8'
        ];
        $this->validate($request, $rules);

        //reset the password
        $response = $this->broker()->reset(
            $this->credentials($request),
            function ($user, $password) {
                $this->reset($user, $password);
            }
        );

        if ($response == Password::PASSWORD_RESET) {
            return response()->json([
                "message" => "password reset successfully"
            ], response::HTTP_OK);
        } else {
            return response()->json([
                "message" => "unable to reset password"
            ], response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * change the password
     */
    public function changePassword(ChangePasswordRequest $request)
    {
        $user = auth()->user();
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json([
            'message' => 'password changed successfully'
        ], response::HTTP_OK);
    }

    /**
     * Get the password reset credentials from the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    protected function credentials(Request $request)
    {
        return $request->only('email', 'password', 'password_confirmation', 'token');
    }

    /**
     * Reset the given user's password.
     *
     * @param  \Illuminate\Contracts\Auth\CanResetPassword  $user
     * @param  string  $password
     * @return void
     */
    protected function reset($user, $password)
    {
        $user->password = Hash::make($password);

        $user->setRememberToken(Str::random(60));

        $user->save();

        event(new PasswordReset($user));

        //$this->guard()->login($user);
    }

    /**
     * Get the broker to be used during password reset.
     *
     * @return \Illuminate\Contracts\Auth\PasswordBroker
     */
    public function broker()
    {
        return Password::broker();
    }

    /**
     * Get the broker to be used during password reset.
     *
     * @return \Illuminate\Contracts\Auth\PasswordBroker
     */
    // public function broker()
    // {
    //     $passwordBrokerManager = new PasswordBrokerManager(app());
    //     return $passwordBrokerManager->broker();
    // }
}

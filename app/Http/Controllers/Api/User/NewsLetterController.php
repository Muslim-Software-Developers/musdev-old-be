<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\NewsLetterResource;
use App\Models\NewsletterSubscriber;
use App\Http\Requests\User\NewsLetterRequest;
use Illuminate\Http\Response;
use DB;
use Spatie\Newsletter\NewsletterFacade as Newsletter;

class NewsLetterController extends Controller
{

    public function store(NewsLetterRequest $request) {
	    	try {
				if ( ! Newsletter::isSubscribed($request->email) ) 
		        {
		            Newsletter::subscribe($request->email);
		            return response()->json([
		            	'status' => response::HTTP_CREATED,
		            	'message' => 'Thank you for subscribing to our awesome newsletter!',
		            	'data' => $request->email,
		            ]);
		        }

		        return response()->json([
	            	'status' => 422,
	            	'message' => 'Oops! You are already subscribed to our newsletter.',
	            	'data' => $request->email,
	            ]);
	            
	    	} catch (\Exception $e) {
	    		return response()->json([
	    			'status' => response::HTTP_INTERNAL_SERVER_ERROR,
	    			'message' => $e->getMessage(),
	    			'data' => null
	    		]);
	    	}
    }
}

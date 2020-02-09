<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ContactResource;
use App\Models\Contact;
use App\Http\Requests\User\ContactUsRequest;
use Illuminate\Http\Response;
use DB;

class ContactUsController extends Controller
{

    public function store(ContactUsRequest $request) {
    	
    	DB::beginTransaction();
	    	try {
				$contact = Contact::create([
		            'name' => $request->name,
		            'email' => $request->email,
		            'subject' => $request->subject,
		            'message' => $request->message
		        ]);
		        DB::commit();
		        return response()->json([
		        	'status' => response::HTTP_CREATED,
		        	'message' => 'Thank you for contacting us! We have successfully received your message.',
		        	'data' => (new ContactResource($contact)),
		        ]);

	    	} catch (\Exception $e) {
	    		DB::rollback();
	    		return response()->json([
	    			'status' => response::HTTP_INTERNAL_SERVER_ERROR,
	    			'message' => $e->getMessage(),
	    			'data' => null
	    		]);
	    	}
    }
}

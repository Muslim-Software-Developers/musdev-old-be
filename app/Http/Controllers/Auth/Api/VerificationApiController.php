<?php

namespace App\Http\Controllers\Auth\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Auth\Events\Verified;

class VerificationApiController extends Controller
{
    use VerifiesEmails;

    /**
     * Show email verification notice.
     */
    public function show()
    {
        //
    }

    /**
     * Mark the authenticated user's email as verified
     * @param \Illuminate\Http\Request $request
     * @param \Illuminate\Http\Response
     */
    public function verify(Request $request)
    {
        if (! $request->hasValidSignature())
            abort(401);
        
        $userId = $request->id;
        $user = User::FindOrFail($userId);
        if ($user->hasVerifiedEmail())
                return response()->json("user have verified email already", 422);
        $date = date("Y-m-d g:i:s");

        $user->email_verified_at = $date;       //to enable the “email_verified_at field of that user be a current time stamp by mimicing the must verify email feature

        $user->save();

        return response()->json([
            "message" => "email verified successfully"
        ], response::HTTP_OK);
    }

    /**
     * Resend Verification notification.
     * @param \Illuminate\Http\Request $request
     * @param \Illuminate\Http\Response
     */
    public function resend(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return response()->json("user have verified email already", 422);
        }
        try {
            $request->user()->sendEmailVerificationNotification();
            return response()->json([
                "message" => "email verification link resent"
            ], response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Swift_TransportException $e) {
            return response()->json([
                "message" => $e->getMessage()
            ], response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}

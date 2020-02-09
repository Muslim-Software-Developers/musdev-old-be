<?php

use Illuminate\Http\Request;
Route::middleware('auth:api')->get('/users', function (Request $request) {
    return $request->user();
});

//Auth::routes(['verify' => true]);

//User Authentication
Route::group(['prefix' => 'v1/auth'], function ($router) {
    //user auth routes
    Route::post('/login','Auth\Api\AuthController@login');
    Route::post('/register', 'Auth\Api\AuthController@register');
    Route::post('/logout', 'Auth\Api\AuthController@logout');
    Route::post('/refresh', 'Auth\Api\AuthController@refresh');
    Route::get('/profile', 'Auth\Api\AuthController@me');
    // Route::post('/user/facebook', 'CustomerController@loginFacebook');
    // Route::get('/oauth/token', 'CustomerController@redirect');
    // Route::get('/oauth/callback', 'CustomerController@callback');
});

Route::get('v1/auth/email/verify/{id}', 'Auth\Api\VerificationApiController@verify')->name('verificationapi.verify');
Route::get('v1/auth/email/resend', 'Auth\Api\VerificationApiController@resend')->name('verificationapi.resend');
Route::post('v1/auth/resetpassword', 'Auth\Api\ResetPasswordController@sendResetLink');
Route::put('v1/auth/resetpassword', 'Auth\Api\ResetPasswordController@resetPassword');
Route::put('v1/auth/changepassword', 'Auth\Api\ResetPasswordController@changePassword');

Route::apiResources([
    '/v1/users' => 'Api\UserController',
    '/v1/users/{id}/feedbacks' => 'Api\UserController',
    '/v1/feedbacks' => 'Api\FeedbackController'
]);
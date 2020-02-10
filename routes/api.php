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
});

Route::group(['prefix' => 'v1'],  function(){
    
    Route::group(['prefix' => 'member', 'namespace' => 'Api\Member'],  function(){
        Route::post('create', 'AuthController@store');
        Route::post('login', 'AuthController@login');
    });


    Route::group(['namespace' => 'Auth\Api'], function(){
        Route::get('/auth/email/verify/{id}', 'VerificationApiController@verify')->name('verificationapi.verify');
        Route::get('/auth/email/resend', 'VerificationApiController@resend')->name('verificationapi.resend');
        Route::post('/auth/resetpassword', 'ResetPasswordController@sendResetLink');
        Route::put('/auth/resetpassword', 'ResetPasswordController@resetPassword');
        Route::put('/auth/changepassword', 'ResetPasswordController@changePassword');
    });

    Route::group(['namespace' => 'Api\User'], function(){
        Route::post('contact-us', 'ContactUsController@store');
        Route::post('newsletter', 'NewsLetterController@store');
    });
});


Route::apiResources([
    '/v1/users' => 'Api\UserController',
    '/v1/users/{id}/feedbacks' => 'Api\UserController',
    '/v1/feedbacks' => 'Api\FeedbackController',
]);
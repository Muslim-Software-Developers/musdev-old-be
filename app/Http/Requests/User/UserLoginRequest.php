<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Response;

class UserLoginRequest extends FormRequest
{
    public function failedValidation(Validator $validator) { 
        throw new HttpResponseException(response()->json([
                    'status' => response::HTTP_INTERNAL_SERVER_ERROR,
                    'message' => $validator->errors()->first(),
                    'data' => null
                ]), 422); 
    }
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
        // return auth()->user()->authorizeRoles(['admin', 'moderator', 'member']);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'Email field is required and must be unique!',
            'password.required' => 'Password field is required!',
        ];
    }
}

<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Response;

class ContactUsRequest extends FormRequest
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
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|max:100',
            'message' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'Email field is required!',
            'message.required' => 'Message field is required!',
        ];
    }
}

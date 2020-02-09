<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Factory;
use Illuminate\Support\Facades\Auth;

class ChangePasswordRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->authorizeRoles(['admin', 'moderator', 'member']);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'old_password' => ['required', 'min:6', 'max:40', function ($attribute, $value, $fail) {
                if (!\Hash::check($value, $this->user()->password)) {
                    abort(403, 'Old Password did not match our records');
                }
            }],
            'password' => 'required|min:6|max:40|confirmed'
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'email' => $this->email,
            'avatar' => $this->avatar,
            'phone_number' => $this->phone_number,
            'access_level' => $this->roles()->first()->name
            //'access_level' => $this->id === auth()->user()->id ? auth()->user()->roles()->first()->name : $this->roles()->first()->name
        ];
    }
}

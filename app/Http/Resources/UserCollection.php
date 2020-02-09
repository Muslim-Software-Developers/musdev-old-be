<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class UserCollection extends Resource
{
    /**
     * Transform the resource collection into an array.
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
            'credit_card' => $this->credit_card,
            'address' => $this->address,
            'country' => $this->country,
            'state' => $this->state,
            'city' => $this->city,
            'access_level' => $this->id === auth()->user()->id ?    //check if authenticated user is same as the user resource to return the right access_level
                auth()->user()->roles()->first()->name :
                $this->roles()->first()->name,
            'href' => [
                'link' => route('users.show', $this->id)
            ]
        ];
    }
}

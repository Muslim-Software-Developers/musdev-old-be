<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';
    protected $primaryKey = 'id';
    protected $increments = true;

    protected $fillable = [
        'name', 'description'
    ];
    /**
     * Get dataset this model has
     * @return \App\Database\Eloquent\Relations\belongsToMany
     */
    public function users()
    {
        return $this->belongsToMany(User::Class);
    }
}
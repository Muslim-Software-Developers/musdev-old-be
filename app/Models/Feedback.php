<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    /** @var string $primaryKey */
    protected $primaryKey = 'id';

    /** @var string $table */
    protected $table = 'feedbacks';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'message', 'status', 'created_at', 'updated_at'
    ];

    public static function getAll()
    {
        return response()->json(
            Feedback::all(),
            response::HTTP_OK
        );
    }

    /**
     * Get dataset this model belongs to
     * @return \App\Database\Eloquent\Relations\HasMany
     */
    public function user()
    {
        return $this->BelongsTo(App/Models/User::Class);
    }
}

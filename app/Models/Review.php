<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $table = "reviews";
    protected $fillable = [
        'user_id',
        'meal_id',
        'comment',
        'rating'
    ];

    protected $primaryKey = "id";

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $table = "cart";

    protected $fillable = [
        'user_id',
        'meal_id',
        'date',
        'portion'
    ];

    public function meal()
    {
        return $this->belongsTo(Meal::class);
    }
}

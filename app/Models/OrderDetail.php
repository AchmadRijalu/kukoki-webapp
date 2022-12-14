<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    use HasFactory;

    protected $table = "order_details";
    protected $fillable = [
        'user_id',
        'meal_id',
        'order_id',
        'delivery_id',
        'portion',
    ];

    public function meal()
    {
        return $this->belongsTo(Meal::class);
    }

    public function delivery()
    {
        return $this->belongsTo(Delivery::class);
    }
}

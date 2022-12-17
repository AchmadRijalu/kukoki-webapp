<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Delivery extends Model
{
    use HasFactory;

    protected $table = "deliveries";
    protected $fillable = [
        'user_id',
        'date',
        'status',
        'address',
    ];

    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class);
    }
}

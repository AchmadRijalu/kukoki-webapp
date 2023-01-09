<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    use HasFactory;

    protected $table = "meals";
    protected $primaryKey = "id";
    protected $fillable = [
        'name',
        'description',
        'price',
        'duration',
        'img_path'
    ];


    public function ingredients()
    {
        return $this->belongsToMany(Ingredient::class, 'meal_ingredients')->withPivot(['amount']);
    }

    public function tools()
    {
        return $this->belongsToMany(Tool::class, 'meal_tools')->withPivot(['amount']);
    }
}

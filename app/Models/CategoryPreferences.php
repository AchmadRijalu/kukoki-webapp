<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryPreferences extends Model
{
    use HasFactory;

    protected $table = "category_preferences";
    
    protected $fillable = ['user_id', 'category_id'];

    protected $primaryKey = "id";
}

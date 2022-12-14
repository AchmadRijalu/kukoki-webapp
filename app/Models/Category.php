<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;


    protected $table = "categories";
    
    protected $fillable = ['name', 'image'];

    protected $primaryKey = "id";

    public function users(){
        return $this->belongsToMany(User::class, 'category_preferences')->withTimestamps();;
    }
}

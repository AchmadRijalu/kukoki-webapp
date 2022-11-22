<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    use HasFactory;

    protected $table = "meals";


    protected $primaryKey = "id";


    // public function anggotas(){
    //     return $this->hasMany(Anggota::class, 'kode_kk', 'no_kk');
    // }
}

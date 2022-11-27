<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('categories')->insert([
            'name' => 'Daging & Sayur',
            'image' => 'img/category/daging&sayur.svg',
            
         ]);
         DB::table('categories')->insert([
            'name' => 'Cepat & Mudah',
            'image' => 'img/category/cepat&mudah.svg',
            
         ]);
         DB::table('categories')->insert([
            'name' => 'Sayur',
            'image' => 'img/category/sayur.svg',
         ]);
         DB::table('categories')->insert([
            'name' => 'Roti',
            'image' => 'img/category/roti.svg',
         ]);
         DB::table('categories')->insert([
            'name' => 'Produk Susu',
            'image' => 'img/category/produk-susu.svg',
            
         ]);
         DB::table('categories')->insert([
            'name' => 'Protein Tinggi',
            'image' => 'img/category/protein-tinggi.svg',
            
         ]);
         DB::table('categories')->insert([
            'name' => 'Makanan Laut',
            'image' => 'img/category/makanan-laut.svg',
         ]);
         DB::table('categories')->insert([
            'name' => 'Menu Diet',
            'image' => 'img/category/menu-diet.svg',
         ]);
    }
}

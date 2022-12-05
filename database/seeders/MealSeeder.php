<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MealSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('meals')->insert([
            'name' => 'Grilled Salmon',
            'description' => 'This is the description of a meal kit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quibusdam!',
            'price' => 20000,
            'duration' => 40,
            'img_path' => 'grilled_salmon.png',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meals')->insert([
            'name' => 'Meal 2',
            'description' => 'This is the description of a meal kit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quibusdam!',
            'price' => 30000,
            'duration' => 40,
            'img_path' => 'grilled_salmon.png',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meals')->insert([
            'name' => 'Meal 3',
            'description' => 'This is the description of a meal kit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quibusdam!',
            'price' => 20000,
            'duration' => 40,
            'img_path' => 'grilled_salmon.png',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meals')->insert([
            'name' => 'Meal 4',
            'description' => 'This is the description of a meal kit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quibusdam!',
            'price' => 50000,
            'duration' => 40,
            'img_path' => 'grilled_salmon.png',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}

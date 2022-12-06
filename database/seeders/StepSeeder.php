<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StepSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('steps')->insert([
            'title' => 'Step 1 Meal 1',
            'description' => 'This is step 1 for meal 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quibusdam!',
            'meal_id' => 1,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('steps')->insert([
            'title' => 'Step 2 Meal 1',
            'description' => 'This is step 2 for meal 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quibusdam!',
            'meal_id' => 1,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('steps')->insert([
            'title' => 'Step 3 Meal 1',
            'description' => 'This is step 3 for meal 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quibusdam!',
            'meal_id' => 1,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}

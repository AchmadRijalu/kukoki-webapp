<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MealToolsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('meal_tools')->insert([
            'amount' => 1,
            'meal_id' => 1,
            'tool_id' => 1,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_tools')->insert([
            'amount' => 1,
            'meal_id' => 2,
            'tool_id' => 1,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_tools')->insert([
            'amount' => 1,
            'meal_id' => 3,
            'tool_id' => 2,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_tools')->insert([
            'amount' => 1,
            'meal_id' => 3,
            'tool_id' => 3,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_tools')->insert([
            'amount' => 1,
            'meal_id' => 4,
            'tool_id' => 2,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_tools')->insert([
            'amount' => 1,
            'meal_id' => 4,
            'tool_id' => 3,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

    }
}

<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MealIngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('meal_ingredients')->insert([
            'amount' => 50,
            'meal_id' => 1,
            'ingredient_id' => 1,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 50,
            'meal_id' => 1,
            'ingredient_id' => 2,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 20,
            'meal_id' => 1,
            'ingredient_id' => 3,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 30,
            'meal_id' => 1,
            'ingredient_id' => 4,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 50,
            'meal_id' => 1,
            'ingredient_id' => 5,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 5,
            'meal_id' => 1,
            'ingredient_id' => 6,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 5,
            'meal_id' => 1,
            'ingredient_id' => 7,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 10,
            'meal_id' => 1,
            'ingredient_id' => 8,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 75,
            'meal_id' => 2,
            'ingredient_id' => 1,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 25,
            'meal_id' => 2,
            'ingredient_id' => 3,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 50,
            'meal_id' => 2,
            'ingredient_id' => 4,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 50,
            'meal_id' => 2,
            'ingredient_id' => 5,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 15,
            'meal_id' => 2,
            'ingredient_id' => 9,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 35,
            'meal_id' => 2,
            'ingredient_id' => 10,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 5,
            'meal_id' => 2,
            'ingredient_id' => 6,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 5,
            'meal_id' => 2,
            'ingredient_id' => 7,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 10,
            'meal_id' => 2,
            'ingredient_id' => 8,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 10,
            'meal_id' => 2,
            'ingredient_id' => 11,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 5,
            'meal_id' => 2,
            'ingredient_id' => 12,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 10,
            'meal_id' => 2,
            'ingredient_id' => 11,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 5,
            'meal_id' => 2,
            'ingredient_id' => 12,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 200,
            'meal_id' => 3,
            'ingredient_id' => 14,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 10,
            'meal_id' => 3,
            'ingredient_id' => 8,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 250,
            'meal_id' => 4,
            'ingredient_id' => 13,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meal_ingredients')->insert([
            'amount' => 10,
            'meal_id' => 4,
            'ingredient_id' => 8,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

    }
}

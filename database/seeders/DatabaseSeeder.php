<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call(UserSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(MealSeeder::class);
        $this->call(IngredientSeeder::class);
        $this->call(ToolsSeeder::class);
        $this->call(StepSeeder::class);
        $this->call(MealIngredientSeeder::class);
        $this->call(MealToolsSeeder::class);
    }
}

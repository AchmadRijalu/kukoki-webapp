<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ingredients')->insert([
            'id' => 1,
            'name' => 'Wortel',
            'unit' => 'gr',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('ingredients')->insert([
            'id' => 2,
            'name' => 'Kentang',
            'unit' => 'gr',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('ingredients')->insert([
            'id' => 3,
            'name' => 'Kembang Kol',
            'unit' => 'gr',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('ingredients')->insert([
            'id' => 4,
            'name' => 'Buncis',
            'unit' => 'gr',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('ingredients')->insert([
            'id' => 5,
            'name' => 'Kubis',
            'unit' => 'gr',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('ingredients')->insert([
            'id' => 6,
            'name' => 'Daun Bawang',
            'unit' => 'gr',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('ingredients')->insert([
            'id' => 7,
            'name' => 'Seledri',
            'unit' => 'gr',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('ingredients')->insert([
            'id' => 8,
            'name' => 'Bumbu',
            'unit' => 'gr',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('ingredients')->insert([
            'id' => 9,
            'name' => 'Sosis',
            'unit' => 'gr',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('ingredients')->insert([
            'id' => 10,
            'name' => 'Bakso',
            'unit' => 'gr',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('ingredients')->insert([
            'id' => 11,
            'name' => 'Saus Tiram',
            'unit' => 'ml',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('ingredients')->insert([
            'id' => 12,
            'name' => 'Tepung Maizena',
            'unit' => 'gr',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('ingredients')->insert([
            'id' => 13,
            'name' => 'Ayam',
            'unit' => 'ml',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('ingredients')->insert([
            'id' => 14,
            'name' => 'Lele',
            'unit' => 'gr',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}

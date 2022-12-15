<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('orders')->insert([
            'user_id' => date('2022-12-16'),
            'address' => 'Addrrerere'
        ]);

        DB::table('orders')->insert([
            'user_id' => date('2022-12-18'),
            'address' => 'Addrrerere'
        ]);
    }
}

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
//        DB::table('meals')->insert([
//            'name' => 'Grilled Salmon',
//            'description' => 'This is the description of a meal kit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quibusdam!',
//            'price' => 20000,
//            'duration' => 40,
//            'img_path' => 'grilled_salmon.png',
//            'created_at' => Carbon::now(),
//            'updated_at' => Carbon::now(),
//        ]);

        DB::table('meals')->insert([
            'id' => 1,
            'name' => 'Capjay',
            'description' => 'Paket Capjay dari Snel Koken, lengkap dengan bumbu khas Chinese Food dan bisa kamu kreasikan mau kuah ataupun kering, yang penting jangan berantem buat nentuinnya',
            'price' => 25000,
            'duration' => 30,
            'img_path' => '1.png',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meals')->insert([
            'id' => 2,
            'name' => 'Sop Kuah',
            'description' => 'Paket Sop Kuah dari Snel Koken, dengan sayur pilihan asli dari petani, sudah dipotong + lengkap dengan bumbunya. Yang lagi gaenak badan tapi gapunya ayang buat masakin, bisa nih masak sendiri tinggal kasih air.',
            'price' => 20000,
            'duration' => 30,
            'img_path' => '2.png',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meals')->insert([
            'id' => 3,
            'name' => 'Lele Goreng',
            'description' => 'Paket Lele Goreng dari Snel Koken, sudah dimarinasi dengan resep bumbu khas yang pastinya rempah-rempahnya bakal meresap sampai di hati.',
            'price' => 18000,
            'duration' => 30,
            'img_path' => '3.png',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('meals')->insert([
            'id' => 4,
            'name' => 'Ayam Potong',
            'description' => 'Paket Ayam Potong Paha Utuh dari Snel Koken, sudah dimarinasi dengan rempah pilihan tinggal srenggg. Buat yang ga mau jumbo,bisa dipotong lagi paha bawah + atasnya.',
            'price' => 28000,
            'duration' => 30,
            'img_path' => '4.png',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}

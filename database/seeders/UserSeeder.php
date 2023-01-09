<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert([
            'full_name' => 'Achmad Rijalu',
            'email' => 'jalu@gmail.com',
            'password' => Hash::make('12345678'),
            'phone' => '081231149830',
            'city' => 'Surabaya',
            'ward' => 'Kecamatan',
            'district' => 'Ketintang',
            'province' => 'Jawa Timur',
            'address' => 'Jl Gayungsari Timur',
            'profile_picture' => 'null',
            'created_at' => \Carbon\Carbon::now(),
            'email_verified_at' => \Carbon\Carbon::now()
        ]);

        DB::table('users')->insert([
            'full_name' => 'Admin',
            'email' => 'admin@kukoki.com',
            'password' => Hash::make('KukokI'),
            'phone' => '081231149830',
            'city' => 'Surabaya',
            'ward' => 'Kecamatan',
            'district' => 'Ketintang',
            'province' => 'Jawa Timur',
            'address' => 'Jl Gayungsari Timur',
            'profile_picture' => 'null',
            'created_at' => \Carbon\Carbon::now(),
            'email_verified_at' => \Carbon\Carbon::now(),
            'admin' => true
        ]);
    }
}

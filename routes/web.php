<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\MealController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\OrderDetailController;
use App\Http\Controllers\PlanController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Profiler\Profile;

Route::get('/', function(){
    return Inertia::render('Welcome');
});

//Register route
Route::get('/pembayaran_berhasil', [PlanController::class, 'pembayaranberhasil']);
Route::get('/checkout', [PlanController::class, 'checkout']);
Route::post('/informasi_pengiriman', [RegisterController::class, 'informasipengiriman'])->middleware('guest');
Route::post('/preferensi', [RegisterController::class, 'preferensi'])->middleware('guest');
Route::resource('register_account', RegisterController::class);

//Login Route
Route::resource('login_account', LoginController::class)->middleware('guest');
Route::get('/login', [LoginController::class, 'index'])->name('login')->middleware('guest');
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth');
Route::post('/login', [LoginController::class, 'store']);

//Pesanan Route
Route::get('/pesanan', function(){return Inertia::render('Pesanan');});
Route::get('/detail-pesanan', function(){return Inertia::render('DetailPesanan');});
Route::get('/ulasan', function(){return Inertia::render('Ulasan');});

//Profil Route
Route::resource('profil', ProfileController::class)->middleware('auth');;
Route::get('/ubah_informasi_pengiriman', [ProfileController::class, 'UbahInformasiPengiriman'])->middleware('auth');;
Route::get('/ubah_profil', [ProfileController::class, 'editProfile'])->middleware('auth');;

//Menu Route
Route::resource('menu', MenuController::class)->middleware('auth');
Route::get('/menu/{id}/recipe', [MenuController::class, 'showRecipe'])->middleware('auth')->name('menu.show.recipe');

//Rencana Route
Route::get('/rencana', [PlanController::class, 'rencana']);

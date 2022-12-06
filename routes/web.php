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

//Register routeRoute::get('/Rencana', [PlanController::class, 'rencana']);
Route::get('/PembayaranBerhasil', [PlanController::class, 'pembayaranberhasil']);
Route::get('/Checkout', [PlanController::class, 'checkout']);
Route::post('/InformasiPengiriman', [RegisterController::class, 'informasipengiriman'])->middleware('guest');
Route::post('/Preferensi', [RegisterController::class, 'preferensi'])->middleware('guest');

oute::resource('registerAccount', RegisterController::class);

//Login Route
Route::resource('loginAccount', LoginController::class)->middleware('guest');
Route::get('/login', [LoginController::class, 'index'])->name('login')->middleware('guest');
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth');
Route::post('/login', [LoginController::class, 'store']);

//Pesanan Route
Route::get('/pesanan', function(){return Inertia::render('Pesanan');});
Route::get('/detail-pesanan', function(){return Inertia::render('DetailPesanan');});
Route::get('/ulasan', function(){return Inertia::render('Ulasan');});

//Profil Route
Route::resource('profileAccount', ProfileController::class)->middleware('auth');;
Route::get('/Ubahinformasipengiriman', [ProfileController::class, 'UbahInformasiPengiriman'])->middleware('auth');;
Route::get('/UbahProfile', [ProfileController::class, 'editProfile'])->middleware('auth');;

//Menu Route
Route::resource('menu', MenuController::class)->middleware('auth');
Route::get('/menu/{id}/recipe', [MenuController::class, 'showRecipe'])->middleware('auth')->name('menu.show.recipe');

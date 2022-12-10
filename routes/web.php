<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\MealController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Profiler\Profile;

Route::get('/', function(){
    return Inertia::render('Welcome');
});

//Register route
Route::post('/InformasiPengiriman', [RegisterController::class, 'informasipengiriman'])->middleware('guest');
Route::post('/Preferensi', [RegisterController::class, 'preferensi'])->middleware('guest');
Route::resource('registerAccount', RegisterController::class);

//Login Route
Route::resource('loginAccount', LoginController::class)->middleware('guest');
Route::get('/login', [LoginController::class, 'index'])->name('login')->middleware('guest');
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth');
Route::post('/login', [LoginController::class, 'store']);

//Profil Route
Route::resource('profileAccount', ProfileController::class)->middleware('auth');;

Route::get('/UbahProfil/{id}', [ProfileController::class, 'UbahProfil'])->middleware('auth')->name('profile.ubah');
Route::post('/UpdateProfil/{id}', [ProfileController::class, 'update'])->middleware('auth')->name('profile.update');

Route::get('/Ubahinformasipengiriman/{id}', [ProfileController::class, 'Ubahinformasipengiriman'])->middleware('auth')->name('pengiriman.ubah');
Route::post('/UpdateInformasiPengiriman/{id}', [ProfileController::class, 'UpdateInformasiPengiriman'])->middleware('auth')->name('pengiriman.update');

Route::get("/UbahPassword", [ProfileController::class, 'UbahPassword'])->middleware('auth')->name('password.ubah');
Route::post('/UpdatePassword/{id}', [ProfileController::class, 'UpdatePassword'])->middleware('auth')->name('password.update');

//Menu Route
Route::resource('menu', MenuController::class)->middleware('auth');
Route::get('/menu,', [MenuController::class ,'index']);
Route::get('/menu/{id}/recipe', [MenuController::class, 'showRecipe'])->middleware('auth')->name('menu.show.recipe');

<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\MealController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\OrderDetailController;
use App\Http\Controllers\PlanController;
use App\Models\Meal;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Profiler\Profile;

Route::get('/', function(){
    $meals = Meal::query()->limit(3)->get();

    return Inertia::render('Welcome', compact('meals'));
});

//Register route
Route::post('/informasi_pengiriman', [RegisterController::class, 'informasipengiriman'])->middleware('guest');
Route::post('/preferensi', [RegisterController::class, 'preferensi'])->middleware('guest');
Route::resource('register_account', RegisterController::class);

//Login Route
Route::resource('login_account', LoginController::class)->middleware('guest');
Route::get('/login', [LoginController::class, 'index'])->name('login')->middleware('guest');
Route::post('/logout', [LoginController::class, 'logout']);
Route::post('/login', [LoginController::class, 'store']);

//Pesanan Route
Route::get('/pesanan', function(){return Inertia::render('Maintenance');});
Route::get('/detail-pesanan', function(){return Inertia::render('Maintenance');});
Route::get('/ulasan', function(){return Inertia::render('Maintenance');});

//Profil Route
Route::resource('profil', ProfileController::class);
Route::get('/ubah_informasi_pengiriman', [ProfileController::class, 'UbahInformasiPengiriman']);
Route::get('/ubah_profil', [ProfileController::class, 'editProfile']);

//Menu Route
Route::get('/menu/{id}/recipe', [MenuController::class, 'showRecipe'])->name('menu.show.recipe');
Route::post('/menu/{id}/add_to_plan', [MenuController::class, 'addToPlan'])->name('menu.add_to_plan');
Route::resource('menu', MenuController::class);

//Rencana Route
Route::resource("rencana", PlanController::class);
Route::get('/checkout', [PlanController::class, 'checkout'])->name('rencana.checkout');
Route::post('/checkout', [PlanController::class, 'checkoutPost'])->name('rencana.checkout.post');
Route::get('/pembayaran_berhasil', [PlanController::class, 'pembayaranberhasil']);

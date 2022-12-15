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
Route::post('/InformasiPengiriman', [RegisterController::class, 'informasipengiriman'])->middleware('guest');
Route::get('/RegisterInformasiPengiriman', [RegisterController::class, 'RegisterInformasiPengiriman'])->name('RegisterInformasiPengiriman.index')->middleware('guest');
Route::post('/Preferensi', [RegisterController::class, 'preferensi'])->middleware('guest');
Route::get('/RegisterPreferensi', [RegisterController::class, 'RegisterPreferensi'])->name('RegisterPreferensi.index')->middleware('guest');

Route::resource('registerAccount', RegisterController::class);

//Login Route
Route::resource('loginAccount', LoginController::class)->middleware('guest');
Route::get('/login', [LoginController::class, 'index'])->name('login')->middleware('guest');
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth');
Route::post('/login', [LoginController::class, 'store']);

//Pesanan Route
Route::get('/pesanan', function(){return Inertia::render('Pesanan');})->middleware('auth');
Route::get('/detail-pesanan', function(){return Inertia::render('DetailPesanan');})->middleware('auth');
Route::get('/ulasan', function(){return Inertia::render('Ulasan');})->middleware('auth');

//Profil Route
Route::resource('profil', ProfileController::class)->middleware('auth');

Route::get('/ubah_profil/{id}', [ProfileController::class, 'UbahProfil'])->middleware('auth')->name('profile.ubah');
Route::post('/update_profil/{id}', [ProfileController::class, 'update'])->middleware('auth')->name('profile.update');

Route::get('/ubah_informasi_pengiriman/{id}', [ProfileController::class, 'Ubahinformasipengiriman'])->middleware('auth')->name('pengiriman.ubah');
Route::post('/update_informasi_pengiriman/{id}', [ProfileController::class, 'UpdateInformasiPengiriman'])->middleware('auth')->name('pengiriman.update');

Route::get("/UbahPassword", [ProfileController::class, 'UbahPassword'])->middleware('auth')->name('password.ubah');
Route::post('/UpdatePassword/{id}', [ProfileController::class, 'UpdatePassword'])->middleware('auth')->name('password.update');

Route::get("/UbahPreferensi/{id}", [ProfileController::class, 'UbahPreferensi'])->middleware('auth')->name('preferensi.ubah');
Route::post('/UpdatePreferensi/{id}', [ProfileController::class, 'UpdatePreferensi'])->middleware('auth')->name('preferensi.update');

//Menu Route
Route::get('/menu/{id}/recipe', [MenuController::class, 'showRecipe'])->middleware('auth')->name('menu.show.recipe');
Route::post('/menu/{id}/add_to_plan', [MenuController::class, 'addToPlan'])->middleware('auth')->name('menu.add_to_plan');
Route::resource('menu', MenuController::class)->only(['addToPlan'])->middleware('auth');
Route::resource('menu', MenuController::class)->except(['addToPlan']);

//Rencana Route
Route::resource("rencana", PlanController::class)->middleware("auth");
Route::get('/checkout', [PlanController::class, 'checkout'])->middleware('auth')->name('rencana.checkout');
Route::post('/checkout', [PlanController::class, 'checkoutPost'])->middleware('auth')->name('rencana.checkout.post');
Route::post('/pembayaran_berhasil', [PlanController::class, 'pembayaranberhasil'])->middleware('auth')->name('rencana.pembayaran.berhasil');

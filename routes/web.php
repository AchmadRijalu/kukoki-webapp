<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminMenuController;
use App\Http\Controllers\AdminOrderController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\MealController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\PesananController;
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
Route::get('/register_informasi_pengiriman', [RegisterController::class, 'RegisterInformasiPengiriman'])->name('register_informasi_pengiriman.index')->middleware('guest');
Route::post('/preferensi', [RegisterController::class, 'preferensi'])->middleware('guest');
Route::get('/register_preferensi', [RegisterController::class, 'RegisterPreferensi'])->name('register_preferensi.index')->middleware('guest');

Route::resource('register_account', RegisterController::class);

//Login Route
Route::resource('login_account', LoginController::class)->middleware('guest');
Route::get('/login', [LoginController::class, 'index'])->name('login')->middleware('guest');
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth');
Route::post('/login', [LoginController::class, 'store']);

//Pesanan Route
Route::resource("pesanan", PesananController::class)->middleware("auth");
Route::get('/detail_pesanan', function(){return Inertia::render('DetailPesanan');})->middleware('auth');
Route::get('/ulasan', function(){return Inertia::render('Ulasan');})->middleware('auth');

//Profil Route
Route::resource('profil', ProfileController::class)->middleware('auth');

Route::get('/ubah_profil/{id}', [ProfileController::class, 'UbahProfil'])->middleware('auth')->name('profile.ubah');
Route::post('/update_profil/{id}', [ProfileController::class, 'update'])->middleware('auth')->name('profile.update');

Route::get('/ubah_informasi_pengiriman/{id}', [ProfileController::class, 'Ubahinformasipengiriman'])->middleware('auth')->name('pengiriman.ubah');
Route::post('/update_informasi_pengiriman/{id}', [ProfileController::class, 'UpdateInformasiPengiriman'])->middleware('auth')->name('pengiriman.update');

Route::get("/ubah_password", [ProfileController::class, 'UbahPassword'])->middleware('auth')->name('password.ubah');
Route::post('/update_password/{id}', [ProfileController::class, 'UpdatePassword'])->middleware('auth')->name('password.update');

Route::get("/ubah_preferensi/{id}", [ProfileController::class, 'UbahPreferensi'])->middleware('auth')->name('preferensi.ubah');
Route::post('/update_preferensi/{id}', [ProfileController::class, 'UpdatePreferensi'])->middleware('auth')->name('preferensi.update');

//Menu Route
Route::get('/menu/{id}/recipe', [MenuController::class, 'showRecipe'])->middleware('auth')->name('menu.show.recipe');
Route::post('/menu/{id}/add_to_plan', [MenuController::class, 'addToPlan'])->middleware('auth')->name('menu.add_to_plan');
Route::delete('/remove_from_plan/{id}', [MenuController::class, 'removeFromPlan'])->middleware('auth')->name('menu.remove_from_plan');
Route::resource('menu', MenuController::class)->except(['addToPlan', 'removeFromPlan']);

//Rencana Route
Route::resource("rencana", PlanController::class)->middleware("auth");
Route::get('/checkout', [PlanController::class, 'checkout'])->middleware('auth')->name('rencana.checkout');
Route::post('/checkout', [PlanController::class, 'checkoutPost'])->middleware('auth')->name('rencana.checkout.post');
Route::post('/pembayaran_berhasil', [PlanController::class, 'pembayaranberhasil'])->middleware('auth')->name('rencana.pembayaran.berhasil');

//Admin Route
Route::middleware('admin')->group(function () {
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::resource("menu", AdminMenuController::class, ['except' => ['update']])->middleware("auth");
        Route::post('/menu/{id}/update', [AdminMenuController::class, 'update'])->middleware('auth')->name('menu.update');
        Route::resource("orders", AdminOrderController::class)->middleware("auth");
    });
    Route::resource("admin", AdminController::class)->middleware("auth");
});

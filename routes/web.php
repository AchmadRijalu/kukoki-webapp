<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\OrderDetailController;
use App\Http\Controllers\PlanController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function(){
    return Inertia::render('Login');
});

Route::get('/Register', [RegisterController::class, 'index']);
Route::get('/Rencana', [PlanController::class, 'rencana']);
Route::get('/PembayaranBerhasil', [PlanController::class, 'pembayaranberhasil']);
Route::get('/Checkout', [PlanController::class, 'checkout']);
Route::post('/InformasiPengiriman', [RegisterController::class, 'informasipengiriman']);
Route::post('/Preferensi', [RegisterController::class, 'preferensi']);

Route::resource('registerAccount', RegisterController::class);


// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::resource('deliver', RegisterController::class);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

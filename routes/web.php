<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;





Route::get('/', function(){
    return Inertia::render('Welcome');
});
//Register route
Route::get('/Register', [RegisterController::class, 'index']);
Route::post('/InformasiPengiriman', [RegisterController::class, 'informasipengiriman']);
Route::post('/Preferensi', [RegisterController::class, 'preferensi']);
Route::resource('registerAccount', RegisterController::class);

//Login Route
Route::resource('loginAccount', LoginController::class);



//Profil Route
Route::get('/profil', [ProfileController::class, 'index']);
Route::resource('profileAccount', ProfileController::class);


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

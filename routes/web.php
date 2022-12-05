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
Route::get('/Ubahinformasipengiriman', [ProfileController::class, 'UbahInformasiPengiriman'])->middleware('auth');;
Route::get('/UbahProfile', [ProfileController::class, 'editProfile'])->middleware('auth');;


//Menu Route
//Route::get('/Menu', [MealController::class, 'index'])->middleware('auth');;
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::resource('deliver', RegisterController::class);

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::resource('menu', MenuController::class);
Route::get('/menu/{id}/recipe', [MenuController::class, 'showRecipe'])->name('menu.show.recipe');

require __DIR__.'/auth.php';
// require __DIR__.'/auth.php';

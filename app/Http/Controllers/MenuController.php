<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Meal;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $meals = Meal::query()->get();

        return Inertia::render('Menu/Menu', compact('meals'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $meal = Meal::query()->with(['tools', 'ingredients'])->find($id);
        $meals = Meal::query()->get()->take(3);
        $reviews = Review::where('meal_id', $id)->get();
        
        return Inertia::render('Menu/MenuShow', compact('meal', 'meals', 'reviews'));
    }

    public function showRecipe($id)
    {
        $meal = Meal::query()->find($id);

        return Inertia::render('Menu/MenuShowRecipe', compact('meal'));
    }

    public function addToPlan(Request $request, $id)
    {
        if (Cart::query()->where('user_id', Auth::id())
            ->where('meal_id', $id)
            ->where('date', $request->date)
            ->exists()) {
            return Redirect::back();
        }

        Cart::query()->create([
            'user_id' => Auth::id(),
            'meal_id' => $id,
            'date' => $request->date,
            'portion' => $request->portion,
        ]);

        return Redirect::route('rencana.index');
    }

    public function removeFromPlan($id)
    {
        Cart::query()->find($id)->delete();

        return Redirect::back();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

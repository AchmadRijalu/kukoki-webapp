<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Meal;
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

        return Inertia::render('Menu/MenuShow', compact('meal', 'meals'));
    }

    public function showRecipe($id)
    {
        $meal = Meal::query()->find($id);

        return Inertia::render('Menu/MenuShowRecipe', compact('meal'));
    }

    public function addToPlan(Request $request, $id)
    {
        $meal = Meal::query()->find($id);

        $waLink = "https://wa.me/62895339398188?text=Halo,%20saya%20ingin%20memesan%20meal%20kit%20$meal->name" .
        "%0aPorsi:%20" . $request->portion .
        "%0aTanggal:%20" . $request->date;

        return Inertia::location($waLink);
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

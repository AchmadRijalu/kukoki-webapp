<?php

namespace App\Http\Controllers;

use App\Models\MealTools;
use App\Http\Requests\StoreMealToolsRequest;
use App\Http\Requests\UpdateMealToolsRequest;

class MealToolsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreMealToolsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMealToolsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MealTools  $mealTools
     * @return \Illuminate\Http\Response
     */
    public function show(MealTools $mealTools)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MealTools  $mealTools
     * @return \Illuminate\Http\Response
     */
    public function edit(MealTools $mealTools)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMealToolsRequest  $request
     * @param  \App\Models\MealTools  $mealTools
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMealToolsRequest $request, MealTools $mealTools)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MealTools  $mealTools
     * @return \Illuminate\Http\Response
     */
    public function destroy(MealTools $mealTools)
    {
        //
    }
}

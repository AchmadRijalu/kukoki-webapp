<?php

namespace App\Http\Controllers;

use App\Models\MealCategory;
use App\Http\Requests\StoreMealCategoryRequest;
use App\Http\Requests\UpdateMealCategoryRequest;

class MealCategoryController extends Controller
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
     * @param  \App\Http\Requests\StoreMealCategoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMealCategoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MealCategory  $mealCategory
     * @return \Illuminate\Http\Response
     */
    public function show(MealCategory $mealCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MealCategory  $mealCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(MealCategory $mealCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMealCategoryRequest  $request
     * @param  \App\Models\MealCategory  $mealCategory
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMealCategoryRequest $request, MealCategory $mealCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MealCategory  $mealCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(MealCategory $mealCategory)
    {
        //
    }
}

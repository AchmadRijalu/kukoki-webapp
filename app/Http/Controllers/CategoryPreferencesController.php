<?php

namespace App\Http\Controllers;

use App\Models\CategoryPreferences;
use App\Http\Requests\StoreCategoryPreferencesRequest;
use App\Http\Requests\UpdateCategoryPreferencesRequest;

class CategoryPreferencesController extends Controller
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
     * @param  \App\Http\Requests\StoreCategoryPreferencesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoryPreferencesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CategoryPreferences  $categoryPreferences
     * @return \Illuminate\Http\Response
     */
    public function show(CategoryPreferences $categoryPreferences)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CategoryPreferences  $categoryPreferences
     * @return \Illuminate\Http\Response
     */
    public function edit(CategoryPreferences $categoryPreferences)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCategoryPreferencesRequest  $request
     * @param  \App\Models\CategoryPreferences  $categoryPreferences
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoryPreferencesRequest $request, CategoryPreferences $categoryPreferences)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CategoryPreferences  $categoryPreferences
     * @return \Illuminate\Http\Response
     */
    public function destroy(CategoryPreferences $categoryPreferences)
    {
        //
    }
}

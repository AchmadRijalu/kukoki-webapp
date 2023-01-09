<?php

namespace App\Http\Controllers;

use App\Models\Meal;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminMenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $meals = Meal::query()->get();

        return Inertia::render('Admin/Menu', compact('meals'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/MenuCreate');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'photo' => 'mimes:jpeg,png,bmp,tiff',
        ]);
        $file = $request->file('file');
        $name = Carbon::now()->format('Ymd-His') . '.' . $file->getClientOriginalExtension();
        $file->move(public_path() . '/img/menu/', $name);

        Meal::query()->create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'price' => $request->input('price'),
            'duration' => $request->input('duration'),
            'img_path' => $name,
        ]);

        return Redirect::route('admin.menu.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $meal = Meal::query()->find($id);

        return Inertia::render('Admin/MenuEdit', compact('meal'));
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
        $meal = Meal::query()->find($id);

        File::delete(public_path('img/menu/' . $meal->img_path));

        $this->validate($request, [
            'photo' => 'mimes:jpeg,png,bmp,tiff',
        ]);
        $file = $request->file('file');
        $name = Carbon::now()->format('Ymd-His') . '.' . $file->getClientOriginalExtension();
        $file->move(public_path() . '/img/menu/', $name);

        $meal->update([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'price' => $request->input('price'),
            'duration' => $request->input('duration'),
            'img_path' => $name,
        ]);

        return Redirect::route('admin.menu.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $meal = Meal::query()->find($id);

        File::delete(public_path('img/menu/' . $meal->img_path));

        $meal->delete();

        return Redirect::back();
    }
}

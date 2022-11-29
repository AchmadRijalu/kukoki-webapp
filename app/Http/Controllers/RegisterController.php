<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegisterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Inertia::render('Register', ['title' => 'Register']);
    }

    public function informasipengiriman(Request $request){


        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');
        
        return Inertia::render('InformasiPengiriman', compact('name', 'email', 'password'));
    }

    public function preferensi(Request $request){
        
        // dd($request->all());
        $categories = Category::query()->get();
        $allData = $request->all();
        $name = $request->name;
        $email = $request->email;
        $password = $request->password;
        $provinsi = $request->provinsi;
        $kota = $request->kota;
        $kecamatan = $request->kecamatan;
        $kelurahan = $request->kelurahan;
        $alamatlengkap = $request->alamatlengkap;
        $nomortelepon = $request->nomortelepon;
        $title = "Pilih Preferensi";
        return Inertia::render('Preferensi', compact('categories', 'title', 'name', 'email', 'password', 'provinsi', 'kota', 'kecamatan', 'kelurahan', 'alamatlengkap', 'nomortelepon'));
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
        dd($request->all());
        
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

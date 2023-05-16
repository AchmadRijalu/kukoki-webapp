<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\CategoryPreferences;
use Illuminate\Contracts\Session\Session;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Laravel\Socialite\Facades\Socialite;

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

    public function informasipengiriman(Request $request)
    {


        $this->validate($request, [
            'password' => [
                'required',
                'min:6',
                'max:12',
            ],
            'name' => 'required',
            'email' => 'required|email:rfc,dns|unique:users'
        ]);

        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');

        $request->session()->put('page1', [$name, $email, $password]);


        // return Inertia::render('InformasiPengirimanGet', compact('name', 'email', 'password'));
        return Redirect::route('register_informasi_pengiriman.index',);
    }

    public function RegisterInformasiPengiriman()
    {

        return Inertia::render('InformasiPengiriman',);
    }

    public function preferensi(Request $request)
    {

        $this->validate($request, [
            'provinsi' => [
                'required',
            ],
            'kota' => 'required',
            'kecamatan' => 'required',
            'kelurahan' => 'required',
            'alamatlengkap' => 'required',
            'nomortelepon' => 'required|numeric|min:10'
        ]);


        $categories = Category::query()->get();

        $provinsi = $request->provinsi;
        $kota = $request->kota;
        $kecamatan = $request->kecamatan;
        $kelurahan = $request->kelurahan;
        $alamatlengkap = $request->alamatlengkap;
        $nomortelepon = $request->nomortelepon;
        $title = "Pilih Preferensi";


        $request->session()->put('page2', [$provinsi, $kota, $kecamatan, $kelurahan, $alamatlengkap,  $nomortelepon, $categories]);
        return Redirect::route('register_preferensi.index',);
    }

    public function RegisterPreferensi()
    {
        $value = session()->pull('page2');

        $valueCategories = $value[6];
        session()->put('page2', $value);

        return Inertia::render('Preferensi', ['categories' => $valueCategories]);
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
        $this->validate(
            $request,
            [

                'category' => 'required'
            ],
            [
                'category.required'    => 'Please choose your preferences',

            ]
        );

        $value = session()->pull('page1');
        $value2 = session()->pull('page2');
        $name = $value[0];
        $email = $value[1];
        $password = $value[2];
        $provinsi = $value2[0];
        $kota = $value2[1];
        $kecamatan = $value2[2];
        $kelurahan = $value2[3];
        $alamatlengkap = $value2[4];
        $nomortelepon = $value2[5];

        $category = $request->category;

        $user = User::create([
            'full_name' => $name,
            'email'     => $email,
            'password'  => bcrypt($password),
            'phone'     => $nomortelepon,
            'city'     => $kota,
            'ward'     => $kecamatan,
            'district'     => $kelurahan,
            'province'     => $provinsi,
            'address'     => $alamatlengkap,
            'profile_picture'     => null,
        ]);

        $this->lastCreatedUserId = $user->id;


        foreach ($category as $cat) {
            CategoryPreferences::create([
                'user_id' => $this->lastCreatedUserId,
                'category_id'     => $cat,

            ]);
        }
        // dd($this->lastCreatedUserId);


        // $latestUser = App\User::latest()->first();
        return redirect('/login')->with('status', 'Register Berhasil!');
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

    //MARK: Google Authentication
    public function redirectToProvider()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleProviderCallback()
    {
        $user = Socialite::driver('google')->user();

        // Check if the user already exists in your database
        $existingUser = User::where('email', $user->email)->first();

        if ($existingUser) {
            // Authenticate the user and redirect to the home page
            auth()->login($existingUser);
            return redirect()->route('home');
        } else {
            // Create a new user with the retrieved information
            // $newUser = new User();
            // $newUser->name = $user->name;
            // $newUser->email = $user->email;
            // $newUser->password = Hash::make(Str::random(24));
            // $newUser->save();

            // Authenticate the user and redirect to the home page
            // auth()->login($newUser);
            // return redirect()->route('home');
        }
    }
}

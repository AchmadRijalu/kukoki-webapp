<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Category;
use App\Models\CategoryPreferences;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */

    public function index()
    {
        // $categories = Category::query()->get();
        // $cat = $categories->offsetGet(0)->limit(2)->get();
        // $cat = CategoryPreferences::where('user_id', Auth::id())->limit(2)
        // ->get();
        $cat = User::where('id', Auth::id())->first()->categories->skip(0)->take(2);;

        return Inertia::render('Profil', ['title' => 'Profile', 'category' => $cat]);
    }

    public function ubahPreferensi($id){
        $cat = Category::query()->get();
        $user = User::findorfail($id);
        $categoryUser = User::where('id', Auth::id())->first()->categories;
        return Inertia::render('UbahPreferensi', ['user' => $user, 'categories' => $cat, 'catuser' => $categoryUser]);
    }

    public function UpdatePreferensi( Request $request, $id){
        dd($request->category);
        $categoryuser = User::findorFail($id);
        $categoryuser->first()->categories()->sync($request->category);;
        return Redirect::route('profil.index');
    }


    public function Ubahinformasipengiriman($id){
        $user = User::findorfail($id);
        return Inertia::render('UbahInformasiPengiriman', ['user' => $user]);
    }

    public function UpdateInformasiPengiriman(Request $request,  $user){
        $userprofile = User::findorFail($user);
        $userprofile->update(
            [
                'province' => $request->province,
                'city' => $request->city,
                'ward' => $request->ward,
                'district' => $request->district,
                'address' => $request->address,
                'phone' => $request->phone,
        ]);
        return Redirect::route('profil.index');
    }

    public function UbahProfil( $id){
        $title = "Ubah Profil";
        $user = User::findorfail($id);
        return Inertia::render('UbahProfil', ['title' => 'Ubah Profil', 'user' => $user]);
    }

    /**
     * Update the user's profile information.
     *
     * @param  \App\Http\Requests\ProfileUpdateRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request,  $user)
    {
        if($request->profile_picture === null){
            $userprofile = User::findorFail($user);
            $userprofile->update(
                [
                    'full_name' => $request->full_name,
                    'email' => $request->email,

            ]);
        }
        else if($request->profile_picture !=""){
            // dd("ini ada isinya");

            $filename = time().'.'.$request->profile_picture->getClientOriginalName();
            $this->validate($request, [
                   'profile_picture' => "mimes:jpeg,png|max:10000"
               ]);

            // if($request->oldfoto != null){
            //     Storage::delete($request->oldfoto);
            // }
            $locateimage =$request->profile_picture->move('img/profile/', $filename);

            $userprofile = User::findorFail($user);
            $userprofile->update(
                [
                    'full_name' => $request->full_name,
                    'email' => $request->email,
                    'profile_picture' => $locateimage
            ]);

        }
        return Redirect::route('profil.index');
    }

    public function UbahPassword(){
        return Inertia::render('UbahPassword', ['title' => 'Ubah Password']);
    }

    public function UpdatePassword(Request $request,  $user){
        $userprofile = User::findorFail($user);
        $this->validate($request, [
            'password' => [
                'required',
                'string',
                'min:6',
                'max:12',
            ],
            'confirm_password' => 'required|same:password|min:6'
        ]
    );
    $getPassword = $request->password;
    $password = Hash::make($getPassword);
    $userprofile->update(
        [
            'full_name' => $request->full_name,
            'email' => $request->email,
            'password' => $password

    ]);

    // return Redirect::route('profil.index');
    // Inertia.get(route('profile.ubah', id));
    // return Inertia::render('/UbahProfil/{id}', ['title' => 'Profile', 'category' => $cat]);
    return Redirect::route('profile.ubah', $user);



    }

    /**
     * Delete the user's account.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

}

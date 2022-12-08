<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Category;
use App\Models\User;

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
        $categories = Category::query()->get();
        $cat = $categories->offsetGet(0)->limit(2)->get();
        return Inertia::render('Profil', ['title' => 'Profile', 'category' => $cat]);
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
        return Redirect::route('profileAccount.index');
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
        return Redirect::route('profileAccount.index');
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

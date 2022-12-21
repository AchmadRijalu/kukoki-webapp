<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Delivery;
use App\Models\Meal;
use App\Models\Order;
use App\Models\OrderDetail;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Midtrans\Config;

class PlanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ordered = OrderDetail::query()->with(['meal', 'delivery'])->where('user_id', Auth::id())->get();
        $cart = Cart::query()->with('meal')->where('user_id', Auth::id())->get();

        return Inertia::render('Rencana', compact('cart', 'ordered'));
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
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function pembayaranberhasil()
    {
        $cart = Cart::query()->with('meal')->where('user_id', Auth::id())->get();

        $order = Order::query()->create([
            'user_id' => Auth::id(),
            'date' => Carbon::now(),
        ]);

        foreach ($cart as $meal) {
            if (Delivery::query()->where('user_id', Auth::id())
                ->where('date', $meal->date)
                ->exists()) {
                $delivery = Delivery::query()->where('user_id', Auth::id())
                    ->where('date', $meal->date)
                    ->first();
            } else {
                $delivery = Delivery::query()->create([
                    'user_id' => Auth::id(),
                    'date' => $meal->date,
                    'status' => 'Dalam Perjalanan',
                    'address' => 'Addrrerere',
                ]);
            }

            OrderDetail::query()->create([
                'user_id' => Auth::id(),
                'meal_id' => $meal->meal_id,
                'order_id' => $order->id,
                'delivery_id' => $delivery->id,
                'portion' => $meal->portion,
            ]);
        }

        Cart::query()->where('user_id', Auth::id())->delete();

        return Redirect::route('rencana.index');
    }

    public function checkout()
    {
        $cart = Cart::query()->with('meal')->where('user_id', Auth::id())->get();

        if (count($cart) == 0) {
            return Redirect::route('rencana.index');
        }

        return Inertia::render('Checkout', compact('cart'));
    }

    public function checkoutPost(Request $request)
    {
        // Set your Merchant Server Key
//        Config::$serverKey = 'SB-Mid-server-KfV0RcPrjlTs3hf9D1jVRIgU';
        Config::$serverKey = 'Mid-server-2-z9knUS_IenYXEzrqEGjYKV';
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        Config::$isProduction = true;
        // Set sanitization on (default)
        Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        Config::$is3ds = true;

        $params = array(
            'transaction_details' => array(
                'order_id' => rand(),
                'gross_amount' => $request->total,
            ),
            'customer_details' => array(
                'first_name' => 'budi',
                'last_name' => 'pratama',
                'email' => 'budi.pra@example.com',
                'phone' => '08111222333',
            ),
        );

        $snapToken = \Midtrans\Snap::getSnapToken($params);

        return Redirect::back()->withErrors(['snapToken' => $snapToken]);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pedido;

class TestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Pedido::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return["working"=>'yes'];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $req)
    {
        $pedido = new Pedido;
        $pedido->items = $req->items;
        $pedido->price = $req->price;
        $pedido->owner = $req->owner;
        $pedido->status = $req->status;
        $pedido->user_id = $req->userId;

        $res = $pedido->save();

        if($res){
            return("saved");
        }else{
            return("error");
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $req, string $id)
    {
        $pedido = Pedido::findOrFail($id);
        $pedido->status = $req->status;
        $res =$pedido->update();

        if($res){
            return("updated");
        }else{
            return("error");
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $pedido = Pedido::findOrFail($id)->delete();

        if($pedido){
            return("deleted");
        }
    }
}

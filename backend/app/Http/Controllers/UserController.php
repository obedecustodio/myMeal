<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Employee;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function index(Request $request)
    {
        $user= User::where('email', $request->email)->first();
        
            if (!$user || !Hash::check($request->password, $user->password)) {
                return response([
                    'message' => ['These credentials do not match our records.']
                ], 404);
            }
        
             $token = $user->createToken('my-app-token')->plainTextToken;
        
            $response = [
                'user' => $user,
                'token' => $token
            ];
        
             return response($response, 201);
    }
    function login(Request $request)
    {
        $employee= Employee::where('email', $request->email)->first();
        
            if (!$employee || !Hash::check($request->password, $employee->password)) {
                return response([
                    'message' => ['These credentials do not match our records.']
                ], 404);
            }
        
             $token = $employee->createToken('my-app-token')->plainTextToken;
        
            $response = [
                'user' => $employee,
                'token' => $token
            ];
        
             return response($response, 201);
    }

    function sign(Request $req)
    {
        $user = new User;
        $user->name = $req->name;
        $user->email = $req->email;
        $user->password = $req->password;

        $res = $user->save();

        return response($res, 201);
    }

    function signe(Request $req)
    {
        $employee = new Employee;
        $employee->name = $req->name;
        $employee->role = $req->role;
        $employee->contact = $req->contact;
        $employee->email = $req->email;
        $employee->password = $req->password;

        $res = $employee->save();

        return response($res, 201);
    }
}

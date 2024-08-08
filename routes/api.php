<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GetController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['middleware' => 'auth:sanctum'], function(){
    Route::get('/get',GetController::class);
});


Route::post('login', [AuthController::class,'login']);
Route::post('register', [AuthController::class,'register']);
// Route::post('logout', 'AuthController@logout');
// Route::post('me', 'AuthController@me');
<?php

use Illuminate\Support\Facades\Route;


Route::get('/{any}', function () {
    return view('welcome'); // The welcome.blade.php file
})->where('any', '.*');
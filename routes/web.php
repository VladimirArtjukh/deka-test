<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Front\PostController;

Route::resource('post',PostController::class)->names('post');

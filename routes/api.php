<?php
declare(strict_types=1);

/**
 * @author Artuikh Vladimir
 * @copyright 2021 Artuikh Vladimir, vladimir.artjukh@gmail.com
 */


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\V1\Posts\PostController;
use App\Http\Controllers\API\V1\Hashes\HashController;

//Posts
Route::get('post/get/by/slug/{id}', [PostController::class, 'getBySlug'])->name('v1.api.post.get.slug');
Route::post('post/view/increment/{id}', [PostController::class, 'incrementView'])->name('v1.api.post.increment');
Route::apiResource('post', PostController::class)
    ->names('v1.api.post');

//Hashes
Route::get('hash', [HashController::class, 'index'])->name('v1.api.hash.index');
Route::post('hash', [HashController::class, 'store'])->name('v1.api.hash.store');

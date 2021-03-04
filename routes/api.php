<?php
declare(strict_types=1);

/**
 * @author Artuikh Vladimir
 * @copyright 2021 Artuikh Vladimir, vladimir.artjukh@gmail.com
 */


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\V1\Posts\PostController;

Route::post('post/view/increment/{id}', [PostController::class, 'incrementView'])->name('v1.api.post.increment');
Route::apiResource('post', PostController::class)
    ->names('v1.api.post');

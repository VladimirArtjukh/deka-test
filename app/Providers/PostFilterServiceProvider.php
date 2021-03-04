<?php

namespace App\Providers;

use App\Services\Posts\Filters\FilterService;
use Illuminate\Support\ServiceProvider;

class PostFilterServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('filter',FilterService::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}

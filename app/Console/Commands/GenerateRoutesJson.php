<?php declare(strict_types=1);

/**
 * @author Artjukh Volodimir
 * @copyright 2020 Artjukh Volodimir (vladimir.artjukh@gmail.com)
 */

namespace App\Console\Commands;

use Illuminate\Support\Facades\File;
use Illuminate\Console\Command;
use Illuminate\Routing\Router;

class GenerateRoutesJson extends Command
{
    /**
     * @var string $signature
     * @var string $router
     * @var string $description
     */
    protected $signature = 'route:json';

    protected $router;

    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(Router $router)
    {
        parent::__construct();
        $this->router = $router;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $routes = [];
        foreach ($this->router->getRoutes() as $route) {
            $routes[$route->getName()] = $route->uri();
        }
        File::put('resources/js/laravel_routers.json', json_encode($routes), true);
    }
}

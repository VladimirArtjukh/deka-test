<?php
declare(strict_types=1);

/**
 * @author Artuikh Vladimir
 * @copyright 2021 Artuikh Vladimir, vladimir.artjukh@gmail.com
 */

namespace App\Facades\Posts;

use Illuminate\Support\Facades\Facade;

class FilterFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'filter';
    }
}
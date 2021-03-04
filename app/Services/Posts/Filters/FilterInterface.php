<?php
declare(strict_types=1);

/**
 * @author Artuikh Vladimir
 * @copyright 2021 Artuikh Vladimir, vladimir.artjukh@gmail.com
 */

namespace App\Services\Posts\Filters;


interface FilterInterface
{
    /**
     * @param  array  $data
     *
     * @return mixed
     */
    public function filter(array $data);
}
<?php
declare(strict_types=1);

/**
 * @author Artuikh Vladimir
 * @copyright 2021 Artuikh Vladimir, vladimir.artjukh@gmail.com
 */


namespace App\Services\Posts\Filters;


use Illuminate\Support\Facades\DB;

class FilterService implements FilterInterface
{
    /**
     * @param  array  $data
     *
     * @return \Illuminate\Support\Collection
     */
    public function filter(array $data)
    {
        if (isset($data['hash'])) {
            $hashPostId = DB::table('hash_post')->whereIn('hash_id', $data['hash'])->groupBy('post_id')->pluck('post_id');
        } else {
            $hashPostId = DB::table('hash_post')->groupBy('post_id')->pluck('post_id');
        }
        return $hashPostId;
    }
}
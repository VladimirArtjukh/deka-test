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
        try {
            if (isset($data['hash']) && $data['hash'][0] != null) {
                $result = DB::table('hash_post')->whereIn('hash_id', $data['hash'])->groupBy('post_id')->pluck('post_id');
            } else {
                $result= DB::table('posts')->pluck('id');
            }
        } catch (\Exception $ex) {
            $result = [
                'errors' => ['error' => $ex->getMessage()]
            ];
        }

        return $result;
    }
}
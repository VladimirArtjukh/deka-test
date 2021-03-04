<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

if (!function_exists('getSlug')) {
    function getSlug(string $title, string $table, string $field)
    {
        $slug      = Str::slug($title, '-');
        $slugCount = DB::table($table)->where($field, $slug)->count();
        if ($slugCount > 0) {
            $i = 1;
            while (++$i) {
                $slugCount = DB::table($table)->where($field, $slug.'-'.$i)->count();
                switch ($slugCount) {
                    case 0:
                        $slug = $slug.'-'.$i;
                        break 2;
                }
            }
        }

        return $slug;
    }
}

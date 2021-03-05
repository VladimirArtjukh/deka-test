<?php
declare(strict_types=1);

/**
 * @author Artuikh Vladimir
 * @copyright 2021 Artuikh Vladimir, vladimir.artjukh@gmail.com
 */

namespace Database\Factories;

use App\Models\HashPost;
use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

class HashPostFactory extends Factory
{
    const COUNT = 3;
    const CREATED_AT_FROM = '-3 months';
    const CREATED_AT_TO = '-1 days';
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = HashPost::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        $created_at = $this->faker->dateTimeBetween(self::CREATED_AT_FROM, self::CREATED_AT_TO);
        $post_id    = $this->faker->numberBetween(1, self::COUNT);
        $hash_id    = $this->faker->numberBetween(1, self::COUNT);

        $countPosts    = DB::table('hash_post')->where('post_id', $post_id)->count();
        $countHashPost = DB::table('hash_post')->where('post_id', $post_id)->where('hash_id', $hash_id)->count();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        if ($countPosts <= Post::COUNT_HASHES_OF_POST && $countHashPost == 0) {
            $result = [
                'post_id'    => $post_id,
                'hash_id'    => $hash_id,
                'created_at' => $created_at,
                'updated_at' => $created_at
            ];
        } else {
            $result = [];
        }

        return $result;
    }
}

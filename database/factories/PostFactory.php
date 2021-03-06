<?php
declare(strict_types=1);

/**
 * @author Artuikh Vladimir
 * @copyright 2021 Artuikh Vladimir, vladimir.artjukh@gmail.com
 */

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

class PostFactory extends Factory
{
    const COUNT = 10;
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('posts')->truncate();
        $created_at = $this->faker->dateTimeBetween('-3 months', '-1 days');
        $title=$this->faker->realText($maxNbChars = 200, $indexSize = 2);
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        return [
            'title'      => $title,
            'counter'    => $this->faker->numberBetween(0, 1000),
            'slug'       => getSlug((string)$title, 'posts', 'slug'),
            'text'       => $this->faker->realText($this->faker->numberBetween(1000, 5000)),
            'created_at' => $created_at,
            'updated_at' => $created_at
        ];

    }
}

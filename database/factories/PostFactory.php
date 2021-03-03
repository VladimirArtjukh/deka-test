<?php
declare(strict_types=1);

/**
 * @author Artuikh Vladimir
 * @copyright 2021 Artuikh Vladimir, vladimir.artjukh@gmail.com
 */

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PostFactory extends Factory
{
    const COUNT = 100;
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
        $created_at = $this->faker->dateTimeBetween('-3 months', '-1 days');

        return [
            'title'      => $this->faker->realText($maxNbChars = 200, $indexSize = 2),
            'counter'    => $this->faker->numberBetween(0, 1000),
            'slug'       => Str::slug($this->faker->words($nb = 3, $asText = true), '-'),
            'text'       => $this->faker->realText($this->faker->numberBetween(1000, 5000)),
            'created_at' => $created_at,
            'updated_at' => $created_at
        ];
    }
}

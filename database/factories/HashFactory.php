<?php
declare(strict_types=1);

/**
 * @author Artuikh Vladimir
 * @copyright 2021 Artuikh Vladimir, vladimir.artjukh@gmail.com
 */

namespace Database\Factories;

use App\Models\Hash;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class HashFactory extends Factory
{
    const COUNT = 10;
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Hash::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('hashes')->truncate();
        $created_at = $this->faker->dateTimeBetween('-3 months', '-1 days');
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        return [
            'name'       => $this->faker->realText($maxNbChars = 200, $indexSize = 2),
            'slug'       => Str::slug($this->faker->words($nb = 3, $asText = true), '-'),
            'created_at' => $created_at,
            'updated_at' => $created_at
        ];
    }
}

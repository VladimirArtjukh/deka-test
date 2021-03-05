<?php
declare(strict_types=1);

/**
 * @author Artuikh Vladimir
 * @copyright 2021 Artuikh Vladimir, vladimir.artjukh@gmail.com
 */

namespace Tests\Unit\API\V1\Hashes;

use App\Models\Hash;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class HashTest extends TestCase
{
    use RefreshDatabase;

    const COUNT_CREATING_TIMES = 5;
    const NAME = "Название";
    const SLUG = "nazvanie";

    public function testIndex()
    {
        Hash::factory(self::COUNT_CREATING_TIMES)->create();
        $result = DB::table('hashes')->get();
        $this->assertNotNull($result);
    }

    public function testStore()
    {
        $result = DB::table('hashes')->insert([
            'name'       => self::NAME,
            'slug'       => self::SLUG,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        $this->assertNotNull($result);
    }

}

<?php

namespace Tests\Feature\API\V1\Hashes;

use App\Models\Hash;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Response;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;

class HashTest extends TestCase
{
    use RefreshDatabase;
    use WithoutMiddleware;

    const COUNT_CREATING_TIMES = 5;
    const NAME = "Название";
    const SLUG = "nazvanie";

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testIndex()
    {
        Hash::factory(self::COUNT_CREATING_TIMES)->create();
        $headers  = [
            'Accept' => "application/json",
        ];
        $response = $this->json('get', route('v1.api.hash.index'), [], $headers);

        $response->assertStatus(Response::HTTP_OK);

    }

    public function testStore()
    {
        $headers  = [
            'Accept' => "application/json",
        ];
        $data     = [
            'name'       => self::NAME,
            'slug'       => self::SLUG,
            'created_at' => now(),
            'updated_at' => now()
        ];
        $response = $this->postJson(route('v1.api.hash.store'), $data, $headers);
        $response->assertStatus(Response::HTTP_OK);
    }
}

<?php

namespace Tests\Feature\API\V1\Posts;

use App\Models\Hash;
use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;

class PostTest extends TestCase
{
    use RefreshDatabase;
    use WithoutMiddleware;

    const COUNT_CREATING_TIMES = 5;

    const TITLE = "Заголовок";
    const TABLE = "posts";
    const FIELD = "slug";
    const TEXT = "Текст";

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testIndex()
    {
        Post::factory(self::COUNT_CREATING_TIMES)->create();
        $headers  = [
            'Accept' => "application/json",
        ];
        $response = $this->json('get', route('v1.api.post.index'), [], $headers);

        $response->assertStatus(Response::HTTP_OK);

    }

    public function testStore()
    {
        $headers  = [
            'Accept' => "application/json",
        ];
        $data     = [
            'title'      => self::TITLE,
            'counter'    => 0,
            'slug'       => getSlug((string)self::TITLE, self::TABLE, self::FIELD),
            'text'       => self::TEXT,
            'created_at' => now(),
            'updated_at' => now()

        ];
        $response = $this->postJson(route('v1.api.post.store'), $data, $headers);
        $response->assertStatus(Response::HTTP_OK);
    }

    public function testUpdate()
    {
        Post::factory(self::COUNT_CREATING_TIMES)->create();
        $headers  = [
            'Accept' => "application/json",
        ];
        $data     = [
            'title'      => self::TITLE,
            'counter'    => 0,
            'slug'       => getSlug(self::TITLE, self::TABLE, self::FIELD),
            'text'       => self::TEXT,
            'created_at' => now(),
            'updated_at' => now()
        ];
        $response = $this->put(route('v1.api.post.update',2), $data, $headers);
        $response->assertStatus(Response::HTTP_OK);
    }

    public function testDestroy()
    {
        Post::factory(self::COUNT_CREATING_TIMES)->create();
        $headers  = [
            'Accept' => "application/json",
        ];
        $response = $this->delete(route('v1.api.post.destroy',2), [], $headers);
        $response->assertStatus(Response::HTTP_OK);
    }
}

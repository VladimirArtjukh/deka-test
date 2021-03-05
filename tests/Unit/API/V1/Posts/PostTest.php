<?php
declare(strict_types=1);

/**
 * @author Artuikh Vladimir
 * @copyright 2021 Artuikh Vladimir, vladimir.artjukh@gmail.com
 */

namespace Tests\Unit\API\V1\Posts;

use App\Http\Controllers\API\V1\Posts\PostController;
use App\Models\Hash;
use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class PostTest extends TestCase
{
    use RefreshDatabase;

    const COUNT_CREATING_TIMES = 5;
    const TITLE = "Заголовок";
    const TABLE = "posts";
    const FIELD = "slug";
    const TEXT = "Текст";

    public function testIndex()
    {
        Post::factory(self::COUNT_CREATING_TIMES)->create();
        Hash::factory(self::COUNT_CREATING_TIMES)->create();

        $postId = ['1', '2', '3'];

        $result = DB::table('posts')
            ->select('id', 'title', 'slug')
            ->whereIn('id', $postId)
            ->paginate(PostController::COUNT_PAGINATE);
        $this->assertNotNull($result);
    }

    public function testStore()
    {
        $post = DB::table('posts')->insertGetId([
            'title'      => self::TITLE,
            'counter'    => 0,
            'slug'       => getSlug(self::TITLE, self::TABLE, self::FIELD),
            'text'       => self::TEXT,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('hash_post')->where('post_id', $post)->delete();
        if (isset($data['hash'])) {
            foreach ($data['hash'] as $hash) {
                DB::table('hash_post')->insert([
                    'post_id'    => $post,
                    'hash_id'    => $hash,
                    'created_at' => now(),
                    'updated_at' => now()
                ]);
            }
        }

        $this->assertNotNull($post);
    }


    public function testUpdate()
    {
        Post::factory(self::COUNT_CREATING_TIMES)->create();

        $post = DB::table('posts')
            ->where('id', 2)
            ->update([
                'title'      => self::TITLE,
                'counter'    => 0,
                'slug'       => getSlug(self::TITLE, self::TABLE, self::FIELD),
                'text'       => self::TEXT,
                'created_at' => now(),
                'updated_at' => now()
            ]);

        $this->assertNotNull($post);
    }

    public function testDestroy()
    {
        Post::factory(self::COUNT_CREATING_TIMES)->create();

        $post = DB::table('posts')->where('id', 2)->delete();

        $this->assertNotNull($post);
    }
}

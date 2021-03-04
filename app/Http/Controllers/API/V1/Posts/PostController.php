<?php
declare(strict_types=1);

/**
 * @author Artuikh Vladimir
 * @copyright 2021 Artuikh Vladimir, vladimir.artjukh@gmail.com
 */

namespace App\Http\Controllers\API\V1\Posts;

use App\Facades\Posts\FilterFacade;
use App\Http\Requests\API\V1\Post\PostIndexRequest;
use App\Http\Requests\API\V1\Post\PostStoreRequest;
use App\Http\Requests\API\V1\Post\PostUpdateRequest;
use App\Http\Resources\API\V1\Post\PostDeleteResource;
use App\Http\Resources\API\V1\Post\PostIncrementViewResource;
use App\Http\Resources\API\V1\Post\PostIndexResource;
use App\Http\Resources\API\V1\Post\PostShowResource;
use App\Http\Resources\API\V1\Post\PostStoreResource;
use App\Http\Resources\API\V1\Post\PostUpdateResource;
use Illuminate\Support\Facades\DB;

class PostController extends PostBaseController
{
    const CREATED_POST = 'Post was created';
    const UPDATED_POST = 'Post was updated';
    const DELETED_POST = 'Post was deleted';
    const COUNT_PAGINATE = 10;

    /**
     * @param  PostIndexRequest  $request
     *
     * @return PostIndexResource
     */
    public function index(PostIndexRequest $request): PostIndexResource
    {
        $postId = $this->filterProduct($request->all());

        $post = DB::table('posts')
            ->select('id', 'title', 'slug')
            ->whereIn('id', $postId)
            ->paginate(self::COUNT_PAGINATE);

        return new PostIndexResource($post);
    }

    /**
     * @param  PostStoreRequest  $request
     *
     * @return PostStoreResource
     */
    public function store(PostStoreRequest $request): PostStoreResource
    {
        $post = DB::table('posts')->insertGetId([
            'title'      => $request->title,
            'counter'    => 0,
            'slug'       => getSlug((string)$request->title, 'posts', 'slug'),
            'text'       => $request->text,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        $this->saveHashPost($request->all(), $post);

        return new PostStoreResource(['message' => self::CREATED_POST]);
    }

    /**
     * @param  int  $id
     *
     * @return PostShowResource
     */
    public function show(int $id): PostShowResource
    {
        $result = DB::table('posts')->find($id);

        return new PostShowResource($result);
    }

    /**
     * @param  PostUpdateRequest  $request
     * @param  int  $id
     *
     * @return PostUpdateResource
     */
    public function update(PostUpdateRequest $request, int $id): PostUpdateResource
    {
        $post = DB::table('posts')
            ->where('id', $id)
            ->update([
                'title'      => $request->title,
                'slug'       => getSlug((string)$request->title, 'posts', 'slug'),
                'text'       => $request->text,
                'created_at' => now(),
                'updated_at' => now()
            ]);
        $this->saveHashPost($request->all(), $post);

        return new PostUpdateResource(['message' => self::UPDATED_POST]);
    }

    /**
     * @param  int  $id
     *
     * @return PostDeleteResource
     */
    public function destroy(int $id): PostDeleteResource
    {
        DB::table('posts')->where('id', $id)->delete();

        return new PostDeleteResource(['message' => self::DELETED_POST]);
    }

    /**
     * @param  int  $id
     *
     * @return PostIncrementViewResource
     */
    public function incrementView(int $id): PostIncrementViewResource
    {
        $post = DB::table('posts')->where('id', $id)->increment('counter');

        return new PostIncrementViewResource([$post]);
    }

    /**
     * @param  array  $data
     *
     * @return mixed
     */
    protected function filterProduct(array $data)
    {
        $result = FilterFacade::filter($data);

        return $result;
    }

    /**
     * @param  array  $data
     * @param  int  $postId
     */
    protected function saveHashPost(array $data, int $postId)
    {
        DB::table('hash_post')->where('post_id', $postId)->delete();
        if (isset($data['hash'])) {
            foreach ($data['hash'] as $hash) {
                DB::table('hash_post')->insert([
                    'post_id'    => $postId,
                    'hash_id'    => $hash,
                    'created_at' => now(),
                    'updated_at' => now()
                ]);
            }
        }
    }
}

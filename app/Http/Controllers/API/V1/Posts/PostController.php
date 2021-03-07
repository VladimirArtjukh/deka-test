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
use App\Http\Resources\API\V1\Post\PostGetSlugResource;
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
        try {
            $postId   = $this->filterProduct($request->all());
            $paginate = $request->has('paginate') ? $request->paginate : self::COUNT_PAGINATE;

            $result = DB::table('posts')
                ->select('id', 'title', 'slug')
                ->whereIn('id', $postId)
                ->paginate($paginate);
        } catch (\Exception $ex) {
            $result = [
                'errors' => ['error' => $ex->getMessage()]
            ];
        }

        return new PostIndexResource($result);
    }

    /**
     * @param  PostStoreRequest  $request
     *
     * @return PostStoreResource
     */
    public function store(PostStoreRequest $request): PostStoreResource
    {
        try {
            $post = DB::table('posts')->insertGetId([
                'title'      => $request->title,
                'counter'    => 0,
                'slug'       => getSlug((string)$request->title, 'posts', 'slug'),
                'text'       => $request->text,
                'created_at' => now(),
                'updated_at' => now()
            ]);
            $this->saveHashPost($request->all(), $post);
            $result = ['message' => self::CREATED_POST];
        } catch (\Exception $ex) {
            $result = [
                'errors' => ['error' => $ex->getMessage()]
            ];
        }

        return new PostStoreResource($result);
    }

    /**
     * @param  int  $id
     *
     * @return PostShowResource
     */
    public function show(int $id): PostShowResource
    {
        try {
            $result = DB::table('posts')->where('id', $id)->get();
        } catch (\Exception $ex) {
            $result = [
                'errors' => ['error' => $ex->getMessage()]
            ];
        }

        return new PostShowResource($result);
    }

    /**
     * @param  string  $slug
     *
     * @return PostGetSlugResource
     */
    public function getBySlug(string $slug): PostGetSlugResource
    {
        try {
            $result = DB::table('posts')->where('slug', $slug)->get();
        } catch (\Exception $ex) {
            $result = [
                'errors' => ['error' => $ex->getMessage()]
            ];
        }

        return new PostGetSlugResource ($result);
    }

    /**
     * @param  PostUpdateRequest  $request
     * @param  int  $id
     *
     * @return PostUpdateResource
     */
    public function update(PostUpdateRequest $request, int $id): PostUpdateResource
    {
        try {
            DB::table('posts')
                ->where('id', $id)
                ->update([
                    'title'      => $request->title,
                    'slug'       => getSlug((string)$request->title, 'posts', 'slug'),
                    'text'       => $request->text,
                    'created_at' => now(),
                    'updated_at' => now()
                ]);
            $this->saveHashPost($request->all(), $id);
            $result = ['message' => self::UPDATED_POST];
        } catch (\Exception $ex) {
            $result = [
                'errors' => ['error' => $ex->getMessage()]
            ];
        }

        return new PostUpdateResource($result);
    }

    /**
     * @param  int  $id
     *
     * @return PostDeleteResource
     */
    public function destroy(int $id): PostDeleteResource
    {
        try {
            DB::table('posts')->where('id', $id)->delete();
            $result = ['message' => self::DELETED_POST];
        } catch (\Exception $ex) {
            $result = [
                'errors' => ['error' => $ex->getMessage()]
            ];
        }

        return new PostDeleteResource($result);
    }

    /**
     * @param  int  $id
     *
     * @return PostIncrementViewResource
     */
    public function incrementView(int $id): PostIncrementViewResource
    {
        try {
            $count  = DB::table('posts')->where('id', $id)->increment('counter');
            $result = ['message' => $count];
        } catch (\Exception $ex) {
            $result = [
                'errors' => ['error' => $ex->getMessage()]
            ];
        }

        return new PostIncrementViewResource($result);
    }

    /**
     * @param  array  $data
     *
     * @return mixed
     */
    protected function filterProduct(array $data)
    {
        try {
        $result = FilterFacade::filter($data);
        } catch (\Exception $ex) {
            $result = [
                'errors' => ['error' => $ex->getMessage()]
            ];
        }
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

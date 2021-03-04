<?php
declare(strict_types=1);

/**
 * @author Artuikh Vladimir
 * @copyright 2021 Artuikh Vladimir, vladimir.artjukh@gmail.com
 */

namespace App\Http\Controllers\API\V1\Posts;

use App\Facades\Posts\FilterFacade;
use App\Http\Controllers\Controller;
use App\Http\Requests\API\V1\Post\PostIndexRequest;
use App\Http\Resources\API\V1\Post\PostIndexResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    /**
     * @param  PostIndexRequest  $request
     *
     * @return PostIndexResource
     */
    public function index(PostIndexRequest $request): PostIndexResource
    {
        $postId=FilterFacade::filter($request->all());
        $post = DB::table('posts')
            ->select('id', 'title', 'slug')
            ->whereIn('id', $postId)
            ->paginate(Post::COUNT_PAGINATE);

        return new PostIndexResource($post);
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}

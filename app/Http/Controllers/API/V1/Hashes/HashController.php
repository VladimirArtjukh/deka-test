<?php
declare(strict_types=1);

/**
 * @author Artuikh Vladimir
 * @copyright 2021 Artuikh Vladimir, vladimir.artjukh@gmail.com
 */

namespace App\Http\Controllers\API\V1\Hashes;

use App\Http\Requests\API\V1\Hash\HashStoreRequest;
use App\Http\Resources\API\V1\Hash\HashIndexResource;
use App\Http\Resources\API\V1\Hash\HashStoreResource;
use Illuminate\Support\Facades\DB;

class HashController extends HashBaseController
{
    const CREATED_HASH = 'Hash was created';

    /**
     * @return HashIndexResource
     */
    public function index()
    {
        $result = DB::table('hashes')->get();

        return new HashIndexResource($result);
    }

    /**
     * @param  HashStoreRequest  $request
     *
     * @return HashStoreResource
     */
    public function store(HashStoreRequest $request)
    {
        DB::table('hashes')->insert([
            'name'       => $request->name,
            'slug'       => $request->slug,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        return new HashStoreResource(['message' => self::CREATED_HASH]);
    }

}

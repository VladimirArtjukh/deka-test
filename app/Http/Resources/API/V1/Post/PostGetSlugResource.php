<?php

namespace App\Http\Resources\API\V1\Post;

use Illuminate\Http\Resources\Json\JsonResource;

class PostGetSlugResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}

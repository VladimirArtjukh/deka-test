<?php
declare(strict_types=1);

/**
 * @author Artjukh Volodimir
 * @copyright 2021 Artjukh Volodimir (vladimir.artjukh@gmail.com)
 */

namespace App\Http\Requests\API\V1\Post;

use App\Http\Requests\ApiFormRequest;

class PostStoreRequest extends ApiFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title'  => 'required|string|min:1|max:255',
            'text'   => 'required|string|min:1',
            'hash.*' => 'integer|min:1|exists:hashes,id'
        ];
    }
}

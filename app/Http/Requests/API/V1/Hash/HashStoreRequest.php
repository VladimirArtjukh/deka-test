<?php
declare(strict_types=1);

/**
 * @author Artjukh Volodimir
 * @copyright 2021 Artjukh Volodimir (vladimir.artjukh@gmail.com)
 */

namespace App\Http\Requests\API\V1\Hash;

use App\Http\Requests\ApiFormRequest;

class HashStoreRequest extends ApiFormRequest
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
            'name'  => 'required|string|min:1|max:255',
            'slug'   => 'required|string|min:1'
        ];
    }
}

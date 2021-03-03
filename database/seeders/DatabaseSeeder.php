<?php

namespace Database\Seeders;


use App\Models\Hash;
use App\Models\HashPost;
use App\Models\Post;
use Database\Factories\HashFactory;
use Database\Factories\HashPostFactory;
use Database\Factories\PostFactory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $data = DB::table('hashes')->where('id', 1)->count();
        if ($data == 0) {
            Hash::factory(HashFactory::COUNT)->create();
        }

        $data = DB::table('posts')->where('id', 1)->count();
        if ($data == 0) {
            Post::factory(PostFactory::COUNT)->create();
        }

        $data = DB::table('hash_post')->where('id', 1)->count();
        if ($data == 0) {
            HashPost::factory(HashPostFactory::COUNT)->create();
        }
    }
}

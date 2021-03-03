<?php
declare(strict_types=1);

/**
 * @author Artuikh Vladimir
 * @copyright 2021 Artuikh Vladimir, vladimir.artjukh@gmail.com
 */

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHashPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('hash_post')) {
            Schema::create('hash_post', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('post_id')->comment('ID of the post');
                $table->unsignedBigInteger('hash_id')->comment('ID of the hash');
                $table->timestamps();

                $table->foreign('post_id')
                    ->references('id')
                    ->on('posts')
                    ->onDelete('cascade');

                $table->foreign('hash_id')
                    ->references('id')
                    ->on('hashes')
                    ->onDelete('cascade');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hash_posts');
    }
}

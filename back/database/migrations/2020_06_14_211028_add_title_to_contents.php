<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTitleToContents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('activity_contents_question', function (Blueprint $table) {
            $table->string('title', 500);
        });

        Schema::table('activity_contents_video', function (Blueprint $table) {
            $table->string('title', 500);
        });

        Schema::table('activity_contents_rating', function (Blueprint $table) {
            $table->string('title', 500);
        });

        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('contents', function (Blueprint $table) {
            Schema::table('activity_contents_question', function (Blueprint $table) {
               $table->dropColumn('title');
            });
    
            Schema::table('activity_contents_video', function (Blueprint $table) {
               $table->dropColumn('title');
            });
    
            Schema::table('activity_contents_rating', function (Blueprint $table) {
               $table->dropColumn('title');
            });
        });
    }
}

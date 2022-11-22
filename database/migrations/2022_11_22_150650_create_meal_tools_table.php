<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('meal_tools', function (Blueprint $table) {
            $table->id();
            $table->float('amount', 8, 2);



            $table->unsignedBigInteger('meal_id');   
            $table->unsignedBigInteger('tool_id'); 

            $table->foreign('meal_id')->references('id')->on('meals');
        
            $table->foreign('tool_id')->references('id')->on('tools');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('meal_tools');
    }
};

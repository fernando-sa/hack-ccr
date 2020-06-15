<?php

use App\Http\Controllers\ActivitiesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/activities/board', 'ActivityController@getActivities');
Route::get('/activities/content/{activityId}', 'ActivityController@getActivityContent');
Route::post('activities/answer', 'ResponseController@addResponse');

Route::get('/prizes/board', 'PrizeController@getPrizes');
Route::get('/prizes/index/{prizeId}', 'PrizeController@getPrize');

Route::get('/user/points/{userId}', 'UserController@getPoints');


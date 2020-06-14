<?php

namespace App\Http\Controllers;

use App\Activity;
use App\User;
use Illuminate\Http\JsonResponse;

class ActivityController extends Controller
{
    public function getActivities() : JsonResponse
    {
        $userId = request('userId') ?? 1;
        $recordsCount = request('recordsCount') ?? 10;
        $recordsOffset = request('recordsOffset') ?? 0;

        $user = User::findOrFail($userId);
        $data = Activity::getActivitiesBoard($user, $recordsCount, $recordsOffset);
        
        return response()->json($data->toArray());
    }

    public function getActivityContent($activityId)
    {
        return Activity::findOrFail($activityId)->getContent();
    }
}

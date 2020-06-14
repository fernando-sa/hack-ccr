<?php

namespace App\Http\Controllers;

use App\Activity;
use App\ActivityContentQuestion;

use App\ActivityResponseQuestion;
use App\ActivityResponseRating;
use App\ActivityResponseVideo;
use App\User;
use Illuminate\Http\Request;

class ResponseController extends Controller
{

    public function addResponse(Request $request)
    {
        $userId = $request['userId'] ?? 1;
        $request['userId'] = $userId;

        $user = User::find($userId);

        $activity = Activity::findOrFail($request['activityId']);

        $activityContentCount = $activity->getConents()->count();
        $userContentsDone = $user->getActivityContentsDone($activity);

        if($activityContentCount == $userContentsDone)
            $user->addPoints($activity->value);

        switch($activity->type){
            case Activity::ACTIVITY_TYPE_VIDEO:
                return $this->addVideo($request);
            case Activity::ACTIVITY_TYPE_QUESTION:
                return $this->addQuestion($request);
            case Activity::ACTIVITY_TYPE_RATING:
                return $this->addRating($request);
        }
    }

    public function addQuestion(Request $request)
    {
        ActivityResponseQuestion::create([
            'userId' => $request['userId'],
            'activityId' => $request['activityId'],
            'contentId' => $request['contentId'],
            'answer' => $request['answer'],
        ]);
    }

    public function addVideo(Request $request)
    {
        ActivityResponseVideo::create([
            'userId' => $request['userId'],
            'activityId' => $request['activityId'],
        ]);
    }

    public function addRating(Request $request)
    {
        ActivityResponseRating::create([
            'userId' => $request['userId'],
            'activityId' => $request['activityId'],
            'rating' => $request['rating'],
        ]);
    }
}

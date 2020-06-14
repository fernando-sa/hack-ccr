<?php

namespace App\Http\Controllers;

use App\Activity;

use App\ActivityResponseQuestion;
use App\ActivityResponseRating;
use App\ActivityResponseVideo;
use App\Content;
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

        switch($activity->type){
            case Activity::ACTIVITY_TYPE_VIDEO:
                $this->addVideo($request);
                break;
            case Activity::ACTIVITY_TYPE_QUESTION:
                $this->addQuestion($request);
                break;

            case Activity::ACTIVITY_TYPE_RATING:
                $this->addRating($request);
                break;
        }

        $activityContentCount = $activity->getContent()->count();
        $userContentsDone = $user->getActivityContentsDone($activity);

        if($activityContentCount <= $userContentsDone)
            $user->addPoints($activity->value);
        else
            return "{$activityContentCount} == {$userContentsDone}";

        return;

    }

    public function addQuestion(Request $request) : Void
    {
        ActivityResponseQuestion::create([
            'userId' => $request['userId'],
            'activityId' => $request['activityId'],
            'contentId' => $request['contentId'],
            'answer' => $request['answer'],
        ]);
    }

    public function addVideo(Request $request) : Void
    {
        ActivityResponseVideo::create([
            'userId' => $request['userId'],
            'activityId' => $request['activityId'],
        ]);
    }

    public function addRating(Request $request) : Void
    {
        ActivityResponseRating::create([
            'userId' => $request['userId'],
            'activityId' => $request['activityId'],
            'rating' => $request['rating'],
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Activity;
use App\ActivityContentQuestion;

use App\ActivityResponseQuestion;
use App\ActivityResponseRating;
use App\ActivityResponseVideo;

use Illuminate\Http\Request;

class ResponseController extends Controller
{

    public function addResponse(Request $request)
    {
        $activity = Activity::findOrFail($request['activityId']);
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
        $userId = $request['userId'] ?? 1;

        ActivityResponseQuestion::create([
            'userId' => $userId,
            'activityId' => $request['activityId'],
            'contentId' => $request['contentId'],
            'answer' => $request['answer'],
        ]);
    }

    public function addVideo(Request $request)
    {
        $userId = $request['userId'] ?? 1;

        ActivityResponseVideo::create([
            'userId' => $userId,
            'activityId' => $request['activityId'],
        ]);
    }

    public function addRating(Request $request)
    {
        $userId = $request['userId'] ?? 1;

        ActivityResponseRating::create([
            'userId' => $userId,
            'activityId' => $request['activityId'],
            'rating' => $request['rating'],
        ]);
    }
}

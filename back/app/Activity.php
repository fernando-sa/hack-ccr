<?php

namespace App;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{

    const ACTIVITY_TYPE_VIDEO = 1;
    const ACTIVITY_TYPE_QUESTION = 2;
    const ACTIVITY_TYPE_RATING = 3;

    protected $guarded = [];

    public function getContent()
    {
        switch($this->type){
            case self::ACTIVITY_TYPE_VIDEO:
                return $this->video;

            case self::ACTIVITY_TYPE_QUESTION:
                return $this->questions;

            case self::ACTIVITY_TYPE_RATING:
                return $this->ratings;

        }
        throw new \Exception("Unknown activity type", 1);

    }

    public function questions()
    {
        return $this->hasMany(ActivityContentQuestion::class, 'activityId');
    }

    public function video()
    {
        return $this->hasMany(ActivityContentVideo::class, 'activityId', 'id');
    }

    public function ratings()
    {
        return $this->hasMany(ActivityContentRating::class, 'activityId');
    }

    public static function getActivitiesBoard(User $user, int $recordsCount, int $recordsOffset) : Collection
    {
        $activitiesId = $user->uncompletedActivityIds();

        if($recordsOffset == 0)
            return self::whereNotIn('id', $activitiesId)->get()->take($recordsCount);

        return self::whereNotIn('id', $activitiesId)->skip($recordsOffset)->get()->take($recordsCount);
    }
}

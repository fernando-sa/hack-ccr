<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected $guarded = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function videoResponses() : HasMany
    {
        return $this->hasMany(ActivityResponseVideo::class, 'userId');
    }

    public function questionResponses() : HasMany
    {
        return $this->hasMany(ActivityResponseQuestion::class, 'userId');
    }

    public function ratingResponses() : HasMany
    {
        return $this->hasMany(ActivityResponseRating::class, 'userId');
    }

    public function uncompletedActivityIds() : array
    {
        $videoActivitiesId = $this->videoResponses()->get()->map(function ($videoResponse) {
            return $videoResponse->activityId;
        })->toArray();

        $questionActivitiesId = $this->questionResponses()->get()->map(function ($questionResponse) {
            return $questionResponse->activityId;
        })->toArray();

        $ratingActivitiesId = $this->ratingResponses()->get()->map(function ($ratingResponse) {
            return $ratingResponse->activityId;
        })->toArray();

        return array_merge($videoActivitiesId, $questionActivitiesId, $ratingActivitiesId);

    }
}

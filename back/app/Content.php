<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    protected $guarded = [];

    public function activity()
    {
        return $this->belongsTo(Activity::class, 'activityId');
    }

}

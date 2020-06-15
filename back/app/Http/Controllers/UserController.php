<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getPoints(int $userId)
    {
        return User::find($userId)->points;
    }
}

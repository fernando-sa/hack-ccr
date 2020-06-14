<?php

namespace App\Http\Controllers;

use App\Prize;

class PrizeController extends Controller
{
    public function getPrizes()
    {
        return Prize::all(['id', 'name', 'description', 'price']);
    }

    public function getPrize($prizeId)
    {
        return Prize::findOrFail($prizeId);
    }    
}

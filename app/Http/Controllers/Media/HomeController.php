<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\Content;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Content $content)
    {
        $headers = $content->where('is_header', true)->get();


        return Inertia::render('Media/Home', compact('headers'));
    }
}

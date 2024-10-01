<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class CompanyProfileController extends Controller
{
    public function AboutUs()
    {
        return Inertia::render('Media/CompanyProfile/AboutUs');
    }
}

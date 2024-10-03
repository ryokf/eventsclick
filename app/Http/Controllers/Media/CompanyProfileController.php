<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\CompanyProfile;
use Faker\Provider\ar_EG\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompanyProfileController extends Controller
{
    public function aboutUs(CompanyProfile $companyProfile)
    {
        $data = $companyProfile->select('about_us')->where('id', 1)->first();

        return Inertia::render('Media/CompanyProfile/AboutUs', compact('data'));
    }

    public function aboutUsEdit(Request $request, CompanyProfile $companyProfile){
        // dd($request->all());
        $request->validate([
            'about_us' => 'required',
        ]);

        $companyProfile->where('id', 1)->update([
            'about_us' => $request->about_us,
        ]);

        return Inertia::render('Media/CompanyProfile/AboutUs');
    }

    public function policy()
    {
        return Inertia::render('Media/CompanyProfile/PolicyPage');
    }
}

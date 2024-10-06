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

        return view('about', compact('data'));
    }

    public function aboutUsEdit(Request $request, CompanyProfile $companyProfile){
        // dd($request->all());
        $request->validate([
            'about_us' => 'required',
        ]);

        $companyProfile->where('id', 1)->update([
            'about_us' => $request->about_us,
        ]);

        return redirect()->back();
    }

    public function policy(CompanyProfile $companyProfile)
    {
        $data = $companyProfile->select('policy')->where('id', 1)->first();

        return view('policy', compact('data'));
    }

    public function policyEdit(Request $request, CompanyProfile $companyProfile){
        $request->validate([
            'policy' => 'required',
        ]);

        $companyProfile->where('id', 1)->update([
            'policy' => $request->policy,
        ]);

        return redirect()->back();
    }
}

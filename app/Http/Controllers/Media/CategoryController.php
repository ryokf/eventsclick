<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function store(Request $request, Category $category){
        // dd($request->all());
        $request->validate([
            'title' => 'required',
            'program_id' => 'required',
        ]);

        $category->create([
            'title' => $request->title,
            'program_id' => $request->program_id
        ]);

        return redirect('/media/dashboard/program?id=' . $request->program_id);
    }
}

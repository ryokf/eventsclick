<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Content;
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

    public function edit(Request $request, $id){

        $request->validate([
            'title' => 'required',
        ]);

        $category = Category::find($id);
        $category->update([
            'title' => $request->title,
        ]);

        return redirect('/media/dashboard/program?id=' . $category->program_id);
    }

    public function destroy($id, Category $category, Content $content){
        $content->where('category_id', $id)->delete();

        $category = $category->find($id);
        $category->delete();
        return redirect('/media/dashboard/program?id=' . $category->program_id);
    }
}

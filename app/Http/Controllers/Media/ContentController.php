<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\Content;
use App\Models\LikeContent;
use App\Models\Program;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContentController extends Controller
{
    public function index(Request $request, Content $content, User $user, Program $program, LikeContent $likeContent)
    {
        $is_login = true;
        if (!auth()->check()) {
            // return Inertia::location(route('login'));

            $is_login = false;
        }

        $contents = $content->with('comments')->with('category')->where('slug', $request->query('slug'))->first();

        // dd($content->where('slug', $request->query('slug'))->first());

        $userComments = [];
        if ($contents !== null) {
            foreach ($contents->comments as $id => $value) {
                $userComments[$id] = $user->find($value->user_id);
            }
        }

        $likeCount = $contents ? $likeContent->where('content_id', $contents->id)->count() : 0;

        $isLiked = $is_login ? $likeContent->where('user_id', auth()->user()->id)->where('content_id', $contents->id)->exists() : false;

        $relatedContents = "";

        $tags = explode(' ', $content->tags);
        $relatedContents = Content::where('id', '!=', $content->id) // Hindari mengambil konten yang sama
            ->where(function ($query) use ($content, $tags) {
                // Cari berdasarkan title
                $query->where('title', $content->title);

                // Buat variabel untuk menghitung jumlah kecocokan tag
                foreach ($tags as $tag) {
                    $query->orWhere('tags', 'LIKE', '%' . $tag . '%');
                }
            })
            // Menghitung jumlah kecocokan tags
            ->selectRaw('*, (
            (CASE WHEN title = ? THEN 1 ELSE 0 END) + ' . implode(' + ', array_map(function ($tag) {
                return "(CASE WHEN tags LIKE '%$tag%' THEN 1 ELSE 0 END)";
            }, $tags)) . ') as match_count', [$content->title])
            // Urutkan berdasarkan jumlah kecocokan, dari yang paling banyak
            ->orderBy('match_count', 'desc')
            // Batasi hasil hanya 12 data
            ->limit(12)
            ->get();

        return Inertia::render('Media/Content/index', compact('contents', 'userComments', 'likeCount', 'isLiked', 'relatedContents'));
    }

    public function store(Request $request, Content $content)
    {
        $request->validate([
            'title' => 'required',
            'category_id' => 'required',
            'content' => 'required',
            'is_header_program' => 'required',
            'is_header_home' => 'required',
            'url_video' => 'required',
        ]);

        $content->create([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'content' => $request->content,
            'is_header_program' => $request->is_header_program,
            'is_header_home' => $request->is_header_home,
            'url_video' => $request->url_video,
            'tags' => $request->tags
        ]);

        return redirect('/media/dashboard/program/category?id=' . $request->category_id);
    }

    public function edit(Request $request, $id)
    {
        // dd($request->all());

        $request->validate([
            'title' => 'required',
            'category_id' => 'required',
            'content' => 'required',
            'is_header_program' => 'required',
            'is_header_home' => 'required',
            'url_video' => 'required',
        ]);

        $content = Content::find($id);
        $content->update([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'content' => $request->content,
            'is_header_program' => $request->is_header_program,
            'is_header_home' => $request->is_header_home,
            'url_video' => $request->url_video,
            'tags' => $request->tags
        ]);

        return redirect('/media/dashboard/program/category?id=' . $request->category_id);
    }

    public function destroy($id, Content $content)
    {
        $contents = $content->find($id);
        $categoryId = $contents->category_id;
        $contents->delete();
        return redirect('/media/dashboard/program/category?id=' . $categoryId);
    }

    public function setHeader(Request $request, Content $content){
        dd($request->all());
        // $content->where('category_id', $request->category_id)->update(['is_header_program' => false]);
        // $content->where('id', $request->id)->update(['is_header_program' => true]);
        // return redirect('/media/dashboard');
    }
}

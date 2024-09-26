<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function __construct(Program $program)
    {
        Inertia::share(
            'program',
            $program->select('title', 'visibility', 'id')->where('visibility', 'visible')->orWhere('visibility', 'archive')->get()
        );
    }
}

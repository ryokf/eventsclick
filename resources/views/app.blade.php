<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Eventsclick') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    {{-- <link rel="stylesheet" href="https://a890-36-80-206-26.ngrok-free.app/build/assets/app-BMtK3RNM.css">
    <script type="module" src="https://a890-36-80-206-26.ngrok-free.app/build/assets/app-YajX0RkA.js"></script> --}}
    {{-- <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> --}}

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>

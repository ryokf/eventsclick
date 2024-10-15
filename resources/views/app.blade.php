<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Eventsclick') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    {{-- <link rel="stylesheet" href="{{ ENV('APP_URL') }}/build/assets/app-uhl4Ul9N.css">
    <script type="module" src="{{ ENV('APP_URL') }}/build/assets/app-DvGLR1QX.js"></script>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> --}}

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

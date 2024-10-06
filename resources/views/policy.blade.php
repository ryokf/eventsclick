<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
</head>

<body>
    @php
        $url = url()->current();
        $is_dashboard = Str::contains($url, 'dashboard');
        $program = $programs ?? []; // Pastikan $programs didefinisikan sebelumnya
    @endphp

    @include('partials.navbar')

    <section>
        <div class="container w-100 mt-5">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center mb-5">Kebijakan layanan web</h1>
                </div>
                <div class="">
                    {!! $data->policy !!}
                </div>
            </div>
        </div>
    </section>

    @include('partials.footer')


    <script>
        function toggleNavbar() {
            var menu = document.getElementById('navbar-menu');
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
        }
    </script>

</body>

</html>

<nav class="navbar">
    <div class="navbar-container">
        <a href="/" class="brand">
            <img src="/assets/logo.png" class="logo" alt="Eventsclick Logo" style="width: 12rem; height: 4rem">
        </a>
        <div class="navbar-right">
            {{-- <button class="drawer-button">
                @include('partials.drawer')
            </button> --}}
            {{-- <button class="toggle-button" type="button" onclick="toggleNavbar()">
                <svg class="toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button> --}}
        </div>
        <div class="navbar-menu" id="navbar-menu">
            <ul class="menu-list">
                @foreach ($program as $item)
                    @if ($item['visibility'] === 'visible')
                        <li class="menu-item">
                            <a href="#" class="menu-link">{{ $item['title'] }}</a>
                        </li>
                    @endif
                @endforeach
                <li class="menu-item">
                    <div class="dropdown">
                        <button class="dropdown-button">Lainnya</button>
                        <ul class="dropdown-content">
                            @foreach ($program as $item)
                                <li class="dropdown-item">
                                    <a href="#" class="dropdown-link">{{ $item['title'] }}</a>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    @if (!$is_dashboard)
        {{-- <div class="floating-drawer">
            @include('partials.drawer')
        </div> --}}
    @endif
</nav>

<style>
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        color: #333;
        background-color: #f5f5f5;
    }

    .navbar {
        background-color: #0ea5e9;
        padding: 1rem;
    }

    .navbar-container {
        display: flex;
        margin: 0px 40px;
        justify-content: space-between;
        align-items: center;
    }

    .brand {
        display: flex;
        align-items: center;
    }

    .logo {
        height: 40px;
    }

    .navbar-right {
        display: flex;
        align-items: center;
    }

    .drawer-button {
        display: none;
    }

    .toggle-button {
        background: none;
        border: none;
        cursor: pointer;
    }

    .toggle-icon {
        width: 24px;
        height: 24px;
    }

    .navbar-menu {
        display: none;
    }

    .menu-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
    }

    .menu-item {
        margin-right: 1rem;
    }

    .menu-link {
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
    }

    .menu-link:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-button {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: white;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown-item {
        padding: 12px 16px;
    }

    .dropdown-link {
        text-decoration: none;
        color: black;
    }

    .floating-drawer {
        position: fixed;
        right: 1rem;
        bottom: 1rem;
        background-color: #007bff;
        padding: 1rem;
        border-radius: 50%;
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
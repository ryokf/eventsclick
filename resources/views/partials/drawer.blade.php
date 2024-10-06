@php
    $authUser = Auth::user();
@endphp

<div>
    <button class="drawer-trigger" onclick="toggleDrawer()">
        <svg class="drawer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
    </button>

    <div id="drawer" class="drawer">
        <div class="drawer-header">
            <span class="drawer-title">Cari</span>
            <button class="drawer-close" onclick="toggleDrawer()">X</button>
        </div>
        <form action="/media/search" method="GET" class="drawer-search-form">
            <input type="text" name="search" placeholder="Tulis yang ingin anda cari..." class="drawer-search-input" />
        </form>
        <div class="drawer-footer">
            @if ($authUser)
                <form action="/logout" method="POST">
                    @csrf
                    <button type="submit" class="drawer-logout">Logout</button>
                </form>
            @else
                <div class="drawer-auth-links">
                    <a href="/register" class="drawer-link">Register</a>
                    <a href="/login" class="drawer-link">Login</a>
                </div>
            @endif
        </div>
    </div>
</div>

<style>
    .drawer-trigger {
        background-color: white;
        border: none;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
    }

    .drawer-icon {
        width: 24px;
        height: 24px;
    }

    .drawer {
        display: none;
        position: fixed;
        right: 0;
        top: 0;
        width: 250px;
        height: 100%;
        background-color: white;
        box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        padding: 1rem;
    }

    .drawer-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .drawer-title {
        font-size: 1.25rem;
    }

    .drawer-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
    }

    .drawer-search-form {
        margin: 1rem 0;
    }

    .drawer-search-input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    .drawer-footer {
        margin-top: 1rem;
    }

    .drawer-logout {
        width: 100%;
        padding: 0.5rem;
        background-color: red;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .drawer-auth-links {
        display: flex;
        justify-content: space-between;
    }

    .drawer-link {
        padding: 0.5rem;
        background-color: #007bff;
        color: white;
        text-align: center;
        width: 48%;
        border-radius: 5px;
        text-decoration: none;
    }
</style>

<script>
    function toggleDrawer() {
        var drawer = document.getElementById('drawer');
        if (drawer.style.display === "block") {
            drawer.style.display = "none";
        } else {
            drawer.style.display = "block";
        }
    }
</script>

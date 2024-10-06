<style>
    /* Mengatur body dan html agar tinggi penuh */
    html,
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    /* Membuat konten halaman agar memenuhi ruang yang ada */
    .content {
        flex: 1;
    }

    /* Footer menempel di bagian bawah */
    .footer {
        background-color: #0ea5e9;
        padding: 2rem;
        color: white;
        font-family: Arial, sans-serif;
        width: 100%;
    }

    .footer-container {
        margin: 0px 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .footer-grid {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    .footer-brand {
        display: flex;
        align-items: center;
    }

    .footer-logo {
        height: 50px;
    }

    .footer-links {

        display: flex;
        gap: 2rem;
    }

    .footer-section {
        display: flex;
        flex-direction: column;
    }

    .footer-title {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .footer-list {
        list-style: none;
        padding: 0;
    }

    .footer-link {
        font-family: Arial, sans-serif;
        font-weight: 100;
        text-decoration: none;
        color: white;
        font-size: 1rem;
    }

    .footer-link:hover {
        text-decoration: underline;
    }

    .footer-divider {
        border: none;
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        margin: 1rem 0;
    }

    .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer-social-icons {
        display: flex;
        gap: 1rem;
    }

    .footer-icon {
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
    }

    .footer-icon-svg {
        width: 24px;
        height: 24px;
    }

    .footer-icon:hover {
        color: rgba(255, 255, 255, 0.7);
    }

    .footer-copyright {
        font-size: 0.9rem;
    }
</style>

<div class="content">
    <!-- Isi halaman lainnya -->
</div>

<footer class="footer">
    <div class="footer-container">
        <div class="footer-grid">
            <div class="footer-brand">
                <a href="/">
                    <img src="/assets/logo.png" alt="Eventsclick Logo" class="footer-logo">
                </a>
            </div>
            <div class="footer-links">
                <div class="footer-section">
                    <h3 class="footer-title">Legal</h3>
                    <ul class="footer-list">
                        <li><a href="/media/about-us" class="footer-link">Tentang kami</a></li>
                        <li><a href="/media/policy" class="footer-link">Kebijakan layanan web</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3 class="footer-title">Follow us</h3>
                    <ul class="footer-list">
                        <li><a href="https://instagram.com/eventsclick" class="footer-link">Instagram</a></li>
                        <li><a href="https://youtube.com/eventsclick" class="footer-link">Youtube</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <hr class="footer-divider">

        <div class="footer-bottom">
            <p class="footer-copyright">© 2024 <a href="#" class="footer-link">Eventsclick</a>. All rights
                reserved.</p>
            <div class="footer-social-icons">
                {{-- <a href="https://instagram.com/eventsclick" class="footer-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="footer-icon-svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7.75 2.5a1.25 1.25 0 011.25 1.25v.25h6v-.25A1.25 1.25 0 0116.25 2.5h1.25A3.75 3.75 0 0121 6.25v11.5A3.75 3.75 0 0117.5 21.5H6.5A3.75 3.75 0 012.75 17.75V6.25A3.75 3.75 0 016.5 2.5h1.25zM12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </a>
                    <a href="https://youtube.com/eventsclick" class="footer-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="footer-icon-svg" fill=""
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                        </svg>
                    </a> --}}
            </div>
        </div>
    </div>
</footer>

// PolicyPage.js
import GeneralLayout from "@/Layouts/GeneralLayout";
import React from "react";

const PolicyPage = () => {
    return (
        <GeneralLayout>

            <div className="max-w-4xl mx-auto py-10 px-6">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Kebijakan Layanan
                </h1>

                <p className="text-lg text-gray-600 mb-6">
                    Selamat datang di [Nama Situs Web]! Dengan mengakses situs web ini, Anda
                    setuju untuk mematuhi dan terikat oleh syarat dan ketentuan berikut.
                    Jika Anda tidak setuju dengan bagian mana pun dari kebijakan ini, Anda
                    tidak boleh menggunakan situs web kami.
                </p>

                <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. Penggunaan Situs Web</h2>
                <p className="text-gray-600 mb-6">
                    Anda menyetujui untuk tidak menggunakan situs web kami untuk aktivitas
                    yang melanggar hukum, merugikan, atau tidak etis. Semua konten di situs
                    web ini adalah milik kami atau pemberi lisensi kami.
                </p>

                <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. Kebijakan Privasi</h2>
                <p className="text-gray-600 mb-6">
                    Kami berkomitmen untuk melindungi privasi pengguna kami. Informasi pribadi
                    Anda akan diproses sesuai dengan kebijakan privasi kami.
                </p>

                <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. Perubahan Kebijakan</h2>
                <p className="text-gray-600 mb-6">
                    Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Setiap perubahan
                    akan diposting di halaman ini, dan Anda dianggap menerima perubahan dengan
                    terus menggunakan situs web kami.
                </p>

                <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. Batasan Tanggung Jawab</h2>
                <p className="text-gray-600 mb-6">
                    Kami tidak bertanggung jawab atas kerugian langsung atau tidak langsung
                    yang diakibatkan oleh penggunaan situs web kami.
                </p>

                <h2 className="text-2xl font-semibold text-blue-600 mb-4">5. Hubungi Kami</h2>
                <p className="text-gray-600">
                    Jika Anda memiliki pertanyaan tentang kebijakan ini, silakan hubungi kami
                    melalui email di support@namasitus.com.
                </p>
            </div>
        </GeneralLayout>
    );
};

export default PolicyPage;

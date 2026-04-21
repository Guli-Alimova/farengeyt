'use client';

import Image from "next/image";
import { useState } from "react";

export default function ContactMain() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Bu yerda API ga yuborish logikasi
    console.log(form);
  };

  return (
    <main className="min-h-screen py-10">
      <div className="container">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Chap tomon: Kontakt ma'lumotlari */}
          <div className="bg-primary text-white rounded-lg p-6 space-y-4">
            <div>
              <h3 className="text-sm opacity-80">Bizga qo'ng'iroq qiling:</h3>
              <p className="text-lg font-semibold">+99890 999 18 19</p>
            </div>
            <div>
              <h3 className="text-sm opacity-80">Email:</h3>
              <p className="text-lg font-semibold">info@farengeyt.press</p>
            </div>
            <div>
              <h3 className="text-sm opacity-80">Manzil:</h3>
              <p className="text-lg font-semibold">Komolon 134 a</p>
            </div>
            <div className="mt-8 flex justify-center">
              <Image
                src="/images/Full logo anim.gif"
                alt="Contact"
                className="rounded-lg"
                width={250}
                height={250}
              />
            </div>
          </div>

          {/* O'ng tomon: Forma */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-primary mb-2">
              Savolingiz bormi? Bizga yozing!
            </h2>
            <p className="text-gray-500 font-medium mb-6 text-sm leading-relaxed">
              Taklif va istaklaringizni bizga yozib yuboring.
              Kitoblarimiz, nashrlarimiz yoki xizmatlarimiz bo'yicha savollaringiz bo'lsa,
              biz doim javob berishga tayyormiz.
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-gray-500 font-medium text-sm">
                    Ismingiz*
                  </label>
                  <input
                    type="text"
                    placeholder="Ismingiz"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-500 font-medium text-sm">
                    Elektron pochtangiz*
                  </label>
                  <input
                    type="email"
                    placeholder="Elektron pochtangiz"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-gray-500 font-medium text-sm">
                  Xabaringizni yozing*
                </label>
                <textarea
                  placeholder="Xabaringizni yozing"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border rounded-lg p-3 h-40 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition flex items-center gap-2"
              >
                Xabar Yuborish <span>→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
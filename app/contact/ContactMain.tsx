import Image from "next/image";
export default function ContactMain() {
    return (
      <main className="min-h-screen py-10">
        <div className="container">
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
  
          {/* LEFT SIDE: Contact Info */}
          <div className="bg-primary text-white rounded-lg p-4 space-y-4 ">
            <div>
              <h3 className="text-sm">Bizga qo‘ng‘iroq qiling:</h3>
              <p className="text-lg font-semibold"> +99890 999 18 19</p>
            </div>
            <div>
              <h3 className="text-sm">Email:</h3>
              <p className="text-lg font-semibold"> info@farengeyt.press</p>
            </div>
            <div>
              <h3 className="text-sm">Manzil:</h3>
              <p className="text-lg font-semibold">Komolon 134 a</p>
            </div>
            <div className="mt-8 flex justify-center">
              <Image
                src="/images/Full logo anim.gif" // public papkaga rasm joylashtiring
                alt="Contact"
                className="rounded-lg"
                width={250}
                height={250}
              />
            </div>
          </div>
  
          {/* RIGHT SIDE: Contact Form */}
          <div className="md:col-span-2 bg-white">
            <h2 className="text-2xl font-bold text-primary">Savolingiz bormi? Bizga yozing!</h2>
            <p className="text-silver font-semibold">
              Taklif va istaklaringizni bizga yozib yuboring.
              Kitoblarimiz, nashrlarimiz yoki xizmatlarimiz bo‘yicha savollaringiz bo‘lsa, biz doim javob berishga tayyormiz.
              Hamkorlik bo‘yicha murojaatlarni ham shu yerda qoldirishingiz mumkin.
              Sizning fikringiz biz uchun muhim.
            </p>
  
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                <div >
                  <label className="block mb-1  text-silver font-medium">Ismingiz*</label>
                  <input
                    type="text"
                    placeholder="Ismingiz"
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-silver">Elektron pochtangiz*</label>
                  <input
                    type="email"
                    placeholder="Elektron pochtangiz"
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
  
              <div>
                <label className="block mb-1 font-medium text-silver">Xabaringizni yozing*</label>
                <textarea
                  placeholder="Xabaringizni yozing"
                  className="w-full border rounded-lg p-3 h-55 focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
  
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary flex items-center"
              >
                Xabar Yuborish <span className="ml-2">→</span>
              </button>
            </form>
          </div>
        </div> 
        </div>
        
      </main>
    );
  }
  
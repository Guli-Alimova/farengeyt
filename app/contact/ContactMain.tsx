import Image from "next/image";
export default function ContactMain() {
    return (
      <main className="min-h-screen py-10">
        <div className="container">
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
  
          {/* LEFT SIDE: Contact Info */}
          <div className="bg-primary text-white rounded-lg p-4 space-y-4 ">
            <div>
              <h3 className="text-sm">Qo`ng`iroq uchun:</h3>
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
            <h2 className="text-2xl font-bold text-primary">Ready To Get Started?</h2>
            <p className="text-silver font-semibold">
              Nunc tincidunt cursus lectus ac semper. Aenean ullamcorper quis arcu molestie consequat.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nec lobortis elit, eu ultrices justo.
              Fusce auctor erat est, non fringilla nibh tempus quis. Aenean dignissim.
            </p>
  
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                <div >
                  <label className="block mb-1  text-silver font-medium">Your Name*</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-silver">Your Email*</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
  
              <div>
                <label className="block mb-1 font-medium text-silver">Write Message*</label>
                <textarea
                  placeholder="Write Message"
                  className="w-full border rounded-lg p-3 h-55 focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
  
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary flex items-center"
              >
                Send Message <span className="ml-2">→</span>
              </button>
            </form>
          </div>
        </div> 
        </div>
        
      </main>
    );
  }
  
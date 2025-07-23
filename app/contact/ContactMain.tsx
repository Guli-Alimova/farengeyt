import Image from "next/image";
export default function ContactMain() {
    return (
      <main className="min-h-screen p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
  
          {/* LEFT SIDE: Contact Info */}
          <div className="bg-primary text-white rounded-lg p-6 space-y-6">
            <div>
              <h3 className="text-sm">Call Us 7/24</h3>
              <p className="text-lg font-semibold">+208-555-0112</p>
            </div>
            <div>
              <h3 className="text-sm">Make a Quote</h3>
              <p className="text-lg font-semibold">example@gmail.com</p>
            </div>
            <div>
              <h3 className="text-sm">Location</h3>
              <p className="text-lg font-semibold">4517 Washington ave.</p>
            </div>
            <div className="mt-4">
              <Image
                src="/images/10.jpg" // public papkaga rasm joylashtiring
                alt="Contact"
                className="rounded-lg"
                width={300}
                height={300}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
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
                  className="w-full border rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-primary"
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
      </main>
    );
  }
  
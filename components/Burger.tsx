"use client";


type MobileMenuProps = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="md:hidden top-0 left-0 w-full h-screen bg-[#cde3e8] p-4 shadow-xl transition translate-x-0">
  
      {/* Menu Links */}
      <nav className="flex flex-col space-y-3 mb-8 ">
        {["Home", "Shop", "Pages", "Blog", "Contact"].map((item) => (
          <div
            key={item}
            className="flex justify-between items-center border-b border-blue-100 pb-2"
          >
            <span className="text-blue-900 font-medium">{item}</span>
          </div>
        ))}
      </nav>

      {/* Contact Info */}
      <div className="mt-8">
        <h2 className="text-blue-900 font-bold mb-4">Contact Info</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-700 mb-2">
          📍 <span>Main Street, Melbourne, Australia</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-700 mb-2">
          ✉️ <span>info@example.com</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-700 mb-2">
          🕰️ <span>Mod-Friday, 09am - 05pm</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-700 mb-2">
          📞 <span>+11002245099</span>
        </div>
      </div>
    </div>
  );
}

import { 
    Car, 
// Github, 
// Twitter, 
// Instagram 
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ padding: "50px 0" }} className="relative border-t border-white/5 flex flex-shrink-0 bg-gradient-to-t from-black/80 to-black/50 justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 flex items-center justify-items-center">
                <Car className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">LUXE</span>
                <span className="text-lg font-light text-white/50">MOTORS</span>
              </div>
            </Link>
            <p className="text-sm text-white/25 max-w-sm leading-relaxed mb-6">
              The premier destination for extraordinary automobiles. Curating the
              finest vehicles from manufacturers worldwide.
            </p>
            <div className="flex items-center gap-3">
              {/* {[Twitter, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))} */}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Collection", "About Us", "Contact", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-white/25 hover:text-white/60 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">
              Categories
            </h4>
            <ul className="space-y-3">
              {["Hypercars", "Sports Cars", "Electric", "Luxury", "SUVs"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/25 hover:text-white/60 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/15">
            © {new Date().getFullYear()} Luxe Motors. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/15 hover:text-white/40 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
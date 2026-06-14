const infoLinks = ["Care Tips", "About Us", "Refunds", "Blogs", "Corporate"];
const policyLinks = ["Return Policy", "Terms & Condition", "Privacy Policy", "Decor", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-14 pb-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-xl">
                🌸
              </div>
              <div className="leading-none">
                {/* <div className="font-serif text-sm text-white/60">bring my</div> */}
                <div className="font-serif text-lg font-bold text-rose-400">flowers</div>
              </div>
            </div>
            <p className="text-white/50 text-xs leading-loose">
              Lorem ipsum dolor sit amet cons,
              <br />
              Lorem ipsum dolor sit amet co
            </p>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-5">
              Information
            </h4>
            <ul className="space-y-2.5">
              {infoLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/55 text-sm hover:text-rose-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-5">
              Policies
            </h4>
            <ul className="space-y-2.5">
              {policyLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/55 text-sm hover:text-rose-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-5">
              Contact Us
            </h4>
            <p className="text-white/55 text-sm mb-5">💬 +91 XXXXXXXXXX</p>
            <div>
              <p className="text-white/70 text-xs font-semibold mb-3 uppercase tracking-wider">
                Follow Us
              </p>
              <div className="flex gap-3">
                {["📘", "📸"].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-base hover:bg-rose-500 hover:border-rose-500 transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-5">
          <p className="text-white/30 text-xs text-center">
            © 2026 Bring My Flowers. All Rights Reserved. Designed by
          </p>
        </div>
      </div>
    </footer>
  );
}
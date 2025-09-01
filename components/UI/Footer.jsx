export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 font-space-grotesk">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Client company */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} TOSMONT servis, s.r.o.
        </p>

        {/* Right: Links + Made by */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
          <nav className="flex space-x-6">
            <a href="/sluzby" className="text-gray-400 hover:text-blue-400 transition">Služby</a>
            <a href="/kontakt" className="text-gray-400 hover:text-blue-400 transition">Kontakt</a>
            <a href="/o-nas" className="text-gray-400 hover:text-blue-400 transition">O nás</a>
          </nav>

          {/* Divider */}
          <span className="hidden md:inline-block text-gray-600">|</span>

          {/* Rightmost: Made by */}
          <p className="text-gray-500 text-xs">
            Webdesign by <span className="text-gray-300 font-medium hover:text-blue-400 transition">The Grand Points</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

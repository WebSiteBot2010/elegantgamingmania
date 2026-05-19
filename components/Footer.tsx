export default function Footer() {
  return (
    <footer className="bg-darker border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Elegant Gaming Mania</h3>
            <p className="text-gray-400">
              La comunità gaming più elegante e professionale d'Italia.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Link Veloci</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/chi-siamo" className="hover:text-white transition-colors">Chi Siamo</a></li>
              <li><a href="/partnership" className="hover:text-white transition-colors">Partnership</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Comunità</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/utenti" className="hover:text-white transition-colors">Utenti</a></li>
              <li><a href="/candidature" className="hover:text-white transition-colors">Candidature</a></li>
              <li><a href="/unban" className="hover:text-white transition-colors">Unban</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; 2026 Elegant Gaming Mania. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}

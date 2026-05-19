'use client';

import Link from 'next/link';
import MaintenancePage from '../../components/MaintenancePage';

export default function Partnership() {
  return (
    <>
      <MaintenancePage pageName="partnership" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold mb-8 text-gradient">Partnership</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Diventa Partner</h2>
            <p className="text-gray-300 mb-4 text-lg leading-8">
              Elegant Gaming Mania offre opportunità di partnership per brand, creator e community.
              Se sei interessato a collaborare con noi, siamo qui per ascoltarti.
            </p>
            <p className="text-gray-300 mb-6 text-lg leading-8">
              Con una community in costante crescita, rappresentiamo un'opportunità unica per
              raggiungere gamer appassionati e professionisti del settore.
            </p>
            <Link
              href="/candidature"
              className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
            >
              Invia Candidatura
            </Link>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/20 to-pink-600/20 rounded-lg p-8 border border-indigo-500/20">
            <h3 className="text-2xl font-bold mb-6">Vantaggi</h3>
            <ul className="space-y-3">
              {[
                'Visibilità presso migliaia di gamer',
                'Accesso diretto alla community',
                'Supporto marketing dedicato',
                'Pacchetti personalizzabili',
                'Analytics e reporting completo',
                'Partnership a lungo termine'
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-darker rounded-lg p-8 border border-gray-800">
          <h2 className="text-3xl font-bold mb-8">Pacchetti Partnership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Bronze', features: ['Menzione in chat', 'Logo website', '1 evento sponsorizzato', 'Supporto base'] },
              { name: 'Silver', features: ['Menzione in chat', 'Logo website', '3 eventi', 'Supporto prioritario', 'Branding custom'] },
              { name: 'Gold', features: ['Menzione in chat', 'Logo website', 'Evento esclusivo', 'Supporto 24/7', 'Branding full', 'Collaborazioni speciali'] }
            ].map((pkg, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900 to-darker rounded-lg p-6 border border-gray-800 hover:border-indigo-500/50 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-gradient">{pkg.name}</h3>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="text-gray-300 flex items-center gap-2">
                      <span className="text-indigo-500">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors font-semibold">
                  Contattaci
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

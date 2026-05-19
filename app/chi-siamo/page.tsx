'use client';

import MaintenancePage from '../../components/MaintenancePage';

export default function ChiSiamo() {
  return (
    <>
      <MaintenancePage pageName="chi-siamo" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold mb-8 text-gradient">Chi Siamo</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">La Nostra Missione</h2>
            <p className="text-gray-300 mb-4 text-lg leading-8">
              Elegant Gaming Mania è nata con una visione chiara: creare una comunità gaming
              dove eleganza, professionalità e divertimento si incontrano. Non siamo solo un
              server di gioco, siamo una famiglia di giocatori appassionati che condividono gli
              stessi valori.
            </p>
            <p className="text-gray-300 mb-4 text-lg leading-8">
              La nostra mission è fornire un ambiente sicuro, accogliente e stimolante dove ogni
              giocatore può esprimere se stesso, migliorare le proprie abilità e creare amicizie
              durature.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/20 to-pink-600/20 rounded-lg p-8 border border-indigo-500/20">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🎮</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Community First</h3>
                  <p className="text-gray-400">La comunità è il nostro cuore pulsante</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">⚡</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Performance</h3>
                  <p className="text-gray-400">Server stabili e veloci, sempre online</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">🤝</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Partnership</h3>
                  <p className="text-gray-400">Collaborazioni con i migliori brand</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-darker rounded-lg p-8 border border-gray-800">
          <h2 className="text-3xl font-bold mb-8">Il Nostro Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { role: 'Founder', name: 'Leccato' },
              { role: 'Lead Developer', name: 'Tech Team' },
              { role: 'Community Manager', name: 'Staff Team' },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-pink-600 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

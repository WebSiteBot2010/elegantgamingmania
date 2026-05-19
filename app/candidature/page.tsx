'use client';

import { useState } from 'react';
import MaintenancePage from '../../components/MaintenancePage';

export default function Candidature() {
  const [activeTab, setActiveTab] = useState('staff');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discord: '',
    type: activeTab,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/candidature', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: activeTab })
      });
      if (res.ok) {
        alert('Candidatura inviata con successo!');
        setFormData({ name: '', email: '', discord: '', type: activeTab, message: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <MaintenancePage pageName="candidature" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold mb-8 text-gradient">Candidature</h1>

        <div className="mb-8">
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('staff')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeTab === 'staff'
                  ? 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white'
                  : 'border-2 border-gray-700 text-gray-300 hover:border-indigo-500'
              }`}
            >
              Staff
            </button>
            <button
              onClick={() => setActiveTab('partner')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeTab === 'partner'
                  ? 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white'
                  : 'border-2 border-gray-700 text-gray-300 hover:border-indigo-500'
              }`}
            >
              Partner Manager
            </button>
          </div>

          {activeTab === 'staff' && (
            <div className="bg-darker rounded-lg p-6 border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold mb-4">Candidatura Staff</h2>
              <p className="text-gray-300 mb-4">
                Cerchiamo persone appassionate e responsabili per unirsi al nostro team! Se sei
                interessato a moderare, supportare la community o gestire aspetti tecnici, sei
                nel posto giusto.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Disponibilità almeno 5 ore a settimana</li>
                <li>✓ Maggiore di 16 anni</li>
                <li>✓ Conoscenza approfondita della community</li>
                <li>✓ Responsabilità e professionalità</li>
              </ul>
            </div>
          )}

          {activeTab === 'partner' && (
            <div className="bg-darker rounded-lg p-6 border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold mb-4">Candidatura Partner Manager</h2>
              <p className="text-gray-300 mb-4">
                Se sei un creator con una community significativa o rappresenti un brand,
                contattaci per discussioni di partnership!
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Community di almeno 1000 persone</li>
                <li>✓ Esperienza in partnership/collaborazioni</li>
                <li>✓ Visione condivisa con EGM</li>
                <li>✓ Capacità comunicative eccellenti</li>
              </ul>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="bg-darker rounded-lg p-8 border border-gray-800">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Nome Completo</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
                placeholder="Il tuo nome"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
                placeholder="tua@email.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Username Discord</label>
            <input
              type="text"
              name="discord"
              value={formData.discord}
              onChange={handleChange}
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
              placeholder="TuoUsername#1234"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Messaggio / Motivazione</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
              placeholder="Spiegaci perché vorresti unirti a noi e cosa puoi offerta alla comunità..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
          >
            Invia Candidatura
          </button>
        </form>
      </div>
    </>
  );
}

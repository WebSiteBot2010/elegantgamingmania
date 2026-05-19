'use client';

import { useState } from 'react';
import MaintenancePage from '../../components/MaintenancePage';

export default function Unban() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    reason: '',
    banReason: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/unban', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert('Richiesta di unban inviata! Lo staff la esaminerà al più presto.');
        setFormData({ username: '', email: '', reason: '', banReason: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <MaintenancePage pageName="unban" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold mb-8 text-gradient">Richiesta Unban</h1>

        <div className="bg-darker rounded-lg p-8 border border-gray-800 mb-8">
          <h2 className="text-2xl font-bold mb-4">Come Funziona?</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-indigo-500">1</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Compila il Form</h3>
                <p className="text-gray-400">Fornisci i dettagli sulla tua situazione e il motivo del ban</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-indigo-500">2</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Revisione dello Staff</h3>
                <p className="text-gray-400">Il nostro team analizzerà la tua richiesta attentamente</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-indigo-500">3</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Risposta via Email</h3>
                <p className="text-gray-400">Riceverai una risposta entro 7 giorni lavorativi</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-darker rounded-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6">Form di Unban</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Username Discord</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
                placeholder="TuoUsername#1234"
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
            <label className="block text-sm font-semibold mb-2">Per Quale Motivo Sei Stato Bannato?</label>
            <textarea
              name="banReason"
              value={formData.banReason}
              onChange={handleChange}
              required
              rows={3}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
              placeholder="Descrivi il motivo del ban..."
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Perché Dovremmo Toglierti il Ban?</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
              placeholder="Spiega cosa hai imparato e perché meriti un'altra opportunità..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
          >
            Invia Richiesta
          </button>
        </form>

        <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-lg p-6 border border-red-500/20 mt-8">
          <p className="text-gray-300">
            <strong>Nota:</strong> Le richieste di unban fraude o non sincere verranno rifiutate.
            Lo staff deciderà in base alla serietà della tua richiesta e alla storia del tuo account.
          </p>
        </div>
      </div>
    </>
  );
}

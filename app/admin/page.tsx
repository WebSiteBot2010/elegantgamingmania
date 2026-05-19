'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface MaintenanceStatus {
  [key: string]: boolean;
}

const pages = ['home', 'chi-siamo', 'regolamento', 'partnership', 'candidature', 'unban', 'utenti'];

export default function AdminPanel() {
  const [maintenance, setMaintenance] = useState<MaintenanceStatus>({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem('adminAuthToken');
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
      fetchMaintenance();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchMaintenance = async () => {
    try {
      const res = await fetch('/api/maintenance');
      const data = await res.json();
      setMaintenance(data);
    } catch (error) {
      console.error('Error fetching maintenance:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (res.ok) {
        const data = await res.json();
        setIsAuthenticated(true);
        setToken(data.token);
        localStorage.setItem('adminAuthToken', data.token);
        await fetchMaintenance();
        setEmail('');
        setPassword('');
      } else {
        alert('Credenziali non corrette');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setToken(null);
    localStorage.removeItem('adminAuthToken');
    setMaintenance({});
  };

  const toggleMaintenance = async (page: string) => {
    if (!token) {
      alert('Devi accedere prima di modificare lo stato.');
      return;
    }

    try {
      const res = await fetch(`/api/maintenance/${page}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ isActive: !maintenance[page] })
      });

      if (res.ok) {
        setMaintenance({
          ...maintenance,
          [page]: !maintenance[page]
        });
      } else {
        console.error('Errore durante l aggiornamento dello stato');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const resetAllMaintenance = async () => {
    if (!token) {
      alert('Devi accedere prima di modificare lo stato.');
      return;
    }

    try {
      const res = await fetch('/api/maintenance', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ action: 'reset' })
      });

      if (res.ok) {
        const data = await res.json();
        setMaintenance(data);
      } else {
        console.error('Errore durante il ripristino delle pagine');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark">
        <div className="text-gray-300">Caricamento...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center px-4">
        <div className="bg-darker rounded-lg p-8 border border-gray-800 max-w-md w-full">
          <h1 className="text-3xl font-bold text-gradient mb-6 text-center">Admin Panel</h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Email Admin</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
                placeholder="support@elegantgamingmania"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Password Admin</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
                placeholder="Inserisci password..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
            >
              Accedi
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            Email: support@elegantgamingmania | Password: elegantadmin
          </div>

          <div className="mt-6 text-center">
            <Link href="/" className="text-indigo-400 hover:text-indigo-300 text-sm">
              ← Torna alla Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h1 className="text-4xl font-bold text-gradient">Admin Panel</h1>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              Logout
            </button>
            <button
              onClick={resetAllMaintenance}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
            >
              Riattiva tutto
            </button>
          </div>
        </div>

        <div className="bg-darker rounded-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6">Gestione Manutenzione Pagine</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {pages.map((page) => (
              <div
                key={page}
                className={`p-4 rounded-lg border-2 transition-all ${
                  maintenance[page]
                    ? 'border-red-500 bg-red-500/10'
                    : 'border-gray-700 bg-gray-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg capitalize">
                      {page === 'chi-siamo'
                        ? 'Chi Siamo'
                        : page.charAt(0).toUpperCase() + page.slice(1)}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {maintenance[page] ? 'Disattivata' : 'Attiva'}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleMaintenance(page)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      maintenance[page]
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-red-600 hover:bg-red-700 text-white'
                    }`}
                  >
                    {maintenance[page] ? 'Attiva' : 'Disattiva'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600/20 to-pink-600/20 rounded-lg p-6 border border-indigo-500/20 mt-8">
          <h3 className="font-bold mb-2">Info Manutenzione</h3>
          <p className="text-gray-300 text-sm">
            Quando una pagina è "In Manutenzione", i visitatori vedranno uno schermo di manutenzione
            elegante con una barra di progresso animata. Usa questo panel per controllare quali pagine
            sono disponibili.
          </p>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-indigo-400 hover:text-indigo-300 text-sm">
            ← Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import MaintenancePage from '../../components/MaintenancePage';

interface User {
  username: string;
  level: number;
  points: number;
  role: string;
}

export default function Utenti() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('level');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data.users || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      // Mostra dati di esempio
      setUsers([
        { username: 'Leccato', level: 100, points: 50000, role: 'Founder' },
        { username: 'GamerPro', level: 85, points: 42000, role: 'VIP' },
        { username: 'ProPlayer', level: 82, points: 41000, role: 'Moderator' },
        { username: 'CommunityHelper', level: 78, points: 39000, role: 'Helper' },
        { username: 'NewbieGamer', level: 25, points: 12000, role: 'Member' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users
    .filter(u => u.username.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'level') return b.level - a.level;
      if (sortBy === 'points') return b.points - a.points;
      return a.username.localeCompare(b.username);
    });

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Founder':
        return 'from-red-600 to-orange-600';
      case 'Moderator':
        return 'from-purple-600 to-indigo-600';
      case 'VIP':
        return 'from-yellow-600 to-orange-600';
      case 'Helper':
        return 'from-green-600 to-blue-600';
      default:
        return 'from-gray-600 to-gray-700';
    }
  };

  return (
    <>
      <MaintenancePage pageName="utenti" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold mb-8 text-gradient">Ranking Utenti</h1>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-darker rounded-lg p-6 border border-gray-800">
            <div className="text-gray-400 text-sm mb-1">Totale Utenti</div>
            <div className="text-3xl font-bold">{users.length}</div>
          </div>
          <div className="bg-darker rounded-lg p-6 border border-gray-800">
            <div className="text-gray-400 text-sm mb-1">Livello Massimo</div>
            <div className="text-3xl font-bold">{Math.max(...users.map(u => u.level), 0)}</div>
          </div>
          <div className="bg-darker rounded-lg p-6 border border-gray-800">
            <div className="text-gray-400 text-sm mb-1">Punti Totali</div>
            <div className="text-3xl font-bold">{users.reduce((sum, u) => sum + u.points, 0).toLocaleString()}</div>
          </div>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Cerca utente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
          >
            <option value="level">Ordina per Livello</option>
            <option value="points">Ordina per Punti</option>
            <option value="name">Ordina per Nome</option>
          </select>
        </div>

        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin">⏳</div>
            <p className="text-gray-400 mt-2">Caricamento utenti...</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredUsers.map((user, idx) => (
              <div
                key={user.username}
                className="bg-darker rounded-lg p-4 border border-gray-800 hover:border-indigo-500/50 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-pink-600 flex items-center justify-center font-bold">
                    #{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{user.username}</h3>
                    <p className="text-gray-400 text-sm">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getRoleColor(user.role)} text-white`}>
                        {user.role}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-2xl">Lvl {user.level}</div>
                  <p className="text-gray-400 text-sm">{user.points.toLocaleString()} punti</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

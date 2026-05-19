import { NextRequest, NextResponse } from 'next/server';

// Simulazione di database per utenti
const users = [
  { username: 'Leccato', level: 100, points: 50000, role: 'Founder' },
  { username: 'GamerPro', level: 85, points: 42000, role: 'VIP' },
  { username: 'ProPlayer', level: 82, points: 41000, role: 'Moderator' },
  { username: 'CommunityHelper', level: 78, points: 39000, role: 'Helper' },
  { username: 'NewbieGamer', level: 25, points: 12000, role: 'Member' },
  { username: 'NightOwl', level: 72, points: 36000, role: 'VIP' },
  { username: 'SkyWalker', level: 68, points: 34000, role: 'Member' },
  { username: 'FireStorm', level: 95, points: 47500, role: 'Moderator' },
];

export async function GET(request: NextRequest) {
  try {
    // In produzione, puoi aggiungere paginazione e filtri
    const sorted = [...users].sort((a, b) => b.level - a.level);

    return NextResponse.json(
      { users: sorted, total: users.length },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Errore nel recupero degli utenti' },
      { status: 500 }
    );
  }
}

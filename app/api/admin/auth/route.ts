import { NextRequest, NextResponse } from 'next/server';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'support@elegantgamingmania';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'elegantadmin';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'elegantgamingmania-secret-token';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return NextResponse.json(
      { success: true, message: 'Autenticazione riuscita', token: ADMIN_TOKEN },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { error: 'Credenziali non corrette' },
    { status: 401 }
  );
}

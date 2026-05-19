import { NextRequest, NextResponse } from 'next/server';
import { maintenanceState, resetMaintenanceState } from './state';

const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'elegantgamingmania-secret-token';

export async function GET() {
  return NextResponse.json(maintenanceState);
}

export async function PATCH(request: NextRequest) {
  const auth = request.headers.get('authorization');
  if (auth !== `Bearer ${ADMIN_TOKEN}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  if (body.action === 'reset') {
    const state = resetMaintenanceState();
    return NextResponse.json(state);
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
}

import { NextRequest, NextResponse } from 'next/server';
import { getPageMaintenance, setPageMaintenance } from '../state';

const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'elegantgamingmania-secret-token';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ page: string }> }
) {
  const { page } = await params;
  const isActive = getPageMaintenance(page);

  return NextResponse.json({ isActive, page });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ page: string }> }
) {
  const { page } = await params;
  const { isActive } = await request.json();

  const auth = request.headers.get('authorization');
  if (auth !== `Bearer ${ADMIN_TOKEN}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const state = setPageMaintenance(page, isActive);

  return NextResponse.json({
    success: true,
    page,
    isActive,
    state,
    message: `Manutenzione per ${page} ${isActive ? 'attivata' : 'disattivata'}`
  });
}

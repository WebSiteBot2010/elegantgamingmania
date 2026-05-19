import { NextRequest, NextResponse } from 'next/server';

// Simulazione di database per richieste unban
const unbanRequests: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validazione base
    if (!data.username || !data.email || !data.reason || !data.banReason) {
      return NextResponse.json(
        { error: 'Tutti i campi sono obbligatori' },
        { status: 400 }
      );
    }

    // Salva la richiesta
    const unbanRequest = {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };

    unbanRequests.push(unbanRequest);

    // In produzione, invia un'email di conferma e salva nel database

    return NextResponse.json(
      { success: true, message: 'Richiesta inviata con successo', id: unbanRequest.id },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Errore nel processamento della richiesta' },
      { status: 500 }
    );
  }
}

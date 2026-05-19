import { NextRequest, NextResponse } from 'next/server';

// Simulazione di database per candidature
const candidatures: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validazione base
    if (!data.name || !data.email || !data.discord || !data.message) {
      return NextResponse.json(
        { error: 'Tutti i campi sono obbligatori' },
        { status: 400 }
      );
    }

    // Salva la candidatura
    const candidature = {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };

    candidatures.push(candidature);

    // In produzione, invia un'email di conferma e salva nel database

    return NextResponse.json(
      { success: true, message: 'Candidatura inviata con successo', id: candidature.id },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Errore nel processamento della candidatura' },
      { status: 500 }
    );
  }
}

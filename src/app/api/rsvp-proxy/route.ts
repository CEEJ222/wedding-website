import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const response = await fetch('https://script.google.com/macros/s/AKfycbyEQJS3cWuV-hte_rNfnT7wQxm07KDrv8TxbccRptPz8Od1HEYrMTP2ucOuAMMxpoZd/exec', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    
    // Always return success if HTTP status is OK (200-299)
    if (response.ok) {
      return NextResponse.json({ result: 'success', message: 'RSVP submitted successfully.' });
    } else {
      return NextResponse.json({ result: 'error', message: 'Failed to submit RSVP.' }, { status: 500 });
    }
  } catch (err) {
    return NextResponse.json({ result: 'error', message: (err as Error).message || 'Unknown error' }, { status: 500 });
  }
}


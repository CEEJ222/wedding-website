import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const response = await fetch('https://script.google.com/macros/s/AKfycbyEQJS3cWuV-hte_rNfnT7wQxm07KDrv8TxbccRptPz8Od1HEYrMTP2ucOuAMMxpoZd/exec', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    let data;
    try {
      data = await response.json();
    } catch (err) {
      // If response is not JSON, fallback
      data = { result: response.ok ? 'success' : 'error', message: 'Non-JSON response from Google Apps Script.' };
    }
    if (!response.ok || data.result !== 'success') {
      return NextResponse.json({ result: 'error', message: data.message || 'Failed to submit RSVP.' }, { status: 500 });
    }
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ result: 'error', message: (err as Error).message || 'Unknown error' }, { status: 500 });
  }
}


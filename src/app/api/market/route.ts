import { NextResponse } from 'next/server';

export async function GET() {
  let weather = { temp: 28, condition: 'Cloudy' };
  let crypto = { bitcoin: 5500000, ethereum: 300000 };
  let forex = { usd_inr: 83.5 };

  try {
    // 1. Weather
    const weatherRes = await fetch('https://api.open-meteo.com/v1/forecast?latitude=21.1458&longitude=79.0882&current_weather=true');
    if (weatherRes.ok) {
       const d = await weatherRes.json();
       weather = { temp: d.current_weather.temperature, condition: 'Cloudy' };
    }
  } catch (e) { console.error('Weather Fetch Error:', e); }

  try {
    // 2. Crypto
    const cryptoRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=inr');
    if (cryptoRes.ok) {
       const d = await cryptoRes.json();
       crypto = { bitcoin: d.bitcoin.inr, ethereum: d.ethereum.inr };
    }
  } catch (e) { console.error('Crypto Fetch Error:', e); }

  try {
     // 3. Forex
     const forexRes = await fetch('https://api.frankfurter.app/latest?from=USD&to=INR');
     if (forexRes.ok) {
        const d = await forexRes.json();
        forex = { usd_inr: d.rates.INR };
     }
  } catch (e) { console.error('Forex Fetch Error:', e); }

  return NextResponse.json({
    weather,
    crypto,
    forex,
    commodities: { 
      gold: 72450, 
      silver: 84200, 
      petrol: 104.05,
      crude: 82.14
    },
    indices: {
      sensex: '74,320.30 (+512)',
      nifty: '22,453.30 (+158.70)'
    },
    lastUpdated: new Date().toISOString(),
  });
}

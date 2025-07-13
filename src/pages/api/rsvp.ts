import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST' });
  }
  const { name, email, attending, allergies } = req.body;
  try {
    await fetch(process.env.RSVP_WEBHOOK_URL as string, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, attending, allergies })
    });
    return res.status(200).json({ message: 'RSVP mottaget' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Fel vid anmälan' });
  }
}
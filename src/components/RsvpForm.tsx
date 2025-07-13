import { useState, FormEvent } from 'react';

const RsvpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [allergies, setAllergies] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Skickar...');
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, allergies }),
      });

      if (res.ok) {
        setStatus('Tack för din anmälan!');
        setName('');
        setEmail('');
        setAllergies('');
      } else {
        setStatus('Något gick fel, försök igen.');
      }
    } catch (err) {
      setStatus('Något gick fel, försök igen.');
    }
  };

  return (
    <section id="rsvp" className="p-6 bg-secondary text-primary">
      <h2 className="text-2xl font-semibold mb-4">OSA / RSVP</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Namn</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">E-post</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="allergies" className="block mb-1">Allergier / Övrigt</label>
          <textarea
            id="allergies"
            rows={3}
            value={allergies}
            onChange={e => setAllergies(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="inline-block px-5 py-2 bg-primary text-white rounded hover:opacity-90 transition"
        >
          Skicka
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </section>
  );
};

export default RsvpForm;

const faqs = [
  { q: 'Är barn välkomna?', a: 'Ja, men meddela gärna hur många i formuläret.'},
  { q: 'När är sista OSA?', a: 'Senast 1 juni 2026.'},
  { q: 'Finns parkering vid lokalen?', a: 'Ja, betalparkering precis utanför.'}
];

export default function FAQ() {
  return (
    <section id="faq" className="py-12">
      <h2 className="text-2xl font-medium mb-4">FAQ</h2>
      <div className="space-y-4">
        {faqs.map(({q,a}, i) => (
          <div key={i}>
            <p className="font-semibold">{q}</p>
            <p>{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
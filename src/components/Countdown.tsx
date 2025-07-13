import { useEffect, useState } from 'react';

interface CountdownProps { eventDate: string; }

export default function Countdown({ eventDate }: CountdownProps) {
  const calculate = () => {
    const diff = new Date(eventDate).getTime() - Date.now();
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      mins: Math.floor((diff / (1000 * 60)) % 60),
      secs: Math.floor((diff / 1000) % 60)
    };
  };
  const [time, setTime] = useState(calculate());
  useEffect(() => {
    const timer = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-medium mb-4">Nedräkning till bröllopet</h2>
      <div className="flex justify-center space-x-4 text-lg">
        <div><span className="font-bold">{time.days}</span> dagar</div>
        <div><span className="font-bold">{time.hours}</span> timmar</div>
        <div><span className="font-bold">{time.mins}</span> min</div>
      </div>
    </section>
  );
}
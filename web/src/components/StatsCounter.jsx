import { useEffect, useState } from 'react';

export default function StatsSection() {
  const [counters, setCounters] = useState({
    muslims: 0,
    countries: 0,
    united: 0,
    initiatives: 0,
  });

  useEffect(() => {
    const animateCounters = () => {
      const targets = {
        muslims: 2.0,
        countries: 63,
        united: 100,
        initiatives: 300,
      };

      const speed = 200;

      Object.keys(targets).forEach((key) => {
        const target = targets[key];
        const updateCount = () => {
          setCounters((prev) => {
            const currentCount = prev[key];
            const inc = target / speed;
            if (currentCount < target) {
              return { ...prev, [key]: Math.ceil(currentCount + inc) };
            } else {
              return { ...prev, [key]: target };
            }
          });
        };

        const interval = setInterval(updateCount, 20);
        return () => clearInterval(interval);
      });
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 -mt-16 relative z-10 mb-20">
      <div className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-black text-primary">
            {counters.muslims.toLocaleString()}+
          </h3>
          <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider mt-1">
            Million Followers
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-black text-primary">
            {counters.countries}
          </h3>
          <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider mt-1">
            Member Countries
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-black text-primary">
            {counters.united}%
          </h3>
          <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider mt-1">
            Stand on TAWHID
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-black text-primary">
            {counters.initiatives}
          </h3>
          <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider mt-1">
            Peace Initiatives
          </p>
        </div>
      </div>
    </div>
  );
}

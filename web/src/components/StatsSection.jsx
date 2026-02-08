import { useEffect, useRef, useState } from "react";

function StatItem({ target, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let current = 0;
          const duration = 1500; // ms
          const stepTime = Math.max(Math.floor(duration / target), 10);

          const timer = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= target) {
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-3xl md:text-4xl font-black text-primary">
        {count}
      </h3>
      <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider mt-1">
        {label}
      </p>
    </div>
  );
}

const StatsSection = () => {
  return (
    <div className="container mx-auto px-4 -mt-16 relative z-10 mb-20">
      <div className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <StatItem target={2.0} label="Million Followers" />
        <StatItem target={63} label="Member Countries" />
        <StatItem target={100} label="Stand on TAWHID" />
        <StatItem target={300} label="Peace Initiatives" />
      </div>
    </div>
  );
}

export default StatsSection;
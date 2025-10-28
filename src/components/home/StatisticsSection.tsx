'use client';

import { useEffect, useState, useRef } from 'react';

const statistics = [
  {
    value: 50000,
    suffix: '+',
    label: 'Learner Terdaftar',
    icon: '👥',
  },
  {
    value: 200,
    suffix: '+',
    label: 'Kursus Gratis',
    icon: '📚',
  },
  {
    value: 95,
    suffix: '%',
    label: 'Tingkat Kepuasan',
    icon: '⭐',
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Akses Belajar',
    icon: '🕒',
  },
];

export default function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-[#FF6B35] to-[#0066FF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {isVisible ? (
                  <Counter target={stat.value} suffix={stat.suffix} />
                ) : (
                  '0'
                )}
              </div>
              <div className="text-white/90 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count.toLocaleString('id-ID')}
      {suffix}
    </span>
  );
}

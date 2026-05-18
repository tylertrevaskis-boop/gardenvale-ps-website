import React from 'react';

export default function StatsStrip() {
  const stats = [
    { number: '450+', label: 'Students' },
    { number: 'Prep–6', label: 'Year levels' },
    { number: '2', label: 'Campuses' },
    { number: '1921', label: 'Founded' },
  ];

  return (
    <section className="border-t-4 border-orange bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-bold text-navy mb-2">
              {stat.number}
            </div>
            <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

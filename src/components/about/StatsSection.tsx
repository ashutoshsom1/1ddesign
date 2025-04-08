import React from 'react';

const stats = [
  {
    id: 1,
    value: '15+',
    label: 'Years Experience',
  },
  {
    id: 2,
    value: '200+',
    label: 'Projects Completed',
  },
  {
    id: 3,
    value: '50+',
    label: 'Awards Won',
  },
  {
    id: 4,
    value: '95%',
    label: 'Client Satisfaction',
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

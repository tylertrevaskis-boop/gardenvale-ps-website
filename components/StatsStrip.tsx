import React from 'react';

export default function HERRRby() {
  const values = [
    { title: 'Honesty', description: 'We speak and act with integrity and truthfulness' },
    { title: 'Empathy', description: 'We understand and care for the feelings of others' },
    { title: 'Resilience', description: 'We persist through challenges and grow stronger' },
    { title: 'Respect', description: 'We value ourselves, others, and our environment' },
    { title: 'Responsibility', description: 'We take ownership of our actions and choices' },
    { title: 'Be Yourself', description: 'We embrace our unique strengths and identity' },
  ];

  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-cyan text-sm font-semibold uppercase tracking-wider mb-2">Our Foundation</p>
          <h2 className="text-white mb-4">HERRRby</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Our school values define who we are as a community and guide everything we do. HERRRby represents our commitment to creating a happy, caring, safe, and supportive environment where all students can flourish.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, idx) => (
            <div key={idx} className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-6 border border-cyan border-opacity-30 hover:border-opacity-60 transition">
              <h3 className="text-white font-serif text-2xl mb-2">{value.title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mascot Reference */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 text-sm">
            🌟 mascot HERRRby, our beloved orange starfish, reminds us daily of these values
          </p>
        </div>
      </div>
    </section>
  );
}

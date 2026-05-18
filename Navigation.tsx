import React from 'react';

export default function PERCI() {
  const dispositions = [
    { 
      icon: '💪',
      title: 'Perseverance', 
      description: 'We keep going when things get tough, learning from setbacks and trying again with determination.'
    },
    { 
      icon: '⭐',
      title: 'Excellence', 
      description: 'We strive to do our best in all we do, taking pride in the quality of our learning and effort.'
    },
    { 
      icon: '🚀',
      title: 'Risk-taking', 
      description: 'We are brave enough to try new things, ask questions, and step outside our comfort zone.'
    },
    { 
      icon: '🔍',
      title: 'Curiosity', 
      description: 'We wonder, explore, and ask "why?" — fueling our love of learning and discovery.'
    },
    { 
      icon: '🎯',
      title: 'Initiative', 
      description: 'We take action, solve problems, and lead our own learning journey with confidence.'
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left - Text */}
          <div>
            <p className="text-orange text-sm font-semibold uppercase tracking-wider mb-2">How We Learn</p>
            <h2 className="text-navy mb-4">PERCI Learners</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              At Gardenvale, we nurture five key dispositions that transform our students into thoughtful, resilient, and confident learners. PERCI guides how we approach learning, tackle challenges, and grow together.
            </p>
            <p className="text-gray-600 text-base">
              These dispositions work alongside HERRRby to create a learning community where every student can thrive, whether they're in our Senior or Junior campus.
            </p>
          </div>

          {/* Right - Grid */}
          <div className="grid grid-cols-2 gap-4">
            {dispositions.map((disp, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange hover:shadow-lg transition">
                <div className="text-3xl mb-3">{disp.icon}</div>
                <h3 className="text-navy font-serif text-lg mb-2">{disp.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{disp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

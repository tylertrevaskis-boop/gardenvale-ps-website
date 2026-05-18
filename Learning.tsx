import React from 'react';

export default function Wellbeing() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <p className="text-orange text-sm font-semibold uppercase tracking-wider mb-2">Student Support</p>
            <h2 className="text-navy mb-6">Wellbeing at Gardenvale</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              We believe that every student learns best when they feel safe, supported, and valued. Our comprehensive wellbeing program supports the social, emotional, and physical health of all our learners.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              Through the HERRRby framework and our PERCI dispositions, we create a culture of care, resilience, and positive relationships that extends throughout our school community.
            </p>
            <div className="space-y-3 mb-6">
              <p className="text-gray-700 text-base font-semibold">We focus on:</p>
              <ul className="text-gray-700 text-base space-y-1 ml-4">
                <li>✓ Mental health and emotional literacy</li>
                <li>✓ Building resilience and coping strategies</li>
                <li>✓ Positive relationships and community</li>
                <li>✓ Physical health and active living</li>
              </ul>
            </div>
            <a href="#" className="text-orange font-semibold hover:text-orange-600 transition inline-flex items-center gap-2">
              Learn about wellbeing →
            </a>
          </div>

          {/* Right - Image */}
          <div className="bg-gradient-to-br from-orange to-red-400 h-96 rounded-lg flex items-center justify-center text-white font-serif text-2xl">
            <div className="text-center">
              <p className="text-5xl mb-2">🌟</p>
              <p>Wellbeing image placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

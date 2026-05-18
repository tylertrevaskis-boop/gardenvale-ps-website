import React from 'react';

export default function Learning() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="bg-gradient-to-br from-cyan to-blue-400 h-96 rounded-lg flex items-center justify-center text-white font-serif text-2xl order-last md:order-first">
            <div className="text-center">
              <p className="text-5xl mb-2">📚</p>
              <p>Learning image placeholder</p>
            </div>
          </div>

          {/* Right - Text */}
          <div className="order-first md:order-last">
            <p className="text-orange text-sm font-semibold uppercase tracking-wider mb-2">Our Approach</p>
            <h2 className="text-navy mb-6">Learning at Gardenvale</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              We provide engaging, inquiry-based learning experiences that challenge our students to think critically, collaborate, and discover their passions.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              From literacy and numeracy to specialist programs in visual arts, music, sport, and digital technologies, every student finds their pathway to excellence.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700 text-base"><strong>Two Campuses:</strong></p>
              <ul className="text-gray-700 text-base space-y-1 ml-4">
                <li>✓ Junior Campus (Prep–Year 2): Play-based and discovery learning</li>
                <li>✓ Senior Campus (Year 3–6): Deeper inquiry and specialisation</li>
              </ul>
            </div>
            <a href="#" className="text-orange font-semibold hover:text-orange-600 transition inline-flex items-center gap-2 mt-6">
              Explore our learning →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

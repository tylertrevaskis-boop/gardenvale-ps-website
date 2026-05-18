import React from 'react';

export default function NewsCards() {
  const news = [
    {
      title: 'Year 6 Camp Adventure',
      excerpt: 'Our Year 6 students returned from an incredible camp experience with new skills, confidence, and lifelong memories.',
      date: 'May 15, 2024',
      image: '🏕️',
    },
    {
      title: 'Specialist Programs Showcase',
      excerpt: 'From visual arts to music and sport, our specialist programs celebrate the unique talents of every student.',
      date: 'May 10, 2024',
      image: '🎨',
    },
    {
      title: 'Community Wellbeing Week',
      excerpt: 'A week dedicated to mental health, resilience, and building connections across our school community.',
      date: 'May 5, 2024',
      image: '❤️',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-orange text-sm font-semibold uppercase tracking-wider mb-2">Stories From Our Community</p>
          <h2 className="text-navy mb-4">Latest News</h2>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {news.map((item, idx) => (
            <article key={idx} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg hover:border-orange transition">
              <div className="h-48 bg-gradient-to-br from-navy to-blue-600 flex items-center justify-center text-6xl">
                {item.image}
              </div>
              <div className="p-6">
                <p className="text-orange text-xs font-semibold uppercase tracking-wider mb-2">{item.date}</p>
                <h3 className="font-serif text-navy text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.excerpt}</p>
                <a href="#" className="text-orange font-semibold text-sm hover:text-orange-600 transition inline-flex items-center gap-1">
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <a href="#" className="text-orange font-semibold hover:text-orange-600 transition inline-flex items-center gap-2">
            View all news →
          </a>
        </div>
      </div>
    </section>
  );
}

#!/bin/bash

# Fix app/globals.css
cat > app/globals.css << 'EOF'
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'Outfit', sans-serif;
  color: #1F2937;
  background-color: #FFFFFF;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  line-height: 1.2;
}

h1 { font-size: 3.5rem; font-weight: 700; }
h2 { font-size: 2.5rem; }
h3 { font-size: 1.875rem; }

@media (max-width: 768px) {
  h1 { font-size: 2.5rem; }
  h2 { font-size: 1.875rem; }
  h3 { font-size: 1.5rem; }
}
EOF

echo "✅ globals.css"

# Fix app/layout.tsx
cat > app/layout.tsx << 'EOF'
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gardenvale Primary School | Challenge. Engage. Inspire.",
  description: "Gardenvale Primary School — Two campuses of excellence in East Brighton, Victoria. Prep to Year 6.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
EOF

echo "✅ layout.tsx"

# Fix app/page.tsx
cat > app/page.tsx << 'EOF'
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import StatsStrip from '@/components/StatsStrip';
import HERRRby from '@/components/HERRRby';
import PERCI from '@/components/PERCI';
import QuickLinks from '@/components/QuickLinks';
import NewsCards from '@/components/NewsCards';
import Learning from '@/components/Learning';
import Wellbeing from '@/components/Wellbeing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <StatsStrip />
      <HERRRby />
      <PERCI />
      <QuickLinks />
      <NewsCards />
      <Learning />
      <Wellbeing />
      <Footer />
    </main>
  );
}
EOF

echo "✅ page.tsx"

# Fix components/Navigation.tsx
cat > components/Navigation.tsx << 'EOF'
export default function Navigation() {
  return (
    <nav style={{position:'fixed',width:'100%',top:0,backgroundColor:'white',borderBottom:'1px solid #e5e7eb',zIndex:50,boxShadow:'0 1px 3px rgba(0,0,0,0.1)'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'1rem 1.5rem',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
          <div style={{width:'40px',height:'40px',backgroundColor:'#003D5C',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontFamily:'serif',fontSize:'1.125rem',fontWeight:'bold'}}>G</div>
          <span style={{fontFamily:'Cormorant Garamond, serif',fontWeight:'bold',color:'#003D5C',fontSize:'1.125rem'}}>GARDENVALE PRIMARY</span>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'2rem'}}>
          <a href="#" style={{color:'#374151',textDecoration:'none',fontWeight:500,fontSize:'0.875rem'}}>About</a>
          <a href="#" style={{color:'#374151',textDecoration:'none',fontWeight:500,fontSize:'0.875rem'}}>Learning</a>
          <a href="#" style={{color:'#374151',textDecoration:'none',fontWeight:500,fontSize:'0.875rem'}}>Wellbeing</a>
          <a href="#" style={{color:'#374151',textDecoration:'none',fontWeight:500,fontSize:'0.875rem'}}>News</a>
          <a href="#" style={{color:'#374151',textDecoration:'none',fontWeight:500,fontSize:'0.875rem'}}>Contact</a>
          <button style={{backgroundColor:'#FF6B35',color:'white',padding:'0.5rem 1.5rem',borderRadius:'4px',border:'none',fontWeight:600,cursor:'pointer'}}>Enrol now</button>
        </div>
      </div>
    </nav>
  );
}
EOF

echo "✅ Navigation.tsx"

# Fix components/Hero.tsx
cat > components/Hero.tsx << 'EOF'
export default function Hero() {
  return (
    <section style={{paddingTop:'5rem',display:'grid',gridTemplateColumns:'1fr 1fr'}}>
      <div style={{backgroundColor:'#003D5C',color:'white',padding:'6rem 3rem',display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <h1 style={{color:'white',marginBottom:'1.5rem',fontSize:'3.5rem',fontFamily:'Cormorant Garamond, serif',fontWeight:700}}>Challenge. Engage. Inspire.</h1>
        <p style={{color:'#5DCCFF',marginBottom:'0.75rem',fontSize:'1.125rem',fontFamily:'Cormorant Garamond, serif'}}>Gardenvale Primary School</p>
        <p style={{color:'#f3f4f6',marginBottom:'2rem',lineHeight:1.7,maxWidth:'32rem'}}>
          Two campuses of excellence, where every learner is challenged to grow, engaged in meaningful learning, and inspired to become their best self.
        </p>
        <div style={{display:'flex',gap:'1rem'}}>
          <button style={{backgroundColor:'#FF6B35',color:'white',padding:'0.75rem 2rem',borderRadius:'4px',border:'none',fontWeight:600,cursor:'pointer'}}>Enrol now</button>
          <button style={{backgroundColor:'transparent',color:'white',padding:'0.75rem 2rem',borderRadius:'4px',border:'2px solid white',fontWeight:600,cursor:'pointer'}}>Learn more</button>
        </div>
      </div>
      <div style={{backgroundColor:'#5DCCFF',minHeight:'500px',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'1.5rem',fontFamily:'Cormorant Garamond, serif'}}>
        <div style={{textAlign:'center'}}>
          <p style={{fontSize:'3rem',marginBottom:'0.5rem'}}>📷</p>
          <p>Hero image placeholder</p>
          <p style={{fontSize:'0.875rem',marginTop:'0.5rem',opacity:0.75}}>Add vibrant school photo</p>
        </div>
      </div>
    </section>
  );
}
EOF

echo "✅ Hero.tsx"

# Fix components/StatsStrip.tsx
cat > components/StatsStrip.tsx << 'EOF'
export default function StatsStrip() {
  const stats = [
    { number: '450+', label: 'Students' },
    { number: 'Prep–6', label: 'Year levels' },
    { number: '2', label: 'Campuses' },
    { number: '1921', label: 'Founded' },
  ];
  return (
    <section style={{borderTop:'4px solid #FF6B35',backgroundColor:'white'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'3rem 1.5rem',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'2rem'}}>
        {stats.map((stat,idx) => (
          <div key={idx} style={{textAlign:'center'}}>
            <div style={{fontSize:'2.5rem',fontFamily:'Cormorant Garamond, serif',fontWeight:'bold',color:'#003D5C',marginBottom:'0.5rem'}}>{stat.number}</div>
            <p style={{color:'#6b7280'}}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
EOF

echo "✅ StatsStrip.tsx"

# Fix components/HERRRby.tsx
cat > components/HERRRby.tsx << 'EOF'
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
    <section style={{backgroundColor:'#003D5C',padding:'5rem 0'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 1.5rem'}}>
        <div style={{textAlign:'center',marginBottom:'3rem'}}>
          <p style={{color:'#5DCCFF',fontSize:'0.875rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'0.5rem'}}>Our Foundation</p>
          <h2 style={{color:'white',fontFamily:'Cormorant Garamond, serif',marginBottom:'1rem'}}>HERRRby</h2>
          <p style={{color:'#d1d5db',maxWidth:'40rem',margin:'0 auto',fontSize:'1.125rem'}}>
            Our school values define who we are as a community and guide everything we do.
          </p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.5rem'}}>
          {values.map((value,idx) => (
            <div key={idx} style={{backgroundColor:'rgba(255,255,255,0.1)',borderRadius:'8px',padding:'1.5rem',border:'1px solid rgba(93,204,255,0.3)'}}>
              <h3 style={{color:'white',fontFamily:'Cormorant Garamond, serif',fontSize:'1.5rem',marginBottom:'0.5rem'}}>{value.title}</h3>
              <p style={{color:'#e5e7eb',fontSize:'0.875rem',lineHeight:1.6}}>{value.description}</p>
            </div>
          ))}
        </div>
        <div style={{marginTop:'3rem',textAlign:'center'}}>
          <p style={{color:'#d1d5db',fontSize:'0.875rem'}}>🌟 mascot HERRRby, our beloved orange starfish, reminds us daily of these values</p>
        </div>
      </div>
    </section>
  );
}
EOF

echo "✅ HERRRby.tsx"

# Fix components/PERCI.tsx
cat > components/PERCI.tsx << 'EOF'
export default function PERCI() {
  const dispositions = [
    { icon: '💪', title: 'Perseverance', description: 'We keep going when things get tough, learning from setbacks.' },
    { icon: '⭐', title: 'Excellence', description: 'We strive to do our best in all we do.' },
    { icon: '🚀', title: 'Risk-taking', description: 'We are brave enough to try new things and step outside our comfort zone.' },
    { icon: '🔍', title: 'Curiosity', description: 'We wonder, explore, and ask "why?" — fueling our love of learning.' },
    { icon: '🎯', title: 'Initiative', description: 'We take action and lead our own learning journey.' },
  ];
  return (
    <section style={{backgroundColor:'#f9fafb',padding:'5rem 0'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 1.5rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'3rem',alignItems:'center'}}>
          <div>
            <p style={{color:'#FF6B35',fontSize:'0.875rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'0.5rem'}}>How We Learn</p>
            <h2 style={{color:'#003D5C',fontFamily:'Cormorant Garamond, serif',marginBottom:'1rem'}}>PERCI Learners</h2>
            <p style={{color:'#374151',fontSize:'1.125rem',lineHeight:1.7,marginBottom:'1rem'}}>
              At Gardenvale, we nurture five key dispositions that transform our students into thoughtful, resilient, and confident learners.
            </p>
            <p style={{color:'#6b7280',lineHeight:1.7}}>
              These dispositions work alongside HERRRby to create a learning community where every student can thrive.
            </p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
            {dispositions.map((d,idx) => (
              <div key={idx} style={{backgroundColor:'white',borderRadius:'8px',padding:'1.5rem',border:'1px solid #e5e7eb'}}>
                <div style={{fontSize:'1.875rem',marginBottom:'0.75rem'}}>{d.icon}</div>
                <h3 style={{color:'#003D5C',fontFamily:'Cormorant Garamond, serif',fontSize:'1.125rem',marginBottom:'0.5rem'}}>{d.title}</h3>
                <p style={{color:'#6b7280',fontSize:'0.75rem',lineHeight:1.6}}>{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
EOF

echo "✅ PERCI.tsx"

# Fix components/QuickLinks.tsx
cat > components/QuickLinks.tsx << 'EOF'
export default function QuickLinks() {
  const links = [
    { title: 'Calendar', icon: '📅' },
    { title: 'Newsletter', icon: '📬' },
    { title: 'School Council', icon: '👥' },
    { title: 'Wellbeing', icon: '💚' },
  ];
  return (
    <section style={{backgroundColor:'white',padding:'3rem 0',borderBottom:'1px solid #e5e7eb'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 1.5rem',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1rem'}}>
        {links.map((link,idx) => (
          <a key={idx} href="#" style={{backgroundColor:'#f9fafb',padding:'1.5rem',borderRadius:'8px',textAlign:'center',textDecoration:'none',display:'block'}}>
            <div style={{fontSize:'2.5rem',marginBottom:'0.75rem'}}>{link.icon}</div>
            <p style={{fontWeight:600,color:'#1f2937',fontSize:'0.875rem'}}>{link.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
EOF

echo "✅ QuickLinks.tsx"

# Fix components/NewsCards.tsx
cat > components/NewsCards.tsx << 'EOF'
export default function NewsCards() {
  const news = [
    { title: 'Year 6 Camp Adventure', excerpt: 'Our Year 6 students returned from an incredible camp experience with new skills and confidence.', date: 'May 15, 2024', image: '🏕️' },
    { title: 'Specialist Programs Showcase', excerpt: 'From visual arts to music and sport, our specialist programs celebrate the unique talents of every student.', date: 'May 10, 2024', image: '🎨' },
    { title: 'Community Wellbeing Week', excerpt: 'A week dedicated to mental health, resilience, and building connections across our school community.', date: 'May 5, 2024', image: '❤️' },
  ];
  return (
    <section style={{backgroundColor:'#f9fafb',padding:'5rem 0'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 1.5rem'}}>
        <div style={{textAlign:'center',marginBottom:'3rem'}}>
          <p style={{color:'#FF6B35',fontSize:'0.875rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'0.5rem'}}>Stories From Our Community</p>
          <h2 style={{color:'#003D5C',fontFamily:'Cormorant Garamond, serif'}}>Latest News</h2>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'2rem',marginBottom:'2rem'}}>
          {news.map((item,idx) => (
            <article key={idx} style={{backgroundColor:'white',borderRadius:'8px',overflow:'hidden',border:'1px solid #e5e7eb'}}>
              <div style={{height:'12rem',backgroundColor:'#003D5C',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'3.75rem'}}>{item.image}</div>
              <div style={{padding:'1.5rem'}}>
                <p style={{color:'#FF6B35',fontSize:'0.75rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'0.5rem'}}>{item.date}</p>
                <h3 style={{fontFamily:'Cormorant Garamond, serif',color:'#003D5C',fontSize:'1.25rem',marginBottom:'0.75rem'}}>{item.title}</h3>
                <p style={{color:'#6b7280',fontSize:'0.875rem',lineHeight:1.6,marginBottom:'1rem'}}>{item.excerpt}</p>
                <a href="#" style={{color:'#FF6B35',fontWeight:600,fontSize:'0.875rem',textDecoration:'none'}}>Read more →</a>
              </div>
            </article>
          ))}
        </div>
        <div style={{textAlign:'center'}}>
          <a href="#" style={{color:'#FF6B35',fontWeight:600,textDecoration:'none'}}>View all news →</a>
        </div>
      </div>
    </section>
  );
}
EOF

echo "✅ NewsCards.tsx"

# Fix components/Learning.tsx
cat > components/Learning.tsx << 'EOF'
export default function Learning() {
  return (
    <section style={{padding:'5rem 0'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 1.5rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'3rem',alignItems:'center'}}>
          <div style={{background:'linear-gradient(135deg, #5DCCFF, #3b9fd1)',height:'24rem',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'1.5rem',fontFamily:'Cormorant Garamond, serif'}}>
            <div style={{textAlign:'center'}}>
              <p style={{fontSize:'3rem',marginBottom:'0.5rem'}}>📚</p>
              <p>Learning image placeholder</p>
            </div>
          </div>
          <div>
            <p style={{color:'#FF6B35',fontSize:'0.875rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'0.5rem'}}>Our Approach</p>
            <h2 style={{color:'#003D5C',fontFamily:'Cormorant Garamond, serif',marginBottom:'1.5rem'}}>Learning at Gardenvale</h2>
            <p style={{color:'#374151',fontSize:'1.125rem',lineHeight:1.7,marginBottom:'1rem'}}>
              We provide engaging, inquiry-based learning experiences that challenge our students to think critically, collaborate, and discover their passions.
            </p>
            <ul style={{color:'#374151',lineHeight:2,marginBottom:'1.5rem'}}>
              <li>✓ Junior Campus (Prep–Year 2): Play-based and discovery learning</li>
              <li>✓ Senior Campus (Year 3–6): Deeper inquiry and specialisation</li>
            </ul>
            <a href="#" style={{color:'#FF6B35',fontWeight:600,textDecoration:'none'}}>Explore our learning →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
EOF

echo "✅ Learning.tsx"

# Fix components/Wellbeing.tsx
cat > components/Wellbeing.tsx << 'EOF'
export default function Wellbeing() {
  return (
    <section style={{backgroundColor:'#f9fafb',padding:'5rem 0'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 1.5rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'3rem',alignItems:'center'}}>
          <div>
            <p style={{color:'#FF6B35',fontSize:'0.875rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'0.5rem'}}>Student Support</p>
            <h2 style={{color:'#003D5C',fontFamily:'Cormorant Garamond, serif',marginBottom:'1.5rem'}}>Wellbeing at Gardenvale</h2>
            <p style={{color:'#374151',fontSize:'1.125rem',lineHeight:1.7,marginBottom:'1rem'}}>
              We believe every student learns best when they feel safe, supported, and valued.
            </p>
            <p style={{color:'#374151',lineHeight:1.7,marginBottom:'1.5rem'}}>
              Through HERRRby and our PERCI dispositions, we create a culture of care and resilience throughout our community.
            </p>
            <a href="#" style={{color:'#FF6B35',fontWeight:600,textDecoration:'none'}}>Learn about wellbeing →</a>
          </div>
          <div style={{background:'linear-gradient(135deg, #FF6B35, #ff8c5a)',height:'24rem',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'1.5rem',fontFamily:'Cormorant Garamond, serif'}}>
            <div style={{textAlign:'center'}}>
              <p style={{fontSize:'3rem',marginBottom:'0.5rem'}}>🌟</p>
              <p>Wellbeing image placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
EOF

echo "✅ Wellbeing.tsx"

# Fix components/Footer.tsx
cat > components/Footer.tsx << 'EOF'
export default function Footer() {
  return (
    <footer style={{backgroundColor:'#003D5C',color:'white',padding:'4rem 0'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 1.5rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'2rem',marginBottom:'3rem'}}>
          <div>
            <p style={{fontWeight:600,fontSize:'1.125rem',marginBottom:'1rem'}}>Contact Us</p>
            <div style={{color:'#d1d5db',fontSize:'0.875rem',lineHeight:1.8}}>
              <p><strong>Senior Campus (Year 3–6)</strong><br />Landcox Street, East Brighton VIC 3187<br />(03) 9596 2871</p>
              <br />
              <p><strong>Junior Campus (Prep–Year 2)</strong><br />Landcox Street, East Brighton VIC 3187<br />(03) 9596 8550</p>
              <br />
              <p><strong>Email</strong><br />gardenvale.ps@education.vic.gov.au</p>
            </div>
          </div>
          <div>
            <p style={{fontWeight:600,fontSize:'1.125rem',marginBottom:'1rem'}}>Quick Links</p>
            <ul style={{listStyle:'none',padding:0,color:'#d1d5db',fontSize:'0.875rem',lineHeight:2}}>
              <li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>About</a></li>
              <li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Learning</a></li>
              <li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Wellbeing</a></li>
              <li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>News</a></li>
              <li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Enrolments</a></li>
            </ul>
          </div>
          <div>
            <p style={{fontWeight:600,fontSize:'1.125rem',marginBottom:'1rem'}}>For Families</p>
            <ul style={{listStyle:'none',padding:0,color:'#d1d5db',fontSize:'0.875rem',lineHeight:2}}>
              <li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Calendar</a></li>
              <li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Newsletter</a></li>
              <li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>School Council</a></li>
              <li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Policies</a></li>
            </ul>
          </div>
          <div>
            <p style={{fontWeight:600,fontSize:'1.125rem',marginBottom:'1rem'}}>Resources</p>
            <ul style={{listStyle:'none',padding:0,color:'#d1d5db',fontSize:'0.875rem',lineHeight:2}}>
              <li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Annual Reports</a></li>
              <li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Child Safe Standards</a></li>
              <li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Code of Conduct</a></li>
              <li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Uniform Info</a></li>
            </ul>
          </div>
        </div>
        <div style={{borderTop:'1px solid #374151',paddingTop:'2rem',textAlign:'center',color:'#9ca3af',fontSize:'0.875rem'}}>
          <p style={{marginBottom:'0.75rem'}}>We acknowledge the Bunurong people of the Kulin Nation, the Traditional Owners of the land where our school is located.</p>
          <p>© 2024 Gardenvale Primary School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
EOF

echo "✅ Footer.tsx"
echo ""
echo "🎉 All files fixed! Now run: git add . && git commit -m 'Fix all components' && git push"

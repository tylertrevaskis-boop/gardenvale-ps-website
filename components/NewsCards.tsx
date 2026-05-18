export default function NewsCards() {
  const news = [{title:'Year 6 Camp Adventure',excerpt:'Our Year 6 students returned from an incredible camp experience with new skills and confidence.',date:'May 15, 2024',image:'🏕️'},{title:'Specialist Programs Showcase',excerpt:'From visual arts to music and sport, our specialist programs celebrate the unique talents of every student.',date:'May 10, 2024',image:'🎨'},{title:'Community Wellbeing Week',excerpt:'A week dedicated to mental health, resilience, and building connections across our school community.',date:'May 5, 2024',image:'❤️'}];
  return (
    <section style={{backgroundColor:'#f9fafb',padding:'5rem 0'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 1.5rem'}}>
        <div style={{textAlign:'center',marginBottom:'3rem'}}><p style={{color:'#FF6B35',fontSize:'0.875rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'0.5rem'}}>Stories From Our Community</p><h2 style={{color:'#003D5C',fontFamily:'Cormorant Garamond, serif'}}>Latest News</h2></div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'2rem',marginBottom:'2rem'}}>
          {news.map((n,i) => <article key={i} style={{backgroundColor:'white',borderRadius:'8px',overflow:'hidden',border:'1px solid #e5e7eb'}}><div style={{height:'12rem',backgroundColor:'#003D5C',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'3.75rem'}}>{n.image}</div><div style={{padding:'1.5rem'}}><p style={{color:'#FF6B35',fontSize:'0.75rem',fontWeight:600,textTransform:'uppercase',marginBottom:'0.5rem'}}>{n.date}</p><h3 style={{fontFamily:'Cormorant Garamond, serif',color:'#003D5C',fontSize:'1.25rem',marginBottom:'0.75rem'}}>{n.title}</h3><p style={{color:'#6b7280',fontSize:'0.875rem',lineHeight:1.6,marginBottom:'1rem'}}>{n.excerpt}</p><a href="#" style={{color:'#FF6B35',fontWeight:600,fontSize:'0.875rem',textDecoration:'none'}}>Read more →</a></div></article>)}
        </div>
        <div style={{textAlign:'center'}}><a href="#" style={{color:'#FF6B35',fontWeight:600,textDecoration:'none'}}>View all news →</a></div>
      </div>
    </section>
  );
}

export default function HERRRby() {
  const values = [
    {title:'Honesty',description:'Being truthful with yourself and others'},
    {title:'Empathy',description:'A sincere attempt to understand someone else\'s feelings'},
    {title:'Resilience',description:'The ability to bounce back'},
    {title:'Respect',description:'Treat everyone as you would like to be treated'},
    {title:'Responsibility',description:'Taking appropriate action when required'},
    {title:'Be Yourself',description:'Embrace your unique strengths and identity'}
  ];
  return (
    <section style={{backgroundColor:'#003D5C',padding:'5rem 0'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 1.5rem'}}>
        <div style={{display:'flex',flexWrap:'wrap',gap:'2rem',alignItems:'center',marginBottom:'3rem'}}>
          <div style={{flex:'1',minWidth:'280px'}}>
            <p style={{color:'#5DCCFF',fontSize:'0.875rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'0.5rem'}}>Our Foundation</p>
            <h2 style={{color:'white',fontFamily:'Cormorant Garamond, serif',marginBottom:'1rem'}}>HERRRby</h2>
            <p style={{color:'#d1d5db',fontSize:'1.125rem',lineHeight:1.7}}>
              At Gardenvale, we know that feeling safe and secure directly impacts a student's capacity to learn. Our HERRRby values build a culture of mutual respect where every student feels valued, trusted, and ready to grow.
            </p>
          </div>
          <div style={{flexShrink:0}}>
            <img src="/images/HERRRbyNoBG.png" alt="HERRRby the starfish mascot" style={{height:'160px',width:'auto',objectFit:'contain'}} />
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'1.5rem'}}>
          {values.map((v,i) => (
            <div key={i} style={{backgroundColor:'rgba(255,255,255,0.1)',borderRadius:'8px',padding:'1.5rem',border:'1px solid rgba(93,204,255,0.3)'}}>
              <h3 style={{color:'white',fontFamily:'Cormorant Garamond, serif',fontSize:'1.5rem',marginBottom:'0.5rem'}}>{v.title}</h3>
              <p style={{color:'#e5e7eb',fontSize:'0.875rem',lineHeight:1.6}}>{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

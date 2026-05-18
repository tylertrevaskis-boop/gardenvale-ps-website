export default function Wellbeing() {
  return (
    <section style={{backgroundColor:'#f9fafb',padding:'5rem 0'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 1.5rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'3rem',alignItems:'center'}}>
          <div>
            <p style={{color:'#FF6B35',fontSize:'0.875rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'0.5rem'}}>Student Support</p>
            <h2 style={{color:'#003D5C',fontFamily:'Cormorant Garamond, serif',marginBottom:'1.5rem'}}>Wellbeing at Gardenvale</h2>
            <p style={{color:'#374151',fontSize:'1.125rem',lineHeight:1.7,marginBottom:'1rem'}}>
              We know that feeling safe and secure directly impacts a student's capacity to learn. That's why we prioritise social and emotional learning alongside academic achievement.
            </p>
            <p style={{color:'#374151',lineHeight:1.7,marginBottom:'1.5rem'}}>
              Our HERRRby values create a culture of mutual respect where inclusion and diversity are celebrated, and every student feels valued, trusted, and ready to grow.
            </p>
            <a href="#" style={{color:'#FF6B35',fontWeight:600,textDecoration:'none'}}>Learn about wellbeing →</a>
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#fff7f4',borderRadius:'16px',padding:'2rem',minHeight:'24rem'}}>
            <img src="/images/HERRRbyNoBG.png" alt="HERRRby the starfish mascot" style={{maxHeight:'320px',width:'auto',objectFit:'contain'}} />
          </div>
        </div>
      </div>
    </section>
  );
}

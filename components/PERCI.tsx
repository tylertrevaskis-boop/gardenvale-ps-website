export default function PERCI() {
  const d = [
    {icon:'💪',title:'Perseverance',description:'Sticking with learning, even when it\'s tricky. Building stamina, resilience, and a "keep trying" attitude that helps us learn from mistakes.'},
    {icon:'⭐',title:'Excellence',description:'Doing our best and striving for quality in everything we do. Recognising that excellence is about effort, reflection, and improvement.'},
    {icon:'🚀',title:'Risk-taking',description:'Being brave enough to try new things. Taking safe, thoughtful learning risks, asking questions, and learning from mistakes.'},
    {icon:'🔍',title:'Curiosity',description:'Wondering, exploring, and asking great questions. Celebrating learning through curiosity, discovery, and creativity.'},
    {icon:'🎯',title:'Initiative',description:'Taking action without being asked. Setting goals, being proactive, and showing independence in learning and helping others.'}
  ];
  return (
    <section style={{backgroundColor:'#f9fafb',padding:'5rem 0'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 1.5rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'3rem',alignItems:'center'}}>
          <div>
            <p style={{color:'#FF6B35',fontSize:'0.875rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'0.5rem'}}>How We Learn</p>
            <h2 style={{color:'#003D5C',fontFamily:'Cormorant Garamond, serif',marginBottom:'1rem'}}>Meet PERCI</h2>
            <p style={{color:'#374151',fontSize:'1.125rem',lineHeight:1.7,marginBottom:'1rem'}}>PERCI is HERRRby's sidekick — the buddy to turn to when it comes to learning, because learning can be tricky sometimes.</p>
            <p style={{color:'#6b7280',lineHeight:1.7,marginBottom:'2rem'}}>These five learner dispositions work alongside our HERRRby values to help every Gardenvale student grow into a confident, curious, and resilient learner.</p>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
              {d.map((x,i) => <div key={i} style={{backgroundColor:'white',borderRadius:'8px',padding:'1rem',border:'1px solid #e5e7eb'}}><div style={{fontSize:'1.5rem',marginBottom:'0.5rem'}}>{x.icon}</div><h3 style={{color:'#003D5C',fontFamily:'Cormorant Garamond, serif',fontSize:'1rem',marginBottom:'0.25rem'}}>{x.title}</h3><p style={{color:'#6b7280',fontSize:'0.75rem',lineHeight:1.6}}>{x.description}</p></div>)}
            </div>
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#f0fbff',borderRadius:'16px',padding:'2rem',minHeight:'24rem'}}>
            <img src="/images/PERCI.jpg" alt="PERCI the dog mascot" style={{maxHeight:'380px',width:'auto',objectFit:'contain'}} />
          </div>
        </div>
      </div>
    </section>
  );
}

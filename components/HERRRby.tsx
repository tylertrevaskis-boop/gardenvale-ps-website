export default function HERRRby() {
  const values = [{title:'Honesty',description:'We speak and act with integrity and truthfulness'},{title:'Empathy',description:'We understand and care for the feelings of others'},{title:'Resilience',description:'We persist through challenges and grow stronger'},{title:'Respect',description:'We value ourselves, others, and our environment'},{title:'Responsibility',description:'We take ownership of our actions and choices'},{title:'Be Yourself',description:'We embrace our unique strengths and identity'}];
  return (
    <section style={{backgroundColor:'#003D5C',padding:'5rem 0'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 1.5rem'}}>
        <div style={{textAlign:'center',marginBottom:'3rem'}}>
          <p style={{color:'#5DCCFF',fontSize:'0.875rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'0.5rem'}}>Our Foundation</p>
          <h2 style={{color:'white',fontFamily:'Cormorant Garamond, serif',marginBottom:'1rem'}}>HERRRby</h2>
          <p style={{color:'#d1d5db',maxWidth:'40rem',margin:'0 auto',fontSize:'1.125rem'}}>Our school values define who we are as a community and guide everything we do.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.5rem'}}>
          {values.map((v,i) => <div key={i} style={{backgroundColor:'rgba(255,255,255,0.1)',borderRadius:'8px',padding:'1.5rem',border:'1px solid rgba(93,204,255,0.3)'}}><h3 style={{color:'white',fontFamily:'Cormorant Garamond, serif',fontSize:'1.5rem',marginBottom:'0.5rem'}}>{v.title}</h3><p style={{color:'#e5e7eb',fontSize:'0.875rem',lineHeight:1.6}}>{v.description}</p></div>)}
        </div>
        <div style={{marginTop:'3rem',textAlign:'center'}}><p style={{color:'#d1d5db',fontSize:'0.875rem'}}>🌟 mascot HERRRby, our beloved orange starfish, reminds us daily of these values</p></div>
      </div>
    </section>
  );
}

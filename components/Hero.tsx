export default function Hero() {
  return (
    <section style={{paddingTop:'5rem',display:'grid',gridTemplateColumns:'1fr 1fr'}}>
      <div style={{backgroundColor:'#003D5C',color:'white',padding:'6rem 3rem',display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <h1 style={{color:'white',marginBottom:'1.5rem',fontFamily:'Cormorant Garamond, serif',fontWeight:700}}>Challenge. Engage. Inspire.</h1>
        <p style={{color:'#5DCCFF',marginBottom:'0.75rem',fontSize:'1.125rem',fontFamily:'Cormorant Garamond, serif'}}>Gardenvale Primary School</p>
        <p style={{color:'#f3f4f6',marginBottom:'2rem',lineHeight:1.7,maxWidth:'32rem'}}>Two campuses of excellence, where every learner is challenged to grow, engaged in meaningful learning, and inspired to become their best self.</p>
        <div style={{display:'flex',gap:'1rem'}}>
          <button style={{backgroundColor:'#FF6B35',color:'white',padding:'0.75rem 2rem',borderRadius:'4px',border:'none',fontWeight:600,cursor:'pointer'}}>Enrol now</button>
          <button style={{backgroundColor:'transparent',color:'white',padding:'0.75rem 2rem',borderRadius:'4px',border:'2px solid white',fontWeight:600,cursor:'pointer'}}>Learn more</button>
        </div>
      </div>
      <div style={{backgroundColor:'#5DCCFF',minHeight:'500px',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'1.5rem',fontFamily:'Cormorant Garamond, serif'}}>
        <div style={{textAlign:'center'}}><p style={{fontSize:'3rem',marginBottom:'0.5rem'}}>📷</p><p>Hero image placeholder</p></div>
      </div>
    </section>
  );
}

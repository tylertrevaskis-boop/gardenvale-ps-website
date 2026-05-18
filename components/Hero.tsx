export default function Hero() {
  return (
    <section style={{paddingTop:'5rem',display:'grid',gridTemplateColumns:'1fr 1fr'}}>
      <div style={{backgroundColor:'#003D5C',color:'white',padding:'6rem 3rem',display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <p style={{color:'#5DCCFF',marginBottom:'1rem',fontSize:'0.875rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em'}}>Gardenvale Primary School</p>
        <h1 style={{color:'white',marginBottom:'1.5rem',fontFamily:'Cormorant Garamond, serif',fontWeight:700}}>At Gardenvale, we're helping grow genuine, inclusive and resilient learners.</h1>
        <p style={{color:'#f3f4f6',marginBottom:'2rem',lineHeight:1.7,maxWidth:'32rem'}}>Two campuses of excellence in East Brighton, where every student is challenged to grow, engaged in meaningful learning, and inspired to become their best self.</p>
        <div style={{display:'flex',gap:'1rem'}}>
          <button style={{backgroundColor:'#FF6B35',color:'white',padding:'0.75rem 2rem',borderRadius:'4px',border:'none',fontWeight:600,cursor:'pointer'}}>Enrol now</button>
          <button style={{backgroundColor:'transparent',color:'white',padding:'0.75rem 2rem',borderRadius:'4px',border:'2px solid white',fontWeight:600,cursor:'pointer'}}>Explore our approach</button>
        </div>
      </div>
      <div style={{backgroundImage:'url(/images/hero.jpg)',backgroundSize:'cover',backgroundPosition:'center',minHeight:'500px'}}>
      </div>
    </section>
  );
}

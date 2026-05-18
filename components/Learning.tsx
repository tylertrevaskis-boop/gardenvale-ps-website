export default function Learning() {
  return (
    <section style={{padding:'5rem 0'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 1.5rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'3rem',alignItems:'center'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#f0fbff',borderRadius:'16px',padding:'2rem',minHeight:'24rem'}}>
            <img src="/images/PERCI.jpg" alt="PERCI the dog mascot" style={{maxHeight:'380px',width:'auto',objectFit:'contain'}} />
          </div>
          <div>
            <p style={{color:'#FF6B35',fontSize:'0.875rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'0.5rem'}}>Our Approach</p>
            <h2 style={{color:'#003D5C',fontFamily:'Cormorant Garamond, serif',marginBottom:'1.5rem'}}>Learning at Gardenvale</h2>
            <p style={{color:'#374151',fontSize:'1.125rem',lineHeight:1.7,marginBottom:'1rem'}}>
              At Gardenvale, we believe every student is capable of growth and achievement. Our teaching is grounded in evidence — we teach concepts first, then skills, building knowledge step by step so every learner can succeed.
            </p>
            <p style={{color:'#374151',lineHeight:1.7,marginBottom:'1.5rem'}}>
              Through our GPS Instructional Model, teachers explicitly model new learning, guide students through practice, and then support independent application — always checking for understanding along the way.
            </p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'0.75rem',marginBottom:'1.5rem'}}>
              <div style={{textAlign:'center',backgroundColor:'#003D5C',color:'white',borderRadius:'50%',width:'56px',height:'56px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.875rem',fontWeight:700,margin:'0 auto 0.5rem'}}>I Do</div>
              <div style={{textAlign:'center',backgroundColor:'#5DCCFF',color:'white',borderRadius:'50%',width:'56px',height:'56px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.875rem',fontWeight:700,margin:'0 auto 0.5rem'}}>We Do</div>
              <div style={{textAlign:'center',backgroundColor:'#FF6B35',color:'white',borderRadius:'50%',width:'56px',height:'56px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.875rem',fontWeight:700,margin:'0 auto 0.5rem'}}>You Do</div>
            </div>
            <a href="#" style={{color:'#FF6B35',fontWeight:600,textDecoration:'none'}}>Explore our learning →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

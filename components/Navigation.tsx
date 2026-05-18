export default function Navigation() {
  return (
    <nav style={{position:'fixed',width:'100%',top:0,backgroundColor:'white',borderBottom:'1px solid #e5e7eb',zIndex:50,boxShadow:'0 1px 3px rgba(0,0,0,0.1)'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0.5rem 1.5rem',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center'}}>
          <img src="/images/GPS_Shield-Vertical-Navy.png" alt="Gardenvale Primary School" style={{height:'56px',width:'auto'}} />
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

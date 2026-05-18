export default function StatsStrip() {
  const stats = [{number:'450+',label:'Students'},{number:'Prep–6',label:'Year levels'},{number:'2',label:'Campuses'},{number:'1921',label:'Founded'}];
  return (
    <section style={{borderTop:'4px solid #FF6B35',backgroundColor:'white'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'3rem 1.5rem',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'2rem'}}>
        {stats.map((s,i) => <div key={i} style={{textAlign:'center'}}><div style={{fontSize:'2.5rem',fontFamily:'Cormorant Garamond, serif',fontWeight:'bold',color:'#003D5C',marginBottom:'0.5rem'}}>{s.number}</div><p style={{color:'#6b7280'}}>{s.label}</p></div>)}
      </div>
    </section>
  );
}

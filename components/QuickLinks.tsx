export default function QuickLinks() {
  const links = [{title:'Calendar',icon:'📅'},{title:'Newsletter',icon:'📬'},{title:'School Council',icon:'👥'},{title:'Wellbeing',icon:'💚'}];
  return (
    <section style={{backgroundColor:'white',padding:'3rem 0',borderBottom:'1px solid #e5e7eb'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 1.5rem',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1rem'}}>
        {links.map((l,i) => <a key={i} href="#" style={{backgroundColor:'#f9fafb',padding:'1.5rem',borderRadius:'8px',textAlign:'center',textDecoration:'none',display:'block'}}><div style={{fontSize:'2.5rem',marginBottom:'0.75rem'}}>{l.icon}</div><p style={{fontWeight:600,color:'#1f2937',fontSize:'0.875rem'}}>{l.title}</p></a>)}
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer style={{backgroundColor:'#003D5C',color:'white',padding:'4rem 0'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 1.5rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'2rem',marginBottom:'3rem'}}>
          <div><p style={{fontWeight:600,fontSize:'1.125rem',marginBottom:'1rem'}}>Contact Us</p><div style={{color:'#d1d5db',fontSize:'0.875rem',lineHeight:1.8}}><p><strong>Senior Campus</strong><br/>Landcox St, East Brighton VIC 3187<br/>(03) 9596 2871</p><br/><p><strong>Junior Campus</strong><br/>Landcox St, East Brighton VIC 3187<br/>(03) 9596 8550</p><br/><p><strong>Email</strong><br/>gardenvale.ps@education.vic.gov.au</p></div></div>
          <div><p style={{fontWeight:600,fontSize:'1.125rem',marginBottom:'1rem'}}>Quick Links</p><ul style={{listStyle:'none',padding:0,color:'#d1d5db',fontSize:'0.875rem',lineHeight:2}}><li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>About</a></li><li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Learning</a></li><li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Wellbeing</a></li><li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>News</a></li><li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Enrolments</a></li></ul></div>
          <div><p style={{fontWeight:600,fontSize:'1.125rem',marginBottom:'1rem'}}>For Families</p><ul style={{listStyle:'none',padding:0,color:'#d1d5db',fontSize:'0.875rem',lineHeight:2}}><li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Calendar</a></li><li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Newsletter</a></li><li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>School Council</a></li><li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Policies</a></li></ul></div>
          <div><p style={{fontWeight:600,fontSize:'1.125rem',marginBottom:'1rem'}}>Resources</p><ul style={{listStyle:'none',padding:0,color:'#d1d5db',fontSize:'0.875rem',lineHeight:2}}><li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Annual Reports</a></li><li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Child Safe Standards</a></li><li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Code of Conduct</a></li><li><a href="#" style={{color:'#d1d5db',textDecoration:'none'}}>Uniform Info</a></li></ul></div>
        </div>
        <div style={{borderTop:'1px solid #374151',paddingTop:'2rem',textAlign:'center',color:'#9ca3af',fontSize:'0.875rem'}}><p style={{marginBottom:'0.75rem'}}>We acknowledge the Bunurong people of the Kulin Nation, the Traditional Owners of the land where our school is located.</p><p>© 2024 Gardenvale Primary School. All rights reserved.</p></div>
      </div>
    </footer>
  );
}

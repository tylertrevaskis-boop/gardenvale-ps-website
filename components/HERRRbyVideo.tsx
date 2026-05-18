export default function HERRRbyVideo() {
  return (
    <section style={{backgroundColor:'#003D5C',padding:'5rem 0'}}>
      <div style={{maxWidth:'900px',margin:'0 auto',padding:'0 1.5rem',textAlign:'center'}}>
        <p style={{color:'#5DCCFF',fontSize:'0.875rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'0.5rem'}}>Our Community</p>
        <h2 style={{color:'white',fontFamily:'Cormorant Garamond, serif',marginBottom:'1rem'}}>Celebrating HERRRby</h2>
        <p style={{color:'#d1d5db',fontSize:'1.125rem',lineHeight:1.7,marginBottom:'2.5rem',maxWidth:'600px',margin:'0 auto 2.5rem'}}>
          Each year our community comes together to celebrate the values that make Gardenvale special. This is what HERRRby looks like in action.
        </p>
        <div style={{position:'relative',paddingBottom:'56.25%',height:0,borderRadius:'12px',overflow:'hidden'}}>
          <iframe
            src="https://www.youtube.com/embed/rrRC34X7v6c"
            title="HERRRby Celebration at Gardenvale Primary School"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',border:'none'}}
          />
        </div>
      </div>
    </section>
  );
}

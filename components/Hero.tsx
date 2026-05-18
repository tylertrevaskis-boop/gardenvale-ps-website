'use client';
import { useState, useEffect, useRef } from 'react';

const media = [
  { type: 'video', src: '/images/IMG_7234-converted.mp4' },
  { type: 'video', src: '/images/IMG_8070-converted.mp4' },
  { type: 'video', src: '/images/IMG_8742-converted.mp4' },
  { type: 'image', src: '/images/hero.jpg' },
  { type: 'image', src: '/images/IMG_2220.JPG' },
  { type: 'image', src: '/images/IMG_2222.JPG' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const goNext = () => {
    setFading(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % media.length);
      setFading(false);
    }, 800);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (media[current].type === 'image') {
      timer = setTimeout(goNext, 6000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [current]);

  useEffect(() => {
    if (media[current].type === 'video' && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [current]);

  const item = media[current];

  return (
    <section style={{paddingTop:'5rem',position:'relative',height:'calc(100vh - 5rem)',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,opacity:fading?0:1,transition:'opacity 0.8s ease-in-out'}}>
        {item.type === 'video' ? (
          <video
            ref={videoRef}
            onEnded={goNext}
            muted
            playsInline
            style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}
          >
            <source src={item.src} type="video/mp4" />
          </video>
        ) : (
          <div style={{position:'absolute',inset:0,backgroundImage:`url(${item.src})`,backgroundSize:'cover',backgroundPosition:'center'}} />
        )}
      </div>
      <div style={{position:'absolute',inset:0,backgroundColor:'rgba(0,61,92,0.55)'}} />
      <div style={{position:'relative',zIndex:1,height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',padding:'0 4rem',maxWidth:'56rem'}}>
        <p style={{color:'#5DCCFF',marginBottom:'1rem',fontSize:'0.875rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em'}}>Gardenvale Primary School</p>
        <h1 style={{color:'white',marginBottom:'2rem',fontFamily:'Cormorant Garamond, serif',fontWeight:700,fontSize:'3.5rem',lineHeight:1.15}}>At Gardenvale, we're growing genuine, inclusive and resilient learners.</h1>
        <div style={{display:'flex',gap:'1rem'}}>
          <button style={{backgroundColor:'#FF6B35',color:'white',padding:'0.75rem 2rem',borderRadius:'4px',border:'none',fontWeight:600,cursor:'pointer',fontSize:'1rem'}}>Enrol now</button>
          <button style={{backgroundColor:'transparent',color:'white',padding:'0.75rem 2rem',borderRadius:'4px',border:'2px solid white',fontWeight:600,cursor:'pointer',fontSize:'1rem'}}>Explore our approach</button>
        </div>
      </div>
      <div style={{position:'absolute',bottom:'1.5rem',left:'50%',transform:'translateX(-50%)',display:'flex',gap:'0.5rem',zIndex:1}}>
        {media.map((_,i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{width:'8px',height:'8px',borderRadius:'50%',border:'none',cursor:'pointer',backgroundColor:i===current?'white':'rgba(255,255,255,0.4)',padding:0}} />
        ))}
      </div>
    </section>
  );
}

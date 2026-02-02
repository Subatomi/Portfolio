import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const Spline = dynamic(
  () => import('@splinetool/react-spline').then(m => m.default || m),
  { ssr: false }
);

  function handleButtonClick(e) {
      console.log('Button clicked! Triggering React logic...');
    }
  

export default function Home() {


return (
  <main style={{ minHeight: '100vh', margin: 0, display: 'grid', placeItems: 'center' }}>
    <div style={{ width: '100%', height: '100vh' }}>
      
      <Spline
        scene="/assets/scene-clean.splinecode"
        onSplineMouseDown={handleButtonClick}
      />
    </div>
  </main>
);
}



import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import StatsStrip from '@/components/StatsStrip';
import HERRRby from '@/components/HERRRby';
import PERCI from '@/components/PERCI';
import QuickLinks from '@/components/QuickLinks';
import NewsCards from '@/components/NewsCards';
import Learning from '@/components/Learning';
import Wellbeing from '@/components/Wellbeing';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main>
      <Navigation /><Hero /><StatsStrip /><HERRRby /><PERCI /><QuickLinks /><NewsCards /><Learning /><Wellbeing /><Footer />
    </main>
  );
}

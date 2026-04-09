import { PracticeHeader } from '../components/PracticeHeader';
import { Sprechzeiten } from '../components/Sprechzeiten';
import { Kontakt } from '../components/Kontakt';
import { LocationMap } from '../components/LocationMap';
import { Footer } from '../components/Footer';
import { HairlineDivider } from '../components/HairlineDivider';

export function Home() {
  return (
    <main className="min-h-screen bg-paper">
      <PracticeHeader />
      <HairlineDivider />
      <Sprechzeiten />
      <HairlineDivider />
      <Kontakt />
      <HairlineDivider />
      <LocationMap />
      <HairlineDivider />
      <Footer />
    </main>
  );
}

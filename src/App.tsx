import FreshQuotes from '@/components/FreshQuotes';
import Hero from '@/components/Hero';
import MoodSection from '@/components/MoodSection';
import Navbar from '@/components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MoodSection />
        <FreshQuotes />
      </main>
    </>
  );
}

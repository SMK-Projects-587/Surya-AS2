import Hero from '@/components/Hero';
import Mood from '@/components/Mood';
import Navbar from '@/components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mood />
      </main>
    </>
  );
}

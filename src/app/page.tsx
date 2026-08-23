import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import Fleet from "@/components/Fleet";
import Routes from "@/components/Routes";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-obsidian">
      <Navbar />
      <Hero />
      <Fleet />
      <Routes />
      <About />
      <BookingForm />
      <Footer />
    </main>
  );
}

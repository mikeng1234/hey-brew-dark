import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Story from "@/components/Story";
import Order from "@/components/Order";
import Footer from "@/components/Footer";
import MessengerBubble from "@/components/MessengerBubble";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <Story />
        <Order />
      </main>
      <Footer />
      <MessengerBubble />
    </>
  );
}

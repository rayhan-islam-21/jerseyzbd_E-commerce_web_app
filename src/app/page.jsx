import Container from "@/Components/Container";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import TopTeams from "@/Components/TopTeams";

export default function Home() {
  return (
    <Container>
      <Header/>
      <Hero/>
      <TopTeams/>
      <Footer/>
    </Container>
  );
}

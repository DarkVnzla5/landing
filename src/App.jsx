import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Solver from "./components/Solver";
import Mobile from "./components/Mobile";

function App() {
  return (
    <body className="bg-white">
      <Header />
      <Hero />
      <main className="flex">
        <Solver />
        <Mobile />
      </main>
      <Footer />
    </body>
  );
}

export default App;

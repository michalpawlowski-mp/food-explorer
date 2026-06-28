import { Category } from "./components/Category";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Search } from "./components/Search";

export function App() {
  return (
    <>
      <Header />
      <Search />
      <Category />
      <Footer />
    </>
  );
}

export default App;

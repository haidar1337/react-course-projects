import Header from "./components/Header/Header.jsx";
import Concepts from "./components/Concepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Concepts />
        <Examples />
      </main>
    </>
  );
}

export default App;

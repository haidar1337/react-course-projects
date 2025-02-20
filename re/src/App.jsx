import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import Concept from './components/Concept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
        <h2>Time to get started!</h2>
        <ul>
          <Concept title="Components" description="The core UI building block - compose the user interface by combining multiple components." image={componentsImg}/>
          <Concept {...CORE_CONCEPTS[1]}/>
          <Concept {...CORE_CONCEPTS[2]}/>
          <Concept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;

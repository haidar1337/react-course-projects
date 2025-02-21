import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import Concept from './components/Concept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
      setSelectedTopic(selectedButton);
  }

  let content = <p>Please select a topic</p>
  if (selectedTopic) {
    content = 
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
  }

  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
        <h2>Time to get started!</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => <Concept key={conceptItem.title} {...conceptItem}></Concept>)}
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
          </menu>
          {content}
        </section>
      </main>
    </div>
  );
}

export default App;

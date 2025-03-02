import { CORE_CONCEPTS } from "../data";
import Section from "./Section.jsx";
import Concept from "./Concept";

export default function Concepts() {
  return (
    <Section title="Time to get started!" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <Concept key={conceptItem.title} {...conceptItem}></Concept>
        ))}
      </ul>
    </Section>
  );
}

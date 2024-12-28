import CoreConcept from './CoreConcepts.jsx';
import * as data from '../data.js';

export default function CoreConcepts(props) {
    return (
            <>
          <h2>Core Concepts</h2>
        <section id='core-concepts'>

          <ul>
            {data.CORE_CONCEPTS.map((item)=>(
                 <CoreConcept key = {item.title}  {...item} />

            ) )}

          </ul>
        </section>
        </>
    );
}
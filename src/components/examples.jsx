import * as data from '../data.js';
import TabButton from './TabButton.jsx';
import { useState } from 'react';
export default function Examples() {


        const [selectedTopic, setSelectedTopic] = useState();

        function handleClick(selectedButton) {
            setSelectedTopic(selectedButton);

         
        }

    return (
        <section id='examples'>
            <h2>Examples</h2>
            <menu>

                <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')} id='Component '> Components </TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')} id='JSX'>JSX           </TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')} id='props'>Props         </TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')} id='State'>State         </TabButton>

            </menu>
            <div id='tab-content'>
                {!selectedTopic ? <p>please select  topic</p> :
                    (<div>
                        <h3> {data.EXAMPLES[selectedTopic].title} </h3>
                        <p> {data.EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>
                                {data.EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
                    </div>
                    )}

            </div>
        </section>
    );
}
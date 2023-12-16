import { useState } from "react";
import { RouteExamples } from "../types";
import { ExampleComponent } from "../types/models";

type Props = {
    examples: ExampleComponent[]
}

export const UseStateRoute: React.FC<Props> = ({ examples }) => {

    const [currentExample, setCurrentExample] = useState<RouteExamples>(examples[0].value);

    return (
        <div>
            {
                examples.map(
                    (example) => <button
                        key={example.value}
                        onClick={() => setCurrentExample(example.value)}
                        style={{ /* Add button styles here */ }}
                    >
                        {example.label}
                    </button>
                )
            }

            {
                examples.map((example, index) => currentExample === example.value && <example.component key={index} />)
            }
        </div>
    );
};

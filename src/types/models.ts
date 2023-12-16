import { RouteExamples } from "./enums"

export type ExampleComponent = {
    label: string;
    value: RouteExamples;
    component: React.ComponentType;
}

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import { UseStateExample } from './hooks/use-state/useState.example';
import { UseCallbackExample } from './hooks/use-callback/UseCallback.example';
import { SecondUseRefExample } from './hooks/use-Ref/secondUseRef.example';
import { UseStateRoute } from './components/useStateRoute.component';
import { RouteExamples } from './types';
import { FirstUseEffectExample } from './hooks/use-effect/firstUseEffect.example';
import { SecondUseEffectExample } from './hooks/use-effect/secondUseEffect.example';
import { FirstUseRefExample } from './hooks/use-Ref/firstUseRef.example';

const App: React.FC = () => {

    return <Router>
        <nav className="nav-menu">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/use-state" className="nav-link">useState</Link>
                </li>
                <li className="nav-item">
                    <Link to="/use-effect" className="nav-link">useEffect</Link>
                </li>
                <li className="nav-item">
                    <Link to="/use-ref" className="nav-link">useRef</Link>
                </li>
                <li className="nav-item">
                    <Link to="/use-callback" className="nav-link">useCallback</Link>
                </li>
            </ul>
        </nav>
        <div className="App">

            <main>

                <Routes>
                    <Route path="/use-effect" element={
                        <UseStateRoute examples={
                            [
                                { value: RouteExamples.FIRST_USE_EFFECT_EXAMPLE, component: FirstUseEffectExample, label: 'Example 1' },
                                { value: RouteExamples.SECOND_USE_EFFECT_EXAMPLE, component: SecondUseEffectExample, label: 'Example 2' }
                            ]
                        }
                        />
                    } />
                    <Route path="/use-callback" element={<UseCallbackExample />} />
                    <Route path="/use-state" element={<UseStateExample />} />
                    <Route path="/use-ref" element={
                        <UseStateRoute examples={
                            [
                                { value: RouteExamples.FIRST_USE_REF_EXAMPLE, component: FirstUseRefExample, label: 'Example 1' },
                                { value: RouteExamples.SECOND_USE_REF_EXAMPLE, component: SecondUseRefExample, label: 'Example 2' }
                            ]
                        }
                        />
                    } />
                </Routes>
            </main>
        </div>
    </Router>;
}

export default App;

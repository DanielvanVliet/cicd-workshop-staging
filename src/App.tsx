import reactLogo from './assets/react.svg'
import viteLogo from './../public/vite.svg'
import './App.css'
import Counter from "./Counter";

import has from 'lodash/has';
import _ from 'lodash';

function App() {
    var object = { 'a': { 'b': { 'c': 3 } } };
    _.chunk(['a', 'b', 'c', 'd'], 2);
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1 id={"page-header"}>Intentional Wrong Title</h1>
            <div className="card">
                <Counter initialCount={0} title={"Counter"}/>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App

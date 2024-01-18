/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Components, useOpenComponent } from './useOpenComponent';
import { UserProps } from './components/User';

function App() {
  const [count, setCount] = useState(0);
  const openComponent = useOpenComponent();

  const onClick = () => {
    setCount(count => count + 1);

    const props: UserProps = {
      type: "update",
      existingUser: {name: "foo", email: null, digest: ""},
      groupID: "123",
      submit: (_payload) => Promise.resolve()
    }

    openComponent(Components.USER, {
      type: "update",
      existingUser: {name: "foo", email: null, digest: ""},
      groupID: "123",
      submit: payload => Promise.resolve()
    })
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onClick}>
          count is {count}
        </button>
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

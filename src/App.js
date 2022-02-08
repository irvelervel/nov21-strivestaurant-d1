import logo from './logo.svg'
import './App.css'
import { Button } from 'react-bootstrap'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <button className='btn btn-danger'>DANGER</button> */}
        {/* the above way still works */}
        <Button variant='danger'>DANGER</Button>
        {/* but this is more preferred, this way is more "speaking" */}
        <img src={logo} className='App-logo' alt='logo' />
        <p className='text-danger'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

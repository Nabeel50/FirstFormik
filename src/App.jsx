import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SimpleForm from './Component/Formik Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SimpleForm/>
    </div>
  )
}

export default App

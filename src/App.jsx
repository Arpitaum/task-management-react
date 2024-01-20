import './App.css'
import Header from './components/Header'
import TaskContainer from './components/TaskContainer'
import { GlobalContextProvider } from './context/context'

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <TaskContainer />
    </GlobalContextProvider>
  )
}

export default App

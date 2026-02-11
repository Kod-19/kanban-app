import './index.css'
import Header from './components/Header'
import TaskCard from './components/TaskCard'

function App() {
  return (
    <div className='w-[90%] mx-auto text-black'>
      <Header />
      <TaskCard />
    </div>
  )
}

export default App

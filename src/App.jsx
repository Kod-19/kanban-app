import './index.css'
import Header from './components/Header'
import TaskCard from './components/TaskCard'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='pt-8 pl-10 pr-10'>
        <Header />
        <TaskCard />
      </div>
      <Footer />
    </>
  )
}

export default App

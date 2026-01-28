import { Footer, Navbar } from './components'
import Home from './pages/Home'


const App = () => {
  return (
    <div className='font-Inter text-gray-200 bg-black'>
      <Navbar />
      <main className='min-h-screen'>
        <Home/>
      </main>
      <Footer />
    </div>
  )
}

export default App
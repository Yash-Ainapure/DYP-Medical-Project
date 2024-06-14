import './App.css'
import Footer from './components/Footer'
import Login from './components/Login'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Login />
      </main>
      <Footer />
    </div>
  )
}

export default App

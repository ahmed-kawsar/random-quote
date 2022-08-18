import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { BsPersonFill } from 'react-icons/bs'

const API_URL = 'https://api.quotable.io/random'

function App() {
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(true)

  const generateQuote = async () => {
    try {
      const res = await axios.get(API_URL)
      setQuote(res.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error.message)
    }
  }

  useEffect(() => {
    generateQuote()
  }, [])

  return (
    <div className='App'>
      {loading && <h2>Loading...</h2>}
      {!loading && (
        <main>
          <h2>Random Quote Generator</h2>
          <div className='underline'></div>
          <div>
            <h3>
              <FaQuoteLeft className='quote-icon' />
              {quote.content}
            </h3>
            <div className='flex'>
              <p className='author'>
                {' '}
                <BsPersonFill className='person-icon' /> {quote.author}
              </p>
              <button className='btn' onClick={generateQuote}>
                generate new
              </button>
            </div>
          </div>
        </main>
      )}
    </div>
  )
}

export default App

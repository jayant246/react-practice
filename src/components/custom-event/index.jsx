import { useEffect } from 'react'
import { firstCustomEvent, firstEvent } from './event'

function App() {
  const handleFirstEvent = () => {
    document.dispatchEvent(firstEvent);
  }

  const handleCustomEvent = () => {
    document.dispatchEvent(firstCustomEvent);
  }

  useEffect(() => {
    document.addEventListener('firstEvent', () => {
      alert('first event has been triggered');
    })

    document.addEventListener('firstCustomEvent', (e) => {
      alert('custom event has been triggered', e.detail, e.detail.name);
    })

    return () => {
      document.removeEventListener('firstCustomEvent')
    }

  },[])

  return (
    <div onClick={() => {
      console.log('parent event fired')
    }}>
    <h1>first file</h1>
    <button onClick={handleFirstEvent}>Event</button>
    <button onClick={handleCustomEvent}>CustomEvent</button>
    </div>
  )
}

export default App

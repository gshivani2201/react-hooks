import React, {useState, useEffect} from 'react'

function EffectCounterOne() {

    const [ count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

  return <button onClick={() => setCount(count + 1)}>Click {count} times</button>
}

export default EffectCounterOne
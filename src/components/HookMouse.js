import React, { useState, useEffect } from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

  return (
    <h2>Coordinates  X - {x} Y - {y} </h2>
  )
}

export default HookMouse
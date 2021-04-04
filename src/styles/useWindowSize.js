import { useState, useEffect } from 'react'

export const useWindowSize = () => {
    const [ size, setSize ] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
    }, [])
  
    return size
}

// function useWindowSize() {
//     const [ size, setSize ] = useState([window.innerHeight, window.innerWidth])
  
//     return size
//   }
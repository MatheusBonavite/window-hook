import React, { useState, useEffect } from "react"

const useGetUserInnerScreen = () => {
    const [windowSize, setWindowSize] = useState({
        width: window?.innerWidth,
        height: window?.innerHeight,
    })
    
    useEffect(() => {
        const handleWindowChange = () => {
            setWindowSize({
                width:
                    window?.innerWidth,
                height:
                    window?.innerHeight,
            })
        }

        window.addEventListener("resize", handleWindowChange)

        return () => {
            window.removeEventListener('resize', handleWindowChange)
        }
    }, [])
    
    return [windowSize.width, windowSize.height]
}

export default useGetUserInnerScreen;
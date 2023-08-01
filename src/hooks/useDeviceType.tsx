import  { useEffect, useState } from 'react'

function useDeviceType() {
    const [deviceType, setDeviceType] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1279px)')
        const handlesize=(event:MediaQueryListEvent)=>{
            setDeviceType(event.matches)
        }
        setDeviceType(mediaQuery.matches)
        mediaQuery.addEventListener('change', handlesize)
        return () => {
            mediaQuery.removeEventListener('change', handlesize)
        }

    },[])
  return deviceType
}

export default useDeviceType
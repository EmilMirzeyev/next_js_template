import React, { useState, useEffect } from 'react'

const ComponentWillMount = (callback) => {
    const [mounted, setMounted] = useState(false)

    if (!mounted) callback()

    useEffect(() => {
        setMounted(true)
    }, [])
}

export default ComponentWillMount
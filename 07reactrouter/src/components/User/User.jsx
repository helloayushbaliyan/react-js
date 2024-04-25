import React from 'react'
import { useParams } from 'react-router-dom'
export function User() {

    const { userid } = useParams()
    return (
        <>
            <div className='bg-gray-600 text-white text-4xl p-5'>User : {userid} </div>
        </>
    )
}


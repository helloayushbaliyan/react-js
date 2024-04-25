import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useParams } from 'react-router-dom'
export function Github(props) {
    const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/helloayushbaliyan')
    //         .then(Response => Response.json())
    //         .then(data => {
    //             console.log(data);
    //             setdata(data)
    //         })
    // }, [])

    return (
        <>
            <div className='bg-gray-600 text-3xl font-semibold p-5'>Github followers  {data.followers}
                <img className=' object-cover w-96 mt-5 ' src={data.avatar_url} alt="" />
            </div>
        </>
    )
}

export const githubinfo = async () => {

    let response = await fetch(`https://api.github.com/users/helloayushbaliyan`)
    
    return response.json()

}
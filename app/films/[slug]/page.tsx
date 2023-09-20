import React from 'react'
import axios from 'axios'
import Link from 'next/link'
const getFilm = async ({ slug }: { slug: string }) => {
    const res = await axios.get(`http://192.168.1.5:1337/api/films/${slug}`)
    return res.data
}

const Film = async ({ params }: { params: { slug: string } }) => {
    const film = await getFilm({ slug: params.slug })

    return (
        <>
            <h1 className="text-5xl text-center font-extrabold mb-6">{film.data.attributes.title}</h1>
        </>
    )
}

export default Film
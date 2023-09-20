import Pagination from '@/components/Pagination'
import axios from 'axios'
import Link from 'next/link'

const getFilms = async ({ page = 1 }: { page?: number }) => {
    const res = await axios.get(`http://192.168.1.5:1337/api/films?pagination[page]=${page}&pagination[pageSize]=5`)
    return res.data
}

const Films = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const page = (searchParams.page != undefined) ? searchParams.page : 1
    const films = await getFilms({ page: Number(page) })

    return (
        <>
            <h1 className="text-5xl text-center font-extrabold mb-6">Films</h1>
            <div className='text-2xl font-bold'>
                {films.data.map((film: any) => (
                    <div key={film.id} className='mb-3'>
                        <Link href={`/films/${film.attributes.slug}`}>{film.attributes.title}</Link>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center mt-12'>
                <Pagination films={films} />
            </div>
        </>
    )
}

export default Films
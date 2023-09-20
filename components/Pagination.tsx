'use client'
import React from 'react'
import Link from 'next/link'

const Pagination = ({ films }: any) => {
    return (
        <>
            <div className="join">
                {films.meta.pagination.page != 1 && (
                    <Link href={`/films?page=${films.meta.pagination.page - 1}`}>
                        <button className="join-item btn">«</button>
                    </Link>

                )}
                <button className="join-item btn">{films.meta.pagination.page}</button>
                {films.meta.pagination.page != films.meta.pagination.pageCount && (
                    <Link href={`/films?page=${films.meta.pagination.page + 1}`}>
                        <button className="join-item btn">»</button>
                    </Link>
                )}
            </div>
        </>
    )
}

export default Pagination
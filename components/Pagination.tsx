import React, { useEffect, useState } from 'react'

interface IPagination {
    pageSize: number // bir sayfada kaç adet gözükecek
    totalSize: number // toplam eleman sayısı
    currentPage: number; // aktif sayfa
}
export const Pagination: React.FC<IPagination> = ({ pageSize, totalSize, currentPage }) => {
    const [totalPageCount, setTotalPageCount] = useState<number>(0);
    const [currentPageState, setCurrentPage] = useState<number>(1);

    console.log(totalSize);
    

    useEffect(() => {
        const pagesCount = Math.ceil(totalSize / pageSize)
        setTotalPageCount(pagesCount)
        setCurrentPage(currentPage)
    }, [])

    return (
        <nav aria-label="Page navigation example">
            <ul className="list-style-none flex">
                {Array.from({ length: 5 }).map((_, page) => {
                    if (currentPageState === totalPageCount) {
                        return (
                            <li>
                                <a 
                                    className="relative block rounded bg-gray-200 px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" 
                                    onClick={() => {setCurrentPage(page)}}
                                >
                                    {page + 1}
                                </a>
                            </li>
                        )
                    } else {
                        return (
                            <li>
                                <a 
                                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                                    onClick={() => {setCurrentPage(page)}}
                                >
                                    {page + 1}
                                </a>
                            </li>
                        )
                    }
                })}
            </ul>
        </nav>
    )
}

import { useEffect, useState } from 'react'
import { pagination } from '../utils/interfaces/pagination'
import styles from '../assets/css/pagination.module.css'

const LEFT_PAGE :string = '<';
const RIGHT_PAGE :string = '>';

const ranges = (from:number, to:number, step=1) => {
    let i :number = from;
    const range: number[] = []
    do {
    range.push(i)
    i += step
    } while (i<= to);
    return range
}

const Paginations = (props:pagination) => {
    const [pageNeighbours, setPageNeighbours] = useState(2)
    const totalPages:number = props.totalPage
    const currentPage:number = props.page

    useEffect(() => {
        if(currentPage !== 1 && currentPage !== totalPages){
            setPageNeighbours(1)
        }else{
            setPageNeighbours(2)
        }
    }, [currentPage])

   const pageNumber = () => {
        
        const startPage = Math.max(1, currentPage - pageNeighbours);
        const endPage = Math.min(totalPages, currentPage + pageNeighbours);
        let pages = ranges(startPage, endPage);

        return [LEFT_PAGE, ...pages, RIGHT_PAGE]
   }

   const pages = pageNumber()

   const selectPage = (page:number|string) => { 
        props.selectPage(page)
   }

   const prevPage = () => {
    props.prevPage()
   }

   const nextPage = () => {
    props.nextPage()
   }
   
  return (
    <div className={styles['pagination']}>
        <div className={styles['pagination-body']}>
        <p onClick={()=> {props.firstPage()}}>First</p>
        {pages.map((page, idx) => {
            if(page === LEFT_PAGE) return(
                <p onClick={()=>{prevPage()}} key={idx}>{page}</p>
            )
            if(page === RIGHT_PAGE) return(
                <p onClick={()=>{nextPage()}} key={idx}>{page}</p>
            )
            return (
                <p key={idx} onClick={()=> {selectPage(page)}} className={currentPage === page ? styles['active'] : ''}>{page}</p>
            )
        })}
        <p onClick={()=> {props.lastPage()}}>Last</p>
        </div>
    </div>
  )
}

export default Paginations
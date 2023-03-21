export interface pagination {
    page:number,
    totalPage:number,
    selectPage:(params:number|string)=> void,
    prevPage:()=>void,
    nextPage:() => void,
    firstPage:()=> void,
    lastPage:()=> void,
}
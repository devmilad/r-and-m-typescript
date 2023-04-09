import ReactPaginate from 'react-paginate'
import './style.css'
import { DataType } from '../../hooks/useFetch'

type pageType={
    info:DataType 
    pageNumber:number
    setPageNumber:React.Dispatch<React.SetStateAction<number>>
}


export const Paginate = ({info,pageNumber,setPageNumber}:pageType) => {
    

  return (
    <ReactPaginate
    onPageChange={(selectedItem: {selected: number}) => setPageNumber(selectedItem.selected+1)}
    forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
    pageCount={ info?.pages > 1 && info.pages === 42 ? (pageNumber >= (info.pages-10)  ? info.pages : pageNumber+9) : info.pages}
    previousLabel={<span aria-hidden="true">&laquo;</span>}
    nextLabel={ <span aria-hidden="true">&raquo;</span>}
    containerClassName={'pagination'}
    pageClassName={"page-numbers"}
    breakLinkClassName={'dot'}
    pageLinkClassName={'btn-page '}
    previousLinkClassName={'btn-page'}
    nextLinkClassName={'btn-page '}
    activeLinkClassName={'active'}
 />
  )
}

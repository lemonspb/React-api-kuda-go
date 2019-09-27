import React from 'react';
import { Pagination } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";
import './pagination.scss';
const Paginations = ({pageNumber,history}) => {


  function getDefaultNumber(){
   const idRegExp=  /()\w+$/
   return history.location.pathname.match(idRegExp)[0];
  }


  return (
    <div className='pagination-custom'>
    <Pagination
      activePage={getDefaultNumber()}
      onPageChange={(event,data)=>{pageNumber(data.activePage)}} 
      boundaryRange={0}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={100}
    />
    </div>
  )
}




export default withRouter(Paginations)

import React from 'react'
import { Pagination } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";

const Paginations = ({pageNumber,history}) => {


  function getDefaultNumber(){
   const idRegExp=  /()\w+$/
   return history.location.pathname.match(idRegExp)[0];
  }


  return (
    <Pagination
      onPageChange={(event,data)=>{pageNumber(data.activePage)}} 
      boundaryRange={0}
      defaultActivePage={getDefaultNumber()}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={100}
    />
  )
}




export default withRouter(Paginations)

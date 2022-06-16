import React from 'react';

const Pagination = ({totalResults, onClick,page}) => {
  let pageCount = 1 
    if(totalResults > 20) pageCount = 3 
    else if(totalResults > 10) pageCount = 2

    const items = []

    for (let i = 1; i<= pageCount; i++){
      items.push(
        <li key={i} className={`page-item ${page === i ? 'active': ''}`}>
          <span className="page-link" onClick={() => onClick(i)}>{i}</span>
        </li>) 
    } 
    return items 
}

export default Pagination;
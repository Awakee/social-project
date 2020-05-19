import React, {useState} from 'react';
import classes from "./Paginator.module.css";

let Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage  }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/pageSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * pageSize + 1;
    let rightPortionPageNumber = portionNumber * pageSize;

    return (
        <div>
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span key={p} className={`${classes.selector} ${currentPage === p && classes.selectedPage}`}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber+1)}}>NEXT</button>
            }
        </div>
    )

}

export default Paginator;
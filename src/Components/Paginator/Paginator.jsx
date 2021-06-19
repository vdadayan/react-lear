import React from 'react';

export const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize / 240);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return(
        <>
            {pages.map((p) => {
                return (
                    <span onClick={() => {onPageChanged(p)}}
                        className={currentPage === p ? "selected-page" : ""}>
                        {p}
                    </span>
                );
            })}
        </>
    )
}
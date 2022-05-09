import React from 'react'

const Pagination = ({ soundsPerPage, totalSounds }) => {
    const pageNumbers = [];

    for (let i=1; i<=Math.ceil(totalSounds / soundsPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(pageNumbers)

    return (
        <nav>
            <ul class="pagination justify-content-center h-[100px]">
                {pageNumbers.map(number => {
                    <li key={number} class="page-item">
                        <a href="!#" class="page-link">
                            {number}
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Pagination;
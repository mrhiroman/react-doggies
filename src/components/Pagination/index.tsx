import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.sass';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={2}
    pageCount={21}
    forcePage={currentPage - 1}
  />
);
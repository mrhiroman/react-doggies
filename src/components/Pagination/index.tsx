import React from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import styles from './Pagination.module.sass';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
  const {dogsCount} = useSelector((state: RootState) => state.dogs)
  const {pageLimit} = useSelector((state: RootState) => state.filters)

  console.log(dogsCount, pageLimit)
  return (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={2}
    pageCount={Math.ceil(dogsCount / pageLimit)}
    forcePage={currentPage - 1}
  />
  );
}
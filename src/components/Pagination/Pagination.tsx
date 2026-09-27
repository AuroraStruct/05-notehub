import ReactPaginateImport from 'react-paginate';
import css from './Pagination.module.css';

const ReactPaginate =
  (
    ReactPaginateImport as unknown as {
      default: typeof ReactPaginateImport;
    }
  ).default ?? ReactPaginateImport;

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selected: number) => void;
}

export default function Pagination({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={selected => onPageChange(selected.selected)}
      forcePage={currentPage - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}

function Pagination(props) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" onClick={props.prevPage} href="#">
            Previous
          </button>
        </li>
        <li className="page-item">
          <button className="page-link">{props.currentPage}</button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={props.nextPage}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;

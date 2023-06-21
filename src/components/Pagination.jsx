function Pagination(props) {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination pagination-lg justify-content-center my-5">
        <li className="page-item">
          <button
            className="page-link"
            onClick={props.prevPage}
            aria-label="Previous"
          >
            <span aria-hidden="true">&lt;</span>
          </button>
        </li>
        <li className="page-item">
          <span className="page-link text-reset text-decoration-none">
            Pagina {props.currentPage}
          </span>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            onClick={props.nextPage}
            aria-label="Previous"
          >
            <span aria-hidden="true">&gt;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;

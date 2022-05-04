import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCategories } from "../../Redux/Actions/CategoryActions";

const CategoryItem = (props) => {
  const { id, categoryName, description } = props;

  const dispatch = useDispatch();

  const deletehandler = (id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(deleteCategories(id));
    }
  };
  return (
    <>
      <td>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" />
        </div>
      </td>
      <td>{id}</td>
      <td>
        <b>{categoryName}</b>
      </td>
      <td>{description}</td>
      <td className="text-end">
        <div className="dropdown">
          <Link
            to="#"
            data-bs-toggle="dropdown"
            className="btn btn-light"
          >
            <i className="fas fa-ellipsis-h"></i>
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to={`/category/${id}/edit`}>
              Edit info
            </Link>
            <Link className="dropdown-item text-danger" to="#"
              onClick={() => deletehandler(id)}>
              Delete
            </Link>
          </div>
        </div>
      </td>
    </>
  );
}

export default CategoryItem;
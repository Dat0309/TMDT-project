import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { editCategory, updateCategory } from "../../Redux/Actions/CategoryActions";
import { CATEGORY_UPDATE_RESET } from "../../Redux/Constants/CategoryConstants";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
};

const EditCategory = (props) => {
    const { categoryId } = props;

    const [categoryName, setCategoryName] = useState("");
    const [description, setDescription] = useState("");
    const [thumb, setThumb] = useState("");

    const dispatch = useDispatch();

    const categoryEdit = useSelector((state) => state.categoryEdit);
    const { loading, error, category } = categoryEdit;

    const categoryUpdate = useSelector((state) => state.categoryUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = categoryUpdate;

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: CATEGORY_UPDATE_RESET });
            toast.success("Product Updated", ToastObjects);
        } else {
            if (!category.categoryName || category._id !== categoryId) {
                dispatch(editCategory(categoryId));
            } else {
                setCategoryName(category.categoryName);
                setDescription(category.description);
                setThumb(category.thumb);
            }
        }
    }, [category, dispatch, categoryId, successUpdate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateCategory({
                _id: categoryId,
                categoryName,
                thumb,
                description,
            })
        );
    };

    return (
        <>
            <section className="content-main" style={{ maxWidth: "1200px" }}>
                <form onSubmit={submitHandler}>
                    <div className="content-header">
                        <Link to="/categories" className="btn btn-danger text-white">
                            Quay lại trang quản lý
                        </Link>
                        <h2 className="content-title">Chỉnh sửa Danh mục</h2>
                        <div>
                            <button type="submit" className="btn btn-primary">
                                Lưu
                            </button>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-xl-8 col-lg-8">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    {errorUpdate && (
                                        <Message variant="alert-danger">{errorUpdate}</Message>
                                    )}
                                    {loadingUpdate && <Loading />}
                                    {loading ? (
                                        <Loading />
                                    ) : error ? (
                                        <Message variant="alert-danger">{error}</Message>
                                    ) : (
                                        <>
                                            <div className="mb-4">
                                                <label htmlFor="product_title" className="form-label">
                                                    Tên Danh mục
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="form-control"
                                                    id="product_title"
                                                    required
                                                    value={categoryName}
                                                    onChange={(e) => setCategoryName(e.target.value)}
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="form-label">Mô tả</label>
                                                <textarea
                                                    placeholder="Type here"
                                                    className="form-control"
                                                    rows="7"
                                                    required
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                ></textarea>
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label">Hình ảnh</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    value={thumb}
                                                    required
                                                    onChange={(e) => setThumb(e.target.value)}
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}

export default EditCategory;
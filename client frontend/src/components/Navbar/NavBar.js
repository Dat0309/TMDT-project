import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCategory } from '../../Redux/Actions/CategoriesAction';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavElement';

const Navbar = () => {
  const dispatch = useDispatch();

  const categoriesList = useSelector((state) => state.categoriesList);
  const { loading, error, categories } = categoriesList;

  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);

  return (
    <>

      <Nav>
        <Bars />
        <NavMenu>
          {loading ? (
            <div className='mb-5'>
              <Loading />
            </div>
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <>
              {categories.map((category) => (
                <NavLink to={`/category/${category._id}`} >
                  {category.categoryName}
                </NavLink>
              ))}
            </>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
import { useEffect, useState } from "react"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ImageSlider = () => {

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, } = productList;

  const [current, setCurrent] = useState(0);
  const length = 5;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(products) || products.length <= 0) {
    return null;
  }

  return (
    <>
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {loading ? (
          <div className="mb-5">
            <Loading />
          </div>
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            {products.map((slide, index) => {
              // if (slide.rating >= 4) {
                return (
                  <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                  >
                    {index === current && (
                      <img src={slide.imageBanner} alt='travel image' className='image' />
                    )}
                  </div>
                );
              // }
              // return <></>;
            })}
          </>

        )
        }
      </section>
    </>

  );
};

export default ImageSlider;
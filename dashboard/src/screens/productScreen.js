import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import MainProducts from "./../components/products/MainProducts";

const ProductScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainProducts keyword={keyword} pagenumber={pagenumber}/>
      </main>
    </>
  );
};

export default ProductScreen;

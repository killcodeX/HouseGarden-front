import React, { useEffect } from "react";
import useWindowSize from "../../helpers/windowSize";
import { HomeWrapper, SideMenuWrapper, NoDataBanner } from "./style";
import SideMenus from "../../components/SideBar";
import Searchform from "./searchform";
import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/actions/postactions";

export default function Home() {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.products.sortP);
  const search = useSelector((state) => state.products.searchP);
  const products = useSelector((state) => state.products.allProducts);
  const sortedProduct = useSelector((state) => state.products.sortedProduct);
  const searchedProduct = useSelector((state) => state.products.searchProduct);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  if (products?.length == 0) {
    return (
      <HomeWrapper>
        {width > 1000 ? (
          <SideMenuWrapper>
            <SideMenus />
          </SideMenuWrapper>
        ) : null}
        <Searchform />
        <div className="row mt-5">
          <span>No Data</span>
          <NoDataBanner>
            <img
              src={process.env.PUBLIC_URL + "/assets/nodata.png"}
              alt="nodata"
            />
          </NoDataBanner>
        </div>
      </HomeWrapper>
    );
  }

  if (sort) {
    return (
      <HomeWrapper>
        {width > 1000 ? (
          <SideMenuWrapper>
            <SideMenus />
          </SideMenuWrapper>
        ) : null}
        <Searchform />
        <div className="row mt-5">
          {sortedProduct.map((item) => {
            return (
              <div key={item._id} className="col-sm-4 mb-5">
                <ProductCard item={item} />
              </div>
            );
          })}
        </div>
      </HomeWrapper>
    );
  }

  if (search) {
    return (
      <HomeWrapper>
        {width > 1000 ? (
          <SideMenuWrapper>
            <SideMenus />
          </SideMenuWrapper>
        ) : null}
        <Searchform />
        <div className="row mt-5">
          {searchedProduct.map((item) => {
            return (
              <div key={item._id} className="col-sm-4 mb-5">
                <ProductCard item={item} />
              </div>
            );
          })}
        </div>
      </HomeWrapper>
    );
  }

  return (
    <HomeWrapper>
      {width > 1000 ? (
        <SideMenuWrapper>
          <SideMenus />
        </SideMenuWrapper>
      ) : null}
      <Searchform />
      <div className="row mt-5">
        {products.map((item) => {
          return (
            <div key={item._id} className="col-sm-4 mb-5">
              <ProductCard item={item} />
            </div>
          );
        })}
      </div>
    </HomeWrapper>
  );
}

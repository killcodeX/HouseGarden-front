import React from "react";
import { Divider } from "antd";
import useWindowSize from "../../helpers/windowSize";
import OrderSideMenus from "./sideMenus";
import {
  SectionWrapper,
  SectionTitle,
  SectionSubTitle,
  NoDataBanner,
} from "./style";
import OrderProduct from "../../components/OrderProducts";
import { useDispatch, useSelector } from "react-redux";
import { getorderData } from "../../redux/actions/postactions";

export default function Orders() {
  const { width } = useWindowSize();
  const products = useSelector((state) => state.products.orderProducts);
  const orderType = useSelector((state) => state.products.orderType)

  // if (products?.length == 0) {
  //   return <span>Loading...</span>;
  // }

  return (
    <SectionWrapper>
      {width > 1000 ? (
        <OrderSideMenus />
      ) : null}
      <div className="container">
        <SectionTitle>My Orders</SectionTitle>
        <Divider />
        <SectionSubTitle>{orderType}</SectionSubTitle>
        <div className="row mt-4">
          {products?.length == 0 ? (
            <NoDataBanner>
              <img
                src={process.env.PUBLIC_URL + "/assets/nodata2.png"}
                alt="nodata"
              />
            </NoDataBanner>
          ) : (
            products?.map((item) => {
              return (
                <div key={item._id} className="col-sm-12 col-md-6 mb-4">
                  <OrderProduct item={item} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}

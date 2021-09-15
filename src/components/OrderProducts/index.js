import React, { useState } from "react";
import { Dropdown, Menu, Divider, Collapse, Button } from "antd";
import { AiOutlineClose, AiOutlineSetting } from "react-icons/ai";
import {
  ProductCardWrapper,
  ProductImageWrapper,
  FlexSection,
  RightSideProduct,
  ProductTitle,
  ProductCategory,
  PriceWrapper,
  Reviews,
  BookButton,
  OrderProductsWrapper,
} from "./style";
import { getCancelOrder } from "../../redux/actions/postactions";
import { useDispatch } from "react-redux";

const { Panel } = Collapse;

// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

export default function OrderProduct({ item }) {
  const dispatch = useDispatch()
  let date = new Date(item.createdAt);
  const [bookId, setBookId] = useState("");
  let obj = { confirmed: "#50cd89", cancelled: "#FF5052", received: "#6571FF" };

  const handleCancel = ({ key }) => {
    if (key == 1) {
      dispatch(getCancelOrder(bookId));
    }
  };

  const menu = (
    <Menu onClick={handleCancel}>
      <Menu.Item key="1" icon={<AiOutlineClose />}>
        Cancel Order
      </Menu.Item>
    </Menu>
  );

  return (
    <ProductCardWrapper>
      {item.products.map((prod) => {
        return (
          <OrderProductsWrapper key={prod._id}>
            <FlexSection>
              <ProductImageWrapper>
                <img src={prod.productId.image} alt={prod.productId.title} />
              </ProductImageWrapper>
              <RightSideProduct>
                <ProductTitle>{prod.productId.title}</ProductTitle>
                <FlexSection className="mb-1">
                  <ProductCategory>{prod.productId.category}</ProductCategory>
                </FlexSection>
                <FlexSection className="mb-3">
                  <PriceWrapper>
                    {formatter.format(prod.productId.price)}
                  </PriceWrapper>
                </FlexSection>
              </RightSideProduct>
            </FlexSection>
          </OrderProductsWrapper>
        );
      })}
      <Divider />
      <Collapse>
        <Panel header="Address">
          <div className="row">
            <div className="col-sm-6">
              <p>
                <strong>Full Name:</strong> {item.address.fname}{" "}
                {item.address.lname}
              </p>
            </div>
            <div className="col-sm-6">
              <p>
                <strong>Mobile no:</strong> {item.address.mobile}
              </p>
            </div>
            <div className="col-sm-6">
              <p>
                <strong>Zip Code:</strong> {item.address.pincode}
              </p>
            </div>
            <div className="col-sm-6">
              <p>
                <strong>House No:</strong> {item.address.houseno}
              </p>
            </div>
            <div className="col-sm-12">
              <p>
                <strong>Street:</strong> {item.address.street}
              </p>
            </div>
            <div className="col-sm-6">
              <p>
                <strong>City:</strong> {item.address.city}
              </p>
            </div>
            <div className="col-sm-6">
              <p>
                <strong>State:</strong> {item.address.state}
              </p>
            </div>
          </div>
        </Panel>
        <Panel header="Order Details">
          <div className="row">
            <div className="col-sm-12">
              <p>
                <strong>Order Id:</strong> {item.orderId}
              </p>
            </div>
            <div className="col-sm-12">
              <p>
                <strong>Payment Id:</strong> {item.paymentId}
              </p>
            </div>
            <div className="col-sm-6">
              <p>
                <strong>Amount Paid:</strong>{" "}
                {formatter.format(item.totalAmount)}
              </p>
            </div>
            <div className="col-sm-6">
              <p>
                <strong>Orderd On:</strong> {date.toLocaleDateString("en-US")}
              </p>
            </div>
          </div>
        </Panel>
      </Collapse>
      <FlexSection className="mt-2">
        {item.status == "confirmed" ? (
          <Dropdown
            overlay={menu}
            onVisibleChange={() => setBookId(item._id)}
            trigger={["click"]}
          >
            <Button className="mb-2">
              <span className="px-1">Change</span>
              <AiOutlineSetting style={{ fontSize: "15px" }} />
            </Button>
          </Dropdown>
        ) : null}
        <BookButton status={obj[item.status]}>{item.status}</BookButton>
      </FlexSection>
    </ProductCardWrapper>
  );
}

//<Reviews>Ordered on 12th Aug 21</Reviews>
{
  /* <FlexSection>
  <BookButton status={obj["cancelled"]}>Cancelled</BookButton>
</FlexSection>; */
}

{
  /* <ProductCategory>
<strong>Order id:</strong> #1
</ProductCategory> */
}

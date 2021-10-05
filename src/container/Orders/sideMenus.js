import React, { useState, useEffect } from "react";
import { Divider, Checkbox } from "antd";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import useWindowSize from "../../helpers/windowSize";
import { SideMenuWrapper, SideHeader, IconWrapper, SideBarTitle } from "./style";
import { order } from "../../fakedata";
import { getorderData, getOrderType } from "../../redux/actions/postactions";
import { useDispatch } from "react-redux";

export default function OrderSideMenus({sideOpen, setSideOpen}) {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const [value, setValue] = useState("Recent Orders");

  useEffect(() => {
    dispatch(getorderData({ status: value }));
    dispatch(getOrderType(value))
  }, [value]);


  function handleChange(checkedValues) {
    setValue(checkedValues.target.value);
  }

  return (
    <SideMenuWrapper>
      <SideHeader>
        <SideBarTitle>Order History</SideBarTitle>
        {width <= 480 ? (
          <IconWrapper onClick={() => setSideOpen(!sideOpen)}>
            <AiOutlineDoubleLeft />
          </IconWrapper>
        ) : null}
      </SideHeader>
      <Divider style={{ margin: "14px 0" }} />
      <div className="row mt-3">
        {order.map((item) => {
          return (
            <div key={item.id} className="col-sm-12 px-3 py-2">
              <Checkbox
                onChange={handleChange}
                checked={item.value == value}
                value={item.value}
              >
                {item.value}
              </Checkbox>
            </div>
          );
        })}
      </div>
    </SideMenuWrapper>
  );
}

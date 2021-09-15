import React, { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineRight,
  AiOutlineMenuUnfold,
  AiOutlineUser,
} from "react-icons/ai";
import { BsBag, BsHeart } from "react-icons/bs";
import { Menu, Dropdown, Badge, Avatar } from "antd";
import {
  NavBar,
  NavItems,
  LeftNavItems,
  LogoWrapper,
  RightNavItems,
  IconWrapper,
  BookButton,
} from "./style";
import SideMenus from "../SideBar";
import OrderSideMenus from "../../container/Orders/sideMenus";
import useWindowSize from "../../helpers/windowSize";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { receiveLogout } from "../../redux/actions/authactions";

export default function Header() {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const location = useLocation();
  const [sideOpen, setSideOpen] = useState(false);
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const handlelogout = ({ key }) => {
    if (key == 4) {
      dispatch(receiveLogout());
    }
  };

  if (sideOpen) {
    document.body.classList.add("overlay");
  } else {
    document.body.classList.remove("overlay");
  }

  const menu = (
    <Menu onClick={handlelogout}>
      {auth ? (
        <>
          <Menu.Item key="1" icon={<BsBag />}>
            <Link to={`/my-orders/${user._id}`}>My Orders</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<BsBag />}>
            <Link to={`/my-cart/${user._id}`}>My Cart</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<BsHeart />}>
            <Link to={`/my-wishlist/${user._id}`}>My Wishlist</Link>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="4" icon={<AiOutlineArrowRight />} danger>
            Log Out
          </Menu.Item>
        </>
      ) : (
        <Menu.Item key="2" icon={<AiOutlineRight />}>
          <Link to="/login">Login</Link>
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <NavBar>
      <div className="container">
        {sideOpen ? (
          location.pathname.includes("/my-orders") ? (
            <OrderSideMenus sideOpen={sideOpen} setSideOpen={setSideOpen} />
          ) : (
            <SideMenus sideOpen={sideOpen} setSideOpen={setSideOpen} />
          )
        ) : null}
        <NavItems>
          <LeftNavItems>
            {width <= 480 ? (
              location.pathname == "/" || location.pathname.includes("/my-orders") ? (
                <IconWrapper onClick={() => setSideOpen(!sideOpen)}>
                  <AiOutlineMenuUnfold />
                </IconWrapper>
              ) : null
            ) : null}
            <LogoWrapper>
              <Link
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  fontFamily: "inherit",
                }}
                to="/"
              >
                House{" "}
                <span style={{ color: "#11BF8B", fontFamily: "inherit" }}>
                  Garden
                </span>
              </Link>
            </LogoWrapper>
          </LeftNavItems>
          <RightNavItems>
            {width > 480 ? (
              <>
                <Badge dot offset={[-2, 5]}>
                  <IconWrapper>
                    <Link
                      style={{ color: "inherit" }}
                      to={auth ? `/my-cart/${user._id}` : "/login"}
                    >
                      <BsBag />
                    </Link>
                  </IconWrapper>
                </Badge>
                <Badge dot offset={[-1, 2]}>
                  <IconWrapper>
                    <Link
                      style={{ color: "inherit" }}
                      to={auth ? `/my-wishlist/${user._id}` : "/login"}
                    >
                      <BsHeart />
                    </Link>
                  </IconWrapper>
                </Badge>
              </>
            ) : null}
            <Dropdown
              overlay={menu}
              placement="bottomCenter"
              trigger={["click"]}
              arrow
            >
              {auth ? (
                <Avatar
                  style={{ color: "#11BF8B", backgroundColor: "#EDFAFF" }}
                >
                  {user?.fname[0] + user?.lname[0]}
                </Avatar>
              ) : (
                <Avatar
                  style={{ color: "#11BF8B", backgroundColor: "#EDFAFF" }}
                  icon={<AiOutlineUser />}
                />
              )}
            </Dropdown>
          </RightNavItems>
        </NavItems>
      </div>
    </NavBar>
  );
}

{
  /* <ImageAvatar>
  <img src={process.env.PUBLIC_URL + "/assets/150-7.jpg"} alt="profile" />
</ImageAvatar>; */
}

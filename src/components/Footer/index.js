import React from "react";
import { Divider } from "antd";
import { useLocation } from "react-router-dom";
import useWindowSize from "../../helpers/windowSize";
import { FooterWrapper, FooterContent, FooterItems } from "./style";

export default function Footer() {
  const { width } = useWindowSize();
  let location = useLocation();
  let footSmall = false;
  if (location.pathname.includes("/") || location.pathname.includes("/my-orders")) {
    footSmall = true;
  }

  return (
    <FooterWrapper foot={footSmall}>
      <div className="container">
        <FooterContent>
          <span>© Copyright 2021 House Garden</span>
          {width > 480? (
            <FooterItems>
              <span>About House Garden</span>
              <Divider type="vertical" />
              <span>Contact Us</span>
              <Divider type="vertical" />
              <span>Terms And Conditions</span>
            </FooterItems>
          ) : null}
        </FooterContent>
      </div>
    </FooterWrapper>
  );
}

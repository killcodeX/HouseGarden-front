import { ApiFunc } from "../api/postApi";
import { notification } from "antd";

const openNotificationWithIcon = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  });
};

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export const displayRazorPay = async (amount, productDetails, userId, history) => {
  console.log('user id  -->',userId)
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }
  const body = {
    totalAmount: amount
  };

  const data = await ApiFunc.post("/housegarden/payment",body);

  var options = {
    key: process.env.REACT_APP_RAZORPAY_ID,
    currency: data.data.currency,
    amount: data.data.amount.toString(),
    order_id: data.data.id,
    name: "House Garden",
    description: "Thank you for Ordering from us !!",
    handler: async function (response) {
      console.log("payment successfull", response);
      const data = {
        ...productDetails,
        
        paymentId: response.razorpay_payment_id,
        orderId: response.razorpay_order_id,
        status: "confirmed",
      };
      await ApiFunc.post("/housegarden/order-successfull", data);
      openNotificationWithIcon(
        "success",
        "order Confirmed",
        ""
      );
      console.log("just before ")
      history.push(`/my-orders/${userId}`);
    },
    prefill: {
      name: data.data.name,
      email: data.data.email,
      phone_number: data.data.mobile,
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
  paymentObject.on("payment.failed", function (response) {
    console.log(response);
    openNotificationWithIcon("error", "Booking Failed", response.data.message);
  });
};
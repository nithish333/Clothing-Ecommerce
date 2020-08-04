import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HCROrLCd2QVBw5BunaULllfZMMmujKVp8dXzo0LsJ5XDogcUZjlyF0HEMrOh9OZqzAyGAt2M4A2ky0VDWJqzTbX00sOb47Rkx";

  const onToken = (token) => {
    console.log(token);
    alert("Payment succesfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Nithish Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

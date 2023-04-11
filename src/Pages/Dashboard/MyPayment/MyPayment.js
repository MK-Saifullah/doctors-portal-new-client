import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckOutForm from "./CheckOutForm";

const MyPayment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { price, treatment, slot, appointmentDate } = booking;

  if(navigation.state === "loading"){
    return <Loading></Loading>
  }
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
  console.log("Stripe", stripePromise);
  return (
    <div>
      {/* <h2>Payment: {price}</h2> */}
      <h2 className="text-3xl">Payment for {treatment}</h2>
      <p>
        Please pay <strong>$ {price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}{" "}
      </p>

      <div className="w-96 my-12">
      <Elements stripe={stripePromise}>
        <CheckOutForm booking={booking}/>
      </Elements>
      </div>
    </div>
  );
};

export default MyPayment;

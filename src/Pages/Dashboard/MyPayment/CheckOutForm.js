import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOutForm = ({booking}) => {
    const {price, patient, email, _id} = booking;
    const [clientSecret, setClientSecret] = useState("");

    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [processing, setProcessing] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    //You can use a loader to load
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            authorization: `bearer ${localStorage.getItem("accessToken")}` 
        },
          body: JSON.stringify({ price: price}),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }

        if (elements == null) {
            return;
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }

        const { error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card:card,
        })

        if(error) {
            console.log(error.message)
            setCardError(error.message)
        }else {
            console.log(paymentMethod)
            setCardError('')
        }
        setSuccess('')
        setProcessing(true)
        
        //Google stripe confirm card payment method
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patient,
                  email: email,

                },
              },
            },
          );

          if(confirmError) {
            setCardError(confirmError.message);
            return;
          }
          if(paymentIntent.status === "succeeded"){
            console.log('card info', card)
            // setSuccess('Congratulations! Your payment has done successfully');
            // setTransactionId(paymentIntent.id)
            
            //Store payment information into DB
            const payment = {
                price,
                email,
                transactionId: paymentIntent.id,
                bookingId: _id,
            }
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
                console.log('payment data',data)
                if(data.insertedId) {
                    setSuccess('Congratulations! Your payment has done successfully');
                    setTransactionId(paymentIntent.id)
                }
            })
          }
          console.log('paymentIntent', paymentIntent)
          setProcessing(false);
    }
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-sm mt-8 btn-primary" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
      <span className="text-red-500 ml-2">{cardError}</span>
        {
            success && <div>
                <p className="text-green-500">{success}</p>
                <p>Your transactionId: <span className="font-bold">{transactionId}</span></p>
            </div>
        }
    </form>
  );
};

export default CheckOutForm;

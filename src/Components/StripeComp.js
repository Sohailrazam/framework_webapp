import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import swal from 'sweetalert'
import  {PaymentForm}  from "./PaymentForm";
export default function StripeComp(props) {
    const [packagePrice] = React.useState({
        name: "Maverick",
        price: "3.4$",

    });
    const Public_KEY ="pk_test_51ILqHCIVvLmjcWX2xAdYRaKnacgSobW1mINwXs6aS58eUtH5isetw5FIBaMPVl6xyv7ho2tj9K40JHUWDnGweK3B00mccyQ3Jv"
    const stripeTestPromise=loadStripe(Public_KEY);
    return (
        // <></>
        <Elements stripe={stripeTestPromise}>
       <PaymentForm />
              </Elements>
    );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
// onToken = (token) => {
    //     fetch('/save-stripe-token', {
    //       method: 'POST',
    //       body: JSON.stringify(token),
    //     }).then(response => {
    //       response.json().then(data => {
    //         alert(`We are in business, ${data.email}`);
    //       });
    //     });
    //   }

    // function handleToken(token, addresses) {
        // console.log("token", token.id)
        // axios.post("/save-order", { token, product })
        //     .then((data) => {
        //         console.log(data.data)
        //     })
        //     .catch((err) => {
        //         console.log(err)
// {/* <MyCheckoutForm />
// <StripeCheckout
// // token={handleToken}
// // amount={props.netBill ? (props.netBill) * 100 : 0}
// // name={props.packageName ? props.packageName : ''}
// // billingAddress
// // shippingAddress */}
        //     })
    //     axios.post('', {  })
    //         .then((data) => {
    //             swal('Great!', data.data, 'success')
    //                 .then(() => {
    //                     props.toggle()
    //                 })
    //         })
    //         .catch((err) => {
    //             swal('Oops!', err.response.data, 'error')
    //         })
    // }
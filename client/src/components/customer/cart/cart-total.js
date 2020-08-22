import React from "react";
import Visa from "../../../assets/images/Cart/banks/visa.svg";
import Aktia from "../../../assets/images/Cart/banks/aktia.svg";
import Danske from "../../../assets/images/Cart/banks/danske-bank.svg";
import MasterCard from "../../../assets/images/Cart/banks/mastercard.svg";
import Nordea from "../../../assets/images/Cart/banks/nordea.svg";
import Osuuspankki from "../../../assets/images/Cart/banks/osuuspankki.svg";
import Spankki from "../../../assets/images/Cart/banks/s-pankki.svg";
import Saastopankki from "../../../assets/images/Cart/banks/saastopankki.svg";
import Alandsbanken from "../../../assets/images/Cart/banks/alandsbanken.svg";
import Klarna from "../../../assets/images/Cart/banks/klarna_logo_black.png";
// import { useCart } from 'react-use-cart';
// import { useSelector } from 'react-redux';
// import { selectProduct } from '../../features/product/productSlice';
// import { useForm } from 'react-hook-form';
import axios from "axios";
import { connect } from "react-redux";
const CartTotal = ({ cart }) => {
  // const { cartTotal, items } = useCart();

  // const { register, handleSubmit } = useForm();

  // const { product } = useSelector(selectProduct);

  // const onSubmit = (data) => {
  //   const { country, city, postalCode, email, message } = data;

  //   const totalAmount = product?.coupon?.isActive
  //     ? cartTotal - product.coupon.value
  //     : cartTotal;

  //   const appliedCoupon = product?.coupon?.isActive ? product.coupon._id : {};

  //   const order = {
  //     address: {
  //       country,
  //       city,
  //       postalCode,
  //     },
  //     message,
  //     email,
  //     subTotal: cartTotal,
  //     orderItem: items,
  //     total: totalAmount,
  //     appliedCoupon,
  //   };

  //   console.log(order);

  //   axios
  //     .post("/order", order)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  // };
  const total = () => {
    var total = 0;
    if (cart != null && cart.length != 0) {
      for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        total += Number(element.product.price) * Number(element.quantity);
      }
    }
    return total;
  };
  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      className="col-md-12 font-Futura-bold letter-spacing-cart mb-2 "
    >
      <div className="row-wrap">
        <div className="row mb-3">
          <div className="col-md-6 p-0">SUBTOTAL</div>
          <div className="col-md-6 p-0">$ {total()}</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6 p-0">SHIPPING</div>
          <div className="col-md-6 p-0">Free Shipping to Finland.</div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6 p-0">ADDRESS*</div>
          <div className="col-md-6 p-0">
            <div className="form-group">
              <select
                name="country"
                className="form-control filter-input"
                // ref={register}
              >
                <option value="Finland">Finland</option>
                <option value="Sweden">Sweden</option>
                <option value="Latavia">Latavia</option>
                <option value="Lutininia">Lutininia</option>
                <option value="Estonia">Estonia</option>
              </select>
            </div>
            <div className="form-group">
              <input
                name="city"
                className="form-control filter-input"
                placeholder="Town / City"
                // ref={register}
              />
            </div>
            <div className="form-group">
              <input
                name="postalCode"
                className="form-control filter-input"
                placeholder="Postal Code"
                // ref={register}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control filter-input"
                placeholder="Email Address"
                // ref={register}
              />
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6 p-0">MESSAGE</div>
          <div className="col-md-6 p-0">Optional</div>
        </div>
      </div>

      <div className="row mb-2">
        <textarea
          name="message"
          rows="4"
          // ref={register}
          className="w-100 shadow-shop mt-2"
        ></textarea>
      </div>

      <div className="col-md-12 border-subtotal px-0 py-2 mb-3">
        <div className="row no-wrap">
          <div className="col-md-6 p-0">SUBTOTAL</div>
          <div className="col-md-6 d-flex justify-content-end p-0 ">
            $ {total()}
          </div>
        </div>
        <div className="row no-wrap">
          <div className="col-md-6 mt-2  p-0">VAT</div>
          <div className="col-md-6 mt-2 d-flex justify-content-end p-0 ">
            $ 119
          </div>
        </div>

        <div className="row no-wrap">
          {
            // product?.coupon?.isActive
            false && (
              <>
                <div className="col-md-6 mt-2 p-0">COUPON </div>
                <div className="col-md-6 mt-2 d-flex justify-content-end p-0 ">
                  - ${" "}
                  {
                    // product.coupon.value
                  }
                </div>
              </>
            )
          }
        </div>
      </div>
      <div className="row ">
        <div className="col-md-12 d-flex p-0 justify-content-end">
          ${" "}
          {
            // product?.coupon?.isActive
            //   ? cartTotal - product.coupon.value
            //   : cartTotal
            total()
          }
        </div>
      </div>
      <div className="row mt-3 ">
        <button
          type="submit"
          className="btn text-uppercase btn-dark btn-block letter-spacing-none"
        >
          Proceed to checkout
        </button>
        <small className="text-muted letter-spacing-none py-1">
          By clicking "Proceed to Checkout" i approve terms user terms and
          confirm i have read privacy notice i agree to the terms and
          conditions.
        </small>
        <h5 className="letter-spacing-none">Available Payment Methods.</h5>
        <small className="text-muted letter-spacing-none py-1">
          Pay later,monthy financing bank transfer and card.
        </small>
        <div className="justify-content-between py-1">
          <img className="p-1" src={Klarna} width="40px" alt="" />
          <img className="p-1" src={Visa} width="40px" alt="" />
          <img className="p-1" src={Aktia} width="40px" alt="" />
          <img className="p-1" src={Danske} width="40px" alt="" />
          <img className="p-1" src={MasterCard} width="40px" alt="" />
          <img className="p-1" src={Nordea} width="40px" alt="" />
          <img className="p-1" src={Osuuspankki} width="40px" alt="" />
          <img className="p-1" src={Spankki} width="40px" alt="" />
          <img className="p-1" src={Saastopankki} width="40px" alt="" />
          <img className="p-1" src={Alandsbanken} width="40px" alt="" />
        </div>
      </div>
    </form>
  );
};
const mapStateToProps = (state) => ({
  cart: state.app.cart,
});
export default connect(mapStateToProps)(CartTotal);

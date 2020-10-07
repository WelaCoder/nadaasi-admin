import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import axios from "axios";
// import { useIsAdmin } from '../hooks/useIsAdmin';
// import { setAuthorizationToken } from '../helpers/utils';
import { connect } from "react-redux";

import { addManufacturer, editManufacturer, setCurrentManufacturer, } from "../../../actions/manufacturer_actions";
import Toggle from "react-toggle";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../spinner";
const AddManufacturer = ({ currentManufacturer, setCurrentManufacturer, editManufacturer }) => {
    let id = useParams().id;
    useEffect(() => {
        setCurrentManufacturer(id);
    }, []);
    useEffect(() => {
        if (currentManufacturer != null) {
            setcoupondata(currentManufacturer);
        }
    }, [currentManufacturer])

    const [coupondata, setcoupondata] = useState({
        name: "",
        email: "",
    });
    const { name, email } = coupondata;
    const [isLoading, setisLoading] = useState(false);


    const onChange = (e) => {
        setcoupondata({
            ...coupondata,
            [e.target.name]: e.target.value,
        });
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        setisLoading(true);
        await editManufacturer({ name, email }, currentManufacturer._id);
        setisLoading(false);
    };
    if (currentManufacturer == null) return <Loader />
    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="text-info font-weight-bold py-2 border-top border-bottom ">
                    Edit Manufacturer
                </h3>
            </div>
            <form className="mt-4" onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        required
                        value={name}
                        onChange={onChange}
                        className="form-control"
                        placeholder="Enter Manufacturer Name.."
                    />

                </div>
                <div className="form-group">
                    <input
                        type="email"
                        required
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={onChange}
                        placeholder="Enter Manufacturer Email.."
                    // ref={register({ required: true })}
                    />


                </div>
                <button
                    type="submit"
                    className="btn btn-block btn-dark mb-2"
                    disabled={isLoading}
                >
                    <span
                        className={isLoading ? "mr-2 spinner-border spinner-border-sm" : ""}
                        role="status"
                        aria-hidden="true"
                    ></span>
                    {isLoading ? "Editing Manufacturer..." : "Edit Manufacturer"}
                </button>
            </form>
        </div>
    );
};
const mapStateToProps = (state) => ({
    coupon: state.coupon,
    currentManufacturer: state.app.currentManufacturer,
});
export default connect(mapStateToProps, { setCurrentManufacturer, editManufacturer })(AddManufacturer);

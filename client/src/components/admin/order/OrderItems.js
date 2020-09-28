import React from "react";
import { connect } from "react-redux";
import Toggle from "react-toggle";
import { Link } from "react-router-dom";
import { captureOrder } from "../../../actions/adminOrder";
import { loadManufacturers } from "../../../actions/manufacturer_actions";
import { OPTIONS } from '../../../config/selectConfig'
import Select from 'react-select'
import { useEffect } from "react";
import { useState } from "react";
const OrderItems = ({ order, captureOrder, loadManufacturers, manufacturers }) => {
  useEffect(() => {
    loadManufacturers();
    if (order.manufacturer != null) {
      setSelectedManufacturer(order.manufacturer);
    }
  }, [])
  const [selectedManufacturer, setSelectedManufacturer] = useState({
    name: null,
    email: null,
  })
  const [manufacturerOptions, setManufacturerOptions] = useState([]);
  useEffect(() => {
    let options = manufacturers == null ? [] : manufacturers.map(m => {
      return {
        label: m.name,
        value: m.email,
      }
    });
    // options.push({
    //   label:"Choose Manufacturer"
    // })
    setManufacturerOptions(options);
  }, [manufacturers]);
  const { _id, orderId, name, date, subject, email, message, status, manufacturer } = order;
  return (
    <>

      <div
        className="d-flex list-group-item py-3 
  justify-content-between  
  shadow-sm  mb-2"
      >

        <div className="col-md-2">
          <Link to={`/admin/orders/${_id}`} style={{ color: "black" }}>
            <small className="d-flex flex-column">
              <span className="text-muted border-bottom py-1">Order Id</span>
              <span className="py-1">{orderId} </span>
            </small>
          </Link>
        </div>
        <div className="col-md-3">
          <small className="d-flex flex-column ">
            <span className="text-muted border-bottom py-1 ">Email</span>
            <span className=" py-1">{email}</span>
          </small>
        </div>
        <div className="col-md-3">
          <small className="d-flex flex-column ">
            <span className="text-muted border-bottom py-1">Placed On</span>
            <span className=" py-1">{new Date(date).toDateString()}</span>
          </small>
          <br />
        </div>

        <div className="col-md-3">
          <Select
            defaultValue={{ label: status, value: status }}

            placeholder="Select Body Type.."
            name="bodyType"
            isDisabled={manufacturer == null && selectedManufacturer.name == null}
            // innerRef={register}
            options={OPTIONS.orderStatusOptions}
            onChange={(value) => {
              value !== null &&
                captureOrder(_id, value.value, selectedManufacturer);
              console.log(value);
            }}
          />

          <br />
          <Select
            defaultValue={manufacturer == null ? null : { label: manufacturer == null ? null : manufacturer.name, value: manufacturer == null ? '' : manufacturer.email }}
            name="manufacturer"
            placeholder="Manufacturer"
            // innerRef={register}
            // isClearable={true}
            options={manufacturerOptions}
            onChange={(value) => {
              value !== null &&
                setSelectedManufacturer({
                  name: value.label,
                  email: value.value,
                })
              console.log(selectedManufacturer);
            }}
          />
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  manufacturers: state.manufacturer.manufacturers
});
export default connect(mapStateToProps, { captureOrder, loadManufacturers })(OrderItems);

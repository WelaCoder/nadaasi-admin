import React, { Fragment } from "react";
import { connect } from "react-redux";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { deleteManufacturer } from "../../../actions/manufacturer_actions";

const Coupon = ({ coupon, deleteManufacturer }) => {
  const { name, email, } = coupon;


  return (
    <Fragment>
      <div className="d-flex list-group-item py-3  justify-content-between   shadow-sm  mb-2">
        <div className="col-md-4">
          <small className="d-flex flex-column">
            <span className="text-muted border-bottom py-1">Name</span>
            <span className=" text-capitalize py-1">{name}</span>
          </small>
        </div>
        <div className="col-md-4">
          <small className="d-flex flex-column ">
            <span className="text-muted border-bottom py-1 ">Email</span>
            <span className="py-1">{email}</span>
          </small>
        </div>

        <div className="col-md-4">
          <small className="d-flex flex-column ">
            <span className="text-muted border-bottom py-1 ">Actions</span>
            <span className="py-1">
              <Link to={`/admin/manufacturers/${coupon._id}`}>
                <FeatherIcon icon="edit" className='text-primary' size={20} />
              </Link>
              <FeatherIcon icon="trash" className='text-danger ml-2 ' size={20} onClick={() => deleteManufacturer(coupon._id)} style={{ cursor: 'pointer' }} />
            </span>
          </small>
        </div>

      </div>
    </Fragment>
  );
};

export default connect(null, { deleteManufacturer })(Coupon);

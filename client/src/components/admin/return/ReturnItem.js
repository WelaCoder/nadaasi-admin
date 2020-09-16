import React, { Fragment } from 'react';
import Toggle from 'react-toggle';
import { connect } from 'react-redux';
import { updateStatus } from '../../../actions/return'

const ReturnItem = ({ returnRequest, updateStatus }) => {
  const {
    _id,
    name,
    orderId,
    email,
    problem,
    isResolved
  } = returnRequest;
  const handleChange = (_id, status) => {
    const payload = {
      isResolved: status,
    };
    updateStatus(_id, payload);
  };

  return (
    <Fragment>

      <div
        className="d-flex list-group-item py-3  justify-content-between   shadow-sm  mb-2">
        <div className="col-md-2">
          <small className="d-flex flex-column">
            <span className="text-muted border-bottom py-1">Name
            </span>
            <span className=" text-capitalize py-1">
              {name}
            </span>
          </small>
        </div>
        <div className="col-md-2">
          <small className="d-flex flex-column ">
            <span className="text-muted border-bottom py-1 ">
              order_Id
            </span>
            <span className="text-capitalize py-1">
              {orderId}
            </span>
          </small>
        </div>
        <div className="col-md-3">
          <small className="d-flex flex-column ">
            <span className="text-muted border-bottom py-1">
              Email
            </span>
            <span className=" py-1">
              {email}
            </span>
          </small>
        </div>
        <div className="col-md-2">
          <small className="d-flex flex-column ">
            <span className="text-muted py-1 border-bottom">
              Message
            </span>
            <span className="py-1">
              {problem}
            </span>
          </small>
        </div>
        <div className="col-md-2">
          <small className="d-flex flex-column">
            <span className="text-muted border-bottom py-1 ">
              IsResolved
            </span>
            <span className="py-1" >
              <Toggle
                id={_id}
                defaultChecked={isResolved}
                onChange={() => {
                  handleChange(_id, !isResolved);
                }}
              />
            </span>
          </small>
        </div>
      </div>
    </Fragment>
  )
}

export default connect(null, { updateStatus })(ReturnItem)
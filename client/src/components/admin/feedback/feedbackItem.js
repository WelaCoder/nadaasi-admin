import React, { Fragment } from 'react';
import Toggle from 'react-toggle';
import { connect } from 'react-redux';
import { updateFeedback } from '../../../actions/feedback'
import Star from '../../../assets/images/home/icons/star.svg'
const FeedbackItem = ({ feedback, updateFeedback }) => {
  const {
    _id,
    name,
    subject,
    email,
    message,
    isResolved,
    phone
  } = feedback;
  const handleChange = (_id, status) => {
    const payload = {
      isResolved: status,
    };
    updateFeedback(_id, payload);
  };

  return (
    <Fragment>

      <div
        className="d-flex list-group-item py-3  justify-content-between   shadow-sm  mb-2 px-0">
        <div className="col-md-2">
          <small className="d-flex flex-column">
            <span className="text-muted border-bottom py-1">Name
            </span>
            <span className=" text-capitalize py-1">
              {name}
            </span>
          </small>
        </div>
        <div className="col-md-3">
          <small className="d-flex flex-column ">
            <span className="text-muted border-bottom py-1 ">
              Title
            </span>
            <span className="text-capitalize py-1">
              {feedback.text}
            </span>
          </small>
        </div>
        <div className="col-md-3">
          <small className="d-flex flex-column ">
            <span className="text-muted border-bottom py-1">
              Detail
            </span>
            <span className=" py-1">
              {feedback.detail}
            </span>
          </small>
        </div>

        <div className="col-md-2">
          <small className="d-flex flex-column ">
            <span className="text-muted py-1 border-bottom">
              Rating
            </span>
            <span className="py-1">
              <span>
                {new Array(feedback.rating).fill().map((_, idx) => (
                  <img key={idx} className="ml-2" width="10px" src={Star} alt="star" />
                ))}
              </span>
            </span>
          </small>
        </div>
        {/* <div className="col-md-2">
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
        </div> */}
      </div>
    </Fragment>
  )
}

export default connect(null, { updateFeedback })(FeedbackItem)
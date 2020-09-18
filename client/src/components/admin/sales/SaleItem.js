import React, { Fragment, useEffect, useState } from 'react';
import Toggle from 'react-toggle';
import { connect } from 'react-redux';
import { updateFeedback } from '../../../actions/feedback'
import { setSale } from '../../../actions/appActions';

const SaleItem = ({ feedback, setSale }) => {
    const {
        label,
    } = feedback;
    const [discount, setDiscount] = useState(0);
    useEffect(() => {
        if (feedback != null) {
            setDiscount(feedback.discount);
        }
    }, [feedback])

    return (
        <Fragment>

            <div
                className="d-flex list-group-item py-3  justify-content-between   shadow-sm  mb-2">
                <div className="col-md-2">
                    <small className="d-flex flex-column">
                        <span className="text-muted border-bottom py-1">Dress Type
            </span>
                        <span className=" text-capitalize py-1">
                            {label}
                        </span>
                    </small>
                </div>


                <div className="col-md-2">
                    <small className="d-flex flex-column ">
                        <span className="text-muted py-1 border-bottom">
                            Discount
            </span>
                        <span className="py-1">
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="dressType"
                                    value={discount}
                                    min={0}
                                    onChange={(e) => {
                                        setDiscount(e.target.value);
                                    }}
                                    // ref={register}
                                    required
                                    className="form-control"
                                    placeholder="Discount"
                                />
                            </div>
                        </span>
                    </small>
                </div>

                <div className="col-md-2">
                    <small className="d-flex flex-column">
                        <span className="text-muted border-bottom py-1 ">
                            Status
            </span>
                        <span className="py-1" >
                            <Toggle
                                // id={_id}
                                defaultChecked={feedback.sale}
                                onChange={(e) => {
                                    setSale({ label, discount, sale: e.target.checked });
                                }}
                            />
                        </span>
                    </small>
                </div>
            </div>
        </Fragment>
    )
}

export default connect(null, { updateFeedback, setSale })(SaleItem)
import React from 'react';
import { connect } from 'react-redux';
import Toggle from 'react-toggle';
const OrderItems = (
  { order }
) => {
  const { _id,orderId ,name,date ,subject, email, message } = order;
  return (
    <>
    <div
      className='d-flex list-group-item py-3 
  justify-content-between  
  shadow-sm  mb-2'
      // key={_id}
    >
      <div className='col-md-2'>
        <small className='d-flex flex-column'>
          <span className='text-muted border-bottom py-1'>Order Id</span>
          <span className=' text-capitalize py-1'>{orderId} </span>
        </small>
      </div>
      <div className='col-md-2'>
        <small className='d-flex flex-column '>
          <span className='text-muted border-bottom py-1 '>Email</span>
          <span className='text-capitalize py-1'>{email}</span>
        </small>
      </div>
      <div className='col-md-3'>
        <small className='d-flex flex-column '>
          <span className='text-muted border-bottom py-1'>Placed On</span>
          <span className=' py-1'>Dated</span>
          </small>
          <br />
        </div>
        <div className='col-md-2'>
        <small className='d-flex flex-column '>
          <span className='text-muted border-bottom py-1'>Email</span>
          <span className=' py-1'>mahadhashmi2@gmail.com</span>
          </small>
          
      </div>
      <div className='col-md-1'>
        <small className='d-flex flex-column '>
          <span className='text-muted py-1 border-bottom'>CapOrder</span>
            <span className="py-3" > 
              <Toggle
                // id={_id}
                checked={true}
                // onChange={() => {
                //   handleChange(_id, !isResolved);
                // }}
              />
            </span>
          </small>
          
      </div>
    </div>
    <div
    className='d-flex list-group-item py-3 
justify-content-between  
shadow-sm  mb-2'
    // key={_id}
    >
      <div class="col-md-8 row-wrap mb-3">
          <h3 class="d-flex flex-column ">
            <span>Product Details
              </span>
          </h3>
          <div class="row py-2 text-muted border-bottom">
            <div class="col-md-5">
              Closure
              </div>
            <div class="col-md-7">
              Clousure</div>
          </div>
          <div class="row py-2 text-muted border-bottom">
            <div class="col-md-5">
              Details
              </div>
            <div class="col-md-7">
              Very beautiful dress... real classy
              </div>
          </div>
          <div class="row py-2 text-muted border-bottom">
            <div class="col-md-5">
              Length</div>
            <div class="col-md-7">
              340
              </div>
          </div>
          <div class="row py-2 text-muted border-bottom">
            <div class="col-md-5">
              Waistline
              </div>
            <div class="col-md-7">
              100
              </div>
          </div>
          <div class="row py-2 text-muted border-bottom">
            <div class="col-md-5">
              Neckline
              </div>
            <div class="col-md-7">
              230
              </div>
          </div>
          <div class="row py-2 text-muted border-bottom">
            <div class="col-md-5">
              Model's Height And Size
              </div>
            <div class="col-md-7">
              3223
              </div>
        </div>
        </div>
      </div>
    </>
    );
}
const mapStateToProps = state => ({
    
})
export default connect(mapStateToProps)(OrderItems);

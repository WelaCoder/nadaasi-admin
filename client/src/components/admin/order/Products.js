import React from "react";

const Products = ({ products }) => {
  if (products == null) return <></>;
  return (
    <>
      <div
        className="w-100 d-flex 
              justify-content-between 
              align-items-center border-top 
              border-bottom py-1 mb-2"
      >
        <h3 className="mb-0 font-weight-bold text-info">Products</h3>
        {/* <span className='badge badge-info badge-pill shadow-sm p-2'>
        Totals {heading}: {item.length}
      </span> */}
      </div>
      {products.map((p) => (
        <div
          className="d-flex list-group-item py-3 
justify-content-between  
shadow-sm  mb-2"
        // key={_id}
        >
          <div class="col-md-8 row-wrap mb-3">
            <div class="row py-2 text-muted border-bottom">
              <div class="col-md-5">Name</div>
              <div class="col-md-7">{p.details.name}</div>
            </div>
            <div class="row py-2 text-muted border-bottom">
              <div class="col-md-5">Price</div>
              <div class="col-md-7">{p.details.price}</div>
            </div>
            <div class="row py-2 text-muted border-bottom">
              <div class="col-md-5">Size</div>
              <div class="col-md-7">{p.size}</div>
            </div>
            <div class="row py-2 text-muted border-bottom">
              <div class="col-md-5">Color</div>
              <div class="col-md-7">
                <div
                  className="mr-2 custom-rounded shadow-sm"
                  style={{
                    backgroundColor: `${p.color}`,
                    width: "10px",
                  }}
                ></div>
              </div>
            </div>
            <div class="row py-2 text-muted border-bottom">
              <div class="col-md-5">Quantity</div>
              <div class="col-md-7">{p.quantity}</div>
            </div>
            {p.size == "Custom" && (
              <>
                <h3 class="d-flex flex-column ">
                  <span>Custom Size</span>
                </h3>
                <div class="row py-2 text-muted border-bottom">
                  <div class="col-md-5">Neck</div>
                  <div class="col-md-7">{p.neck + " " + p.unit}</div>
                </div>
                <div class="row py-2 text-muted border-bottom">
                  <div class="col-md-5">Over Bust</div>
                  <div class="col-md-7">{p.overBust + " " + p.unit}</div>
                </div>
                <div class="row py-2 text-muted border-bottom">
                  <div class="col-md-5">Bust</div>
                  <div class="col-md-7">{p.bust + " " + p.unit}</div>
                </div>
                <div class="row py-2 text-muted border-bottom">
                  <div class="col-md-5">V Neck Cut</div>
                  <div class="col-md-7">{p.vNeckCut + " " + p.unit}</div>
                </div>
                <div class="row py-2 text-muted border-bottom">
                  <div class="col-md-5">Wrist</div>
                  <div class="col-md-7">{p.wrist + " " + p.unit}</div>
                </div>
                <div class="row py-2 text-muted border-bottom">
                  <div class="col-md-5">Forearm</div>
                  <div class="col-md-7">{p.foreArm + " " + p.unit}</div>
                </div>
                <div class="row py-2 text-muted border-bottom">
                  <div class="col-md-5">Bicep</div>
                  <div class="col-md-7">{p.bicep + " " + p.unit}</div>
                </div>
                <div class="row py-2 text-muted border-bottom">
                  <div class="col-md-5">Above Knee To Ankle</div>
                  <div class="col-md-7">{p.aboveKneeToAnkle + " " + p.unit}</div>
                </div>
                <div class="row py-2 text-muted border-bottom">
                  <div class="col-md-5">armHole</div>
                  <div class="col-md-7">{p.armHole + " " + p.unit}</div>
                </div>
                <div class="row py-2 text-muted border-bottom">
                  <div class="col-md-5">Shoulder Seam</div>
                  <div class="col-md-7">{p.shoulderSeam + " " + p.unit}</div>
                </div>
                <div class="row py-2 text-muted border-bottom">
                  <div class="col-md-5">Arm Length</div>
                  <div class="col-md-7">{p.armLength + " " + p.unit}</div>
                </div>
                <div class="row py-2 text-muted border-bottom">
                  <div class="col-md-5">Neck To Above Heel</div>
                  <div class="col-md-7">{p.neckToAboveHeel + " " + p.unit}</div>
                </div>
                <div class="row py-2 text-muted border-bottom">
                  <div class="col-md-5">Neck To Heel</div>
                  <div class="col-md-7">{p.neckToHeel + " " + p.unit}</div>
                </div>
                <div class="row py-2 text-muted border-bottom">
                  <div class="col-md-5">Hips</div>
                  <div class="col-md-7">{p.hips + " " + p.unit}</div>
                </div>
                <div class="row py-2 text-muted border-bottom">
                  <div class="col-md-5">Under Bust</div>
                  <div class="col-md-7">{p.underBust + " " + p.unit}</div>
                </div>
                <div class="row py-2 text-muted border-bottom">
                  <div class="col-md-5">Hip</div>
                  <div class="col-md-7">{p.hip + " " + p.unit}</div>
                </div>
                <div class="row py-2 text-muted border-bottom">
                  <div class="col-md-5">Waist To Above Knee</div>
                  <div class="col-md-7">{p.waistToAboveKnee + " " + p.unit}</div>
                </div>

              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;

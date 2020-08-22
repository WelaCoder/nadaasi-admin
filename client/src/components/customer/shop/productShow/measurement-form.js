import React from "react";
import { setChoosenProduct } from "../../../../actions/appActions";
import { connect } from "react-redux";

const MeasurementForm = ({ choosenProduct, setChoosenProduct }) => {
  return (
    <form>
      <div className="d-flex align-items-end">
        <span>1.</span>
        <span className="ml-4">Neck</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              type="text"
              onChange={(e) =>
                setChoosenProduct({ size: "Custom", neck: e.target.value })
              }
              value={choosenProduct?.neck}
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
            />
          </div>
        </span>
      </div>
      <div className="d-flex align-items-end">
        <span>2.</span>
        <span className="ml-4">Over Bust</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              type="text"
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
              onChange={(e) =>
                setChoosenProduct({ size: null, overBust: e.target.value })
              }
              value={choosenProduct?.overBust}
            />
          </div>
        </span>
      </div>
      <div className="d-flex align-items-end">
        <span>3.</span>
        <span className="ml-4">Bust</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              type="text"
              onChange={(e) =>
                setChoosenProduct({ size: null, bust: e.target.value })
              }
              value={choosenProduct?.bust}
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
            />
          </div>
        </span>
      </div>
      <div className="d-flex align-items-end">
        <span>4.</span>
        <span className="ml-4">Under Bust</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              type="text"
              onChange={(e) =>
                setChoosenProduct({ size: null, underBust: e.target.value })
              }
              value={choosenProduct?.underBust}
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
            />
          </div>
        </span>
      </div>
      <div className="d-flex align-items-end">
        <span>5.</span>
        <span className="ml-4">Waist</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              onChange={(e) =>
                setChoosenProduct({ size: null, waist: e.target.value })
              }
              value={choosenProduct?.waist}
              type="text"
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
            />
          </div>
        </span>
      </div>
      <div className="d-flex align-items-end">
        <span>6.</span>
        <span className="ml-4">Hips</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              onChange={(e) =>
                setChoosenProduct({ size: null, hips: e.target.value })
              }
              value={choosenProduct?.hips}
              type="text"
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
            />
          </div>
        </span>
      </div>
      <div className="d-flex align-items-end">
        <span>7.</span>
        <span className="ml-4">Neck to Heel</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              type="text"
              onChange={(e) =>
                setChoosenProduct({ size: null, neckToHeel: e.target.value })
              }
              value={choosenProduct?.neckToHeel}
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
            />
          </div>
        </span>
      </div>
      <div className="d-flex align-items-end">
        <span>8.</span>
        <span className="ml-4">Neck to Above Heal</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              type="text"
              onChange={(e) =>
                setChoosenProduct({
                  size: null,
                  neckToAboveHeel: e.target.value,
                })
              }
              value={choosenProduct?.neckToAboveHeel}
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
            />
          </div>
        </span>
      </div>
      <div className="d-flex align-items-end">
        <span>9.</span>
        <span className="ml-4">Above Knee to Ankle</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              type="text"
              onChange={(e) =>
                setChoosenProduct({
                  size: null,
                  aboveKneeToAnkle: e.target.value,
                })
              }
              value={choosenProduct?.aboveKneeToAnkle}
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
            />
          </div>
        </span>
      </div>
      <div className="d-flex align-items-end">
        <span>10.</span>
        <span className="ml-4">Arm Length</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              onChange={(e) =>
                setChoosenProduct({ size: null, armLength: e.target.value })
              }
              value={choosenProduct?.armLength}
              type="text"
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
            />
          </div>
        </span>
      </div>
      <div className="d-flex align-items-end">
        <span>11.</span>
        <span className="ml-4">Shoulder Seam</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              onChange={(e) =>
                setChoosenProduct({ size: null, shoulderSeam: e.target.value })
              }
              value={choosenProduct?.shoulderSeam}
              type="text"
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
            />
          </div>
        </span>
      </div>
      <div className="d-flex align-items-end">
        <span>12.</span>
        <span className="ml-4">Arm Hole</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              onChange={(e) =>
                setChoosenProduct({ size: null, armHole: e.target.value })
              }
              value={choosenProduct?.armHole}
              type="text"
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
            />
          </div>
        </span>
      </div>
      <div className="d-flex align-items-end">
        <span>13.</span>
        <span className="ml-4">Bicep</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              onChange={(e) =>
                setChoosenProduct({ size: null, bicep: e.target.value })
              }
              value={choosenProduct?.bicep}
              type="text"
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
            />
          </div>
        </span>
      </div>
      <div className="d-flex align-items-end">
        <span>14.</span>
        <span className="ml-4">Fore Arm</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              onChange={(e) =>
                setChoosenProduct({ size: null, foreArm: e.target.value })
              }
              value={choosenProduct?.foreArm}
              type="text"
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
            />
          </div>
        </span>
      </div>
      <div className="d-flex align-items-end">
        <span>15.</span>
        <span className="ml-4">Wrist</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              onChange={(e) =>
                setChoosenProduct({ size: null, wrist: e.target.value })
              }
              value={choosenProduct?.wrist}
              type="text"
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
            />
          </div>
        </span>
      </div>
      <div className="d-flex align-items-end">
        <span>16.</span>
        <span className="ml-4">V Neck Cut</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              type="text"
              onChange={(e) =>
                setChoosenProduct({ size: null, vNeckCut: e.target.value })
              }
              value={choosenProduct?.vNeckCut}
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
            />
          </div>
        </span>
      </div>
      <div className="d-flex align-items-end">
        <span>17.</span>
        <span className="ml-4">Shoulder to Waist</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              type="text"
              onChange={(e) =>
                setChoosenProduct({
                  size: null,
                  shoulderToWaist: e.target.value,
                })
              }
              value={choosenProduct?.shoulderToWaist}
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
            />
          </div>
        </span>
      </div>
      <div className="d-flex align-items-end">
        <span>18.</span>
        <span className="ml-4">Waist to Above Knee</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              type="text"
              onChange={(e) =>
                setChoosenProduct({
                  size: null,
                  waistToAboveKnee: e.target.value,
                })
              }
              value={choosenProduct?.waistToAboveKnee}
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
            />
          </div>
        </span>
      </div>
      <div className="d-flex align-items-end">
        <span>19.</span>
        <span className="ml-4">Hip (4" below Waist)</span>
        <span>
          <div className="form-group ml-3 mb-0">
            <input
              type="text"
              onChange={(e) =>
                setChoosenProduct({ size: null, hip: e.target.value })
              }
              value={choosenProduct?.hip}
              className="form-control text-white bg-transparent border-top-0 border-left-0 border-right-0"
            />
          </div>
        </span>
      </div>
    </form>
  );
};
const mapStateToProps = (state) => ({
  choosenProduct: state.app.choosenProduct,
});
export default connect(mapStateToProps, { setChoosenProduct })(MeasurementForm);

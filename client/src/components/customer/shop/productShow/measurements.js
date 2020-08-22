import React, { useState } from "react";
import { Modal, Button, Tab, Tabs } from "react-bootstrap";
import CustomSize from "../../../../assets/images/Shop/Custom/illustration.png";
import View from "../../../../assets/images/Shop/Custom/view.png";
import MeasurementForm from "./measurement-form";
import { setChoosenProduct, setToast } from "../../../../actions/appActions";
import { connect } from "react-redux";
const Measurements = ({
  Measurements,
  currentProduct,
  setChoosenProduct,
  setToast,
  choosenProduct,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    if (
      choosenProduct.neck == null ||
      choosenProduct.overBust == null ||
      choosenProduct.bust == null ||
      choosenProduct.neck == null ||
      choosenProduct.hip == null ||
      choosenProduct.waistToAboveKnee == null ||
      choosenProduct.shoulderToWaist == null ||
      choosenProduct.vNeckCut == null ||
      choosenProduct.wrist == null ||
      choosenProduct.foreArm == null ||
      choosenProduct.bicep == null ||
      choosenProduct.armHole == null ||
      choosenProduct.shoulderSeam == null ||
      choosenProduct.armLength == null ||
      choosenProduct.aboveKneeToAnkle == null ||
      choosenProduct.neckToAboveHeel == null ||
      choosenProduct.neckToHeel == null ||
      choosenProduct.hips == null ||
      choosenProduct.waist == null ||
      choosenProduct.underBust == null
    ) {
      setToast({
        type: "error",
        message: "Please enter remaining values for custom size",
      });
    }

    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    setChoosenProduct({
      size: "Custom",
      unit: key,
    });
  };

  const [key, setKey] = useState("cm");

  return (
    <div className="d-flex align-items-end justify-content-between pt-2">
      <select
        className="form-control"
        value={choosenProduct.size}
        onChange={(e) => {
          setChoosenProduct({
            size: e.target.value,
          });
        }}
      >
        {currentProduct?.dressSize.map((option) => (
          <option value={option}>{option}</option>
        ))}
        <option value={"Custom"}>{"Custom"}</option>
      </select>

      <span
        onClick={handleShow}
        className="letter-spacing-cart cursor-pointer shadow-shop ml-3 py-2 text-uppercase mb-0 px-1 font-Futura-light"
      >
        Custom Size
      </span>

      <Modal size="lg" className="w-100" show={show} onHide={handleClose}>
        <Modal.Body className="bg-transparent-dark">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <img className="h-80vh" src={CustomSize} alt="" />
                <img className="ml-2" src={View} alt="" />
              </div>
              <div className="col-md-6 font-Futura-light text-white">
                <h3>Change Units</h3>

                <Tabs
                  id="controlled-tab-example"
                  className="border-0 bg-transparent"
                  activeKey={key}
                  onSelect={(k) => {
                    setKey(k);
                    setChoosenProduct({
                      unit: k,
                    });
                  }}
                >
                  <Tab
                    tabClassName="border border-white "
                    eventKey="cm"
                    title="Cm"
                  >
                    <MeasurementForm />
                  </Tab>
                  <Tab
                    tabClassName="border border-white  ml-2"
                    eventKey="inch"
                    title="Inch"
                  >
                    <MeasurementForm />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-transparent-dark justify-content-center border-0">
          <Button variant="dark" onClick={handleClose}>
            Save And Exit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentProduct: state.app.currentProduct,
  choosenProduct: state.app.choosenProduct,
});
export default connect(mapStateToProps, { setChoosenProduct, setToast })(
  Measurements
);

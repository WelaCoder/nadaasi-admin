import React, { useCallback, useState, useEffect } from "react";

import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { SketchPicker } from "react-color";
import { useDropzone } from "react-dropzone";
import Toggle from "react-toggle";
import axios from "axios";
import { OPTIONS } from "../../config/selectConfig";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { addProduct, loadDressTypes } from "../../actions/appActions";
const ProductForm = ({ addProduct, addingProduct, loadDressTypes, dressTypeOptions }) => {
  useEffect(() => {
    loadDressTypes();
  }, []);
  const [images, setImages] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const [currentColor, setcurrentColor] = useState("#ffffff");
  const [inStock, setInStock] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setdata] = useState({
    images: [],
    name: "",
    price: "",
    dressType: null,
    dressSize: [],
    bodyType: [],
    dressColor: [],
    fabric: "",
    closure: "",
    length: "",
    neckLine: "",
    waistLine: "",
    details: "",
    modelHeightSize: "",
    stock: "",
    inStock: true,
  });

  const [placeholder, setPlaceHolder] = useState([]);
  const [inputValues, setValues] = useState({});
  const onDrop = useCallback((acceptedFiles) => {
    const placeholderArray = [];
    setImages(acceptedFiles);

    acceptedFiles.map((file) =>
      placeholderArray.push(URL.createObjectURL(file))
    );

    setPlaceHolder(placeholderArray);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onSubmit = async () => {
    // e.preventDefault();
    if (String(data.price) == "") {
      toast.error("Please enter price for the dress.");
      return;
    } else if (data.neckLine == "") {
      toast.error("Please enter neck line for the dress.");
      return;
    } else if (data.waistLine == "") {
      toast.error("Please enter waist line for the dress.");
      return;
    }
    else if (data.details == "") {
      toast.error("Please enter details for the dress.");
      return;
    }
    else if (data.modelHeightSize == "") {
      toast.error("Please enter model height and size for the dress.");
      return;
    }
    else if (data.name == "") {
      toast.error("Please enter name for the dress.");
      return;
    }
    else if (data.dressType == "") {
      toast.error("Please enter dress type for the dress.");
      return;
    }
    else if (data.fabric == "") {
      toast.error("Please enter fabric for the dress.");
      return;
    }
    else if (data.closure == "") {
      toast.error("Please enter closure for the dress.");
      return;
    }
    else if (data.dressSize.length < 1) {
      toast.error("Please enter dress size for the dress.");
      return;
    }
    else if (data.dressColor.length < 1) {
      toast.error("Please enter dress color for the dress.");
      return;
    }
    else if (data.bodyType.length < 1) {
      toast.error("Please enter body type for the dress.");
      return;
    } else if (placeholder.length < 1) {
      toast.error("Please images for the dress.");
      return;
    }
    setIsLoading(true);
    const product = new FormData();
    images.map((file) => product.append("images", file));
    product.append("price", data.price);
    product.append("name", data.name);
    product.append("rating", "5");
    product.append("size", data.dressSize);
    product.append("color", data.dressColor);
    product.append("dressType", data.dressType);
    product.append("inStock", data.inStock);
    product.append("details", data.details);
    product.append("fabric", data.fabric);
    product.append("closure", data.closure);
    product.append("length", data.length);
    product.append("neckline", data.neckLine);
    product.append("waistline", data.waistLine);
    product.append("modelHeightSize", data.modelHeightSize);
    product.append("bodyType", data.bodyType);
    product.append("stock", data.stock);
    setdata({
      images: [],
      name: "",
      price: "",
      dressType: null,
      dressSize: [],
      bodyType: [],
      dressColor: [],
      fabric: "",
      closure: "",
      length: "",
      neckLine: "",
      waistLine: "",
      details: "",
      modelHeightSize: "",
      stock: "",
      inStock: true,
    });
    setPlaceHolder([]);
    setImages([]);
    setValues({ dressType: null, dressSize: [], bodyType: [], });
    console.log("submitted");
    console.log(data);
    let success = await addProduct(product);
    setIsLoading(false);
    if (success) toast.success("Successfully added new product");
  };
  const onChange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const [showSelect, setShowSelect] = useState(true);
  return (
    <div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-between">
          <h3 className="mb-0 font-weight-bold text-info">Upload Product</h3>
          <div className="d-flex justify-content-end align-items-center">
            <span className="mr-2">In Stock</span>
            <Toggle
              id="123"
              defaultChecked={inStock}
              onChange={(e) => {
                setdata({
                  ...data,
                  inStock: e.target.checked,
                });
              }}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <div className="bg-white my-3 d-flex justify-content-center border shadow-sm py-5 mb-2">
                <span className="text-info font-weight-bold">
                  Drop the files here ...
                </span>
              </div>
            ) : (
                <div className="bg-white my-3 d-flex justify-content-center border shadow-sm py-5 mb-2">
                  <span className="text-info font-weight-bold">
                    Drag n Drop Image Here Or Click to Select..
                </span>
                </div>
              )}
          </div>
        </div>
        <div className="col-md-12">
          <div className="d-flex mb-3 wrap">
            {placeholder.map((img) => (
              <img
                className="img-thumbnail h-300px mr-3 mb-2"
                src={img}
                alt={img}
              />
            ))}
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={onChange}
              // ref={register}
              required
              className="form-control"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">

            <input
              type="text"
              className="form-control"
              name="price"
              value={data.price}
              onChange={onChange}
              required
              // ref={register}
              placeholder="€ 0.00"
            />
            <p className="small text-muted">Enter price in Euro</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-8 pr-1">
              <div className="form-group">
                {showSelect ? <Select
                  // defaultValue={dressTypeOptions != null && dressTypeOptions[0]}
                  // value={{ label: "label", value: "value" }}
                  placeholder="Select Dress Type.."
                  name="bodyType"
                  // innerRef={register}
                  value={inputValues.dressType}
                  options={dressTypeOptions != null && dressTypeOptions}
                  onChange={(value) => {
                    setValues({ ...inputValues, dressType: value })
                    console.log(value);
                    setdata({
                      ...data,
                      dressType: value.value.toString(),
                    });
                  }}
                /> :
                  <input
                    type="text"
                    name="dressType"
                    value={data.dressType}
                    onChange={(e) => {
                      setdata({
                        ...data,
                        dressType: e.target.value.toString(),
                      });
                    }}
                    // ref={register}
                    required
                    className="form-control"
                    placeholder="Dress Type"
                  />}


              </div>
            </div>
            <div className="col-4 mt-1 p-0">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={(e) => { console.log(e.target.checked); setShowSelect(!e.target.checked) }} />
                <label class="form-check-label" for="exampleCheck1">Custom</label>
              </div>
            </div>
          </div>


        </div>
        <div className="col-md-6">
          <div className="form-group">
            <Select
              defaultValue={[]}
              isMulti
              placeholder="Select Dress Size.."
              name="colors"
              value={inputValues.dressSize}
              // innerRef={register}
              options={OPTIONS.dressSizeOptions}
              onChange={(values) => {
                values !== null &&
                  setdata({
                    ...data,
                    // dressColor: "value",
                    dressSize: values.map((value) => value.value),
                  });
                setValues({ ...inputValues, dressSize: values })
              }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <Select
              defaultValue={[]}
              isMulti
              placeholder="Select Body Type.."
              name="bodyType"
              // innerRef={register}
              value={inputValues.bodyType}
              options={OPTIONS.bodyTypeOptions}
              onChange={(values) => {
                values !== null &&
                  setdata({
                    ...data,
                    // dressColor: "value",
                    bodyType: values.map((value) => value.value),
                  });
                setValues({ ...inputValues, bodyType: values, })
              }}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <input
              name="stock"
              value={data.stock}
              onChange={onChange}
              // required
              // ref={register}
              type="text"
              className="form-control"
              placeholder="Enter Stock"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <div className="row">
              <div className="col-5">
                <a
                  id={"addColorBtn"}
                  href={"#!"}
                  className="btn btn-light"
                  onClick={() => {
                    setShowPicker(!showPicker);
                    if (showPicker) {
                      setdata({
                        ...data,
                        dressColor: [...data.dressColor, currentColor],
                      });
                    }
                  }}
                >
                  Add Color
                </a>
              </div>
              <div className="col-7">
                <div className="d-block">
                  <div
                    className="row"
                    style={{
                      // height: "27px",
                      backgroundColor: "white",
                      borderRadius: "20px",
                      // padding: "20px",
                      // width: "30px",
                    }}
                  >
                    {data.dressColor.map((color) => (
                      <div
                        className="col-lg-2 col-md-2 p-0"
                        onClick={() => {
                          setdata({
                            ...data,
                            dressColor: data.dressColor.filter(
                              (value) => value != color
                            ),
                          });
                        }}
                      >
                        <div
                          className={"my-2  "}
                          style={{
                            height: "27px",
                            color: "blue",
                            borderRadius: "7px",
                            // width: "30px",
                            marginLeft: "5px",
                            marginRight: "5px",
                            backgroundColor: color,
                            border:
                              color == "#ffffff" ? "1px solid #f1f1f1" : "",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {showPicker && (
              <SketchPicker
                color={currentColor}
                onChangeComplete={(val) => {
                  console.log(val);

                  setcurrentColor(val.hex);
                }}
              />
            )}
          </div>
          {/* <div className="form-group">
            <CreatableSelect
              isMulti
              placeholder="Select Dress Color.."
              options={OPTIONS.dressColorOptions}
              onChange={(values) => {
                values !== null &&
                  setDressColor(values.map(({ value }) => value));
              }}
            />
          </div> */}
        </div>
        <div className="col-md-12">
          <div className="d-flex justify-content-between">
            <h4 className="font-weight-bold text-info">Product Details</h4>
            <span className="tag ">Optional</span>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <input
                  name="closure"
                  // ref={register}
                  value={data.closure}
                  onChange={onChange}
                  required
                  type="text"
                  className="form-control"
                  placeholder="Enter Closure"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <input
                  name="fabric"
                  value={data.fabric}
                  onChange={onChange}
                  required
                  // ref={register}
                  type="text"
                  className="form-control"
                  placeholder="Enter Fabric"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <input
                  name="length"
                  value={data.length}
                  onChange={onChange}
                  required
                  // ref={register}
                  type="text"
                  className="form-control"
                  placeholder="Enter Length"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="neckLine"
                  value={data.neckLine}
                  onChange={onChange}
                  required
                  // ref={register}
                  type="text"
                  className="form-control"
                  placeholder="Enter Neckline"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="waistLine"
                  // ref={register}
                  value={data.waistLine}
                  onChange={onChange}
                  required
                  type="text"
                  className="form-control"
                  placeholder="Enter Waistline"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="details"
                  // ref={register}
                  value={data.details}
                  onChange={onChange}
                  required
                  type="text"
                  className="form-control"
                  placeholder="Enter Details"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="modelHeightSize"
                  value={data.modelHeightSize}
                  onChange={onChange}
                  required
                  // ref={register}
                  type="text"
                  className="form-control"
                  placeholder="Enter Model Height And Size"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 ">
          <button
            href={"#!"}
            type="submit"
            onClick={onSubmit}
            className="btn btn-block btn-dark mb-2"
            disabled={isLoading}
          >
            <span
              className={
                isLoading ? "mr-2 spinner-border spinner-border-sm" : ""
              }

              role="status"
              aria-hidden="true"
            ></span>
            {isLoading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  addingProduct: state.app.addingProduct,
  dressTypeOptions: state.app.dressTypeOptions,
});
export default connect(mapStateToProps, { addProduct, loadDressTypes })(ProductForm);

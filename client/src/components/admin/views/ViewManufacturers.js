import React, { useEffect, useState } from "react";
// import axios from "axios";

import { Container } from "reactstrap";
// import { useIsAdmin } from "../hooks/useIsAdmin";
import Loader from "../spinner";
// import { setAuthorizationToken } from "../helpers/utils";
import NotFound from "../NotFound";
import Header from "../header";
import { connect } from "react-redux";
import { loadManufacturers } from "../../../actions/manufacturer_actions";
import ManufacturerList from "../manufacturer/manufacturerList";
const ViewManufacturers = ({ manufacturer: { manufacturers }, loadManufacturers }) => {
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        loadManufacturers();
    }, []);

    return (
        <Container className="mt-4" fluid>
            <div className="col-md-12">
                {manufacturers == null ? (
                    <Loader />
                ) : (
                        <div className="row">
                            <div className="col-md-10 container">
                                <Header heading="Manufacturers" item={manufacturers} />
                                <>
                                    {manufacturers.length > 0 ? (
                                        <ManufacturerList manufacturers={manufacturers} />
                                        // <></>
                                    ) : (
                                            <NotFound message="No Manufacturers Added yet." />
                                        )}
                                </>
                            </div>
                        </div>
                    )}
            </div>
        </Container>
    );
};
const mapStateToProps = (state) => ({
    manufacturer: state.manufacturer,
});
export default connect(mapStateToProps, { loadManufacturers })(ViewManufacturers);

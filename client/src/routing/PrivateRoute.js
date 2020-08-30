import React from 'react'
import { Route , Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({ component: Component
    , adminauth: { isAuthenticate, isloading , isAdmin },
    ...rest }) => (
    <Route
        { ...rest }
        render={ props => !isAuthenticate && !isloading && !isAdmin  ? (
            <Redirect to='/admin' />
        ) : (
                <Component { ...props } />
            )
        } />
    )
const mapStateToProps = state => ({
    adminauth: state.adminauth
})
export default connect(mapStateToProps)(PrivateRoute)
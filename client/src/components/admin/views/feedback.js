import React, { useEffect, useState } from "react";
// import axios from "axios";

import { Container } from "reactstrap";
// import { useIsAdmin } from "../hooks/useIsAdmin";
import  Loader  from "../spinner";
// import { setAuthorizationToken } from "../helpers/utils";
import NotFound from "../NotFound";
import Header from "../header";
import FeedbackList from "../feedback/feedbackList";
import { connect } from "react-redux";
import { getFeedback } from '../../../actions/feedback';
// export const stringTruncate = (str, length) => {
//   const dots = str.length > length ? "..." : "";
//   return `${str.substring(0, length)}${dots}`;
// };
 const Feedback = ({getFeedback , feedback : {feedbacks}}) => {
  // const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useIsAdmin();

  useEffect(() => {
    // setAuthorizationToken();
    // axios
    //   .get("/feedback")
    //   .then((res) => {
    //     setFeedback(res.data);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //     setIsLoading(false);
    //   });
    getFeedback();

  }, []);

  return (
    <Container className="mt-4" fluid>
      <div className="col-md-12">
        {feedbacks.length === 0? (
          <Loader />
        ) : (
          <div className="row">
            <div className="col-md-10 container ">
              <Header heading="User Feedback" item={feedbacks} />
              <>
                {feedbacks.length > 0 ? (
                  <FeedbackList feedbacks={feedbacks} />
                ) : (
                  <NotFound message="No Feedback Added from the users." />
                )}
              </>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};
const mapStateToProps = state => ({
  feedback : state.feedback
})
export default connect(mapStateToProps , {getFeedback})(Feedback);
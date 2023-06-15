/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Avatar from "../../components/Avatar/Avatar";

const DisplayAnswer = ({ question }) => {
  const { id } = useParams();
  const User = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();

  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button
                type="button"
                //   onClick={handleShare}
              >
                Share
              </button>
              {
                //   User?.result?._id === ans?.userId &&
                <button
                  type="button"
                  // onClick={() => handleDelete(ans._id, question.noOfAnswers)}
                >
                  Delete
                </button>
              }
            </div>
            <div>
              <p>
                answered {ans.answeredOn}
                {/* {moment(ans.answeredOn).fromNow()} */}
              </p>
              <Link to={`/Users/${ans.userId}`} className="user-link" style={{ color: "#0086d8" }}>
                <Avatar backgroundColor="lightgreen" px="8px" py="5px" borderRadius="4px">
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div>{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;

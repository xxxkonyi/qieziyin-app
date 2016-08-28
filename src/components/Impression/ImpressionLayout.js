import React, {PropTypes} from "react";
import ImpressionGrid from "./ImpressionGrid";

const ImpressionLayout = ({impressions}) => {
  return (
    <ImpressionGrid impressions={impressions.results}/>
  )
}

ImpressionLayout.propTypes = {
//  duang: PropTypes.objectOf(PropTypes.shape({
//    message: PropTypes.string.isRequired,
//    counter: PropTypes.number.isRequired
//  }).isRequired).isRequired,
//  message: PropTypes.string.isRequired,
//  counter: PropTypes.number.isRequired,
//  doDuang: PropTypes.func.isRequired
}

export default ImpressionLayout
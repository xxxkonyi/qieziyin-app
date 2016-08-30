import React, {PropTypes} from "react";
import {Grid, Cell} from "react-mdl";
import ImpressionCard from "./ImpressionCard";

const ImpressionGrid = ({impressions}) => {
  return (
    <div style={{maxWidth: "1024px", margin: "auto"}}>
      <Grid noSpacing>
        {
          impressions.map(impression =>
            <Cell col={12} phone={12} tablet={12}>
              <ImpressionCard key={impression.id} {...impression}/>
            </Cell>
          )
        }
      </Grid>
    </div>
  )
  // return (
  //   <div style={{maxWidth: "1024px", margin: "auto"}}>
  //     {
  //       impressions.map(impression =>
  //         <ImpressionCard key={impression.id} {...impression}/>
  //       )
  //     }
  //   </div>
  // )
}

ImpressionGrid.propTypes = {
//  duang: PropTypes.objectOf(PropTypes.shape({
//    message: PropTypes.string.isRequired,
//    counter: PropTypes.number.isRequired
//  }).isRequired).isRequired,
//  message: PropTypes.string.isRequired,
//  counter: PropTypes.number.isRequired,
//  doDuang: PropTypes.func.isRequired
}

export default ImpressionGrid
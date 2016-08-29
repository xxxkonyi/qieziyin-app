import moment from "moment";
import React, {PropTypes} from "react";
import S from "shorti";
import {Card, CardTitle, CardMedia, CardText, CardMenu, IconButton, CardActions} from "react-mdl";

const ImpressionCard = ({...impression}) => {
  let imageUrl = impression.image.urls.raw
  let avatar = impression.user.avatar.small
// style={{background: 'rgba(0,0,0,0.5)'}}
  return (
    <Card shadow={0} className="impression" style={{background: 'url(' + imageUrl + ') center / cover', color: '#fff'}}>
      <CardTitle expand></CardTitle>
      <CardText style={{color: '#fff'}}>
        {impression.content}
      </CardText>
      <CardActions style={{display: 'flex', alignItems: 'center'}}>
        <span>
          <img src={avatar} alt='Avatar' className="img-circle img-responsive"/>
        </span>
        <div className="mdl-layout-spacer"></div>
        <span>{moment(impression.created_at).format('llll')}</span>
      </CardActions>
      <CardMenu>
        <IconButton name="favorite"/>
      </CardMenu>
    </Card>
  )
}

ImpressionCard.propTypes = {
//  duang: PropTypes.objectOf(PropTypes.shape({
//    message: PropTypes.string.isRequired,
//    counter: PropTypes.number.isRequired
//  }).isRequired).isRequired,
//  message: PropTypes.string.isRequired,
//  counter: PropTypes.number.isRequired,
//  doDuang: PropTypes.func.isRequired
}

export default ImpressionCard
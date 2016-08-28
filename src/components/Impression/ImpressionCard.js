import React, {PropTypes} from "react";
import S from "shorti";
import {Card, CardTitle, CardText, CardMenu, IconButton, CardActions, Button, ChipContact} from "react-mdl";

const ImpressionCard = ({...impression}) => {
  let imageUrl = impression.image.urls.regular
  let avatar = impression.user.avatar.small
// style={{background: 'rgba(0,0,0,0.5)'}}
  return (
    <Card shadow={0} style={{background: 'url(' + imageUrl + ') center / cover', margin: 'auto'}}>
      <CardTitle expand />
      <CardText style={{background: 'rgba(0,0,0,0.2)', padding: '0', width: '100%', color: '#fff'}}>
        <p style={ S('m-0 p-8 color-ddd') }>{impression.content}</p>
      </CardText>
      <CardActions style={{background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', color: '#fff'}}>
        <span>
          <img src={avatar} alt="Avatar" className="img-circle img-responsive"/>
        </span>
        <div className="mdl-layout-spacer"></div>
        <span>{impression.created_at}</span>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
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
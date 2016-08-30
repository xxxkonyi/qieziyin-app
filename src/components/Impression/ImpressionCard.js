import moment from "moment";
import React, {PropTypes} from "react";
import {Card, CardTitle, CardMedia, CardText, CardMenu, IconButton, CardActions} from "react-mdl";

const ImpressionCard = ({...impression}) => {
  let imageUrl = impression.image.urls.regular
  let avatar = impression.user.avatar.small
// style={{background: 'rgba(0,0,0,0.5)'}} style={{backgroundColor: '' + impression.image.color + ''}}
  return (
    <Card shadow={6} className="impression" style={{background: 'url(' + imageUrl + ') center / contain'}}>
      {/*<CardActions style={{display: 'flex', alignItems: 'center', color: '#ddd'}}>*/}
        {/*<a href="/">*/}
          {/*<img src={avatar} alt='Avatar' className="img-circle"/>*/}
          {/*<span style={{display: 'inline-block',verticalAlign: 'middle', paddingLeft: '5px', lineHeight: '32px', color: '#ddd'}}>{impression.user.name}</span>*/}
        {/*</a>*/}
        {/*<div className="mdl-layout-spacer"></div>*/}
        {/*<span></span>*/}
      {/*</CardActions>*/}
      {
        (!impression.content || impression.content == null || impression.content == '') ? (null) : (
          <div className="content">
            <p style={{margin: 0}}>{impression.content}123</p>
          </div>
        )
      }
      <CardMedia style={{margin: "auto"}}>
        <img src={imageUrl} className="img"/>
      </CardMedia>
      <span className="datetime">{moment(impression.created_at).format('llll')}</span>
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
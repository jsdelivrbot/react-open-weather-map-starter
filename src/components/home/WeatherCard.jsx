import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

class WeatherCard extends Component {

  render() {
    let icon = this.props.icon
    if (this.props.loading) {
      icon = 'https://gingerup.co/images/loader2.gif'
    } else if (icon) {
      icon = `http://openweathermap.org/img/w/${this.props.icon}.png`
    } else {
      icon = 'http://www.qygjxz.com/data/out/203/5089507-search-pictures.png'
    }

    return (
      <div className='card-container' style={{textAlign: 'center'}}>
        <Card>
          <CardImg top style={{width:100, margin:'auto'}} src={icon} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardSubtitle>{this.props.subtitle ? this.props.subtitle : ''}</CardSubtitle>
            <CardText>{this.props.text ? this.props.text : ''}</CardText>
            <CardText>{this.props.receivedAt ? this.props.receivedAt : ''}</CardText>
            <CardText>{this.props.temperature ? this.props.temperature : ''}</CardText>

          </CardBody>
        </Card>
      </div>
    );
  }

}

export default WeatherCard

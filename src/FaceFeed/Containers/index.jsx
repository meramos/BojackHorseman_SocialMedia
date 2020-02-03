import React, { PureComponent } from 'react';
import './index.css';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import facefeed_video from "../../assets/images/facefeed_video.png"

export default class FaceFeed extends PureComponent{
  render(){

    let factor = 1.5;

    let view_height = 960/factor + 'px';

    let leftcolumn_width = 377/factor + 'px';

    let video_width = 894/factor + 'px';
    
    return (
      <div id="facefeed_body">
        <Container style={{paddingTop:'100px',paddingBottom:'89px'}}>
          <Row>
            <Col>
              <div style={{backgroundColor:"white", width:leftcolumn_width, height:view_height}}></div>
            </Col>            
            <Col>
              <img src={facefeed_video} height={view_height} width={video_width} alt="video"/>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
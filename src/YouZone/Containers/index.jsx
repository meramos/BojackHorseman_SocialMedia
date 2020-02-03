import React, { PureComponent } from 'react';
import './index.css';

import {FaHeart, FaThumbsUp, FaThumbsDown} from 'react-icons/fa'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import pickles_video from "../../assets/images/pickles_purrfect_video.png"
import thumbnail1 from "../../assets/images/thumbnail1.png"
import thumbnail2 from "../../assets/images/thumbnail2.png"
import thumbnail3 from "../../assets/images/thumbnail3.png"
import logo from "../../assets/logos/youzone.png"
import ad1 from "../../assets/images/ad_1.png"
import profilepic from "../../assets/images/profilepic_youzone.png"

// width={'868px'} height={'499px'}

export default class YouZone extends PureComponent{

  constructor(props){
    super(props);

    this.state = {
      hearts: 0,
      likes: 0,
      dislikes: 0,
      subscribed: true
    };
  }

  updateHearts(){
    this.setState({
      hearts: this.state.hearts + 1
    })
  }

  updateLikes(){
    this.setState({
      likes: this.state.likes + 1
    })
  }

  updateDislikes(){
    this.setState({
      dislikes: this.state.dislikes + 1
    })
  }

  updateSubscribed(){
    this.setState({
      subscribed: !this.state.subscribed
    })
  }

  render(){

    let {hearts, likes, dislikes, subscribed} = this.state;

    let factor = 1.5;

    let video_height = 748/factor + 'px';
    let video_width = 1302/factor + 'px';
    let video_title = "Pickles' purrfect Cat eye Tutorial";
    let video_date = '02/20/2013';

    let username = "Pickles_Pretties93";
  
    let video_thumbnail_height = 182/factor + 'px' //'499px';
    let video_thumbnail_width = 308/factor + 'px' //'868px';

    let logo_height = 252/(factor) + 'px';
    let logo_width = 456/(factor) + 'px';

    let ad_height = 136/factor + 'px';
    let ad_width = 868/factor + 'px';

    let subcribe_button_height = 41/factor + 'px';
    let subcribe_button_width = 268/factor + 'px';

    let profile_pic_dim = 135/factor + 'px';

    return (
      <div id="youzone_body">
        <Container style={{paddingTop:'150px',paddingBottom:'107px'}}>
          <Row>
            <Col>
              {/* Video */}
              <Row>
                <img id="video_viewer" src={pickles_video} height={video_height} width={video_width} alt="video"/>
              </Row>
              {/* Title, date, views, buttons */}
              <Row>
                  <div className="youzone_text" style={styles.video_title}>
                    {video_title} 
                  </div>
                  <div className="youzone_text" style={styles.video_date}>
                    {video_date}
                  </div>
                  <div className="youzone_text" style={styles.views}>
                    <p > 
                      views: 22 
                      <a href="#/youzone" onClick={this.updateHearts.bind(this)} style={{marginLeft:'10px'}}>
                        <FaHeart color='#fe1500' size='1.3em'/>
                      </a> {hearts} 
                      <a href="#/youzone" onClick={this.updateLikes.bind(this)} style={{marginLeft:'10px'}}>
                        <FaThumbsUp color='#0063c4' size='1.3em'/>
                      </a> {likes}
                      <a href="#/youzone" onClick={this.updateDislikes.bind(this)} style={{marginLeft:'10px'}}>
                        <FaThumbsDown color='#ef1805' size='1.3em'/> 
                      </a> {dislikes}
                      </p>
                  </div>
              </Row>
              {/* Username, subscribe button */}
              <Row>
                <div className="youzone_text"><h5>{username}</h5></div>
                <button className="subscribe_button"  onClick={this.updateSubscribed.bind(this)}
                        style={{marginLeft: '10px',width:subcribe_button_width, height:subcribe_button_height}}>
                  {subscribed ? "SUBSCRIBE" : "UNSUBSCRIBE"}
                </button>
              </Row>
              {/* Profile picture, advertisement */}
              <Row>
                {/* Profile picture */}
                <Col>
                  <a href='#/youzone'>
                    <img id="youzone_profilepic" src={profilepic} height={profile_pic_dim} width={profile_pic_dim} alt="profilepic"/>
                  </a>
                </Col>
                {/* Advertisement */}
                <Col xl={9}>
                  <a href='#/youzone'>
                    <img id="ad1" src={ad1} height={ad_height} width={ad_width} alt="advertisement"/>
                  </a>
                </Col>
              </Row>
            </Col>
            <Col xl={2}>
              <div className="youzone_text" style={{color:'grey'}}>Up next ...</div>
              {/* Thumbnail 1 */}
              <a href='#/youzone'>
                <img id="video_thumbnail_1" src={thumbnail1} height={video_thumbnail_height} width={video_thumbnail_width} alt="thumbnail"/>
                <div className="youzone_text" style={styles.thumbnail_text}>
                    goth eyes tutorial <br></br>
                    4 views 4 days ago
                </div>
              </a>
              {/* Thumbnail 2 */}
              <a href='#/youzone'>
                <img id="video_thumbnail_2" src={thumbnail2} height={video_thumbnail_height} width={video_thumbnail_width} alt="thumbnail"/>
                <div className="youzone_text" style={styles.thumbnail_text}>
                    Hot pepper challenge <br></br>
                    16 views 4 days ago
                </div>
              </a>
              {/* Thumbnail 3 */}
              <a href='#/youzone'>
                <img id="video_thumbnail_3" src={thumbnail3} height={video_thumbnail_height} width={video_thumbnail_width} alt="thumbnail"/>
                <div className="youzone_text" style={styles.thumbnail_text}>
                    My day at the hospital <br></br>
                    8 views 4 days ago
                </div>
              </a>
              { /* Youzone logo */ }
              <img id="youzone_logo" src={logo} height={logo_height} width={logo_width} alt="logo"/>
            </Col>
          </Row>
        </Container>
        
      </div>
    );
  }
}

const styles = {
  video_title:{
    fontSize: '1.5em'
  },
  video_date:{
    fontSize: '1.2em',
    position: 'relative',
    paddingTop: '5px',
    marginLeft: '20px'
  },
  views:{
    position: 'relative',
    paddingTop: '8px',
    marginLeft: '30px'
  },
  thumbnail_text:{
    fontSize: '0.6em'
  }
}
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'


export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <div>
          <Link to="/facefeed">
            <Button type="primary">FaceFeed</Button>
          </Link>
          <Link to="/tweedfeed">
            <Button type="primary">TweedFeed</Button>
          </Link>
          <Link to="/youzone">
            <Button type="primary">YouZone</Button>
          </Link>
          <Link to="/zoneface">
            <Button type="primary">ZoneFace</Button>
          </Link>
        </div>
      </div>
    );
  }
}
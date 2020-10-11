import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Certifications extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>{this.props.course}</p>
        </Cell>
        <Cell col={4}>
          <p>{this.props.certificateID}</p>
        </Cell>
        <Cell col={2}>
          <p> {this.props.endDate}</p>
        </Cell>
        <Cell col={2}>
          <a
            href={this.props.certificateURL}
            target='_blank'
            rel='noopener noreferral'
          >
            Certificate link
          </a>
        </Cell>
      </Grid>
    );
  }
}

export default Certifications;

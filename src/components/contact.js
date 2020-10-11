import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Officephoto from '../img/OfficeEnjoy.jpg';

class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2> Meghraj Falle</h2>
            <img src={Officephoto} alt='avatar' style={{ height: '350px' }} />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              Loves to develop sites using ReactJs. A fitness enthusiast, always
              trying to learn new technologies and believes that practice is the
              key to gain the expertise. Please get in touch for relevant
              discussion.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me </h2>
            <hr />
            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-phone-square' aria-hidden='true' />
                    +91 7972539965
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-whatsapp' aria-hidden='true' />
                    +91 7972539965
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-envelope' aria-hidden='true' />
                    meghrajfalle@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-skype' aria-hidden='true' />
                    MySkypeID
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;

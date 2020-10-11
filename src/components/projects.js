import React, { Component } from 'react';
import ContactKeeper from '../img/id-card.png';
import ProjectManagement from '../img/projectmanagement.png';
import GithubFinder from '../img/github-finder.png';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='projects-grid'>
          {/** Project 1 */}
          <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background: `url(${ContactKeeper}) center / cover`
              }}
            ></CardTitle>
            <CardText className='cardText'>
              <p className='cardHeadingText'> Contact Keeper</p>
              Contact-Keeper is a Full Stack App for storing contacts and
              searching them based on name and email. This site uses ReactJs at
              frontend and NodeJS at backend and the database used is MonogoDB.
            </CardText>
            <CardActions border>
              <Button>
                <a
                  href='https://github.com/meghrajfalle/contact-keeper'
                  target='_blank'
                  rel='noopener norefferal'
                  className='button-link'
                >
                  Github
                </a>
              </Button>
              <Button colored>
                <a
                  href='https://contact-keeper-megh.herokuapp.com/'
                  target='_blank'
                  rel='noopener norefferal'
                  className='button-link'
                >
                  Visit Site
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/** Project 2 */}
          <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background: `url(${GithubFinder}) center / cover`
              }}
            ></CardTitle>
            <CardText className='cardText'>
              <p className='cardHeadingText'> Github Finder</p>
              Github Finder is a ReactJS webapplication where you can search for
              anybody's github username and checkout their repos and profile
              information. It fetches the results from githubs exposed APIs.
            </CardText>
            <CardActions border>
              <Button>
                <a
                  href='https://github.com/meghrajfalle/github-finder'
                  target='_blank'
                  rel='noopener norefferal'
                  className='button-link'
                >
                  Github
                </a>
              </Button>
              <Button colored>
                <a
                  href='https://github-findermegh.netlify.app/'
                  target='_blank'
                  rel='noopener norefferal'
                  className='button-link'
                >
                  Visit Site
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/** Project 3 */}
          <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background: `url(${ProjectManagement}) center / cover`
              }}
            ></CardTitle>
            <CardText className='cardText'>
              <p className='cardHeadingText'>
                Personal Project Management Tool
              </p>
              Personal Project Management Tool is used to create and manage your
              own projects and the projects tasks inside it. It holds data of
              all the projects and its tasks, their statuses(Todo, In Progress,
              Done).
            </CardText>
            <CardActions border>
              <Button>
                <a
                  href='https://github.com/meghrajfalle/HerokuDeployedPPMTool'
                  target='_blank'
                  rel='noopener norefferal'
                  className='button-link'
                >
                  Github
                </a>
              </Button>
              <Button colored>
                <a
                  href='https://projectmanagement-app.herokuapp.com/'
                  target='_blank'
                  rel='noopener norefferal'
                  className='button-link'
                >
                  Visit Site
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          {/** Project 1 */}
          <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe) center / cover'
              }}
            >
              Sample Angular Project #1 {''}
            </CardTitle>
            <CardText>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h5>VueJS Projects Coming Soon!!</h5>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h5>MongoDB Projects Coming Soon!!</h5>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='category-tab'>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className='content'> {this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;

import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import MyProfile from '../img/MyProfile.png';
import Certifications from './certifications';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <img
              src={MyProfile}
              alt='avatar'
              style={{
                paddingTop: '5em',
                marginLeft: '5px',
                height: '350px'
              }}
            />

            <h2 style={{ paddingTop: '0em' }}>Meghraj Falle</h2>
            <h4 style={{ color: 'grey' }}>
              Software Engineer @ AppDirect | Java Developer | Full Stack
              Developer | ReactJS{' '}
            </h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p className='cardHeadingText'>Career Objective</p>
            <p>
              To work in a positive environment, with highly motivated people
              working smartly towards achieving the goal of organization, at the
              same time utilizing & improving my skills to achieve outstanding
              performance and delivering phenomenal result.
            </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p className='cardHeadingText'>Key Strengths</p>
            <ul>
              <li> Leadership Skills.</li>
              <li>
                Ready to work hard, adapt and adjust according to the situation.
              </li>
              <li>
                Good communication, presentation and relationship management
                skills..
              </li>
              <li> Self-motivated and have a positive attitude..</li>
              <li>
                Eager to update technical skills & have a desire to learn. Ready
                to work as a part of a team.
              </li>
            </ul>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p className='cardHeadingText'>Address</p>
            <p>Flat B2-7, Mangal Co-op Hsg. Society, Alandi Road, 411003</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p className='cardHeadingText'>Phone</p>
            <p>+91 7972539965 / +91 9112156679</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p className='cardHeadingText'>Email</p>
            <p>meghrajfalle@gmail.com / meghrajfalle@yahoo.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p className='cardHeadingText'>Web</p>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>
            <Education
              className='cardText'
              startYear={2013}
              endYear={2017}
              percentage={66.53}
              schoolName='Savitribai Phule Pune University'
              schoolDescription='Completed B.E. (Computer Engineering) from college Smt. Kashibai Navale College of Engineering, Vadgaon Bk, achieving, First class with Distinction.'
            />
            <Education
              startYear={2011}
              endYear={2012}
              percentage={78.0}
              schoolName='Kendriya Vidyalaya B.E.G. Yerawada, Pune'
              schoolDescription='Completed my HSC from CBSE board.'
            />
            <Education
              startYear={2011}
              endYear={2010}
              percentage={93.2}
              schoolName='Kendriya Vidyalaya O.F., Bhusawal'
              schoolDescription=' Completed my SSC from CBSE board.'
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Experience (3 yrs 2 months)</h2>
            <Experience
              startYear={2017}
              endYear={2019}
              jobName='Software Engineering Associate @ Amdocs'
              jobDescription='
              Coding of important core modules using JAVA which involves major business functionalities to align with the client expectation that will provide foundation for other modules of the system.
              Requirement Gathering, Analysis of Requirements, High Level Design, Low Level Design, Code Development, Unit Test Case Writing, Independent Unit Testing, Peer review , Code Review and Onsite-Offshore coordination.
              Coding of important changes as per the new requirement in the existing application.
              Solving the defects present in the OMS application.
              Responsible for knowledge transfer & mentoring of resources.'
            />
            <Experience
              startYear={2019}
              endYear='Presently working'
              jobName='Software Engineer @AppDirect'
              jobDescription='Working as a Software Engineer as part of Professional Services to resolve the issues related to AppDirect MarketPlace platform.
              Part of the customization team which deals with creating Customer Feature Request(CFR’s) and Change Request(CR’s) along with handling the defects/bugs related to the marketplace functionality so that customers can have a smooth experience while using it.
              Coding of important changes(CFR’s) as per the new requirement on the marketplace application and doing code Review.
              Programming Technologies used :
              Backend - Spring Rest, Spring Cloud, JPA, Java 1.8, Hibernate, Wicket. Frontend - ReactJS, Redux, JavaScript (ES6/ESNext), HTML5, CSS3.'
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Technical Skills</h2>
            <Skills skill='Java 1.8' progress={100} />
            <Skills skill='Spring Boot' progress={80} />
            <Skills skill='SQL' progress={80} />
            <Skills skill='Javascript' progress={80} />
            <Skills skill='HTML/CSS' progress={80} />
            <Skills skill='ReactJs' progress={70} />
            <Skills skill='NodeJs' progress={50} />

            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Certifications</h2>
            <Certifications
              course='React Front to Back'
              endDate='04 Oct 2020'
              certificateID='UC-c4da4f06-4ddc-46c6-972d-c89a7ae69a03'
              certificateURL='https://www.udemy.com/certificate/UC-c4da4f06-4ddc-46c6-972d-c89a7ae69a03'
            />
            <Certifications
              course='Full Stack Project: Spring Boot 2.0, ReactJS, Redux'
              endDate='26 Feb 2020'
              certificateID='UC-148aae49-874f-455e-91ce-002bdda88809'
              certificateURL='https://www.udemy.com/certificate/UC-148aae49-874f-455e-91ce-002bdda88809/'
            />
            <Certifications
              course='Master Microservices with Spring Boot and Spring Cloud​'
              endDate='02 Jan 2020'
              certificateID='UC-1EN9ZBR0'
              certificateURL='https://www.udemy.com/certificate/UC-1EN9ZBR0/'
            />
            <Certifications
              course='JAVA 8 New Features in Simple Way'
              endDate='13 Oct 2019'
              certificateID='UC-EIP46QOH'
              certificateURL='https://www.udemy.com/certificate/UC-EIP46QOH'
            />
            <Certifications
              course='React – The Complete Guide (incl Hooks, React Router, Redux)'
              endDate='09 Sep 2019'
              certificateID='UC-U7WESJ6O'
              certificateURL='https://www.udemy.com/certificate/UC-U7WESJ6O/'
            />
            <Certifications
              course='The Complete JavaScript Course 2019: Build Real Projects!'
              endDate='29 Aug 2019'
              certificateID='UC-AJ1U231M'
              certificateURL='https://www.udemy.com/certificate/UC-AJ1U231M/'
            />
            <Certifications
              course='RESTful Web Services with Spring Framework​'
              endDate='09 Jun 2019'
              certificateID='UC-IO51DEUO'
              certificateURL='https://www.udemy.com/certificate/UC-IO51DEUO/'
            />
            <Certifications
              course='Git crash course '
              endDate='02 Jul 2019'
              certificateID='UC-8W1IH41'
              certificateURL='https://www.udemy.com/certificate/UC-8W1IH41I/'
            />
            <Certifications
              course='Spring & Hibernate '
              endDate='06 Mar 2018'
              certificateID='UC-3A8R2P65'
              certificateURL='https://www.udemy.com/certificate/UC-3A8R2P65/'
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

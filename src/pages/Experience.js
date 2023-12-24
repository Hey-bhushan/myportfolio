import React from 'react'
import{VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#B56D44'>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='2015 - 2018' iconStyle={{background: '#923601', color:'#fff'}} icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'>
            CSMSS College of Polytechnic, Aurangabad
          </h3>
          <p>Diploma in Computer Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='2018 - 2021' iconStyle={{background: '#923601', color:'#fff'}} icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'>
            Marathwada Institute of Technology, Aurangabad
          </h3>
          <p>B. Tech in Computer and Science Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='2021 - Present' iconStyle={{background: '#923601', color:'#fff'}} icon={<WorkIcon/>}>
          <h3 className='vertical-timeline-element-title'>
            Cognizant Technology Solutions
          </h3>
          <p>Software Engineer</p>
        </VerticalTimelineElement>
      
      </VerticalTimeline>

      
    </div>
  );
}

export default Experience


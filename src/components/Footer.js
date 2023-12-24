import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import '../styles/Footer.css'


function Footer() {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/_hey_bhushan_/', '_blank');
  };
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/bhushan-dudhe-907aa0148/', '_blank');
  };
  const handleGitHubClick = () => {
    window.open('https://github.com/Hey-bhushan', '_blank');
  };
  const handleEmailClick = () => {
    window.location.href = 'mailto:dudhebhushan933@gmail.com';
  };
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon onClick={handleInstagramClick} />
            <LinkedInIcon onClick={handleLinkedInClick}/>
            <GitHubIcon onClick={handleGitHubClick}/>
            <EmailIcon onClick={handleEmailClick}/>
            {/*<p> &copy; Bhushan Dudhe</p>*/}
        </div>
    </div>
    
  )
}

export default Footer
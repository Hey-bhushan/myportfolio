import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import '../styles/Home.css'
function Home() {
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
    
    <div className='home'>
      <div className='about'>
          <h2>Hi, My Name is Bhushan</h2>
          <div className='prompt'>
              <p>A software engineer who loves to create cool things with code. I enjoy solving puzzles and making technology work seamlessly. Let's build something amazing together!</p>
              <div className='logo'>
                <LinkedInIcon onClick={handleLinkedInClick}/>
                <GitHubIcon onClick={handleGitHubClick}/>
                <EmailIcon onClick={handleEmailClick}/>
              </div>
          </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, Bootstrap
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              MySQL, Oracle SQL, Microsoft Azure, AWS S3
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>
              JavaScript, Java, Python
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home


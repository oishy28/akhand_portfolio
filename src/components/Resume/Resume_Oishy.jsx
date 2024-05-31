import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Resume_Oishy.css';
import { Link } from 'react-router-dom';

const Resume_Oishy = () => {
  return (
    <div><h2>Visual representation of the Resume</h2>
    <div className="resume">
      
      <div className="header">
        <h1>Oishy Fatema Akhand</h1>
        <p>+8801$$$$$$$$$</p>
        <p>
          <a href="mailto:oishyfatema@iut-dhaka.edu">oishyfatema@iut-dhaka.edu</a>
          {' - '}
          <a href="https://www.linkedin.com/in/oishy-fatema-akhand-5a6366280/"><FaLinkedin /></a>
          {' - '}
          <a href="https://github.com/oishy28"><FaGithub /></a>
        </p>
      </div>

      <div className="section">
        <hr />
        <p>
          I’m currently enrolled in the Islamic University of Technology’s (IUT) undergraduate Software Engineering (SWE) program under Computer Science and Engineering (CSE) department. I specialize in Frontend development, boasting proficiency in HTML, CSS, JavaScript, and React. My expertise extends to crafting compelling user interfaces, leveraging advanced UI design tools such as Figma. I am dedicated to continuous learning and have recently started working on a research project in ML, NLP, and LLM.
        </p>
        
      </div>

      <div className="section">
        
        <h2>Education</h2>
        <hr/>
        <div className="education">
          <div>
            <h3>Islamic University of Technology(IUT)</h3>
            <p>Department: Computer Science and Engineering</p>
            <p>Program: BSc in Software Engineering</p>
            <p>Current CGPA: 3.58 out of 4.00</p>
            <p>Estimated passing year: 2025</p>
          </div>
          <div>
            <h3>Rajshahi College</h3>
            <p>Higher Secondary (Science) - GPA: 5.00</p>
            <p>2018-2020</p>
          </div>
          <div>
            <h3>Govt. PN Girls' High School</h3>
            <p>Secondary School Certificate (Science) - GPA: 5.00</p>
            <p>2016-2018</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Technical Skills</h2>
        <hr/>
        <ul className="skills">
          <li>Frontend Technologies: HTML, CSS, React.js, Next.js</li>
          <li>Backend Technologies: Node.js, JavaScript</li>
          <li>Database Technologies: MySQL, MongoDB</li>
          <li>Cloud Services: Microsoft Azure</li>
          <li>Programming Languages: Python, C, C++, Java</li>
          <li>Design Tools: Figma, Adobe Illustrator</li>
          <li>Project Management Tools: Jira, Trello</li>
        </ul>
      </div>

      <div className="section">
        <h2>Experience</h2>
        <hr/>
        <div className="experience">
          <div>
            <h3>IUT Computer Society(IUTCS) - Publications</h3>
            <p>Islamic University of Technology(IUT), 2023</p>
            <p>Worked with the IUTCS Publications team to draft engaging content for posts highlighting academic achievements and seminars. Demonstrated strong writing skills by crafting concise and informative pieces to promote university events and accomplishments.</p>
          </div>
          <div>
            <h3>IUT Computer Society(IUTCS) - Assistant Event Management Executive (CTF)</h3>
            <p>Islamic University of Technology, September 2023 - Present</p>
            <p>Actively involved in event management duties for Capture The Flag (CTF) competitions organized by IUTCS.</p>
          </div>
        </div>
      </div>
      <div className="section">
  <h2>Academic Projects</h2>
  <hr/>
  <ul className="projects">
    {/* Project 1: Plasma Plus */}
    <li>
      <h3>Plasma Plus - Contributor</h3>
      <ul>
        <li>
          A web platform facilitating connections between blood donors and recipients, enabling users to browse and register for blood donation opportunities. Additionally, it features an admin panel for user management.
        </li>
        <li>
          Technologies Used: HTML, CSS, JavaScript, PHP, MySQL.
        </li>
        <li>
          Project Link: <a href="https://github.com/ShadmanSakib44/Plasma-Plus">GitHub</a>
        </li>
      </ul>
    </li>
    {/* Project 2: EduCast */}
    <li>
      <h3>EduCast - Contributor</h3>
      <ul>
        <li>
          An innovative website for connecting educators and students with blog posting, tutoring, video conferencing, and messaging functionalities.
        </li>
        <li>
          Technologies Used: MERN Stack, Agile Methodologies, Jitsi Meet API for video conferencing functionality.
        </li>
        <li>
          Project Link: <a href="https://github.com/ShadmanSakib44/EduCast-">GitHub</a>
        </li>
      </ul>
    </li>
    {/* Project 3: ResuMetrics */}
    <li>
      <h3>ResuMetrics - Contributor</h3>
      <ul>
        <li>
          A job recruitment website with an integrated resume builder.
        </li>
        <li>
          Technologies Used: MERN Stack,Cloudinary for file handling.
        </li>
        <li>
          Project Link: <a href="https://github.com/ShadmanSakib44/ResuMetrics">GitHub</a>
        </li>
      </ul>
    </li>
    {/* Project 4: IUT_BARTA */}
    <li>
      <h3>IUT_BARTA - Contributor</h3>
      <ul>
        <li>
          A social media website exclusively for IUTians.
        </li>
        <li>
          Technologies Used: PHP, MySQL, HTML, CSS, JavaScript.
        </li>
        <li>
          Project Link: <a href="https://github.com/ShadmanSakib44/IUT_BARTA">GitHub</a>
        </li>
      </ul>
    </li>
    {/* Project 5: Cyber_Memoirs */}
    <li>
      <h3>Cyber_Memoirs - Developer</h3>
      <ul>
        <li>
          A server-based CTF writeup blogging platform.
        </li>
        <li>
          Technologies Used: HTML, CSS (Frontend), Node.js, MongoDB. (Backend), Multer (for file handling)
        </li>
        <li>
          Project Link: <a href="https://github.com/oishy28/Cyber_Memoirs">GitHub</a>
        </li>
      </ul>
    </li>
  </ul>
</div>


      <div className="section">
        <h2>Achievements and Certificates</h2>
        <hr/>
        <ul className="achievements">
          <li>Co-winner of IUT Wall Calendar 2024 Design Competition</li>
          <li>Completed a course on Supervised Machine Learning: Regression and Classification from Stanford Online via Coursera.</li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Resume_Oishy;

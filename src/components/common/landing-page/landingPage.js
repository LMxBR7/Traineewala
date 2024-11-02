// import React from 'react';
// import { Link } from 'react-router-dom';

// const LandingPage = () => {
//   return (
//     <div>
//       <h1>Welcome to Training Management System</h1>
//       <p>About Us</p>
//       <p>Contact</p>
//       <Link to="/login">
//         <button>Login</button>
//       </Link>
//     </div>
//   );
// };

// export default LandingPage;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './landingPage.css'; // Import the CSS file for styling

// const LandingPage = () => {
//   return (
//     <div className="landing-page">
//       <header className="header">
//         <h1>Welcome to Training Management System</h1>
//         <nav>
//           <ul>
//             <li><a href="#about">About</a></li>
//             <li><a href="#benefits">Benefits</a></li>
//             <li><a href="#help">Help</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//       </header>
//       <section id="login" className="login-section">
//         <h2>Login</h2>
//         <Link to="/login">
//           <button className="login-button">Login</button>
//         </Link>
//       </section>
//       <section id="about" className="section">
//         <h2>About Us</h2>
//         <p>Learn more about our Training Management System and how it can help you manage your training programs efficiently.</p>
//       </section>
//       <section id="benefits" className="section">
//         <h2>Benefits</h2>
//         <p>Discover the benefits of using our system, including streamlined processes, improved tracking, and enhanced reporting.</p>
//       </section>
//       <section id="help" className="section">
//         <h2>Help</h2>
//         <p>Need assistance? Our support team is here to help you with any questions or issues you may have.</p>
//       </section>
//       <section id="contact" className="section">
//         <h2>Contact</h2>
//         <p>Get in touch with us for more information or to schedule a demo.</p>
//       </section>
     
//     </div>
//   );
// };

// export default LandingPage;




import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css';
import logo from './logo.png';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#help">Help</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <h1>Welcome to Training Management System</h1>
        <p>Manage your training programs effectively and efficiently.</p>
        <Link to="/login">
          <button className="hero-button">Login</button>
        </Link>
      </section>
      <section className="info">
        <h1>We are on a mission to upskill India Inc’s tech talent pool.</h1>
        <p>We work with large enterprises in providing disruptive digital learning solutions to transform talent for the future. We provide an experiential immersive learning experience that equips teams with the skills of tomorrow.</p>
      </section>

      <section id="about" class="about-section">
      <h2>About Us</h2>
  
      <p><strong>At <span class="brand-name">Skill Forge</span>, we are dedicated to empowering organizations and individuals through innovative learning solutions.</strong></p>
  
      <p>Our mission is to upskill India's tech talent pool, transforming the way enterprises approach training and development.</p>
  
      <p>We collaborate with leading companies to deliver <strong>disruptive digital learning experiences</strong> that cater to the evolving needs of the modern workforce. Our platform provides immersive, hands-on training programs designed to equip teams with the skills necessary for success in a rapidly changing technological landscape.</p>
  
      <p>With a focus on experiential learning, we create tailored training solutions that foster engagement, enhance knowledge retention, and drive performance improvement.</p>
  
      <p>Our expert team is committed to helping organizations unlock their full potential, ensuring they remain competitive in an increasingly digital world.</p>
  
      <p>Join us on this journey to redefine learning and create a brighter future for tech talent in India.</p>
      </section>


      <section id="benefits" class="benefits-section">
      <h2>Benefits</h2>
      <p><strong>Unlock the full potential of your team with our Training Management System.</strong></p>
  
      <p><strong>1. Streamlined Processes:</strong> Our platform simplifies the training management workflow, making it easier for organizations to plan, execute, and track training programs. This efficiency saves time and resources, allowing you to focus on what matters most.</p>

      <p><strong>2. Improved Efficiency:</strong> With tailored learning paths and interactive modules, our training solutions enhance the learning experience, leading to faster skill acquisition and better performance on the job. Empower your team to become more productive and effective in their roles.</p>

      <p><strong>3. Enhanced Tracking and Reporting:</strong> Our system provides robust analytics and reporting tools that allow you to monitor progress and measure the impact of training programs. Gain valuable insights into your team's performance and identify areas for improvement.</p>

      <p><strong>4. Customizable Learning Solutions:</strong> We understand that every organization is unique. Our platform offers customizable training solutions that can be tailored to meet your specific requirements and align with your business goals.</p>

      <p><strong>5. Engaging Learning Experiences:</strong> We prioritize engagement in our training programs. Our experiential learning approach combines interactive content, real-world scenarios, and gamification elements to keep learners motivated and invested in their development.</p>

      <p><strong>6. Future-Ready Skills:</strong> Stay ahead of the curve with our training solutions that focus on emerging technologies and industry trends. Equip your team with the skills needed to thrive in a fast-paced digital landscape.</p>

      <p><strong>7. Expert Support and Guidance:</strong> Our dedicated support team is always here to assist you. From onboarding to ongoing training, we provide the guidance you need to ensure a successful learning experience for your organization.</p>
      </section>

      <section id="help" class="help-section">
      <h2>Help</h2>
  
      <p><strong>Need assistance? Our support team is here to help you with any questions or issues you may have.</strong></p>
  
      <p>We understand that navigating new systems can sometimes be challenging, which is why we are committed to providing comprehensive support to ensure your experience is seamless.</p>
  
      <p>Our dedicated help resources include:</p>
  
      <ul>
        <li><strong>24/7 Customer Support:</strong> Reach out to us anytime via chat, email, or phone.</li>
        <li><strong>FAQs:</strong> Browse our frequently asked questions for quick answers.</li>
        <li><strong>Tutorials and Documentation:</strong> Access our library of guides and tutorials to help you maximize the platform’s potential.</li>
      </ul>
  
      <p>Don't hesitate to contact us; we're here to ensure your success!</p>
      </section>

      <section id="contact" class="contact-section">
      <h2>Contact</h2>
  
      <p><strong>Get in touch with us for more information or to schedule a demo.</strong></p>
  
      <p>We’d love to hear from you! Whether you have questions, feedback, or want to learn more about our offerings, feel free to reach out.</p>
  
      <p>You can contact us via:</p>
  
      <ul>
          <li><strong>Email:</strong> support@trainingmanagement.com</li>
          <li><strong>Phone:</strong> +1 (800) 555-0199</li>
          <li><strong>Address:</strong> 123 Learning Lane, Education City, IN 45678</li>
      </ul>
  
      <p>We look forward to connecting with you!</p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Training Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

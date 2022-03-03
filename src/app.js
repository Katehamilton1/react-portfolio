import './App.css';

function App() {
  return (
<div>
  {/*Navagation tags*/}
  <header>
    <h1>
      <a href="/">Kate Hamilton</a>
    </h1><h1>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#bio">Bio</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact-me">Contact</a>
          </li>
        </ul>
      </nav>
    </h1></header>
  {/*End Navagation*/}
  <br />
  {/*Hero/jumbotron*/}
  <section className="hero"> 
    <img src="assets/images/me.jpg" />
  </section>
  <br />
  <br />
  {/*End Hero/jumbotron*/}
  {/*BIO*/}
  <section id="bio">
    <h2>Hello, I'm Kate. I am attending UC Berkeley's full-stack boot camp with the vision to design and create new applications. I currently live in Saudi Arabia, but was raised in North Carolina for most my life. I enjoy traveling, meeting new people, trying new food, learning new skills , and reading a book with a cup of coffee at hand. I have been a speech-language pathologist since 2018. I became interested in pursuing coding due to the lack of software and applications on the market for speech pathologists to use to support their patients. The more I code, the more I find a new passion I never knew I had.
    </h2>
  </section>
  {/*Projects*/}
  <br />
  <br />
  <hr />
  <section id="projects" className="project-name">
    <div className="project-section">
      <h2> RECENT PROJECTS 
      </h2> 
    </div>
    <div className="big-project">
      <h3 className="project-title"> Travel Hub</h3>
      <a className="large-image" href="https://katehamilton1.github.io/run-buddy/" target="_blank"> <img src="assets/images/cloud-plane.jpeg" alt="A woman tying her shoe" /></a>
    </div>
    <div>
      <div className="project">
        <div> 
          <h3 className="project-title"> Horiseons</h3>
          <a className="large-image" href="https://katehamilton1.github.io/horiseon1/" target="_blank"> <img src="assets/images/digital-marketing-meeting.jpg" alt=" People looking at papers on a desk working together" /></a>
        </div>
        <div>
          <h3 className="project-title"> Run Buddy</h3>
          <a href="https://katehamilton1.github.io/run-buddy/" target="_blank"> <img src="assets/images/hero-bg.jpg" alt="A woman tying her shoe" /></a>
        </div>
        <div>
          <h3 className="project-title">Portfolio</h3>
          <a href="http://127.0.0.1:5500/index.html" target="_blank"><img src="assets/images/me.jpg" alt="a woman and a dog with a mountains in the background." /></a>
        </div>
      </div>
      <div>
        <div className="project">
          <div> 
            <h3 className="project-title"> Travel hub</h3>
            <a className="large-image" href="https://connor-vb.github.io/Travel-Hub/" target="_blank"> <img src="assets/images/travelhub.png" alt /></a>
          </div>
          <div>
            <h3 className="project-title"> FixUP</h3>
            <a href="https://fixup-job.herokuapp.com/" target="_blank"> <img src="assets/images/fixup.png" /></a>
          </div>
          <div>
            <h3 className="project-title">Swap Buddy</h3>
            <a href="https://swap-buddy.herokuapp.com/" target="_blank"><img src="assets/images/swapbuddy.png" /></a>
          </div>
        </div>
      </div></div></section>
  {/*End Projects*/}
  {/*contact form*/}
  <section id="contact-me" className="contact">
    <h3> Contact</h3>
    <p> 
      Have a question or want to work together?
    </p>
    <br />
    <div className="contact-form">
      <form>
        <label htmlFor="contact-name"> </label>
        <input type="text" id="contact-name" placeholder="Your Name" className="form-input" />
        <label htmlFor="email" />
        <input type="email" id="email" placeholder="Email" className="form-input" />
        <label htmlFor="contact message" />
        <textarea id="contact-message" placeholder="Message" className="form-input" defaultValue={""} />
        <button type="submit">Submit</button>
      </form>
    </div>
  </section>
  {/*end contact form*/}
  {/*footer*/}
  <footer>
    <h4> Life is too short not to build something that matters</h4>
  </footer>
  {/*Footer end*/}
</div>

   
  );
}

export default App;

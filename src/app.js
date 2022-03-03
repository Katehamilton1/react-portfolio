import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <body>
    <!--Navagation tags-->
    <header>
      <h1>
          <a href="/">Kate Hamilton</a>
            <h1>
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
    </header>
    <!--End Navagation-->
    <br/>

<!--Hero/jumbotron-->
<section class="hero"> 
<img src="assets/images/me.jpg">
</section>
<br/>
<br/>
<!--End Hero/jumbotron-->

<!--BIO-->
<section id="bio">
<h2>Hello, I'm Kate. I am attending UC Berkeley's full-stack boot camp with the vision to design and create new applications. I currently live in Saudi Arabia, but was raised in North Carolina for most my life. I enjoy traveling, meeting new people, trying new food, learning new skills , and reading a book with a cup of coffee at hand. I have been a speech-language pathologist since 2018. I became interested in pursuing coding due to the lack of software and applications on the market for speech pathologists to use to support their patients. The more I code, the more I find a new passion I never knew I had.
</h2>
</section>
<!--Projects-->
<br/>
<br/>
<hr/>

<section id="projects" class="project-name">
<div class= "project-section">
   <h2> RECENT PROJECTS 
     </h2> 
</div>

<div class= "big-project">
<h3 class="project-title"> Travel Hub</h3>
<a class= "large-image" href="https://katehamilton1.github.io/run-buddy/"target="_blank"> <img src="assets/images/cloud-plane.jpeg" alt="A woman tying her shoe"/></a>
</div>
</div>

<div>
<div class="project">
<div> 
<h3 class="project-title"> Horiseons</h3>
  <a class= "large-image" href="https://katehamilton1.github.io/horiseon1/"target="_blank"> <img src="assets/images/digital-marketing-meeting.jpg" alt=" People looking at papers on a desk working together"/></a>
</div>
 <div>
  <h3 class="project-title"> Run Buddy</h3>
  <a href="https://katehamilton1.github.io/run-buddy/"target="_blank"> <img src="assets/images/hero-bg.jpg" alt="A woman tying her shoe"/></a>
 </div>
<div>
    <h3 class="project-title">Portfolio</h3>
    <a href="http://127.0.0.1:5500/index.html"target="_blank"><img src="assets/images/me.jpg" alt="a woman and a dog with a mountains in the background."></a>
</div>
</div>

<div>
<div class="project">
  <div> 
  <h3 class="project-title"> Travel hub</h3>
    <a class= "large-image" href="https://connor-vb.github.io/Travel-Hub/"target="_blank"> <img src="assets/images/travelhub.png" alt=""/></a>
  </div>
   <div>
    <h3 class="project-title"> FixUP</h3>
    <a href="https://fixup-job.herokuapp.com/"target="_blank"> <img src="assets/images/fixup.png" /></a>
   </div>
  <div>
      <h3 class="project-title">Swap Buddy</h3>
      <a href="https://swap-buddy.herokuapp.com/"target="_blank"><img src="assets/images/swapbuddy.png" ></a>
  </div>
</div>
</section>

<!--End Projects-->

<!--contact form-->

<section id= "contact-me" class="contact">
<h3> Contact</h3>
<p> 
Have a question or want to work together?
</p>
<br/>
<div class="contact-form">
<form>
<label for="contact-name"> </label>
<input type="text" id="contact-name" placeholder="Your Name" class="form-input" />

<label for="email"></label>
<input type="email" id="email" placeholder="Email" class="form-input"/>

<label for="contact message"></label>
<textarea id="contact-message" placeholder="Message" class="form-input"></textarea>

<button type="submit">Submit</button>
</form>
</div>
</section>
<!--end contact form-->

<!--footer-->
<footer>
   <h4> Life is too short not to build something that matters</h4>
</footer>
<!--Footer end-->
</body>
  );
}

export default App;
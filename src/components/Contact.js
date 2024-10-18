import React from "react";
import emailjs from "emailjs-com"
import 'boxicons/css/boxicons.min.css';
import thankYou from "../img/images.jpg";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_gvrdcbf','template_fw3zzn6',e.target,'aM3hYMqK7S4PajYi4'
    ).then(res=>{
     
    }).catch(err=> console.log(err));
  }

  const notify = () => toast("Your response has been successfully submitted.");

  return (
    <div>
      <div>
      {/*Contact Section*/}
      <div id="contact" class="contact">
        <div class="container">
          <div class="section-title">
            <h2>Contact</h2>
            <p>Contact Me</p>
          </div>

          <div class="row mt-2">
            <div class="col-md-6 d-flex align-items-stretch">
              <div class="info-box">
                <i class="bx bx-map"></i>
                <h3>My Address</h3>
                <p>No341, Anguruwathota Road, Wewala, Horana</p>
              </div>
            </div>

            <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div class="info-box">
                <i class="bx bx-share-alt"></i>
                <h3>Social Profiles</h3>
                <div class="social-links">
                  <a href="#" class="twitter">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a
                    href="https://web.facebook.com/sandeepa.rathnayaka.92"
                    class="facebook"
                  >
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/sandeepa.rathnayaka.20/"
                    class="instagram"
                  >
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sandeepa-rathnayaka"
                    class="linkedin"
                  >
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 mt-4 d-flex align-items-stretch">
              <div class="info-box">
                <i class="bx bx-envelope"></i>
                <h3>Email Me</h3>
                <p>sandeeparathna@gmail.com</p>
              </div>
            </div>
            <div class="col-md-6 mt-4 d-flex align-items-stretch">
              <div class="info-box">
                <i class="bx bx-phone-call"></i>
                <h3>Call Me</h3>
                <p>+94 783 096 330</p>
              </div>
            </div>
          </div>

          <form
            class="php-email-form mt-4"
            onSubmit={sendEmail}
          >
            <div class="row">
              <div class="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  class="form-control"
                  name="user_email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div class="form-group mt-3">
              <input
                type="text"
                class="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div class="form-group mt-3">
              <textarea
                class="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div><br></br>
            
            <div class="text-center">
              <button type="submit" onClick={notify}>Send Message</button>
              <ToastContainer />
            </div>
          </form>
         

        </div>
      </div>
      {/* End Contact Section */}<br></br>
    </div>
    </div>
  );
}

export default Contact;

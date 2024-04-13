import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className='Contact'>
        <div className="container">
            <div className="left">
                <p>Ready to talk?</p>
                <h1>Contact Us</h1>
                <p>Massa tempor nec feugiat nisl pretium fusce id velit. Accumsan tortor posuere ac ut. Aenean pharetra magna ac placerat vestibulum lectus. Praesent semper feugiat nibh sed pulvinar. Lorem sed risus ultricies tristique. </p>
                <p>
Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Amet dictum sit amet justo donec enim diam vulputate. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Volutpat lacus laoreet non curabitur. </p>
            </div>
            <div className="right">
                <form>
                    <input type="text" name="" id="" placeholder='Enter Your Name '/>
                    <br />
                    <input type="email" name="" id="" placeholder='Enter Your Email '/>
                    <br />
                    <textarea cols="30" rows="5" placeholder='Enter Your Message'></textarea><br />
                    <button>Submit</button>
                </form>
                <div className="icon">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
import React from 'react';
import ContactForm from '../Components/Form'
import computer from '../computer.jpg';

import './Contact.css';

function App() {
  return (
    <div>

        <div className='header'>Want to get in touch? Please enquire below.</div>

        <div className='body'>

                <div className='contact'>
                    <ContactForm/>
                </div>

                <div className='contactDetails'>
                    <img src={computer} className='compImg'/>
                    <p id='details'>If you are contacting me for freelance work, please include
                        as many relevant details as possible. Whether you or your business
                        needs custom software or a new website, the more I know, the
                        better I can make the product work for you.
                    </p>
                </div>

        </div>

    </div>
  );
}

export default App;

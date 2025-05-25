import React, { useState } from 'react';

const ContactForm = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Save data to state
    setSubmittedData({ name, email, message });
  };

  return (
    <section className='contact-form'>
      <div className='contact-form-content'>
        <div className='contact-method-buttons'>
          <button className='contact-button'>Via Support Chat</button>
          <button className='contact-button'>Via Call</button>
          <button className='contact-button'>Via Email</button>
        </div>

        <form onSubmit={onSubmit} className='contact-form-input'>
          <div className='form-group'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className='form-group'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className='form-group'>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className='submit-button'>Submit</button>
          <div>
            <p className='form-disclaimer' style={{marginTop:'10px'}}>By submitting this form, you agree to our <a href="#">terms and conditions</a>.</p>
          </div>
        </form>
        {submittedData && (
          <div className="submitted-info" style={{ marginTop: '20px', background: '#fff', padding: '1rem', borderRadius: '8px' }}>
            <h3>Submitted Information:</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Message:</strong> {submittedData.message}</p>
          </div>
        )}
      </div>

      {/* Image section */}
      <div className='contact-form-img'>
        <img src="image.png" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;

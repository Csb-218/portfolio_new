import { useState } from 'react';
import Section from '../components/structure/section';
import Container from '../components/structure/container';
import Color from '../components/utils/page.colors.util';
import colors from "../content/contact_us/_colors.json";
import css from '../styles/sections/contact/contact.module.scss';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Color colors={colors} />
      <Section classProp={css.section}>
        <Container classProp={css.container}>
          <h1 className={css.heading}>Contact Us</h1>
          <p className={css.subheading}>Last updated on 16-04-2025 01:27:32</p>

          <div className={css.formWrapper}>
            <div className={css.contactInfo}>
              <h2>Contact Information</h2>
              <div className={css.infoGrid}>
                <div className={css.infoItem}>
                  <h3>Legal Entity Name</h3>
                  <p>CHITTARANJAN SANGHAMITRA BHAGWANT</p>
                </div>
                
                <div className={css.infoItem}>
                  <h3>Registered Address</h3>
                  <p>QTR NO-V/R-52,UNIT-6,GANGANAGAR,<br />
                     Bhubaneswar G.p, Odisha,<br />
                     PIN: 751001</p>
                </div>

                <div className={css.infoItem}>
                  <h3>Operational Address</h3>
                  <p>QTR NO-V/R-52,UNIT-6,GANGANAGAR,<br />
                     Bhubaneswar G.p, Odisha,<br />
                     PIN: 751001</p>
                </div>

                <div className={css.infoItem}>
                  <h3>Contact Details</h3>
                  <p>
                    <a href="tel:9861289352">+91 9861289352</a><br />
                    <a href="mailto:csbhagwant@gmail.com">csbhagwant@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* <h2>Send us a message</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.5rem"
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.5rem"
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.5rem",
                    minHeight: "150px"
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#FCA311",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                Send Message
              </button>
            </form> */}
          </div>
        </Container>
      </Section>
    </>
  );
}
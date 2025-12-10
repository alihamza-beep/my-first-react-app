import InputField from "../commons/reusables/InputField";
import Button from "../commons/reusables/Button";

export default function Contact() {
  return (
    // Yahan 'contact-container' class name add karen
    <section className="contact-container"> 
      <h1>Contact Us</h1>
      <InputField label="Name" placeholder="Enter your name" />
      <InputField label="Email" placeholder="Enter your email" />
      <Button text="Submit" />
    </section>
  );
}
import React from "react";
import {
  ContactSection,
  BackgrondBox,
  Formulario,
  InputContainer,
  SubmitButton,
} from "../assets";
import { useForm } from "@formspree/react";
const ContactPage: React.FC = () => {
  const [state, handleSubmit] = useForm("xknkyrqv");
  if (state.succeeded) {
    return (
      <section>
        <div>Gracias por enviarme un email te respondere lo antes posible!</div>
      </section>
    );
    console.log("enviado");
  }
  return (
    <ContactSection>
      <BackgrondBox />
      <h2>Hello! i'll waiting for're message</h2>
      <Formulario onSubmit={handleSubmit}>
        <InputContainer>
          <div>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div>
            <input type="text" name="lastname" placeholder="Last Name" />
          </div>
        </InputContainer>
        <InputContainer>
          <div>
            <input type="text" name="email" placeholder="Email" />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="What would you like to talk about"
            />
          </div>
        </InputContainer>

        <InputContainer></InputContainer>

        <InputContainer>
          <div>
            <textarea name="message" placeholder="What do you have in mind" />
          </div>
        </InputContainer>
        <InputContainer>
          <SubmitButton
            type="submit"
            name=""
            value="Let's work together"
            disabled={state.submitting}
          />
        </InputContainer>
      </Formulario>
    </ContactSection>
  );
};

export default ContactPage;

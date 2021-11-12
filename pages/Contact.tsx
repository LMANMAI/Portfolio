import React from "react";
import {
  ContactSection,
  BackgrondBox,
  Formulario,
  InputContainer,
  SubmitButton,
  ContainerForm,
  BoxFormAccepted,
} from "../assets";
import { useForm } from "@formspree/react";
const ContactPage: React.FC = () => {
  const [state, handleSubmit] = useForm("xknkyrqv");
  if (state.succeeded) {
    return (
      <ContainerForm>
        <BoxFormAccepted>
          <p>
            Thank you for sending me an email, I will answer you as soon as
            possible!😄
          </p>
        </BoxFormAccepted>
      </ContainerForm>
    );
  }
  return (
    <ContactSection id="contact">
      <BackgrondBox />
      <h2>I'll waiting for're message</h2>
      <Formulario onSubmit={handleSubmit}>
        <InputContainer>
          <div>
            <input
              autoComplete="off"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              autoComplete="off"
              type="text"
              name="lastname"
              placeholder="Last Name"
            />
          </div>
        </InputContainer>
        <InputContainer>
          <div>
            <input
              autoComplete="off"
              type="text"
              name="email"
              placeholder="Email"
            />
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

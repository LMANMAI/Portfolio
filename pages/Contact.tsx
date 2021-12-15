import React from "react";
import {
  ContactSection,
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
      <h2>I'll waiting for're message</h2>
      <Formulario onSubmit={handleSubmit} autoComplete="off">
        <InputContainer>
          <input
            autoComplete="off"
            type="text"
            name="name"
            placeholder="Name"
          />
        </InputContainer>
        <InputContainer>
          <input
            autoComplete="off"
            type="text"
            name="lastname"
            placeholder="Last Name"
          />
        </InputContainer>
        <InputContainer>
          <input
            autoComplete="off"
            type="text"
            name="email"
            placeholder="Email"
          />
        </InputContainer>

        <InputContainer>
          <input
            type="text"
            name="subject"
            placeholder="What would you like to talk about"
          />
        </InputContainer>

        <InputContainer>
          <div>
            <textarea name="message" placeholder="What do you have in mind" />
          </div>
        </InputContainer>
        <InputContainer>
          <SubmitButton
            type="submit"
            name=""
            value="Let's Talk"
            disabled={state.submitting}
          />
        </InputContainer>
      </Formulario>
    </ContactSection>
  );
};

export default ContactPage;

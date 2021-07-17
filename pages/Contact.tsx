import React from "react";
import {
  ContactSection,
  BackgrondBox,
  Formulario,
  InputContainer,
} from "../assets";
const ContactPage: React.FC = () => {
  return (
    <ContactSection>
      <BackgrondBox />
      <h2>Hello! i'll waiting for're message</h2>
      <Formulario>
        <InputContainer>
          <input type="text" name="" id="" placeholder="What's your Name?" />
        </InputContainer>
        <InputContainer>
          <input type="text" name="" id="" placeholder="Your Email" />
        </InputContainer>

        <InputContainer>
          <input
            type="text"
            name=""
            id=""
            placeholder="What would you like to talk about"
          />
        </InputContainer>

        <InputContainer>
          <textarea placeholder="What do you have in mind" />
        </InputContainer>
        <InputContainer>
          <input type="submit" name="" id="" value="Lets Talk" />
        </InputContainer>
      </Formulario>
    </ContactSection>
  );
};

export default ContactPage;

import React from "react";
import {
  ContactSection,
  BackgrondBox,
  Formulario,
  InputContainer,
  SubmitButton,
} from "../assets";
import axios from "axios";
import { useForm } from "react-hook-form";
const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitForm = async (values) => {
    let config = {
      Method: "post",
      url: `../api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    try {
      const response = await axios(config);
      if (response.status == 200) {
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactSection>
      <BackgrondBox />
      <h2>Hello! i'll waiting for're message</h2>
      <Formulario onSubmit={handleSubmit(onSubmitForm)}>
        <InputContainer>
          <div>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "You must enter your name",
                },
              })}
              placeholder="Name"
            />
            <span>{errors?.name?.message}</span>
          </div>
          <div>
            <input
              type="text"
              name="lastname"
              {...register("lastname", {
                required: {
                  value: true,
                  message: "You must enter your lastname",
                },
              })}
              placeholder="Last Name"
            />
            <span>{errors?.lastname?.message}</span>
          </div>
        </InputContainer>
        <InputContainer>
          <div>
            <input
              type="text"
              name="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "You must enter yout email address ",
                },
                minLength: {
                  value: 6,
                  message: "This is not long enough to be an email",
                },
                maxLength: {
                  value: 120,
                  message: "This is too long to be an email",
                },
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: "This needs to be a valid email email address",
                },
              })}
              placeholder="Email"
            />
            <span>{errors?.email?.message}</span>
          </div>
          <div>
            <input
              type="text"
              name="subject"
              {...register("subject", {
                required: {
                  value: true,
                  message: "Plase enter the subject",
                },
              })}
              placeholder="What would you like to talk about"
            />
            <span>{errors?.subject?.message}</span>
          </div>
        </InputContainer>

        <InputContainer></InputContainer>

        <InputContainer>
          <div>
            <span>{errors?.message?.message}</span>
            <textarea
              name="message"
              {...register("message", {
                required: {
                  value: true,
                  message: "You must enter your message plase",
                },
                maxLength: {
                  value: 1000,
                  message: "You message can't be more than 1000 characters",
                },
              })}
              placeholder="What do you have in mind"
            />
          </div>
        </InputContainer>
        <InputContainer>
          <SubmitButton type="submit" name="" value="Let's work together" />
        </InputContainer>
      </Formulario>
    </ContactSection>
  );
};

export default ContactPage;

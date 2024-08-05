import React, { useState } from "react";
import { Form } from "react-router-dom";

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import illustration from "../assets/illustration.png";

const Intro = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(value));
  };

  return (
    <div className="intro">
      <div>
        <h1>
          Track <span className="accent">Your Trip</span>
        </h1>
        <p>Personal trip budgeting is the secret to finance management.</p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="Username"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <input
            type="text"
            name="mail"
            required
            placeholder="Email id"
            aria-label="mail"
            autoComplete="given-name"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Please enter a valid email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            name="userpass"
            required
            placeholder="Password"
            aria-label="Your Password"
            autoComplete="given-password"
          />
          <button type="submit" className="btn btn--dark" disabled={!isEmailValid}>
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  );
};

export default Intro;

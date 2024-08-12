import React, { useState } from "react";
import { Form } from "react-router-dom";

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import illustration from "../assets/illustration.png"; // Use the appropriate image file from your assets

const Intro = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(value));
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    // Simple password validation, you can customize the pattern
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, with at least one letter and one number
    setIsPasswordValid(passwordPattern.test(value));
  };

  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Holidays</span>
        </h1>
        <p>Proper trip budgeting is the secret way to financial stablity. <b><span className="highlight">Just do it...</span></b>

        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <input
            type="text"
            name="email"
            required
            placeholder="Email ID"
            aria-label="Email"
            autoComplete="email"
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
            autoComplete="new-password"
            value={password}
            onChange={handlePasswordChange}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            title="Password must be at least 8 characters long, containing both letters and numbers"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark" disabled={!isEmailValid || !isPasswordValid}>
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

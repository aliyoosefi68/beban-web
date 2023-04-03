import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//styles
import styles from "./SignUp.module.css";

//functions
import { validate } from "./validate";
import { notify } from "./toast";

//tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({});

  useEffect(() => {
    setErrors(validate(data, "SignUp"));
  }, [data, touch]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const focusHandler = (event) => {
    setTouch({ ...touch, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    notify();
    if (!Object.keys(errors).length) {
      notify("You signed in successfuly", "success");
    } else {
      notify("Invalid data", "unSuccess");
      setTouch({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>Sign up</h2>
        <div className={styles.formField}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
            className={
              errors.name && touch.name ? styles.uncompleted : styles.formInput
            }
          />
          {errors.name && touch.name && <span>{errors.name}</span>}
        </div>
        <div className={styles.formField}>
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
            className={
              errors.email && touch.email
                ? styles.uncompleted
                : styles.formInput
            }
          />
          {errors.email && touch.email && <span>{errors.email}</span>}
        </div>

        <div className={styles.formField}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
            className={
              errors.password && touch.password
                ? styles.uncompleted
                : styles.formInput
            }
          />
          {errors.password && touch.password && <span>{errors.password}</span>}
        </div>

        <div className={styles.formField}>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
            className={
              errors.confirmPassword && touch.confirmPassword
                ? styles.uncompleted
                : styles.formInput
            }
          />
          {errors.confirmPassword && touch.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formField}>
          <div className={styles.checkBoxContainer}>
            <label>Agree our privecy </label>
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>

          {errors.isAccepted && touch.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <Link to="/login">Login</Link>
          <button type="submit">SignUp</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;

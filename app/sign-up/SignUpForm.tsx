"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  addToUser,
  changeActivity,
  addUserLogged,
  addedUser,
} from "../../redux/Features/user/userSlice";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { signUpFormType } from "@/typing";

function SignUpForm() {
  const users = useSelector(addedUser);
  const dispatch = useDispatch();
  const router = useRouter();

  const firstnameInput: any = useRef();
  const lastnameInput: any = useRef();
  const cityInput: any = useRef();
  const countryInput: any = useRef();
  const emailInput: any = useRef();
  const passwordInput: any = useRef();
  const imgInput: any = useRef();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState("");

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const user = {
    id: Date.now().toString(),
    firstname: capitalizeFirstLetter(firstname),
    lastname: capitalizeFirstLetter(lastname),
    city: capitalizeFirstLetter(city),
    country: country.toUpperCase(),
    email,
    password,
    img,
  };

  const userExist = (user: string) => {
    for (const account of users) {
      if (user === account.email) {
        return false;
      }
    }
  };

  // const addUser: any = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   signUpCondition();
  // };

  function ValidateEmail() {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      return true;
    }
    return false;
  }

  function signUpCondition(data: signUpFormType) {
    if (data.firstName === "") {
      firstnameInput.current.focus();
    } else if (data.lastName === "") {
      lastnameInput.current.focus();
    } else if (data.city === "") {
      cityInput.current.focus();
    } else if (data.country === "") {
      countryInput.current.focus();
    } else if (data.email === "") {
      emailInput.current.focus();
    } else if (data.password === "") {
      passwordInput.current.focus();
    } else if (data.image === "") {
      setImg("http://localhost:3000/images/userList/no-img.png");
    } else if (ValidateEmail() === false) {
      alert("Invalid email address!");
    } else if (data.password.length < 6) {
      alert("password must be 6 or more");
      passwordInput.current.focus();
    } else if (userExist(data.email) === false) {
      alert("this email is taken");
    } else {
      dispatch(addToUser(user));
      dispatch(addUserLogged(user));
      dispatch(changeActivity(true));
      router.push("/user-list");
    }
  }

  return (
    <div className="sign-up-form">
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const data: signUpFormType | any = Object.fromEntries(
            formData.entries()
          );
          signUpCondition(data);
        }}
        action=""
      >
        <div className="sign-up-name">
          <input
            name="firstName"
            ref={firstnameInput}
            type="text"
            value={firstname}
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            name="lastName"
            ref={lastnameInput}
            type="text"
            value={lastname}
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="sign-up-city-country">
          <input
            name="city"
            ref={cityInput}
            type="text"
            value={city}
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            name="country"
            ref={countryInput}
            type="text"
            value={country}
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="sign-up-pass-btn">
          <input
            name="email"
            ref={emailInput}
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-reqs">A valid Email is required</div>
          <input
            name="password"
            ref={passwordInput}
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            name="image"
            ref={imgInput}
            type="file"
            onChange={(e: any) => {
              const file = e.target.files[0];

              setImg(file);

              console.log(e.target.files[0]);
            }}
          />
          <button
            type="submit"
            className="disabled:bg-gray-600"
            disabled={
              !firstname ||
              !lastname ||
              !city ||
              !country ||
              !email ||
              !password
            }
            // onClick={addUser}
          >
            Create New Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;

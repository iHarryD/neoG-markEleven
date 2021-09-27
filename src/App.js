import "./App.css";
import { useState } from "react";
import buttonBg from "../src/button-bg.png";

function App() {
  const [dateOfBirth, setDateOfBirth] = useState(0);
  const [luckyNumber, setLuckyNumber] = useState("");
  const [output, setOutput] = useState("Fill the input fields.");

  const luckyMessage =
    "Congratulations! Your birthdate is lucky. One more reason to celebrate it.";
  const unLuckyMessage =
    "Sorry, your lucky number doesn't seem to be that lucky.";

  function algoOfLuck() {
    let sumOfDateOfBirth = 0;
    for (let index = 0; index < dateOfBirth.length; index++) {
      sumOfDateOfBirth = sumOfDateOfBirth + Number(dateOfBirth.charAt(index));
    }
    sumOfDateOfBirth = Number(sumOfDateOfBirth);
    console.log(sumOfDateOfBirth);
    if (dateOfBirth === 0) {
    } else if (sumOfDateOfBirth % Number(luckyNumber) === 0) {
      setOutput(luckyMessage);
    } else {
      setOutput(unLuckyMessage);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Is Your Birthdate Lucky?</h1>
      </header>
      <main>
        <form>
          <label htmlFor="dob">Enter your date of birth here: </label>
          <input
            required
            onChange={(event) => {
              setDateOfBirth(event.target.value.replaceAll("-", ""));
            }}
            type="date"
            name="dob"
            id="dob"
          />
          <label htmlFor="lucky-number">Enter your lucky number here: </label>
          <input
            onChange={(event) => {
              setLuckyNumber(event.target.value);
            }}
            type="number"
            name="lucky-number"
            id="lucky-number"
            placeholder="0"
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              algoOfLuck();
            }}
            type="submit"
          >
            <img src={buttonBg} alt="" />
          </button>
        </form>
        <div className="output-div">{output}</div>
      </main>
      <footer>
        <span>
          Unfortunately, I'm too broke to buy a server and save your birthdates
          to send you 12 am wishes.
        </span>
        <ul id="social-media-tab">
          <li>
            <a className="social-media-links" href="https://github.com/iHarryD">
              GitHub
            </a>
          </li>
          <li>
            <a
              className="social-media-links"
              href="https://www.linkedin.com/in/prashant-kumar-a97251195/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <p id="portfolio-link">
          Website created by{" "}
          <a href="https://iharryd.github.io/personal-portfolio/">Harry</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

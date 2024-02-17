import { useState } from 'react';
import { generateResponse } from "../../model/shook";
import classes from "./shook.css";

function Shook() {

    // The reaction to the input
    const [ response, setResponse ] = useState("");

    function respond(e) {
        // Prevent browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const input = formData.get("input");
        const useCowsay = formData.get("cowsay") === "on";
        setResponse(generateResponse(input, useCowsay));
    }
    

    return (
      <div className="shook">
        <form method="post" onSubmit={respond}>
            <div className="input">
                <label>Enter whatever you like and I'll give you a proper reaction.</label> <br />
                <textarea name="input" rows={20} cols={80}></textarea>  <br />
                <label>Cowsay: <input type="checkbox" name="cowsay"></input></label>
            </div>
            <div className="buttons-container">
                <button type="submit" >Submit</button>
            </div>
        </form>
        <div>
            <div className="response-container"> 
                <pre className="response-text">{ response }</pre>
            </div>
        </div>
      </div>
    );
  }

  export default Shook;
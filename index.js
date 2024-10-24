let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");
let string = "";

// Function to update input field value
const updateInput = (value) => {
  input.value = value;
};

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const buttonText = e.target.textContent;

    if (buttonText === "=") {
      try {
        // Evaluate the string safely
        string = eval(string);
        updateInput(string);
      } catch (error) {
        // Handle invalid expressions
        updateInput("Error");
        string = "";
      }
    } else if (buttonText === "AC") {
      string = "";
      updateInput("0");
    } else if (buttonText === "DEL") {
      string = string.slice(0, -1);
      updateInput(string || "0"); // Ensure input doesn't stay empty
    } else if (!isNaN(buttonText) || "+-*/.".includes(buttonText)) {
      // Allow numbers and valid operators
      string += buttonText;
      updateInput(string);
    }
  });
});

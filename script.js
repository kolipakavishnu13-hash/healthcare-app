// Form Submission
document.getElementById("patientForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("successMsg").innerText = "Form submitted successfully!";
});

// Simple AI Chatbot
function chatbot(input) {
  input = input.toLowerCase();

  if (input.includes("fever")) {
    return "You may have a fever. Stay hydrated and take rest.";
  }
  else if (input.includes("cold")) {
    return "It looks like a common cold. Drink warm fluids.";
  }
  else if (input.includes("headache")) {
    return "Headache detected. Take rest and stay hydrated.";
  }
  else if (input.includes("cough")) {
    return "Cough detected. Try warm water and consult a doctor if needed.";
  }
  else {
    return "Please consult a healthcare professional for accurate advice.";
  }
}

// Chatbot Reply
function reply() {
  let input = document.getElementById("userInput").value;
  let output = chatbot(input);
  document.getElementById("response").innerText = output;
}

  
// modules.js

// Function to get today's date and time
function getCurrentDateTime() {
  var now = new Date();
  return now.toLocaleString();
}

// Export the function to make it available externally
module.exports = getCurrentDateTime;

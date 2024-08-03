document.addEventListener("DOMContentLoaded", (event) => {
    const counterElement = document.getElementById("count");
  
    // Retrieve the current count from localStorage
    let count = localStorage.getItem("visitorCount");
  
    // If there's no count in localStorage, initialize it to 0
    if (count === null) {
      count = 0;
    } else {
      // Parse the count from localStorage
      count = parseInt(count, 10);
    }
  
    // Increment the count
    count += 1;
  
    // Store the updated count back in localStorage
    localStorage.setItem("visitorCount", count);
  
    // Update the counter element with the new count
    counterElement.innerText = count;
  });
  
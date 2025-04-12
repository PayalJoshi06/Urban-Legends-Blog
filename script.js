// script.js

document.addEventListener("DOMContentLoaded", function() {
  const topics = document.querySelectorAll("section#topics ul li");
  
  topics.forEach(topic => {
    topic.addEventListener("mouseover", function() {
      this.style.backgroundColor = "#ffd700";
      this.style.color = "#333";
    });
    
    topic.addEventListener("mouseout", function() {
      this.style.backgroundColor = "#fff";
      this.style.color = "#333";
    });
  });
});

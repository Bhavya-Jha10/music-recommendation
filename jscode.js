const recommendations = {
    Happy: {
      song: "Shake it Off- Taylor Swift",
      link: "https://www.youtube.com/watch?v=nfWlot6h_JM"
    },
    Sad: {
      song: "Someone Like You - Adele",
      link: "https://www.youtube.com/watch?v=hLQl3WQQoQ0"
    },
    Relaxed: {
      song: "Skyfall- Adele",
      link: "https://www.youtube.com/watch?v=DeumyOzKqgI"
    },
    Energetic: {
      song: "Unstoppable- Sia",
      link: "https://www.youtube.com/watch?v=cxjvTXo9WWM"
    }
  };
  
  const buttons = document.querySelectorAll(".mood-btn");
  const recommendationDiv = document.getElementById("recommendation");
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const mood = button.getAttribute("data-mood");
      const { song, link } = recommendations[mood];
  
      recommendationDiv.innerHTML = `
        <p>We recommend: <strong>${song}</strong></p>
        <p><a href="${link}" target="_blank">Listen on YouTube</a></p>
      `;
    });
  });
  
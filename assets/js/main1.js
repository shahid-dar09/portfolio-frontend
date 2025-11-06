document.addEventListener("DOMContentLoaded", () => {
  fetch("get_projects.php")
    .then(response => response.json())
    .then(data => {
      const projectsContainer = document.querySelector(".projects");
      projectsContainer.innerHTML = "";

      if (!Array.isArray(data) || data.length === 0) {
        projectsContainer.innerHTML = "<p>No projects found.</p>";
        return;
      }

      data.forEach(project => {
        const hasURL = project.project_url && project.project_url.trim() !== "";

        const card = `
          <div class="card" data-aos="fade-up" data-aos-delay="200">

            <div class="card-inner">
              <img src="${project.image_path}" alt="${project.title}" loading="lazy">
              <div class="card-body">
                <div class="card-title">${project.title}</div>
                <div class="card-desc">${project.description}</div>
                <div class="tags">
                  ${project.skills
                    .split(',')
                    .map(skill => `<span class="tag">${skill.trim()}</span>`)
                    .join('')}
                </div>
                ${
                  hasURL
                    ? `<a class="card-link" href="${project.project_url}" target="_blank">View Project</a>`
                    : `<a class="card-link disabled" href="#">Coming Soon</a>`
                }
              </div>
            </div>
          </div>`;
        projectsContainer.insertAdjacentHTML("beforeend", card);
      });
    })
    .catch(error => {
      console.error("Error fetching projects:", error);
      document.querySelector(".projects").innerHTML =
        "<p>Error loading projects.</p>";
    });
});

AOS.init({
  duration: 800,
  easing: 'slide',
  once: true
});


  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    const icon = toggle.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

// ============================================
// 💬 "Ask Shahid" - Smart Chatbot by Shahid
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const chatIcon = document.getElementById("chat-icon");
  const chatBox = document.getElementById("chat-box");
  const chatSend = document.getElementById("chat-send");
  const chatInput = document.getElementById("chat-input");
  const chatContent = document.getElementById("chat-content");

  if (!chatIcon || !chatBox) return; // safety

  // Toggle chatbot visibility
  chatIcon.addEventListener("click", () => {
    chatBox.style.display = chatBox.style.display === "block" ? "none" : "block";
  });

  // Send message
  chatSend.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  // === Core Chatbot Logic ===
  function sendMessage() {
    const userText = chatInput.value.trim().toLowerCase();
    if (!userText) return;

    appendMessage(userText, "user");
    chatInput.value = "";

    setTimeout(() => {
      const botResponse = getBotResponse(userText);
      appendMessage(botResponse, "bot");
    }, 600);
  }

  // === Add messages to chat ===
  function appendMessage(message, sender) {
    const msg = document.createElement("p");
    msg.className = sender === "user" ? "user-msg" : "bot-msg";
    msg.innerHTML = message;
    chatContent.appendChild(msg);
    chatContent.scrollTop = chatContent.scrollHeight;
  }

  // === Smart reply logic ===
  function getBotResponse(input) {
    if (input.includes("hello") || input.includes("hi")) {
      return "Hey there I'M BYTE BUDDY 🤖! How can I help you today?";
    }
    if (input.includes("help") || input.includes("assist")) {
      return "Sure! You can ask me about Shahid's projects, skills, contact info, and more.";
    }
    if (input.includes("how are you")) {
      return " I'm good ,I'm BYTE BUDDY,Developed by<p>SHAHID AHMAD DAR</p> but thanks for asking! How can I assist you?";
    }

    if (input.includes("who are you") || input.includes("your name")) {
      return "I'm Shahid's virtual assistant BYTE BUDDY 🤖, here to help you learn more about him.";
    }

    if (input.includes("devname") || input.includes("about shahid") || input.includes("bio")) {
      return " My developer is Shahid Ahmad Dar who is a passionate web developer and designer skilled in PHP, JavaScript, MySQL, and modern UI/UX. 🚀";
    }

    if (input.includes("skills") || input.includes("tech") || input.includes("stack")) {
      return "Shahid's core tech stack includes HTML, CSS, JavaScript, PHP, MySQL, and modern frameworks 🌐.";
    }

    if (input.includes("project") || input.includes("work")) {
      return 'You can check out Shahid’s awesome projects <a href="#projects" style="color:#ff4b2b;">here</a>!';
    }

    if (input.includes("contact") || input.includes("email")) {
      return 'You can reach Shahid via the <a href="#contact" style="color:#ff4b2b;">Contact form</a> or email him directly at <strong>darshahid45ds@gmail.com.com</strong> 📩';
    }

    if (input.includes("github")) {
      return 'Here’s his GitHub: <a href="https://github.com/shahid-dar09" target="_blank" style="color:#ff4b2b;">github.com/shahid-dar09</a> 🧑‍💻';
    }

    if (input.includes("linkedin")) {
      return 'Here’s his LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank" style="color:#ff4b2b;">linkedin.com/in/yourusername</a> 💼';
    }

    if (input.includes("resume") || input.includes("cv")) {
      return 'You can <a href="assets/resume/Shahid_Ahmad_Dar.pdf" target="_blank" style="color:#ff4b2b;">download Shahid’s resume here</a> 📄';
    }

    if (input.includes("bye") || input.includes("goodbye")) {
      return "Goodbye 👋! Have a great day ahead!";
    }

    // default fallback
    return "Hmm... I’m not sure about that 🤔 — try asking about Shahid’s projects, skills, or contact details!";
  }
});

// ============================================
// ✍️ Typewriter Effect for Heading
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const texts = [
    "SHAHID AHMAD DAR",
    "Web Developer",
     " Designer UI/UX",
    "HTML CSS JS ",
    "& PHP SQL Enthusiast",
    "SHAHID AHMAD DAR" // 👈 final line to stop on
  ];

  const heading = document.getElementById("typewriter");
  let count = 0;
  let index = 0;

  function type() {
    const currentText = texts[count];

    if (index < currentText.length) {
      heading.textContent = currentText.slice(0, ++index);
      setTimeout(type, 90 + Math.random() * 70); // smooth typing speed
    } else {
      // finished current word
      index = 0;
      count++;
      if (count < texts.length) {
        setTimeout(() => {
          heading.textContent = ""; // clear before next line
          type();
        }, 1200);
      } else {
        // 👇 after final line (your name), hide cursor completely
        setTimeout(() => {
          heading.classList.add("cursor-hide");
        }, 1000);
      }
    }
  }

  type();
});

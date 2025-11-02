document.addEventListener("DOMContentLoaded", () => {
  fetch("https://shahiddevportfolio.page.gd/get_projects.php")
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
          <div class="card" data-aos="fade-up">
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

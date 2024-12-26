document.addEventListener('DOMContentLoaded', function() {
  const projects = document.querySelectorAll('.project');

  // Add hover effect for project items
  projects.forEach(project => {
      project.addEventListener('mouseenter', () => {
          project.style.transform = 'scale(1.05)';
      });

      project.addEventListener('mouseleave', () => {
          project.style.transform = 'scale(1)';
      });
  });
});

 document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Optional: run once
        }
      });
    }, {
      threshold: 0.2 // 20% visible to trigger
    });

    const contentSections = document.querySelectorAll('.reveal.hidden');
    contentSections.forEach(section => observer.observe(section));
  });
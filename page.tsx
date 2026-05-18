@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --navy: #003D5C;
  --cyan: #5DCCFF;
  --orange: #FF6B35;
  --light-bg: #F9FAFB;
  --border-light: #E5E7EB;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Outfit', sans-serif;
  color: #1F2937;
  background-color: #FFFFFF;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

h1 {
  font-size: 3.5rem;
  font-weight: 700;
}

h2 {
  font-size: 2.5rem;
  font-weight: 600;
}

h3 {
  font-size: 1.875rem;
  font-weight: 600;
}

h4 {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.875rem;
  }
  h3 {
    font-size: 1.5rem;
  }
}

/* Custom components */
.btn-primary {
  @apply px-8 py-3 font-semibold rounded text-white transition-all duration-200;
  background-color: var(--orange);
}

.btn-primary:hover {
  background-color: #E55A24;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
}

.btn-secondary {
  @apply px-8 py-3 font-semibold rounded text-white transition-all duration-200;
  background-color: var(--navy);
}

.btn-secondary:hover {
  background-color: #002847;
  transform: translateY(-2px);
}

.btn-text {
  @apply inline-flex items-center gap-2 text-orange font-semibold hover:opacity-80 transition-opacity;
  color: var(--orange);
}

.container-section {
  @apply max-w-7xl mx-auto px-6 py-16;
}

.divider {
  height: 4px;
  background-color: var(--orange);
  width: 100%;
}

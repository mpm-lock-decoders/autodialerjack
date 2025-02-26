var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');


// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});

// Function to update logo based on theme
function updateLogo() {
  const logo = document.getElementById('theme-logo');
  if (document.documentElement.classList.contains('dark')) {
    logo.src = 'static/images/logo_web_dark.png';
  } else {
    logo.src = 'static/images/logo_web.png';
  }
}

// Update logo on page load
document.addEventListener('DOMContentLoaded', updateLogo);

// Update logo when theme toggle is clicked
document.getElementById('theme-toggle').addEventListener('click', () => {
  // The theme toggle button already changes the dark class
  // We just need to update the logo afterward
  setTimeout(updateLogo, 50); // Small delay to ensure class changes have been applied
});

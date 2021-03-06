const cl = window.cloudinary.Cloudinary.new({cloud_name: "starbist"})
cl.responsive()

// Theme toggle
const $toggle = document.querySelector('.js-toggle')

if ($toggle) {
  $toggle.addEventListener('click', () => {
    document.documentElement.classList.add('switch')
    document.documentElement.classList.toggle('dark')

    localStorage.setItem('sb-dark-mode', document.documentElement.classList.contains('dark'))

    setTimeout(() => {
      document.documentElement.classList.remove('switch')
    }, 1000)
  })
}

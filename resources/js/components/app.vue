<template>
  <!-- Navbar Container -->
  <div class="absolute top-0 left-0 w-full z-10 bg-transparent">
    <div class="container mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
      <!-- Logo Section -->
      <RouterLink to="/" class="flex items-center">
        <img src="/public/images/php.png" alt="Logo" class="h-10 w-auto mr-3" />
        <span class="text-lg font-bold text-white">MyBrand</span>
      </RouterLink>

      <!-- Hamburger Menu for Mobile (Visible only on small screens) -->
      <div class="lg:hidden flex items-center">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
            <path fill-rule="evenodd"
              d="M4.5 6h15a.75.75 0 0 1 0 1.5h-15A.75.75 0 0 1 4.5 6zm0 5h15a.75.75 0 0 1 0 1.5h-15A.75.75 0 0 1 4.5 11zm0 5h15a.75.75 0 0 1 0 1.5h-15A.75.75 0 0 1 4.5 16z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <!-- Desktop Navigation Links (Visible only on large screens) -->
      <div class="hidden lg:flex space-x-6 lg:space-x-10">
        <RouterLink class="link text-base text-white transition-all duration-200 hover:text-opacity-80" to="/" @click="triggerTransition">Home</RouterLink>
        <RouterLink class="link text-base text-white transition-all duration-200 hover:text-opacity-80" to="/about" @click="triggerTransition">About</RouterLink>
        <RouterLink class="link text-base text-white transition-all duration-200 hover:text-opacity-80" to="/projects" @click="triggerTransition">Our Projects</RouterLink>
        <RouterLink class="link text-base text-white transition-all duration-200 hover:text-opacity-80" to="/contact" @click="triggerTransition">Contact Us</RouterLink>
      </div>
    </div>
  </div>

  <!-- Mobile Menu (Only visible when isMenuOpen is true on small screens) -->
  <div v-if="isMenuOpen" class="lg:hidden fixed inset-0 mobile-menu z-20 flex items-center justify-center">
    <div class="bg-white w-4/5 max-w-md p-6 rounded-lg shadow-lg">
      <div class="flex justify-end">
        <button @click="toggleMenu" class="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
            <path fill-rule="evenodd"
              d="M4.5 6h15a.75.75 0 0 1 0 1.5h-15A.75.75 0 0 1 4.5 6zm0 5h15a.75.75 0 0 1 0 1.5h-15A.75.75 0 0 1 4.5 11zm0 5h15a.75.75 0 0 1 0 1.5h-15A.75.75 0 0 1 4.5 16z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div class="space-y-4 text-center">
        <RouterLink class="block text-xl text-gray-800 hover:text-gray-600" to="/" @click="navigate('home')">Home</RouterLink>
        <RouterLink class="block text-xl text-gray-800 hover:text-gray-600" to="/about" @click="navigate('about')">About</RouterLink>
        <RouterLink class="block text-xl text-gray-800 hover:text-gray-600" to="/projects" @click="navigate('projects')">Our Projects</RouterLink>
        <RouterLink class="block text-xl text-gray-800 hover:text-gray-600" to="/contact" @click="navigate('contact')">Contact Us</RouterLink>
      </div>
    </div>
  </div>

  <!-- Content of each route will be injected here with transition -->
  <transition name="slide-up" mode="out-in">
    <RouterView />
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false, // Controls the visibility of the mobile menu
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle the mobile menu state
    },
    navigate(routeName) {
      this.isMenuOpen = false; // Close the menu
      this.$router.push({ name: routeName }); // Navigate to the selected route
    },
    triggerTransition() {
      // Optionally log or perform actions during transition
      console.log("Transition triggered!");
    }
  },
};
</script>

<style scoped>
/* Link Styling */
.link {
  font-weight: 500;
  letter-spacing: 0.5px;
}

/* Hover effect */
.link:hover {
  color: rgba(255, 255, 255, 0.8);
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .link {
    font-size: 1rem;
  }
}

/* Slide up transition for page content */
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-up-enter, .slide-up-leave-to {
  transform: translateY(30px); /* Start below */
  opacity: 0;
}

/* Transparent Background for Mobile Menu */
.mobile-menu {
  background: rgba(0, 0, 0, 0.7); /* Adjust transparency here */
  backdrop-filter: blur(8px); /* Optional: Add blur for a frosted effect */
}

/* Optional: Add transition to nav links when clicked */
.link {
  transition: color 0.3s ease;
}
</style>

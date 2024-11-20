<template>
  <!-- Projects Section -->
  <section class="mx-auto px-8 py-8 lg:py-40 bg-gradient-to-r from-gray-900 via-black to-gray-800">
    <!-- Heading -->
    <div class="text-center mb-10 lg:mb-16">
      <h2 class="antialiased tracking-normal font-sans text-4xl font-semibold text-indigo-400 leading-[1.3] lg:text-5xl">
        My Projects
      </h2>
      <p class="block antialiased font-sans text-xl font-normal text-gray-400 mt-4 lg:mt-6 lg:w-5/12 mx-auto">
        Explore my Projects.!
      </p>
    </div>
    <!-- Projects Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
      <!-- Project 1 -->
      <div class="relative group">
        <img class="h-auto w-full rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:opacity-70" 
             src="/public/images/project1.png" alt="Cosmo Chat">
        <div class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white font-semibold rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span class="text-lg font-bold mb-2">Cosmo Chat</span>
          <button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
            Visit 🌐
          </button>
        </div>
      </div>
      <!-- Project 2 -->
      <div class="relative group">
        <img class="h-auto w-full rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:opacity-70" 
             src="/public/images/project2.png" alt="Paperwork">
        <div class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white font-semibold rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span class="text-lg font-bold mb-2">Paperwork</span>
          <button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
            Visit 🌐
          </button>
        </div>
      </div>
      <!-- Project 3 -->
      <div class="relative group">
        <img class="h-auto w-full rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:opacity-70" 
             src="/public/images/project3.png" alt="AEO Pakistan">
        <div class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white font-semibold rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span class="text-lg font-bold mb-2">AEO Pakistan</span>
          <button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
            Visit 🌐
          </button>
        </div>
      </div>
      <!-- Project 4 -->
      <div class="relative group">
        <img class="h-auto w-full rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:opacity-70" 
             src="/public/images/project4.png" alt="Armastak Inventory">
        <div class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white font-semibold rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span class="text-lg font-bold mb-2">Armastak Inventory</span>
          <button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
            Visit 🌐
          </button>
        </div>
      </div>
      <!-- Project 5 -->
      <div class="relative group">
        <img class="h-auto w-full rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:opacity-70" 
             src="/public/images/project5.png" alt="Makan Dubai">
        <div class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white font-semibold rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span class="text-lg font-bold mb-2">Makan Dubai</span>
          <button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
            Visit 🌐
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

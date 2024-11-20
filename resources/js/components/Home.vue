<template>
    <section class="py-24 flex items-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800">
        <div class="container mx-auto flex flex-col lg:flex-row-reverse items-center">
            <!-- Right Content Section (Profile Card) -->
            <div
                class="lg:w-1/2 px-6 flex justify-center lg:justify-start transition-transform duration-500 ease-in-out transform hover:scale-105">
                <div class="relative group">
                    <div
                        class="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 animate-wiggle-more animate-once">
                        <div class="flex justify-end px-4 pt-4">
                            <button id="dropdownButton" data-dropdown-toggle="dropdown"
                                class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                                type="button">
                                <span class="sr-only">Open dropdown</span>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 16 3">
                                    <path
                                        d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                            </button>
                            <div id="dropdown"
                                class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul class="py-2" aria-labelledby="dropdownButton">
                                    <li>
                                        <a href="#"
                                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export
                                            Data</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex flex-col items-center pb-10 ">
                            <img class="w-90 h-90 mb-3 rounded-full shadow-lg" src="/public/images/my.png"
                                alt="Talha image" />
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Muhammad Talha</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Full stack developer</span>
                            <div class="flex mt-4 md:mt-6 ">
                               
                                    <a href="#"
                        class="py-2 px-4 ms-2 text-sm font-medium rounded-md bg-indigo-600 px-2 py-3 font-medium text-white transition-transform duration-300 hover:scale-105 hover:bg-indigo-700 shadow-lg">
                        Add Friend
                    </a>
                    <a href="#"
                        class="py-2 px-4 ms-2 text-sm font-medium rounded-md border border-gray-600 px-2 py-3 font-medium text-gray-200 transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
                        Message
                    </a>
                             
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Left Content Section (Text and Buttons) -->
            <div
                class="lg:w-1/2 px-6 text-center lg:text-left mt-10 lg:mt-0 animate-slide-in-left-delay transition-opacity duration-700 ease-in-out opacity-90 hover:opacity-100">
                <p class="text-lg font-medium leading-8 text-indigo-400"> Building Digital Experiences That</p>
                <h1 class="mt-3 text-4xl font-extrabold leading-tight tracking-tight  lg:text-5xl text-blue-gray-900 ">
                    Inspire and Innovate <br /> <span class="text-indigo-400">design to code</span>
                </h1>
                <p class="mt-3 text-lg leading-relaxed text-gray-300">
                    Combining creativity with technology to craft seamless websites, robust applications, and impactful solutions.  
                    Let’s bring your ideas to life with code that speaks volumes.
                </p>

                <div class="mt-6 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4">
                    <a href="#"
                        class="rounded-md bg-indigo-600 px-5 py-3 font-medium text-white transition-transform duration-300 hover:scale-105 hover:bg-indigo-700 shadow-lg">
                        Get started for free
                    </a>
                    <a href="#"
                        class="rounded-md border border-gray-600 px-5 py-3 font-medium text-gray-200 transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
                        Request a demo
                    </a>
                </div>

                <!-- Social Media Icons Section -->
                <div class="mt-6 flex justify-center lg:justify-start gap-6">
                    <!-- Skype Icon -->
                    <a href="https://join.skype.com/" class="text-gray-400 hover:text-gray-200 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
                            <path
                                d="M14.7 11.3a6 6 0 1 1-9.4-7.5 6 6 0 0 1 9.4 7.5zM14.3 7.3a4.5 4.5 0 1 0-6.7 5.7 4.5 4.5 0 0 0 6.7-5.7z" />
                        </svg>
                    </a>

                    <!-- Instagram Icon -->
                    <a href="https://www.instagram.com/" class="text-gray-400 hover:text-gray-200 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
                            <path
                                d="M12 2.163c3.2 0 3.589.013 4.853.07 1.248.058 2.356.342 3.207 1.192.851.85 1.135 1.96 1.192 3.207.058 1.263.07 1.653.07 4.853s-.012 3.59-.07 4.853c-.058 1.247-.342 2.357-1.192 3.207-.851.85-1.96 1.134-3.207 1.192-1.263.058-1.653.07-4.853.07-3.2 0-3.59-.012-4.853-.07-1.248-.058-2.356-.342-3.207-1.192-.851-.85-1.135-1.96-1.192-3.207-.058-1.263-.07-1.653-.07-4.853s.012-3.59.07-4.853c.058-1.247.342-2.357 1.192-3.207.851-.85 1.96-1.134 3.207-1.192 1.263-.058 1.653-.07 4.853-.07zM12 0c-3.257 0-5.88.014-7.91.073-2.062.063-3.735 1.734-3.798 3.79-.064 2.02-.077 4.673-.077 7.07s.014 5.05.077 7.07c.063 2.056 1.736 3.727 3.798 3.79 2.03.06 4.653.073 7.91.073s5.88-.013 7.91-.073c2.062-.063 3.735-1.734 3.798-3.79.064-2.02.077-4.673.077-7.07s-.014-5.05-.077-7.07c-.063-2.056-1.736-3.727-3.798-3.79C17.88.014 15.257 0 12 0z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

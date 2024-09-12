/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navigation from "./components/Navigation";
import backgroundimg from './assets/backgroundimg.webp';
import airpotimg from './assets/airport.jpeg';

import { FaPlaneDeparture } from "react-icons/fa";

const packages = [
  {
    title: "Basic Package",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$99",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Standard Package",
    description: "Vestibulum eget ipsum eget urna consequat tincidunt.",
    price: "$199",
    features: ["All Basic Package features", "Feature 4", "Feature 5"],
  },
  {
    title: "Premium Package",
    description: "Praesent maximus elit nec libero fermentum, in lacinia.",
    price: "$299",
    features: ["All Standard Package features", "Feature 6", "Feature 7"],
  },
];

function App() {
  return (
    <div>
      < Navigation />

      <div className="relative">

        {/* background image */}
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>


        {/* section starts here */}
        <section id="#Home" className="relative mb-16 z-0 py-8">
          <div className="grid container mx-auto pt-40 p-8 grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">Find Ticket</h2>

              <p className="mt-4 text-gray-600">
                Get the best deals on your next journey! Explore available routes, compare prices, and book your ticket hassle-free. 
                Traveling made easy with TripTracker—just a few clicks away from your next adventure!
              </p>



              {/* Input for search here */}
              <div className="relative mt-8">
                <label for="Search" className="sr-only"> Search </label>

                <input
                  type="text"
                  id="Search"
                  placeholder="Search ticket..."
                  className="w-full h-12 focus:outline-none rounded-full border-none border-gray-200 pe-10 ps-4 text-sm  py-2.5 shadow-sm sm:text-sm"
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <button
                    type="button"
                    className="absolute border border-emerald-700 end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                  >
                    <span className="sr-only">Search</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </span>
              </div>

            </div>

            {/* statistics here */}
            <div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                <div className="flex flex-col rounded-lg border border-emerald-600 hover:bg-gray-200 hover:border-gray-200 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Tickets Sold
                  </dt>
                  <dd className="text-4xl font-extrabold mb-4 text-emerald-600 md:text-5xl">
                    9,k+
                  </dd>
                </div>

                <div className="flex flex-col rounded-lg border border-emerald-600 hover:bg-gray-200 hover:border-gray-200 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Passengers Carried
                  </dt>
                  <dd className="text-4xl font-extrabold mb-4 text-emerald-600 md:text-5xl">
                    20,k+
                  </dd>
                </div>

                <div className="flex flex-col rounded-lg border border-emerald-600 hover:bg-gray-200 hover:border-gray-200 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Flight Satisfaction
                  </dt>
                  <dd className="text-4xl font-extrabold mb-4 text-emerald-600 md:text-5xl">
                    10,k+
                  </dd>
                </div>

                <div className="flex flex-col rounded-lg border border-emerald-600 hover:bg-gray-200 hover:border-gray-200 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Tickets Value
                  </dt>
                  <dd className="text-4xl font-extrabold mb-4 text-emerald-600 md:text-5xl">
                    $4.8m
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section ends here */}


        {/* section starts here */}
        <section className="relative pb-2">

          <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={airpotimg} alt="airpotimg" />
          </div>


          <div className='max-w-[1240px] mx-auto text-white relative'>

            <div className="relative overflow-hidden mx-4 -top-10 bg-white rounded-lg shadow-md">
              <div className="flex px-8 pt-8">
                <fieldset className="grid grid-cols-2 gap-4">
                  <legend className="sr-only">Delivery</legend>

                  <div>
                    <input
                      type="radio"
                      name="DeliveryOption"
                      value="DeliveryOneway"
                      id="DeliveryOneway"
                      className="peer hidden [&:checked_+_label_svg]:block"
                      checked
                    />

                    <label
                      for="DeliveryOneway"
                      className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-green-600 peer-checked:ring-1 peer-checked:ring-green-600"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-gray-700">One-way</p>

                        <svg
                          className="hidden h-5 w-5 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="DeliveryOption"
                      value="DeliveryRoundtrip"
                      id="DeliveryRoundtrip"
                      className="peer hidden [&:checked_+_label_svg]:block"
                    />

                    <label
                      for="DeliveryRoundtrip"
                      className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-green-600 peer-checked:ring-1 peer-checked:ring-green-600"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-gray-700">Roundtrip</p>

                        <svg
                          className="hidden h-5 w-5 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </label>
                  </div>
                </fieldset>
              </div>
              <div className="flex px-8 pt-1">
                <div className="grid mx-auto py-4 grid-cols-1 gap-y-8 lg:grid-cols-5 lg:items-center lg:gap-x-4">

                  <label
                    for="Origin"
                    className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600"
                  >
                    <input
                      type="text"
                      id="Origin"
                      className="peer h-14 w-full text-black px-4 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      placeholder="Origin"
                    />

                    <span
                      className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                    >
                      Origin
                    </span>
                  </label>

                  <label
                    for="Destination"
                    className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600"
                  >
                    <input
                      type="text"
                      id="Destination"
                      className="peer h-14 w-full text-black px-4 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      placeholder="Destination"
                    />

                    <span
                      className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                    >
                      Destination
                    </span>
                  </label>

                  <label
                    for="Departure"
                    className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600"
                  >
                    <input
                      type="date"
                      id="Departure"
                      className="peer h-14 w-full text-black px-4 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      placeholder="Departure"
                    />

                    <span
                      className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                    >
                      Departure
                    </span>
                  </label>

                  <label
                    for="Return"
                    className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600"
                  >
                    <input
                      type="date"
                      id="Return"
                      className="peer h-14 w-full text-black px-4 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      placeholder="Return"
                    />

                    <span
                      className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                    >
                      Return
                    </span>
                  </label>

                  <label
                    for="Travellers"
                    className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600"
                  >
                    <input
                      type="number"
                      id="Travellers"
                      className="peer h-14 w-full text-black px-4 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      placeholder="Travellers"
                    />

                    <span
                      className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                    >
                      Travellers
                    </span>
                  </label>

                </div>
              </div>

              <div className="flex py-4">
                <a
                  className="flex mx-auto text-center cursor-pointer items-center px-8 py-4 hover:text-white bg-green-600 rounded hover:bg-black active:text-white focus:outline-none focus:ring"
                >
                  <FaPlaneDeparture className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  <span className="text-sm font-medium">
                    Search
                  </span>
                </a>
              </div>

            </div>

            <div className='px-4 py-12 md:block hidden'>
              <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Flight Selection</h2>
              <h3 className='text-5xl font-bold py-6 text-center'>The Best Way For You</h3>
              <p className='py-4 text-3xl text-slate-300 text-center'>
              Discover seamless travel options tailored just for you. With TripTracker, finding the perfect flight is 
              fast, easy, and affordable. Start your journey with us and unlock the best travel experiences at unbeatable prices!
              </p>
            </div>

          </div>


        </section>
        {/* section ends here */}


        {/* Section starts here */}
        <section className="relative bg-white">

          <section className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
              <h1 className="lg:text-5xl text-2xl font-bold">Subscribtion</h1>
            </div>
            <main>
              <div className="container mx-auto mt-8 px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {packages.map((pkg, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                    >
                      <h3 className="text-2xl font-semibold mb-4">{pkg.title}</h3>
                      <p className="text-gray-500 mb-4">{pkg.description}</p>
                      <div className="mb-4">
                        <span className="text-3xl font-bold">{pkg.price}</span>
                        <span className="text-gray-500 ml-2">/ month</span>
                      </div>
                      <ul className="list-disc pl-6">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="text-gray-700 mb-2">
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a className="bg-green-600 cursor-pointer hover:bg-black text-white font-semibold px-4 py-2 mt-4 rounded-lg">
                        Subscribe
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </section>

        </section>
        {/* sections ends here */}

        {/* Section starts here */}
        <section className="relative bg-white mt-10">
          <footer className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex justify-center text-teal-600 sm:justify-start">
                 <a href="home"><h1>TripTracker</h1> </a>
                </div>

                <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                  Copyright &copy; Design & Developed by Joy Pal. 2024 || All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </section>
        {/*section ends here*/}

      </div>

    </div>
  );
}

export default App;
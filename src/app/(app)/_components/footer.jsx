import React from 'react'

export const Footer = () => {
  return (
    <footer className="max-w-6xl m-auto  border-t-1 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="text-white flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 56 56"
              fontSize={24}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M7.627 16.697L23.812 5.364a4 4 0 0 1 5.57.982l2.553 3.645q.056.08.107.163zM2.147 29.84L1.04 25.708a4 4 0 0 1 2.83-4.898L44.438 9.94a4 4 0 0 1 4.899 2.828l1.151 4.298a3.2 3.2 0 0 1-1.121 3.35a5.001 5.001 0 0 0 2.433 8.903a3.08 3.08 0 0 1 2.576 2.255l1.172 4.377a4 4 0 0 1-2.828 4.899L12.15 51.72a4 4 0 0 1-4.898-2.828l-1.103-4.118a3.48 3.48 0 0 1 1.16-3.6a5.001 5.001 0 0 0-2.37-8.812a3.46 3.46 0 0 1-2.791-2.52m35.478-6.689a3 3 0 1 0-1.553-5.795a3 3 0 0 0 1.553 5.795m2.07 7.728a3 3 0 1 0-1.552-5.796a3 3 0 0 0 1.553 5.796m2.071 7.727a3 3 0 1 0-1.552-5.795a3 3 0 0 0 1.552 5.795"
              ></path>
            </svg>
            <h3 className="font-[inter] tracking-tight font-medium text-3xl">
              Eventmakers.
            </h3>
          </div>
          <p className="text-white text-sm">
            Office 88 Kota Kasablanka 9th Floor Unit G Jl. Casablanca Raya Kav.
            88, Jakarta
          </p>
          <p className="text-white">Phone: (021) 29475573</p>
        </div>
        <div className="space-y-4">
          <h1 className="font-medium text-xl text-white">Category</h1>
          <ul>
            <li className="text-white text-sm">Webinar</li>
            <li className="text-white text-sm">Health and Care</li>
            <li className="text-white text-sm">Sports</li>
            <li className="text-white text-sm">Business</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h1 className="font-medium text-xl text-white">Contact</h1>
          <p className="text-white text-sm">help-eventmakers@luminar.com</p>
        </div>
        <div className="space-y-4">
          <h1 className="font-medium text-white text-xl">
            Follow Social Media
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-center py-4">
        <div className="font-medium text-base text-white ">
          @2025 Eventmakers All Rights Reserved
        </div>
        <ul className="flex items-center space-x-4">
          <li className="text-white">About Us</li>
          <li className="text-white">Term & Conditions</li>
          <li className="text-white">Privacy Policy</li>
          <li className="text-white">Contact Us</li>
        </ul>
      </div>
    </footer>
  )
}

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "../styles.css";
import * as Separator from "@radix-ui/react-separator";

const Resume = () => {
  return (
    <div className="w-full h-full grid grid-cols-3 gap-20">
      <div className="col-span-2 p-4 border-l border-neutral-800 mt-10 pl-20 flex-col">
        <div className="flex">
          <div>
            <img
              width={80}
              height={80}
              className="rounded-full mr-10 bg-emerald-500 shadow-lg shadow-emerald-500 ring-2 ring-emerald-300 ring-offset-2 ring-offset-emerald-100"
              src="src/assets/avatar.jpeg"
            />
          </div>
          <div>
            <h1 className="font-bold text-4xl">Adam Gorring</h1>
            <h2 className="font-semibold text-xl text-neutral-500">
              Software Developer
            </h2>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-semibold text-xl text-neutral-500">Education</h2>
          <h2 className="mt-10 font-semibold text-xl">
            Bachelor of Computer Science
          </h2>
          <h3 className="mt-1 font-semibold text-neutral-500">2021 - 2023</h3>
          <h3 className="mt-3 font-semibold">
            Studied at the University of the Sunshine Coast, QLD. Achieved a GPA
            of 6.83. Studied a minor in Cyber Security.
          </h3>
        </div>
        <div className="mt-10 font-semibold">
          <Accordion.Root type="single" collapsible>
            <Accordion.Item value="item-1">
              <Accordion.Header>
                <Accordion.Trigger className="AccordionTrigger flex items-center gap-2">
                  <h2 className="font-semibold text-xl">Further Education</h2>
                  <ChevronDownIcon className="AccordionChevron" aria-hidden />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="AccordionContent">
                <h2 className="mt-5 font-semibold text-xl">High School</h2>
                <h3 className="mt-1 font-semibold text-neutral-500">
                  2015 - 2020
                </h3>
                <h3 className="mt-3 font-semibold">
                  Studied at Siena Catholic College, QLD. Achieved an ATAR of
                  95.25.
                </h3>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-2" className="mt-5">
              <Accordion.Header>
                <Accordion.Trigger className="AccordionTrigger flex items-center gap-2">
                  <h2 className="font-semibold text-xl">Certifications</h2>
                  <ChevronDownIcon className="AccordionChevron" aria-hidden />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="AccordionContent">
                <h2 className="mt-5 font-semibold text-xl">
                  Microsoft Azure SC-900 Security, Compliance, and Identity
                  Fundamentals Certificate
                </h2>
                <h3 className="mt-1 font-semibold text-neutral-500">2023</h3>
                <h2 className="mt-5 font-semibold text-xl">
                  Microsoft Azure AI-900 AI Fundamentals Certificate
                </h2>
                <h3 className="mt-1 font-semibold text-neutral-500">2023</h3>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
        <Separator.Root className="SeparatorRoot mt-10" />
        <div className="mt-10">
          <h2 className="font-semibold text-xl text-neutral-500">Skills</h2>
          <h2 className="mt-10 font-semibold text-xl">
            Object-Oriented Programming
          </h2>
          <div className="mt-5 flex gap-5">
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 128 128" width="75">
                <path
                  fill="#f05138"
                  d="M126.33 34.06a39.32 39.32 0 00-.79-7.83 28.78 28.78 0 00-2.65-7.58 28.84 28.84 0 00-4.76-6.32 23.42 23.42 0 00-6.62-4.55 27.27 27.27 0 00-7.68-2.53c-2.65-.51-5.56-.51-8.21-.76H30.25a45.46 45.46 0 00-6.09.51 21.82 21.82 0 00-5.82 1.52c-.53.25-1.32.51-1.85.76a33.82 33.82 0 00-5 3.28c-.53.51-1.06.76-1.59 1.26a22.41 22.41 0 00-4.76 6.32 23.61 23.61 0 00-2.65 7.58 78.5 78.5 0 00-.79 7.83v60.39a39.32 39.32 0 00.79 7.83 28.78 28.78 0 002.65 7.58 28.84 28.84 0 004.76 6.32 23.42 23.42 0 006.62 4.55 27.27 27.27 0 007.68 2.53c2.65.51 5.56.51 8.21.76h63.22a45.08 45.08 0 008.21-.76 27.27 27.27 0 007.68-2.53 30.13 30.13 0 006.62-4.55 22.41 22.41 0 004.76-6.32 23.61 23.61 0 002.65-7.58 78.49 78.49 0 00.79-7.83V34.06z"
                ></path>
                <path
                  fill="#fefefe"
                  d="M85 96.5c-11.11 6.13-26.38 6.76-41.75.47A64.53 64.53 0 0113.84 73a50 50 0 0010.85 6.32c15.87 7.1 31.73 6.61 42.9 0-15.9-11.66-29.4-26.82-39.46-39.2a43.47 43.47 0 01-5.29-6.82c12.16 10.61 31.5 24 38.38 27.79a271.77 271.77 0 01-27-32.34 266.8 266.8 0 0044.47 34.87c.71.38 1.26.7 1.7 1a32.7 32.7 0 001.21-3.51c3.71-12.89-.53-27.54-9.79-39.67C93.25 33.81 106 57.05 100.66 76.51c-.14.53-.29 1-.45 1.55l.19.22c10.59 12.63 7.68 26 6.35 23.5C101 91 90.37 94.33 85 96.5z"
                ></path>
              </svg>
              <h2 className="font-semibold">Swift</h2>
            </div>
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 128 128" width="75">
                <path
                  fill="#0074BD"
                  d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
                ></path>
                <path
                  fill="#EA2D2E"
                  d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
                ></path>
                <path
                  fill="#0074BD"
                  d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
                ></path>
                <path
                  fill="#EA2D2E"
                  d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
                ></path>
                <path
                  fill="#0074BD"
                  d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
                ></path>
              </svg>
              <h2 className="font-semibold">Java</h2>
            </div>
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 128 128" width={75}>
                <path
                  fill="#9C033A"
                  d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM82 66v-4h5v-5h5v5h5v4h-5v5h-5v-5h-5zm3.3-14C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5zM115 66h-5v5h-4v-5h-6v-4h6v-5h4v5h5v4z"
                ></path>
              </svg>

              <h2 className="font-semibold">C++</h2>
            </div>
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 128 128" width={75}>
                <linearGradient
                  id="python-original-a"
                  gradientUnits="userSpaceOnUse"
                  x1="70.252"
                  y1="1237.476"
                  x2="170.659"
                  y2="1151.089"
                  gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                >
                  <stop offset="0" stop-color="#5A9FD4"></stop>
                  <stop offset="1" stop-color="#306998"></stop>
                </linearGradient>
                <linearGradient
                  id="python-original-b"
                  gradientUnits="userSpaceOnUse"
                  x1="209.474"
                  y1="1098.811"
                  x2="173.62"
                  y2="1149.537"
                  gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                >
                  <stop offset="0" stop-color="#FFD43B"></stop>
                  <stop offset="1" stop-color="#FFE873"></stop>
                </linearGradient>
                <path
                  fill="url(#python-original-a)"
                  d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
                  transform="translate(0 10.26)"
                ></path>
                <path
                  fill="url(#python-original-b)"
                  d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
                  transform="translate(0 10.26)"
                ></path>
                <radialGradient
                  id="python-original-c"
                  cx="1825.678"
                  cy="444.45"
                  r="26.743"
                  gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0"
                    stop-color="#B8B8B8"
                    stop-opacity=".498"
                  ></stop>
                  <stop offset="1" stop-color="#7F7F7F" stop-opacity="0"></stop>
                </radialGradient>
                <path
                  opacity=".444"
                  fill="url(#python-original-c)"
                  d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
                ></path>
              </svg>

              <h2 className="font-semibold">Python</h2>
            </div>
          </div>

          <h2 className="mt-10 font-semibold text-xl">Web and Cloud</h2>
          <h2 className="mt-10 font-semibold text-xl">Tools</h2>
        </div>
      </div>

      <div className="col-span-1 p-4 mt-10 border-l border-neutral-800">
        About
      </div>
    </div>
  );
};

export default Resume;

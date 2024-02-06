import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ChevronDownIcon,
  ArrowRightIcon,
  VercelLogoIcon,
} from "@radix-ui/react-icons";
import "../styles.css";
import * as Separator from "@radix-ui/react-separator";
import { useScroll, animated } from "@react-spring/web";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Resume = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="w-full h-full grid grid-cols-3 gap-20">
      <div className="col-span-2 p-4 border-l border-neutral-800 mt-10 mb-20 pl-20 flex-col">
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
        <div className="mt-20">
          <h2 className="font-semibold text-xl text-neutral-500">Education</h2>
          <h2 className="mt-10 font-semibold text-xl">
            Bachelor of Computer Science
          </h2>
          <h3 className="mt-1 font-semibold text-neutral-500">2021 - 2023</h3>
          <h3 className="mt-3 font-medium">
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
        <div className="mt-20">
          <h2 className="font-semibold text-xl text-neutral-500">Skills</h2>
          <h2 className="mt-10 font-semibold text-xl">
            Object-Oriented Programming
          </h2>
          <div className="mt-5 flex gap-10">
            <div className="flex flex-col items-center">
              <svg
                viewBox="0 0 128 128"
                width="75"
                className="drop-shadow-[0_10px_35px_rgba(255,0,0,0.5)]"
              >
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
              <svg
                viewBox="0 0 128 128"
                width="75"
                className="drop-shadow-[0_10px_35px_rgba(0,0,255,1)]"
              >
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
              <svg
                viewBox="0 0 128 128"
                width={75}
                className="drop-shadow-[0_10px_35px_rgba(255,0,0,0.5)]"
              >
                <path
                  fill="#9C033A"
                  d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM82 66v-4h5v-5h5v5h5v4h-5v5h-5v-5h-5zm3.3-14C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5zM115 66h-5v5h-4v-5h-6v-4h6v-5h4v5h5v4z"
                ></path>
              </svg>

              <h2 className="font-semibold">C++</h2>
            </div>
            <div className="flex flex-col items-center">
              <svg
                viewBox="0 0 128 128"
                width={75}
                className="drop-shadow-[0_10px_35px_rgba(0,0,255,0.5)]"
              >
                <linearGradient
                  id="python-original-a"
                  gradientUnits="userSpaceOnUse"
                  x1="70.252"
                  y1="1237.476"
                  x2="170.659"
                  y2="1151.089"
                  gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                >
                  <stop offset="0" stopColor="#5A9FD4"></stop>
                  <stop offset="1" stopColor="#306998"></stop>
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
                  <stop offset="0" stopColor="#FFD43B"></stop>
                  <stop offset="1" stopColor="#FFE873"></stop>
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
                    stopColor="#B8B8B8"
                    stopOpacity=".498"
                  ></stop>
                  <stop offset="1" stopColor="#7F7F7F" stopOpacity="0"></stop>
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
          <div className="mt-5 flex gap-10">
            <div className="flex flex-col items-center">
              <svg
                viewBox="0 0 128 128"
                width={75}
                className="drop-shadow-[0_10px_35px_rgba(255,0,0,0.5)]"
              >
                <path
                  fill="#E44D26"
                  d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                ></path>
                <path
                  fill="#F16529"
                  d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                ></path>
                <path
                  fill="#fff"
                  d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                ></path>
              </svg>
              <h2 className="font-semibold">HTML/CSS</h2>
            </div>
            <div className="flex flex-col items-center">
              <svg
                viewBox="0 0 128 128"
                width={75}
                className="drop-shadow-[0_10px_35px_rgba(0,0,255,1)]"
              >
                <g fill="#61DAFB">
                  <circle cx="64" cy="64" r="11.4"></circle>
                  <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                </g>
              </svg>

              <h2 className="font-semibold">React.js</h2>
            </div>
            <div className="flex flex-col items-center">
              <svg
                viewBox="0 0 128 128"
                width={75}
                className="drop-shadow-[0_10px_35px_rgba(0,255,0,0.5)]"
              >
                <path
                  fill="#83CD29"
                  d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                ></path>
              </svg>

              <h2 className="font-semibold">Node.js</h2>
            </div>
            <div className="flex flex-col items-center">
              <svg
                viewBox="0 0 304 182"
                width={75}
                height={75}
                className="drop-shadow-[0_10px_35px_rgba(249,191,59,0.75)]"
              >
                <style type="text/css">
                  {`.st0{fill:#ffffff;}
        .st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FF9900;}`}
                </style>
                <g>
                  <path
                    className="st0"
                    d="M86.4,66.4c0,3.7,0.4,6.7,1.1,8.9c0.8,2.2,1.8,4.6,3.2,7.2c0.5,0.8,0.7,1.6,0.7,2.3c0,1-0.6,2-1.9,3l-6.3,4.2   c-0.9,0.6-1.8,0.9-2.6,0.9c-1,0-2-0.5-3-1.4C76.2,90,75,88.4,74,86.8c-1-1.7-2-3.6-3.1-5.9c-7.8,9.2-17.6,13.8-29.4,13.8   c-8.4,0-15.1-2.4-20-7.2c-4.9-4.8-7.4-11.2-7.4-19.2c0-8.5,3-15.4,9.1-20.6c6.1-5.2,14.2-7.8,24.5-7.8c3.4,0,6.9,0.3,10.6,0.8   c3.7,0.5,7.5,1.3,11.5,2.2v-7.3c0-7.6-1.6-12.9-4.7-16c-3.2-3.1-8.6-4.6-16.3-4.6c-3.5,0-7.1,0.4-10.8,1.3c-3.7,0.9-7.3,2-10.8,3.4   c-1.6,0.7-2.8,1.1-3.5,1.3c-0.7,0.2-1.2,0.3-1.6,0.3c-1.4,0-2.1-1-2.1-3.1v-4.9c0-1.6,0.2-2.8,0.7-3.5c0.5-0.7,1.4-1.4,2.8-2.1   c3.5-1.8,7.7-3.3,12.6-4.5c4.9-1.3,10.1-1.9,15.6-1.9c11.9,0,20.6,2.7,26.2,8.1c5.5,5.4,8.3,13.6,8.3,24.6V66.4z M45.8,81.6   c3.3,0,6.7-0.6,10.3-1.8c3.6-1.2,6.8-3.4,9.5-6.4c1.6-1.9,2.8-4,3.4-6.4c0.6-2.4,1-5.3,1-8.7v-4.2c-2.9-0.7-6-1.3-9.2-1.7   c-3.2-0.4-6.3-0.6-9.4-0.6c-6.7,0-11.6,1.3-14.9,4c-3.3,2.7-4.9,6.5-4.9,11.5c0,4.7,1.2,8.2,3.7,10.6   C37.7,80.4,41.2,81.6,45.8,81.6z M126.1,92.4c-1.8,0-3-0.3-3.8-1c-0.8-0.6-1.5-2-2.1-3.9L96.7,10.2c-0.6-2-0.9-3.3-0.9-4   c0-1.6,0.8-2.5,2.4-2.5h9.8c1.9,0,3.2,0.3,3.9,1c0.8,0.6,1.4,2,2,3.9l16.8,66.2l15.6-66.2c0.5-2,1.1-3.3,1.9-3.9c0.8-0.6,2.2-1,4-1   h8c1.9,0,3.2,0.3,4,1c0.8,0.6,1.5,2,1.9,3.9l15.8,67l17.3-67c0.6-2,1.3-3.3,2-3.9c0.8-0.6,2.1-1,3.9-1h9.3c1.6,0,2.5,0.8,2.5,2.5   c0,0.5-0.1,1-0.2,1.6c-0.1,0.6-0.3,1.4-0.7,2.5l-24.1,77.3c-0.6,2-1.3,3.3-2.1,3.9c-0.8,0.6-2.1,1-3.8,1h-8.6c-1.9,0-3.2-0.3-4-1   c-0.8-0.7-1.5-2-1.9-4L156,23l-15.4,64.4c-0.5,2-1.1,3.3-1.9,4c-0.8,0.7-2.2,1-4,1H126.1z M254.6,95.1c-5.2,0-10.4-0.6-15.4-1.8   c-5-1.2-8.9-2.5-11.5-4c-1.6-0.9-2.7-1.9-3.1-2.8c-0.4-0.9-0.6-1.9-0.6-2.8v-5.1c0-2.1,0.8-3.1,2.3-3.1c0.6,0,1.2,0.1,1.8,0.3   c0.6,0.2,1.5,0.6,2.5,1c3.4,1.5,7.1,2.7,11,3.5c4,0.8,7.9,1.2,11.9,1.2c6.3,0,11.2-1.1,14.6-3.3c3.4-2.2,5.2-5.4,5.2-9.5   c0-2.8-0.9-5.1-2.7-7c-1.8-1.9-5.2-3.6-10.1-5.2L246,52c-7.3-2.3-12.7-5.7-16-10.2c-3.3-4.4-5-9.3-5-14.5c0-4.2,0.9-7.9,2.7-11.1   c1.8-3.2,4.2-6,7.2-8.2c3-2.3,6.4-4,10.4-5.2c4-1.2,8.2-1.7,12.6-1.7c2.2,0,4.5,0.1,6.7,0.4c2.3,0.3,4.4,0.7,6.5,1.1   c2,0.5,3.9,1,5.7,1.6c1.8,0.6,3.2,1.2,4.2,1.8c1.4,0.8,2.4,1.6,3,2.5c0.6,0.8,0.9,1.9,0.9,3.3v4.7c0,2.1-0.8,3.2-2.3,3.2   c-0.8,0-2.1-0.4-3.8-1.2c-5.7-2.6-12.1-3.9-19.2-3.9c-5.7,0-10.2,0.9-13.3,2.8c-3.1,1.9-4.7,4.8-4.7,8.9c0,2.8,1,5.2,3,7.1   c2,1.9,5.7,3.8,11,5.5l14.2,4.5c7.2,2.3,12.4,5.5,15.5,9.6c3.1,4.1,4.6,8.8,4.6,14c0,4.3-0.9,8.2-2.6,11.6   c-1.8,3.4-4.2,6.4-7.3,8.8c-3.1,2.5-6.8,4.3-11.1,5.6C264.4,94.4,259.7,95.1,254.6,95.1z"
                  />
                  <g>
                    <path
                      className="st1"
                      d="M273.5,143.7c-32.9,24.3-80.7,37.2-121.8,37.2c-57.6,0-109.5-21.3-148.7-56.7c-3.1-2.8-0.3-6.6,3.4-4.4    c42.4,24.6,94.7,39.5,148.8,39.5c36.5,0,76.6-7.6,113.5-23.2C274.2,133.6,278.9,139.7,273.5,143.7z"
                    />
                    <path
                      className="st1"
                      d="M287.2,128.1c-4.2-5.4-27.8-2.6-38.5-1.3c-3.2,0.4-3.7-2.4-0.8-4.5c18.8-13.2,49.7-9.4,53.3-5    c3.6,4.5-1,35.4-18.6,50.2c-2.7,2.3-5.3,1.1-4.1-1.9C282.5,155.7,291.4,133.4,287.2,128.1z"
                    />
                  </g>
                </g>
              </svg>

              <h2 className="font-semibold">AWS</h2>
            </div>
            <div className="flex flex-col items-center">
              <svg
                viewBox="0 0 128 128"
                width={75}
                className="drop-shadow-[0_10px_35px_rgba(0,0,255,0.5)]"
              >
                <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                <path
                  data-name="original"
                  fill="#007acc"
                  d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                ></path>
              </svg>

              <h2 className="font-semibold">TypeScript</h2>
            </div>
          </div>
          <h2 className="mt-10 font-semibold text-xl">Tools</h2>
        </div>
        <Separator.Root className="SeparatorRoot mt-10" />
        <div className="mt-20">
          <h2 className="font-semibold text-xl text-neutral-500">Experience</h2>
          <h2 className="mt-10 font-semibold text-xl">
            Student Intern - Intelligence Security Operations Centre
          </h2>
          <h3 className="mt-1 font-semibold text-neutral-500">
            IDCARE - Birtinya, QLD | 2023
          </h3>
          <h3 className="mt-3 font-medium">
            My internship at IDCARE was an opportunity to exercise my cyber
            domain knowledge and software development skills. I was exposed to
            intelligence gathering/analysis and criminal profiling procedures.
          </h3>
          <div className="mt-5 ml-2 flex items-center gap-3">
            <VercelLogoIcon />
            <h3 className="font-normal">
              Added value to the organisation by programming intelligence
              analysis solutions using Python and open APIs.
            </h3>
          </div>
          <div className="mt-5 ml-2 flex items-center gap-3">
            <VercelLogoIcon />
            <h3 className="font-normal">
              Participated in open-source intelligence gathering and analysis
              via darknet and covert channels
            </h3>
          </div>
          <div className="mt-5 ml-2 flex items-center gap-3">
            <VercelLogoIcon />
            <h3 className="font-normal">
              Criminal profiling of threat actors, ransomware groups and black
              hat communities, alerting industry and law enforcement.
            </h3>
          </div>
          <div className="mt-5 ml-2 flex items-center gap-3">
            <VercelLogoIcon />
            <h3 className="font-normal">
              Cleaning, preparation, and management of sensitive data using
              Excel and Python; following security procedures.
            </h3>
          </div>
          <h2 className="mt-10 font-semibold text-xl">Online Team Member</h2>
          <h3 className="mt-1 font-semibold text-neutral-500">
            Coles Supermarkets - Maroochydore, QLD | 2020 - Present
          </h3>
          <h3 className="mt-3 font-medium">
            As an Online Team Member, I perform a variety of duties across the
            store including customer service, order collection, delivery, and
            stocking. I deliver excellent customer service and effective
            teamwork.
          </h3>
        </div>

        <Separator.Root className="SeparatorRoot mt-10" />
        <div className="mt-20">
          <h2 className="font-semibold text-xl text-neutral-500">
            Passions and Projects
          </h2>
          <h2 className="mt-10 font-semibold text-xl">
            Mobile Application Development
          </h2>
          <h3 className="mt-1 font-semibold text-neutral-500">
            Swift, Kotlin, React Native
          </h3>
          <h3 className="mt-3 font-medium">
            Since my Digital Solutions class in high school I have been
            passionate for mobile development. I am experienced analysing,
            designing, implementing, and testing mobile applications in iOS and
            Android.
          </h3>
          <div className="mt-5 ml-2 flex items-center gap-3">
            <VercelLogoIcon />
            <h3 className="font-normal">
              Experienced implementing MVC Architecture.
            </h3>
          </div>
          <div className="mt-5 flex items-center gap-1">
            <h3 className="font-light">View my Swift app with SQL Database</h3>
            <ArrowRightIcon />
          </div>
          <div className="mt-5 flex items-center gap-1">
            <h3 className="font-light">
              View my React Native app - functional across iOS, Android, and Web
            </h3>
            <ArrowRightIcon />
          </div>
          <h2 className="mt-10 font-semibold text-xl">
            AI and Machine Learning
          </h2>
          <h3 className="mt-1 font-semibold text-neutral-500">
            Azure, Python (NumPy, Scikit, Pandas, Tensorflow, Keras)
          </h3>
          <h3 className="mt-3 font-medium">
            I possess a strong foundation in AI and machine learning concepts. I
            recently attained an Azure AI-900 AI Fundamentals certificate.
          </h3>
          <div className="mt-5 ml-2 flex items-center gap-3">
            <VercelLogoIcon />
            <h3 className="font-normal">
              Experienced programming machine learning pipelines using Python
            </h3>
          </div>
          <div className="mt-5 ml-2 flex items-center gap-3">
            <VercelLogoIcon />
            <h3 className="font-normal">
              Experienced investigating, cleaning, visuallising, modelling
              datasets
            </h3>
          </div>

          <h3 className="mt-3 font-medium"></h3>
          <div className="mt-5 flex items-center gap-1">
            <h3 className="font-light">
              View my convolutional neural network that classifies images of
              dogs by breed
            </h3>
            <ArrowRightIcon />
          </div>
          <div className="mt-5 flex items-center gap-1">
            <h3 className="font-light">
              View my regression analysis of a business dataset to predict
              future sales
            </h3>
            <ArrowRightIcon />
          </div>
        </div>

        <Separator.Root className="SeparatorRoot mt-10" />
        <div className="mt-20">
          <h2 className="font-semibold text-xl text-neutral-500">Awards</h2>

          <h2 className="mt-10 font-semibold text-xl">
            GovHack 2021 Hackathon
          </h2>

          <h3 className="mt-3 font-medium">
            Developed a mobile application concept (Where2). Prototyped as a
            Django web app that pulls JSON data from local weather stations to
            plan an interactive itinerary:
          </h3>
          <div className="mt-5 ml-2 flex items-center gap-3">
            <VercelLogoIcon />
            <h3 className="font-normal">
              First Prize - Jobs and Growth for Moreton Bay (QLD)
            </h3>
          </div>
          <div className="mt-5 ml-2 flex items-center gap-3">
            <VercelLogoIcon />
            <h3 className="font-normal">
              First Prize - Deadly Choices for Moreton Bay (QLD)
            </h3>
          </div>
          <div className="mt-5 flex items-center gap-1">
            <h3 className="font-light">View the project page</h3>
            <ArrowRightIcon />
          </div>

          <h2 className="mt-10 font-semibold text-xl">Academic Distinction</h2>
          <h3 className="mt-1 font-semibold text-neutral-500">
            Siena Catholic College - 2020
          </h3>

          <h2 className="mt-10 font-semibold text-xl">
            Highest Achiever in Digital Technologies
          </h2>
          <h3 className="mt-1 font-semibold text-neutral-500">
            Siena Catholic College - 2020
          </h3>
        </div>
      </div>

      <div className="col-span-1 p-4 mt-10 border-l border-neutral-800">
        About
      </div>
    </div>
  );
};

export default Resume;

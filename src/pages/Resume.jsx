import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "../styles.css";

const Resume = () => {
  return (
    <div className="w-full h-full grid grid-cols-3 gap-4">
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
          <h2 className="font-semibold text-xl text-neutral-500">Skills</h2>
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
      </div>

      <div className="col-span-1 p-4 border-l border-neutral-800">About</div>
    </div>
  );
};

export default Resume;

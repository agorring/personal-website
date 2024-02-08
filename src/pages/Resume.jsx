import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ChevronDownIcon,
  ArrowRightIcon,
  VercelLogoIcon,
} from "@radix-ui/react-icons";
import "../styles.css";
import * as Separator from "@radix-ui/react-separator";
import { useScroll, useInView, animated } from "@react-spring/web";
import Autoplay from "embla-carousel-autoplay";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import FadeIn from "../components/FadeIn";

const Resume = () => {
  const OPTIONS = { align: "center", containScroll: "trimSnaps" };
  const SLIDE_COUNT = 4;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  // const [ref, springs] = useInView(
  //   () => ({
  //     from: {
  //       opacity: 0,
  //       transform: "translateY(10%)",
  //     },
  //     to: {
  //       opacity: 1,
  //       transform: "translateY(0)", // Move to its original position
  //     },
  //     config: { tension: 500, friction: 40 },
  //   }),
  //   {
  //     rootMargin: "-30% 0%",
  //   }
  // );

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
            Studied at the University of the Sunshine Coast, QLD.
          </h3>
          <div className="mt-5 ml-2 flex items-center gap-3">
            <VercelLogoIcon />
            <h3 className="font-normal">Achieved a GPA of 6.83.</h3>
          </div>
          <div className="mt-5 ml-2 flex items-center gap-3">
            <VercelLogoIcon />
            <h3 className="font-normal">Studied a minor in Cyber Security.</h3>
          </div>
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
                  Studied at Siena Catholic College, QLD.
                </h3>
                <div className="mt-5 ml-2 flex items-center gap-3">
                  <VercelLogoIcon />
                  <h3 className="font-normal">Achieved an ATAR of 95.25.</h3>
                </div>
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
          <h2 className="font-semibold text-xl text-neutral-500 mb-10">
            Skills
          </h2>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>

        <Separator.Root className="SeparatorRoot mt-10" />
        <FadeIn>
          <div className="mt-20">
            <h2 className="font-semibold text-xl text-neutral-500">
              Experience
            </h2>
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
                via darknet and covert channels.
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
        </FadeIn>

        <FadeIn>
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
              designing, implementing, and testing mobile applications in iOS
              and Android.
            </h3>
            <div className="mt-5 ml-2 flex items-center gap-3">
              <VercelLogoIcon />
              <h3 className="font-normal">
                Experienced implementing MVC Architecture.
              </h3>
            </div>
            <div className="mt-5 flex items-center gap-1">
              <h3 className="font-light">
                View my Swift app with SQL Database
              </h3>
              <ArrowRightIcon />
            </div>
            <div className="mt-5 flex items-center gap-1">
              <h3 className="font-light">
                View my React Native app - functional across iOS, Android, and
                Web
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
              I possess a strong foundation in AI and machine learning concepts.
              I recently attained an Azure AI-900 AI Fundamentals certificate.
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
        </FadeIn>

        <FadeIn>
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

            <h2 className="mt-10 font-semibold text-xl">
              Academic Distinction
            </h2>
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
        </FadeIn>
      </div>

      <div className="col-span-1 p-4 mt-10 border-l border-neutral-800">
        About
      </div>
    </div>
  );
};

export default Resume;

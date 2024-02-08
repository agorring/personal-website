import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ChevronDownIcon,
  ArrowRightIcon,
  VercelLogoIcon,
  DotFilledIcon,
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

  return (
    <div className="w-full h-full grid grid-cols-3 gap-20">
      <div className="col-span-2 p-4 border-l border-neutral-800 mt-10 mb-20 pl-20 flex-col">
        <div className="flex">
          <div>
            <img
              width={80}
              height={80}
              className="rounded-full mr-10 bg-emerald-500 shadow-lg shadow-emerald-500 ring-2 ring-emerald-300 ring-offset-2 ring-offset-emerald-100"
              src="https://personalwebsite110913-staging.s3.ap-southeast-2.amazonaws.com/public/avatar.jpeg?AWSAccessKeyId=ASIARX2BCSZ7LBHTYHRL&Expires=1707392178&Signature=rqxOemYk2ICUbV8mk78SPhR9M0o%3D&x-amz-security-token=IQoJb3JpZ2luX2VjECMaDmFwLXNvdXRoZWFzdC0yIkYwRAIgAf2F0HlbRAGGGWpENQ%2B2SXOC4Ps6C5A87xnG2WiPNBcCIHadGnbMHlpVS9SAxalDtBdf3AsnpFXqPmcvV%2BGRjjqtKusECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQAhoMMTE5ODU4Njk3ODU0Igy%2Fnb%2F2G8fShHLRJDYqvwSd1xxOmjTYw0wKxsHGRL5ZP3uvrxfuscn5Bqvuw3d9qX1Ha22P959Kj5K9W255r55k1smgyaNpwEwMOa9fTVSp9FugcC8eQuH6KCwYCEo547ogoic01oC2CsxEoJR1piOKRR7DsTEfxS%2BUriwUZ7daQkq1exB%2BHUUvqagDhibA38xWvQgIGe2MneW7mEW0mX2iFn2ZQTmxMv4SkmqVphwC%2BVMfC4nz2ENxNVISRuHjQ1z9geFACbwl3eBfb6SJMIRIUr0ZQQLYJ%2FORTP543zA8IfuctsI4BlrWgSxEApgfBBCElrAE%2B5iIz%2BVsRXQYXUR3JJcdeOPJYsyHrz6aoil6hdhmVYe7H3aFt%2B6t1GJmgb7IKg0Rqk3JYDwcxsQ%2B%2Fi2kTnn1%2B%2FgMR45gtiLktqZ1GSfeCTB9IvdvLi3vbcdLstHgh7lK%2BCfxdTIZ3Hv5rhiGXc8Mwp2aP4ijScJcxSHvbEnR0vB%2BYcoB42XQp2vhUW2DH7x04BYSf1mF2yBke4I6Hitzy1ReWQsU2VuyWFkyf3n9Loq1z0FEBwWdTuzqsCEmLnTT%2FdqZIcHknAJ%2FC%2FY%2FLEN9po08EJs6fOgAixkf%2BuYuPS%2BZAgGWhmwBBcunqhIoiCqkj2efWhfGNl%2FZZB0p7OKbs28qOKYdyLDPjcpH7Z%2FSe2zvO2t4Sg012eXKp9p6vPPoKeNibP3bjyP3rLjTrD7YO5LcmY2vrfrk7IiL251WwdmEj7W%2FfebXZmP%2BLSvQvCoXgiK%2BH8k%2FvpJ%2FxjCo45KuBjqGAg2i3Pz8yaxQ06ceISSt%2F31DnFUGgxGOjSCz5AF3H6ploTqHFpAXXvatGrvsYUdoEHMv%2FODneSDI71F6qoEPGRbM6egzXInQ8K7jEOXmz1w0NZHjLPPAEgsZ%2BSuMSlT6Rcp%2F36CypEqAihZ3drbDSQhsFgowUp5953FHc5VfRW2REgNl03PgKjqaGwIHSQjoQ0P9facPSAU01EHWoi1QvIFihlsrn52B2GpOxyXVhkmFx6yVmSl26Zc97mOtfCdl5bbibv%2Bl60DUOkp1HyTXJ1zBoX0589nIYdvtfcGgRmPzZY9G0HtT4PqqbPVsQJHUOqZovRGim8KuWYCsb0IeNimAovUFPRQ%3D"
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
        <FadeIn direction={"right"}>
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

        <FadeIn direction={"right"}>
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

        <FadeIn direction={"right"}>
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

      <FadeIn direction={"right"} className="flex">
        <div className="h-full col-span-1 p-4 border-l border-neutral-800 bg-neutral-900">
          <div className="mt-10 ml-10 mr-5">
            <h2 className="mt-10 font-semibold text-xl text-neutral-400">
              About
            </h2>
            <h3 className="mt-3 font-normal text-neutral-200">
              Dedicated tech enthusiast. Passionate for software, hardware, and
              design. Skilled in a variety of programming languages.
            </h3>
            <h2 className="mt-20 font-semibold text-xl text-neutral-400">
              Interests
            </h2>
            <div className="mt-5 flex items-center gap-1">
              <DotFilledIcon />
              <h3 className="font-normal text-neutral-200">
                Reading - history, philosophy, fantasy
              </h3>
            </div>
            <div className="mt-5 flex items-center gap-1">
              <DotFilledIcon />
              <h3 className="font-normal text-neutral-200">
                Guitar - rock and folk music
              </h3>
            </div>
            <div className="mt-5 flex items-center gap-1">
              <DotFilledIcon />
              <h3 className="font-normal text-neutral-200">
                Stock markets and analysis
              </h3>
            </div>
            <h2 className="mt-20 font-semibold text-xl text-neutral-400">
              Contact
            </h2>
            <div className="mt-5 ml-1 flex items-center gap-1">
              <h3 className="font-medium">Email</h3>
              <ArrowRightIcon />
            </div>
            <div className="mt-5 ml-1 flex items-center gap-1">
              <h3 className="font-medium">GitHub</h3>
              <ArrowRightIcon />
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Resume;

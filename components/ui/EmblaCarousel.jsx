import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { flushSync } from "react-dom";
import languageByIndex from "@/src/constants/languagesByIndex";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";

const TWEEN_FACTOR = 3;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const loopedOptions = { ...options, loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(loopedOptions, [Autoplay()]);
  const [tweenValues, setTweenValues] = useState([]);

  const onButtonClick = useCallback((emblaApi) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onButtonClick
  );

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="flex flex-col">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div
                className="embla__slide"
                key={index}
                style={{
                  ...(tweenValues.length && { opacity: tweenValues[index] }),
                }}
              >
                <div className="flex gap-10 mt-10 justify-center">
                  {languageByIndex(index).languages.map((language) => (
                    <div
                      className="flex flex-col items-center"
                      key={language.name}
                    >
                      {language.icon}
                      <p>{language.name}</p>
                    </div>
                  ))}
                </div>
                <div className=" flex justify-center">
                  <h2 className="mt-10 font-semibold text-xl">
                    {languageByIndex(index).category}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="embla__dots mt-10">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;

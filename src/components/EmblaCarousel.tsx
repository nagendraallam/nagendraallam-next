"use client";

import React from "react";
import { DotButton, useDotButton } from "@/components/EmblaDots";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/EmblaArrows";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props: any) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index: any) => {
            return index;
          })}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_: any, index: any) => (
            <DotButton
              key={index + "_emable"}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;

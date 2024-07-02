"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Reviews() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Ajmal CC",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "Kiran Kumar",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Najas",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Shahaba",
    title: "Pride and Prejudice",
  },
];

"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import React from "react";

export const products = [
    {
      title: "Lindor",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://i.ibb.co/qM6ZLp2k/65bcbdba50d04da0ce1aa4ba-lindor-p-800.jpg",
    },
    {
      title: "Excellence High Cocoa",
      link: "https://cursor.so",
      thumbnail:
        "https://i.ibb.co/chnbh74Q/672b1ed99831a1c347625c5a-Excellence-high-cocoa-small-p-800.jpg",
    },
    {
      title: "Lindt Logo",
      link: "https://userogue.com",
      thumbnail:
        "https://i.ibb.co/4nRF6ZLr/65bca35aa8707454568a29e3-lindtlogo-p-800.jpg",
    },
    {
      title: "BIC",
      link: "https://editorially.org",
      thumbnail:
        "https://i.ibb.co/wFcWMhGp/650ef939a960e6584967d0a4-bic-p-800.jpg",
    },
    {
      title: "Ambi Pur",
      link: "https://editrix.ai",
      thumbnail:
        "https://i.ibb.co/Gh3Tf3p/650ef619a960e6584965faa0-ambipur-p-500.jpg",
    },
    {
      title: "Old Spice",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://i.ibb.co/sd9M2fcW/650ef72715fe162f8be61076-oldspice-p-500.jpg",
    },
    {
      title: "Venus",
      link: "https://algochurn.com",
      thumbnail:
        "https://i.ibb.co/ymxWNYp6/650ef5404a76afdca28696b3-venus-p-500.jpg",
    },
    {
      title: "Olay",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://i.ibb.co/TB97bdxq/650ef4ade788a656013d873b-olay-p-500.jpg",
    },
    {
      title: "Pantene",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://i.ibb.co/JjF9msHF/650ef444788d34c590c97a7a-pantene-p-500.jpg",
    },
    {
      title: "Head & Shoulders",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://i.ibb.co/7tjrwx5C/650ef3be33137a6ce322fb2d-headandshoulders-p-500.jpg",
    },
    {
      title: "Gillette",
      link: "https://renderwork.studio",
      thumbnail:
        "https://i.ibb.co/6chJ5fjG/650ef34c34c417b5752866fd-gillette-p-500.jpg",
    },
    {
      title: "Vicks",
      link: "https://cremedigital.com",
      thumbnail:
        "https://i.ibb.co/fYb6QfyP/650ef7a2d96dabfaac0c3862-vicks-p-500.jpg",
    },
    {
      title: "Whisper",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://i.ibb.co/DgR9dGS6/650ef85d307b7d6a750fcf7e-whisper-png-p-500.jpg",
    },
    {
      title: "Ariel",
      link: "https://invoker.lol",
      thumbnail:
        "https://i.ibb.co/twtrj3JT/650ef845a960e65849674825-ariel-p-500.jpg",
    },
    {
      title: "Product 16",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://i.ibb.co/Qvx20jDp/650ef1aa15fe162f8be2c380-16713486092974-p-500.jpg",
    },
];

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}


import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import React from "react";


export function AboutTimeline() {
  const data = [
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-8">
          Sampoorn Marketing is the apex body representing FMCG distributors in Uttar Pradesh. Our primary aim is to unify distributors under one umbrella to address industry challenges, advocate for fair trade policies, and foster innovation and professionalism in distribution.  

We work closely with district and local distributor associations, providing guidance, nurturing growth, and strengthening traditional trade at every level.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://i.ibb.co/XxZfcfmk/image.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://i.ibb.co/fzKz1Y9s/image.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://i.ibb.co/xKtCCMMG/image.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Our Mission",
      content: (
        <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-orange-500">Our Mission</h2>
        <p className="text-lg text-gray-300 mb-8">
          To unify FMCG distributors in Uttar Pradesh, addressing industry challenges, advocating for fair trade policies, and fostering innovation and professionalism in distribution.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Collaboration"
            width={500}
            height={500}
            className="rounded-lg object-cover h-40 md:h-64 w-full shadow-lg"
          />
          <Image
            src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3VyJTIwbWlzc2lvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Policy Advocacy"
            width={500}
            height={500}
            className="rounded-lg object-cover h-40 md:h-64 w-full shadow-lg"
          />
        </div>
      </div>

      ),
    },
    {
      title: "Our Visson",
      content: (
        <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-orange-500">Our Vission</h2>
        <p className="text-lg text-gray-300 mb-8">
        To strengthen traditional trade at every level by working closely with district and local distributor associations, providing guidance, and nurturing growth.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1484910292437-025e5d13ce87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlzc2lvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Collaboration"
            width={500}
            height={500}
            className="rounded-lg object-cover h-40 md:h-64 w-full shadow-lg"
          />
          <Image
            src="https://images.unsplash.com/photo-1707051703895-ea022c66c428?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Policy Advocacy"
            width={500}
            height={500}
            className="rounded-lg object-cover h-40 md:h-64 w-full shadow-lg"
          />
        </div>
      </div>

      ),
    },
    {
      title: "Changelog",
      content: (
        <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-orange-600">
          Our Changelog
        </h2>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-10">
          Empowering brands through seamless distribution, innovative strategies, and strong 
          market networks, ensuring sustained growth and nationwide success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <Image
              src="https://images.unsplash.com/photo-1484910292437-025e5d13ce87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlzc2lvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Strategic Growth"
              width={500}
              height={500}
              className="rounded-lg object-cover h-52 md:h-72 w-full shadow-xl transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-lg font-semibold px-4">Strategic Growth</p>
            </div>
          </div>
          <div className="relative group">
            <Image
              src="https://images.unsplash.com/photo-1707051703895-ea022c66c428?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Nationwide Impact"
              width={500}
              height={500}
              className="rounded-lg object-cover h-52 md:h-72 w-full shadow-xl transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-lg font-semibold px-4">Nationwide Impact</p>
            </div>
          </div>
        </div>
      </div>
      
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

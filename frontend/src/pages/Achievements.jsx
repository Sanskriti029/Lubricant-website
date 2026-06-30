import React, { useEffect } from 'react'
import award1 from "../assets/awards1.jpeg";
import award2 from "../assets/awards2.jpeg";
import award3 from "../assets/awards3.jpeg";
import award4 from "../assets/awards4.jpeg";
import award5 from "../assets/awards5.jpeg";
import award6 from "../assets/awards6.jpeg";
import award7 from "../assets/awards7.jpeg";
import award8 from "../assets/awards8.jpeg";
import award9 from "../assets/awards9.jpeg";
import awards10 from "../assets/awards10.jpeg";
import award11 from "../assets/award11.jpeg";
import award12 from "../assets/award12.jpeg";
import bgo1 from "../assets/bgo1.jpeg";
import bg02 from "../assets/bg02.jpeg";
import bgo3 from "../assets/bgo3.jpeg";
import news from "../assets/new.jpg";

export default function Achievements() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="min-h-screen bg-slate-100 py-10">
      {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> */}
        <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-10 shadow-xl sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
              Achievements
            </p>
            <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              Our milestones and awards
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We are proud of our accomplishments and milestones that reflect our commitment to excellence and customer satisfaction.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-2xl">
            <img src={award1} alt="Award 1" className="h-72 w-full object-contain" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-2xl">
            <img src={award3} alt="Award 3" className="h-72 w-full object-contain" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-2xl">
            <img src={award2} alt="Award 2" className="h-72 w-full object-contain" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-2xl">
            <img src={award5} alt="Award 5" className="h-72 w-full object-contain" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-2xl">
            <img src={award6} alt="Award 6" className="h-72 w-full object-contain" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-2xl">
            <img src={award7} alt="Award 7" className="h-72 w-full object-contain" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-2xl">
            <img src={award8} alt="Award 8" className="h-72 w-full object-contain" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-2xl">
            <img src={award9} alt="Award 9" className="h-72 w-full object-contain" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-2xl">
            <img src={news} alt="Latest award" className="h-72 w-full object-contain" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-2xl">
            <img src={award4} alt="Award 4" className="h-72 w-full object-contain" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-2xl">
            <img src={awards10} alt="Award 10" className="h-72 w-full object-contain" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-2xl">
            <img src={award11} alt="Award 11" className="h-72 w-full object-contain" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-2xl">
            <img src={award12} alt="Award 12" className="h-72 w-full object-contain" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-2xl">
            <img src={bgo1} alt="Award 14" className="h-72 w-full object-contain" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-2xl">
            <img src={bg02} alt="Award 15" className="h-72 w-full object-contain" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-2xl">
            <img src={bgo3} alt="Award 16" className="h-72 w-full object-contain" />
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}

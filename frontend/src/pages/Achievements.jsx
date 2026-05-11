import React from 'react'
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
import news from "../assets/new.jpg";

export default function Achievements() {
  return (<>
 <div className=" mx-auto min-w-full items-center text-xl bg-gray-200 rounded shadow-lg">
        <div className=" flex flex-col items-center justify-center p-4 m-4">
          <p className="font-extrabold text-4xl text-blue-900 tracking-tight underline ">
            Our Achievements
          </p>
          <p className="text-xl text-gray-600 p-4 ">
            We are proud of our accomplishments and milestones that reflect our commitment to excellence and customer satisfaction.
          </p>
        </div>
        <div className=" overflow-hidden rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <img src={award1} alt="Award 1" className="m-2 " />
          <img src={award3} alt="Award 3" className="m-2" />
          <img src={award2} alt="Award 2" className="m-2" />
         
          <img src={award5} alt="Award 5" className="m-2" />
          <img src={award6} alt="Award 6" className="m-2" />
          <img src={award7} alt="Award 7" className="m-2" />
          <img src={award8} alt="Award 8" className="m-2" />
          <img src={award9} alt="Award 9" className="m-2" />
          <img src={news} alt="New Award" className="m-2" />
           <img src={award4} alt="Award 4" className="m-2" />
           <img src={awards10} alt="Award 10" className="m-2" />
        </div>
      </div>
  
  </>
    

  )
}

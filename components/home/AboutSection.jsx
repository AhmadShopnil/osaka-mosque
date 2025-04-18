import React from 'react';

const AboutSection = () => {
    return (
        <div className="pt-[100px] pb-[100px] bg-white">
      <div className="container px-20  mx-auto ">
        <div className="flex flex-col md:flex-row lg:flex-row gap-8  justify-between">
          
           <div className="lg:ml-[30px] ml-0 flex-1 ">
            <div className="relative  lg:ml-[30px]   lg:w-[510px]  lg:h-[390px]">
              <div className=" hidden-border rounded-md bottom-[-30px]  z-[-1] right-[30px] lg:absolute w-full h-full border-[#00401A] border-[10px] object-cover"></div>
              
                <img className="
                 w-full lg:h-[390px] mt-0 h-full rounded-md object-cover"
                 src="images//abt-img2.jpg" alt="" />
             
            </div>
           </div>
         
          <div className="flex-1 ">
            <div className=" flex flex-col mt-6 md:mt-0">
              <h1 className=" text-[#00401A] text-[20px] pb-[5px]">Our History</h1>
              <div>
                <h2 className="font-[500] text-[#222] text-[28px] sm:text-[38px] md:text-[42px] lg:text-[48px]">
                  About Islamic Center
                </h2>
                <img className="mt-2" src="images//pshape.png" alt="" />
              </div>
              <p className="mt-[20px]">
                We established our center in 1954, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris .Lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="mt-[20px]">
                Visit our premises sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="mt-[35px] block">
                <a href="#"
                  className="bg-[#00401A] hover:bg-[#80b918] px-[45px] py-[14px] rounded-md font-bold text-[15px] text-white transition">Learn
                  More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default AboutSection;

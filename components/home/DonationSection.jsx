'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const DonationSection = () => {
  const slideImages = [
    '/images/car-img1-2.jpg',
    '/images/car-img1-2.jpg',
    '/images/car-img1-2.jpg',
  ];

  const [selectedAmount, setSelectedAmount] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: '',
  });

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount !== 'Other' ? amount : '');
    setFormData((prev) => ({
      ...prev,
      amount: amount !== 'Other' ? amount.replace('$', '') : '',
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const donationData = {
      ...formData,
      selectedAmount: selectedAmount || formData.amount,
    };

    console.log('🚀 Donation Data Ready to Send:', donationData);

    // TODO: Send `donationData` to your API endpoint here
  };

  return (
    <section className="relative">
      <div
        className="relative bg-cover bg-no-repeat bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/parallax3.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#f8f9fa] opacity-80 z-0" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 z-10">
          {/* Slider */}
          <div className="w-full h-full">
            <Swiper navigation={true} modules={[Navigation]} className="w-full h-full">
              {slideImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={img}
                    alt={`Slide ${index + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Donation Content */}
          <div className="py-10 text-white container mx-auto px-4">
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-6">
              <div className="w-full mb-[20px]">
                <span className="mb-[5px] text-[#00401A] text-[20px]">Give Food & Shelter To Poor</span>
                <h2 className="mt-2  text-[#222] text-[38px] md:text-[42px] lg:text-[48px] leading-12">
                  Make Your Donation
                </h2>
                <Image className="mt-4" src="/images/pshape.png" alt="Design Shape" width={80} height={10} />
              </div>

              {/* Donation Amount Buttons */}
              <div className="flex flex-wrap mb-[20px] gap-3">
                {['$100', '$200', '$300', 'Other'].map((amount, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleAmountClick(amount)}
                    className={`hover:bg-[#00401A] px-[30px] py-[8px] border border-[#ddd] rounded-full font-[700] text-[18px] transition duration-300 ${
                      selectedAmount === amount || (amount === 'Other' && !selectedAmount)
                        ? 'bg-[#00401A] text-white'
                        : 'text-[#222] hover:text-white'
                    }`}
                  >
                    {amount}
                  </button>
                ))}
              </div>

              {/* Donation Form */}
              <div className="w-full px-2 lg:px-0 lg:w-[80%] 2xl:w-[55%]">
                <div>
                  <div className="flex mb-4 gap-4 flex-col md:flex-row">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="px-4 py-2 border border-gray-300 rounded-lg w-full text-[#222] text-[14px]"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="px-4 py-2 border border-gray-300 rounded-lg w-full text-[#222] text-[14px]"
                      required
                    />
                  </div>
                  <div className="flex gap-4 flex-col md:flex-row">
                    <input
                      type="text"
                      name="amount"
                      placeholder="Donation Amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="px-4 py-2 border border-gray-300 rounded-lg w-full text-[#222] text-[14px]"
                      required
                    />
                    <input
                      type="text"
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="px-4 py-2 border border-gray-300 rounded-lg w-full text-[#222] text-[14px]"
                    />
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-[25px]">
                  <h5 className="font-[400] text-[#222] text-[24px] mb-[20px]">Raised Funds for the Poor</h5>
                  <div className="w-full mb-[20px]">
                    <div className="relative h-[7px] bg-gray-200 rounded-full">
                      <div className="h-[7px] bg-[#00401A] rounded-full" style={{ width: '70%' }} />
                      <div className="absolute left-[70%] -translate-x-1/2 -top-3 w-[35px] h-[35px] bg-[#00401A] text-white text-xs font-semibold flex items-center justify-center rounded-full shadow-md">
                        70%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats & Button */}
                <div className="flex md:flex-row flex-col lg:gap-8 mt-4 text-[16px]">
                  <div className="flex gap-2 mr-[30px]">
                    <span className="text-[#222]">Raised:</span>
                    <span className="text-[#00401A]">$400.00</span>
                  </div>
                  <div className="flex gap-2 mr-[30px] mt-[20px] lg:mt-0">
                    <span className="text-[#222]">Goal:</span>
                    <span className="text-[#00401A]">$650.00</span>
                  </div>
                </div>

                <div className="block mt-[25px]">
                  <button
                    type="submit"
                    className="bg-[#00401A] hover:bg-[#80b918] inline-block px-[45px] py-[14px] rounded-md font-[400] uppercase text-[15px] text-white transition"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;

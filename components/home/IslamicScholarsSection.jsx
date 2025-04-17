import Image from 'next/image';

const scholars = [
  {
    name: 'Sharuf Al Hamman',
    title: 'Islamic Scholar',
    image: '/images/team-img1-1.jpg',
    socials: ['facebook-f', 'twitter', 'linkedin-in', 'google-plus-g'],
  },
  {
    name: 'Sharuf Al Hamman',
    title: 'Islamic Scholar',
    image: '/images/team-img1-1.jpg',
    socials: ['facebook-f', 'twitter', 'linkedin-in', 'google-plus-g'],
  },
  {
    name: 'Sharuf Al Hamman',
    title: 'Islamic Scholar',
    image: '/images/team-img1-1.jpg',
    socials: ['facebook-f', 'twitter', 'linkedin-in', 'google-plus-g'],
  },
];

export default function IslamicScholarsSection() {
  return (
    <section className="pt-[100px]  pb-64 ">
      <div className="container mx-auto px-20">
        <div className="text-center mb-[40px]">
          <span className="text-[#00401A] text-[20px] mb-[5px]">Our Expert</span>
          <h2 className="mt-2 font-semibold text-[#222] text-[28px] sm:text-[38px] md:text-[42px] lg:text-[48px]">
            Islamic Scholars
          </h2>
          <Image width={160} height={20} className="mx-auto mt-4" src="/images/pshape.png" alt="Design Shape" />
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {scholars.map((scholar, index) => (
            <div key={index} className="group relative mb-20 lg:mb-0">
              <div className="relative group-hover:inset-0 group-hover:bg-black rounded-lg">
                <div className="absolute inset-0 group-hover:bg-black group-hover:opacity-50 rounded-md duration-600"></div>
                <Image
                  src={scholar.image}
                  alt={scholar.name}
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="absolute flex flex-col justify-center items-center gap-3 bg-white group-hover:bg-[#00401A] mx-auto mt-[-70px] ml-[5%] p-4 rounded-b-lg w-[100%] max-w-[90%] text-[#222] group-hover:text-white text-center duration-600">
                <div className="flex items-center text-black group-hover:text-black leading-[30px]">
                  {scholar.socials.map((icon, i) => (
                    <i key={i} className={`text-[14px] fab mx-[10px] fa-${icon}`}></i>
                  ))}
                </div>
                <h3 className="font-bold text-[18px] mt-[8px]">{scholar.name}</h3>
                <div className="bg-[#00401A] group-hover:bg-white mx-auto w-[100px] h-[2px]"></div>
                <p>
                  <span className="group-hover:text-white">{scholar.title}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 lg:mt-32">
          <a
            href="#"
            className="bg-[#00401A] hover:bg-[#80b918] px-[45px] py-[14px] rounded-md font-bold text-[15px] text-white transition"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}

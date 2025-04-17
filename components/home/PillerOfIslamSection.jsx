'use client';

import Image from 'next/image';

const pillars = [
  { title: 'Shahada', subtitle: '(Faith)', icon: 'fa-circle-user', shape: true, flip: false },
  { title: 'Salah', subtitle: '(Prayer)', icon: 'fa-praying-hands', shape: true, flip: true },
  { title: 'Zakat', subtitle: '(Charity)', icon: 'fa-hand-holding-heart', shape: true, flip: false },
  { title: 'Sawm', subtitle: '(Fasting)', icon: 'fa-utensils', shape: true, flip: true },
  { title: 'Hajj', subtitle: '(Pilgrimage)', icon: 'fa-kaaba', shape: false, flip: false },
];

const PillarOfIslamSection = () => {
  return (
    <section className="pt-[130px] relative z-50">
      <div
        className="relative bg-cover bg-no-repeat bg-center bg-fixed py-[100px]"
        style={{
          backgroundImage: `url('/images/parallax2.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="z-10 relative container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <span className="font-bold text-[#80b918] text-[20px]">About Essential</span>
            <h2 className="font-semibold text-white text-[28px] sm:text-[38px] md:text-[42px] lg:text-[48px]">
              Pillar Of Islam
            </h2>
            <Image className="mt-2" src="/images/pshape.png" alt="Design Shape" width={100} height={10} />
          </div>

          <div className="gap-[10px] grid pillar-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="group flex flex-col items-center gap-4">
                <div className="text-center">
                  <div className="bg-[#00401A] flex items-center justify-center w-[160px] h-[160px] relative border-2 border-white rounded-full">
                    <i className={`text-[70px] text-white fa-solid ${pillar.icon}`}></i>
                    {pillar.shape && (
                      <div
                        className={`absolute icon-hidden -right-20 ${
                          pillar.flip ? 'transform rotate-x-180' : ''
                        }`}
                      >
                        <Image src="/images/pilr-shp.png" alt="Shape" width={50} height={50} />
                      </div>
                    )}
                  </div>
                  <h5 className="mt-4 font-[400] text-[24px] text-white">{pillar.title}</h5>
                  <span className="text-[#80b918] text-[18px]">{pillar.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarOfIslamSection;

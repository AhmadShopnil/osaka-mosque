'use client';

const Map = () => {
  return (
    <section className="bg-white ">
      <div className="container mx-auto">
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Stockholm Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81025.93896354646!2d17.95415243687725!3d59.32606603835869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5c0b8d0e1b%3A0x400fef341e2e4c0!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2sse!4v1713693099999!5m2!1sen!2sse"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;

"use client";

const Map = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
          {/* <iframe
            title="Osaka Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=4-12-16+Owada,+Nishiyodogawa+Ward,+Osaka,+555-0032,+Japan&output=embed"
          ></iframe> */}

          <iframe
            src="https://www.google.com/maps?q=4-12-16+Owada,+Nishiyodogawa+Ward,+Osaka,+555-0032&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;

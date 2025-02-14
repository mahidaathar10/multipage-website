import React from "react";

const About = () => {
  return (
    <section
      className="about h-screen flex items-center justify-start bg-cover bg-center text-white px-10"
      style={{ backgroundImage: "url('dress1.jpeg')" }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-md max-w-lg">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
          About Us
        </h2>
        <p>
          We have a huge variety of clothes. Elevate your wardrobe with our
          stunning collection of women&apos;s clothing. From flowy dresses to
          trendy tops and comfortable bottoms. Stay stylish and comfortable with
          our latest collection of men&apos;s clothing. Discover our range of
          fashionable tops, bottoms, and outerwear.
        </p>
      </div>
    </section>
  );
};

export default About;
import React from 'react'

const Summary = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white mb-4" style={{fontSize:"30px",color:"white",fontFamily:"monoSpace"}}>
        👉 Summary
      </h2>
      <p className="text-base sm:text-lg font-mono text-gray-300 leading-relaxed" style={{fontSize:"20px",color:"white", fontFamily:"monospace"}}>
        ✨ Hi traveller 👋🏼 I'm Harshit Dixit — a passionate Web Developer and Machine Learning enthusiast who loves crafting clean UIs and building smart, scalable systems. With a strong foundation in React, Tailwind CSS, and modern JavaScript, I thrive on creating seamless user experiences and impactful digital products.

Beyond the frontend, I bring solid backend knowledge, specializing in RESTful API and FastAPI design to build efficient and reliable server-side applications. My curiosity doesn’t stop there — I actively explore system design concepts, learning from books and real-world architectures to sharpen my understanding of scalability, performance, and fault tolerance.

I enjoy working across the stack, bridging design and engineering, and ensuring every project feels both elegant and robust. Collaboration fuels me, and I’m always open to learning, experimenting, and building alongside creative minds who share the same drive for innovation.
      </p>
    </section>
  );
};

export default Summary;

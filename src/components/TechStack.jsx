const techStack = [
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },

  // Newly added stack
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
{ name: "AWS", logo: "https://icongr.am/devicon/amazonwebservices-original.svg?size=128&color=currentColor" },  { name: "LocalStack", logo: "https://avatars.githubusercontent.com/u/29598503?s=200&v=4" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "spaCy", logo: "https://raw.githubusercontent.com/explosion/spaCy/master/website/src/images/logo.svg" },];


const TechStack = () => {
  return (
    <section className="mt-20 px-4 sm:px-8 max-w-6xl mx-auto">
      <h2
        className="font-bold text-white mb-10 font-mono"
        style={{ fontSize: "1.875rem" /* 30px */, color: "white" }}
      >
        🔧 Tech Stack
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 place-items-center">
        {techStack.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center rounded-full bg-white/5 border border-white/10 transition-transform duration-200 ease-in-out hover:scale-95 hover:shadow-[0_0_0.625rem_0.1875rem_rgba(255,255,255,0.4)]"
            style={{
              width: "7rem",  // 80px
              height: "7rem", // 80px
            }}
          >
            <img
              src={tech.logo}
              alt={tech.name}
              title={tech.name}
              style={{
                height: "7rem", // 56px
                width: "7rem",  // 56px
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

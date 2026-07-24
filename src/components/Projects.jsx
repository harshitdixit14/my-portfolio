import SectionHeading from "./ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import Reveal from "./ui/Reveal";

const projects = [
  {
    title: "Object Type Tracker",
    description:
      "Advanced object detection and tracking system leveraging YOLOv8, fine-tuned on 200+ object classes using the Google Open Images API. Achieved ~80% detection accuracy, making it robust for diverse real-world scenarios.",
    tech: ["YOLOv8", "Open Images", "FiftyOne", "Python"],
    github: "https://github.com/harshitdixit14",
    live: "",
  },
  {
    title: "Clothes Classification",
    description:
      "A Convolutional Neural Network (CNN) to classify clothing items on the Fashion-MNIST dataset, reaching 95% test accuracy. Showcases a complete deep-learning workflow from preprocessing to evaluation.",
    tech: ["TensorFlow", "CNN", "Python"],
    github:
      "https://github.com/harshitdixit14/Machine_Learning/blob/main/fashion_MNIST_CNN.ipynb",
    live: "",
  },
  {
    title: "Fault-Tolerant Flask App",
    description:
      "Fault-tolerant Flask application deployed on a Kubernetes cluster with round-robin load balancing across two pods. Ensures request continuity by persisting client messages, counters and timestamps in MySQL — containerized with Docker and orchestrated via Kubernetes.",
    tech: ["Flask", "Kubernetes", "Docker", "MySQL"],
    github: "https://github.com/harshitdixit14/K8s-Assessment",
    live: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-4 sm:px-6">
      <SectionHeading eyebrow="Selected work" title="Featured Projects" />

      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <ProjectCard {...project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;

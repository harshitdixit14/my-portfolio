import React from "react";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Object Type Tracker",
    description: "Developed an advanced object detection and tracking system leveraging YOLOv8, fine-tuned on 200+ object classes using data from the Google Open Images API. The model achieved an overall 80% detection accuracy, making it robust for diverse real-world scenarios.",
    tech: ["Open Images", "fiftyone", "YOLOv8", "Python"],
    github: "https://github.com/username/object-tracker",
    live: "https://object-tracker-demo.netlify.app"
  },
  {
    title: "Clothes Classification",
    description: "Built a Convolutional Neural Network (CNN) to classify clothing items using the Fashion-MNIST dataset, achieving 95% accuracy on the test set. The project showcases a complete deep learning workflow from data preprocessing to model evaluation.",
    tech: ["TensorFlow", "CNN", "Python"],
    github: "https://github.com/harshitdixit14/Machine_Learning/blob/main/fashion_MNIST_CNN.ipynb",
    live: "https://clothes-demo.netlify.app"
  },
  {
    title: "Fault tolerant flask application",
    description: "Developed a fault tolerant flask application deployed on a kubernetes cluster with round-robin load balancing across two pods. The system ensures request contiuity by storing client messages, counters and timestamps in a MySQL databse. Docker was used for containerization, with Kubernetes YAML files managingg deployents, service.",
    tech: ["TensorFlow", "CNN", "Python"],
    github: "https://github.com/harshitdixit14/K8s-Assessment",
    live: "https://clothes-demo.netlify.app"
  },
  // ➕ Add more projects here
];

export default function Projects() {
  return (
    <section>
      <Card
        sx={{
          width: "95%",
          margin: "auto",
          padding: 3,
          borderRadius: 4,
          backgroundColor: "rgba(222, 196, 196, 0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "monospace",
              marginBottom: 4,
              fontSize: "30px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            🤖 Projects
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </Box>
        </CardContent>
      </Card>
    </section>
  );
}

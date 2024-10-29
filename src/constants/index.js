import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

var enlace = document.createElement("a");
enlace.href = "#";
var enlace2 = document.createElement("a");
enlace2.href = "#";
var enlace3 = document.createElement("a");
enlace3.href = "#";
var enlace4 = document.createElement("a");
enlace4.href = "https://encriptador-de-textos.vercel.app/";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
export const HERO_CONTENT2 = `Soy un  desarrollador front-end  con talento para crear aplicaciones web robustas y escalables. Con 3 años de experiencia práctica, he perfeccionado mis habilidades en tecnologías front-end como React y Tailwind.  Además, mi experiencia de 12 años como chef me ha proporcionado un profundo conocimiento y práctica en el trabajo en equipo, lo cual es fundamental para el éxito en proyectos de desarrollo. Mi objetivo es aprovechar mi experiencia para crear soluciones innovadoras que impulsen el crecimiento empresarial y ofrezcan experiencias de usuario excepcionales.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;
export const ABOUT_TEXT_ESP = `Soy un desarrollador front-end dedicado y versátil, para crear aplicaciones web eficientes y fáciles de usar. Con 3 años de experiencia , he trabajado con una variedad de tecnologías, incluyendo React, Next.js, Node.js, Java, MySQL y MongoDB. Mi viaje en el desarrollo web comenzó con una profunda curiosidad por cómo funcionan las cosas, y ha evolucionado hacia una carrera en la que me esfuerzo continuamente por aprender y adaptarme a nuevos desafíos. Me desenvuelvo bien en entornos colaborativos por mi experiencia como Chef en el mundo de la gastronomía y disfruto resolviendo problemas complejos para ofrecer soluciones de alta calidad. Fuera del código, me gusta mantenerme activo, practicar deportes y explorar nuevas tecnologías.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Senior Full Stack Developer ",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2023 - 2024",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
];
export const PROJECTS_ESP = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "Un sitio web de comercio electrónico completamente funcional con características como listado de productos y carrito de compras.",
    technologies: ["HTML", "CSS", "Tailwind", "React"],
    link:enlace
  },

  {
    title: "Weather APP",
    image: project2,
    description:
      "Un sitio web para saber el pronostico del clima , la temperatura en grados celcius y farenheit , velocidad del viento y otra informacion relacionada con el clima.",
    technologies: ["HTML", "CSS", "React"],
    link:enlace2
  },
  {
    title: "Calender note",
    image: project3,
    description:
      "Un calendario dinamico en el cual podremos guardar notas en el dia que deseamos.",
    technologies: ["HTML", "CSS", "Javascript"],
    link:enlace3
  },
  {
    title: "Encriptador de texto",
    image: project4,
    description:
      "Un sitio web de comercio electrónico completamente funcional con características como listado de productos y carrito de compras.",
    technologies: ["HTML", "CSS", "Javascript"],
    link:enlace4
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Tailwind", "React"],
  },

  {
    title: "weather App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Calender note",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Text encryptor",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

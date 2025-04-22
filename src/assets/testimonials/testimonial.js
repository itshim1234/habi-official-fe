import raghuProfile from "./images/raghu/raghuProfile.webp";
import raghuplot from "./images/raghu/raghuPlot.webp";
import charanProfile from "./images/charan/CharanProfile.webp";
import charanplot from "./images/charan/charanPlot.webp";
import vikaskumarProfile from "./images/kumar/Vikaskumar.webp";
import vikaskumarplot from "./images/kumar/vikaskumarplot.webp";

const testimonials = [
  {
    id: 1,
    name: "Raghu Desai",
    content:
      "From the first meeting, we were clear about our needs, and the architects understood them perfectly. The design process was smooth, with thoughtful solutions like minimizing visible columns and incorporating a vertical garden. The final result exceeded expectations, maintaining quality and staying within budget while creating a spacious, light-filled home that feels like a dream.",
    location: "Koppa Gate, Bengaluru",
    size: "2400 Sq. ft",
    price: "65 Lakhs",
    feedback:
      "The design was smooth, with smart touches like hidden columns and a vertical garden.",
    image: raghuplot,
    userImage: raghuProfile,
    videoUrl: "https://www.youtube.com/embed/tVH_rxUKsvM?si=EAN5NZxECYb92O9H",
  },

  {
    id: 2,
    name: "Charan kumar V",
    content:
      "After extensive research and discussions with over 14 construction companies, I chose this team for their transparent pricing, efficient communication, and exceptional quality. From detailed structural plans to regular updates and prompt resolutions, their approach has been professional and client-focused. The foundation and overall construction quality have exceeded expectations, making this a hassle-free and satisfying experience.",
    location: "Gunjur, Bengaluru",
    size: "1200 Sq. ft",
    price: "83 Lakhs",
    feedback:
      "I chose this team for their clear pricing, good communication, and quality work.",
    image: charanplot,
    userImage: charanProfile,
    videoUrl: "https://www.youtube.com/embed/BWbawFAjlb4?si=ZhUlxDGopgNp7ex_",
  },
  {
    id: 3,
    name: "Mr. Kumar",
    content:
      "When we started this project, I was initially unsure about choosing this team, but their professionalism and confidence won me over. Their designs were exceptional, meeting all our requirements, including Vastu compliance and maximizing space efficiency. Even after five years, the construction quality has held up perfectly, and the entire experience has been seamless and satisfying",
    location: "Budhigere, Bengaluru",
    size: "1200 Sq. ft",
    price: "45 Lakhs",
    feedback:
      "Their designs were excellent, meeting all our needs, including Vastu and space efficiency.",
    image: vikaskumarplot,
    userImage: vikaskumarProfile,
    videoUrl: "https://www.youtube.com/embed/q_AuoLQidnY?si=OvGGOJZMBNs8yxOj",
  },
];

export default testimonials;

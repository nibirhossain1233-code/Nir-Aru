import {
  FaBookOpen,
  FaRegImages,
  FaHeart,
  FaMapMarkedAlt,
} from "react-icons/fa";

export const quickLinks =[
     {
    id: 1,
    title: "Our Story",
    desc: "The beginning of our beautiful journey.",
    icon: <FaBookOpen />,
    url: "/our-story",
  },
  {
    id: 2,
    title: "Memories",
    desc: "Photos and unforgettable moments together.",
    icon: <FaRegImages />,
    url: "/memories",
  },
  {
    id: 3,
    title: "Love Letters",
    desc: "Words from the heart that never fade.",
    icon: <FaHeart />,
    url: "/letters",
  },
  {
    id: 4,
    title: "Distance Map",
    desc: "No matter the distance, we're always connected.",
    icon: <FaMapMarkedAlt />,
    url: "/distance-map",
  },
]
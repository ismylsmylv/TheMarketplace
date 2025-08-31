import {
  faHeart,
  faMessage,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
export const navs = [
  {
    url: "/chats",
    icon: faMessage,
  },
  {
    url: "/favorites",
    icon: faHeart,
  },
  {
    url: "/profile",
    icon: faUser,
  },
  {
    title: "new poster",
    url: "/new",
    icon: faPlus,
  },
];

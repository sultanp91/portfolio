import battleships1 from "../images/battleships1.png";
import battleships2 from "../images/battleships2.png";
import battleships3 from "../images/battleships3.png";
import nextgenstore1 from "../images/nextgenstore1.png";
import nextgenstore2 from "../images/nextgenstore2.png";
import nextgenstore3 from "../images/nextgenstore3.png";
import todolist1 from "../images/todolist1.png";
import todolist2 from "../images/todolist2.png";
import todolist3 from "../images/todolist3.png";
import rcv1 from "../images/rcv1.png";
import rcv2 from "../images/rcv2.png";
import rcv3 from "../images/rcv3.png";
import tnw1 from "../images/tnw1.png";
import tnw2 from "../images/tnw2.png";
import tnw3 from "../images/tnw3.png";
import ns1 from "../images/ns1.png";
import ns2 from "../images/ns2 .png";

export const projectData = [
  {
    title: "Battleships",
    description:
      "A recreation of the classic board game - built with React and JavaScript using test driven development. Each component of game logic - ship, gameboard, player - was tested using Jest ensuring game logic is working correctly. Players can place ships horizontally or vertically on the board. Once all ships are placed, players will attack the opponent board until all ships have been sunk.",
    images: [battleships1, battleships2, battleships3],
  },

  {
    title: "Next Gen Store",
    description:
      "Front end shopping cart built with React functional components and React hooks. I used React Router to display content across mutiple pages, I also used Context and useReducer to access and manipulate state across multiple component layers without excessive prop drilling, enabling predictable and bug-free changes to application state.",
    images: [nextgenstore1, nextgenstore2, nextgenstore3],
  },
  {
    title: "To Do List",
    description:
      "To Do List made with vanilla JavaScript. Users are are able to create projects and then create tasks within them. Tasks can be edited and deleted. Users are also able to find tasks due on that date and also sort through tasks by priority. Dates are formatted using the date-fns package. This was one of the most difficult projects I've done, it was the first time",
    images: [todolist1, todolist2, todolist3],
  },

  {
    title: "React CV Generator",
    description:
      "CV Generator app built with class components. Users are able to add in their personal information, they can add in education and work history entries which can be edited and deleted. This was built with class components so that I could have a broader understanding of React as a library and enable me to work with legacy codebases built with class components",
    images: [rcv1, rcv2, rcv3],
  },
  {
    title: "The Next Web Clone",
    description: "A HTML/CSS clone of The Next Web homepage....",
    images: [tnw1, tnw2, tnw3],
  },
  {
    title: "New Scientist Page Clone",
    description: "A clone of a New Scientist article.....",
    images: [ns1, ns2],
  },
];

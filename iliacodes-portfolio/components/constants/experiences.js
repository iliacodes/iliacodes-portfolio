import logo from '../../public/timelineLogo.png';
import moralis from '../../public/moralis2.png';
import lighthouse from '../../public/lighthouse1.png';
import encode from '../../public/encode1.png';


const experiences = [
  {
    title: "Education",
    company_name: "Moralis, Coursera",
    icon: moralis,
    iconBg: "#fff",
    date: "Q2 - Q3 2022",
    points: [
      "Moralis",
      "Defi 101, Ethereum 101, Cryptography & Privacy Coins, Bitcoin and Blockchain 101, Bitcoin Monetary Revolution",
      "Coursera",
      "Version Control, Programming with Javascript, Introduction to Front-End Development."
    ],
  },
  {
    title: "Bootcamp",
    company_name: "Lighthouse Labs",
    icon: lighthouse,
    iconBg: "#fff",
    date: "Q4 2022, Q1 2023",
    points: [
      "Front-end Development: Lighthouse Labs taught me the fundamentals of front-end web development, including HTML, CSS, and JavaScript.",
      "Back-end Development: The bootcamp also covered server-side programming languages and frameworks like Node.js and Ruby on Rails.",
      "Full-Stack Integration: Lighthouse Labs bootcamp taught me how to integrate the front-end and back-end of web applications to create a cohesive user experience.",
    ],
  },
  {
    title: "Bootcamps #2 #3",
    company_name: "Encode Club",
    icon: encode,
    iconBg: "#fff",
    date: "Q2 2023",
    points: [
      "Deep diving into Solidity, Hardhat, EthersJS, IPFS, and other related technologies.",
      "Developing web applications using React.js Solidity.",
      "Focus on creation of NFT's and writing smart contracts.",
      "Encode Solidity Bootcamp.",
      "Alchemy University Bootcamp."
    ],
  },
  {
    title: "Contract Work",
    company_name: "iliacodes",
    icon: logo,
    iconBg: "#fff",
    date: "Q2 2023",
    points: [
      "Taking contracts on building the following:",
      " Smart Contract develpoment/testing",
      " Front-end landing pages",
      " Blockchain interfaces on front end applicaitons",
    ],
  },
];

export default experiences;
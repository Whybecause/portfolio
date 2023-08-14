export const PROJECTS = [
  {
    date: "Sept 2022",
    title: "TheTipTop",
    technos: "Node.js, Sequelize, React, Cypress",
    slug: "thetiptop_public",
    imgSrc: "/projects/thetiptop.png",
    description: {
      header: ["This school project is a website for a thea company that wants to organize a contest."],
      features: ["Allow to launch and stop the contest", "Users submit their participation code", "App choose randomly a winner"],
    }
  },
  {
    date: "Sept 2021",
    title: "Atypikhouse",
    technos: "Next.js, Typescript, Prisma",
    slug: "atypikhouse_public",
    imgSrc: "/about.jpg",
    description: {
      header: ["This school project is a website allowing users to submit their atypical properties for rental"],
      features: ["CRUD actions on properties", "Specific back-office for both owners and clients", "Handle bookings and payments"],
    }
  },
  {
    date: "July 2021",
    title: "Ingredients Manager",
    technos: "Mern Stack",
    slug: "ingredients-manager",
    imgSrc: "/projects/ingredients-manager.png",
    description: {
      header: ["Simple CRUD application made for a job technic test"],
      features: ["Allow to add, edit, delete and see ingredients", "Funny feature to automatically add an emoji to the ingredient"],
    }
  },
  {
    date: "Feb 2021",
    title: "Spiid App",
    technos: "MERN Stack",
    slug: "spiid_app",
    imgSrc: "/projects/spiid-app.png",
    description: {
      header: ["A school project for scooter rental business"],
      features: ["Generate QR Code for each scooter", "Users can scan the QR code to book the scooter", "GoogleMap API to localize scooters"],
    }
  },
  {
    date: "Jan 2021",
    title: "Mataviguette",
    technos: "MERN Stack",
    slug: "mataviguette",
    imgSrc: "/projects/mataviguette.png",
    description: {
      header: ["Website for a house rental"],
      features: ["Book and pay online", "Synchronize AirBnb calendar with personal google calendar so all bookings are centralised"],
    }
  },
  {
    date: "Oct 2020",
    title: "Okessapar",
    technos: "MERN Stack",
    slug: "okessapar",
    imgSrc: "/projects/okessapar.png",
    description: {
      header: ["Website for a music band"],
      features: ["Mostly static content", "Fetch youtube videos to display from API"],
    }
  },
  {
    date: "Oct 2020",
    title: "Amazon Checker",
    technos: "Node.js, Express, React, pupeteer",
    slug: "amazon_checker",
    imgSrc: "/projects/amazon-checker.png",
    description: {
      header:
        [
          "A personal project to check if a specific seller on Amazon has the buybox for a specific product.",
          "Use case: A company that wants to know when she looses the buybox on one of her products.",
        ],
      features: [
        "Add a list of Amazon products with their ASIN.",
        "The app then scrap the data of the product page on Amazon for each ASIN.",
        "Result is stored in database and displayed in a tabler."
      ]
    }
  },
  {
    date: "June 2020",
    title: "Weather App",
    technos: "Vanilla Javascript",
    slug: "weather_app",
    imgSrc: "/projects/weather-app.png",
    description: {
      header: [
        "A simple javascript app that fetches the weather from an open API.",
      ],
      features: [],
    }
  },
];

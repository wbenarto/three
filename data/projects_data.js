// import webesushi from "../assets/projects/webesushimockup4.jpg";
// import webesushiiamap from '../assets/projects/iamap.png'
// import covid from "../assets/projects/covid.jpg";
// import jin from "../assets/projects/jin.png";
// import liri from "../assets/projects/liri.png";
// import bamazon from "../assets/projects/bamazon.png";
// import spotify from "../assets/projects/spotify.png";
// import clicky from "../assets/projects/clicky.jpg";
// import giphy from "../assets/projects/giphy.png";
// import crystal from "../assets/projects/crystalcollector.png";
// import homemakase from '../assets/projects/homemakase.jpg';
// import ingredients from '../assets/projects/ingredientspage.jpg'
// import travelly from '../assets/projects/travelly.jpg'

export const projects = [
  {
    id: "celeste",
    title: "Celeste Cake Shop",
    headline: "eCommerce Developer",
    desc: "A landing site and eCommerce platform created using React on top of Next.js. Sanity.io is utilized for products information and pricing. Allowing users to make a purchase using Stripe API. Built responsive and reusable components using Tailwind.CSS. Also using 3rd party API such as SendGrid to manage email campaign and Google Maps API to show shop location.",
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Next.js",
      "Tailwind",
      "Sanity.io",
      "Stripe API",
      "Google Maps API",
      "Sendgrid API",
    ],
    images: ['./celeste.png'],
    github: "https://github.com/wbenarto/celesteCakeShop",
    deployed_url: "http://celeste-cake-shop.vercel.app/",
  },
  {
    id: "finca",
    title: "Finca",
    headline: "Front-end Engineer",
    desc: "Responsible in building internal tooling dashboard to allow admins to make changes into consultant informations, scheduling, and booking informations. Built the Frontend using Next.js, GraphQL, and Apollo Client. Responsive and reusable components are managed using Tailwind CSS and Styled-Components. Managed authentication and authorization token using cookies. Utilized ApolloClient and GraphQL to manage queries and mutations. ",
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Next.js",
      "GraphQL",
      "ApolloClient",
      "Tailwind",
      "Cookies",
    ],
    images: ['./logo.svg'],
  },
  {
    id: "cookma",
    title: "Cookma.co",
    headline: "SquareSpace Consultant",
    desc: "Built landing site for Cookma.co from design file in Figma using SquareSpace custom CSS.",
    tech: ["HTML", "CSS", "SquareSpace"],
  },
  {
    id: "webesushi",
    title: "Webesushi.io",
    headline: "One stop for all sushi enthusiasts",
    desc: "A web-app created using React with the mobile-first design approach and Redux for state management through the app. Firebase is being utilized to store information about users, products liked, and user authentication.",
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Express",
      "Firebase",
      "Styled-Components",
    ],
    images: ["/webesushimockup4.jpg"],
    github: "https://github.com/wbenarto/WB_Landing/tree/master/landing",
    deployed_url: "https://www.webesushi.io",
  },
  {
    id: "jinchoi",
    title: "JinChoiVisuals",
    headline: "Photography Portfolio",
    desc: "Created landing site using Next.js framework incorporating SASS as CSS preprocessor. Using Framer Motion to create animation effects on page load.",
    tech: ["HTML", "SCSS", "Typescript", "React", "Next.js", "Framer Motion"],
    images: ["/jin.png"],
    github: "https://github.com/wbenarto/jin",
    deployed_url: "https://jin-six.vercel.app/",
  },
  {
    id: "travelly",
    title: "TRAVELLY APP",
    headline: "Travel App at Your Fingertips",
    desc: "React Application built on top of Next.js framework utilizing Google Maps API and Travel Advisory API. Using Grid components from Material UI to build responsive layout with minimal codes. Google Maps Location asynchronously fetch Travel API to find restaurants, hotels, and attractions bounded by edges of Google Maps in the App.",
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Next.js",
      "Material UI",
      "Google Maps API",
      "Travel Advisory API",
    ],
    images: ["/travelly.jpg"],
    github: "https://github.com/wbenarto/travel_buddy",
    deployed_url: "https://travel-buddy-pi.vercel.app/",
  },
  {
    id: "spotifyclone",
    title: "Spotify Clone",
    headline:
      "Fetch Spotify Playlists + Control Music playback with the Spotify API",
    desc: "Spotify clone built in Next.js that allows user to fetch playlists and control media playback using Spotify API. NextAuth to persist user's logged in state and refresh oAuth JWT tokens. Tailwind CSS is utilized to build reusable components that are fully responsive. Next.js 12 Middleware used to handle authenticated user access. Recoil library is used for state management in the spotify clone app. User able to filter places based on review ratings in Travel Advisory.",
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Next.js",
      "NextAuth",
      "Next.js Middleware",
      "Tailwind CSS",
      "Recoil",
    ],
    images: ["/spotify.png"],
    github: "https://github.com/wbenarto/sp-clone",
    deployed_url: "https://sp-clone.vercel.app/",
  },
  {
    id: "genjiregional",
    title: "Genji Sushi",
    headline: "Regional Operations Manager",
    desc: "Led the California Operations team of 8 District Managers for 45 locations spanning from South Lake Tahoe to Monterey Bay. Responsible for $30 million in annual revenue and in developing Regional strategy to improve all aspects of business: Quality assurance, Food Safety, Client Relations, Customer Service, Sales improvement, and exceeding financial expectations of P&L",
  },
  {
    id: "genjidistrict",
    title: "Genji Sushi",
    headline: "District Manager",
    images: [ "/genji2.jpg"],
    desc: "Assist the Regional Manager with the NCA store takeover (10-15 stores), training new district managers, and setting up operations at Tam Tam Ramen. Helped Mai cuisine acquire new business opportunities such as Market Hall and Munchery. Exceed financial expectations of P & L. Increased sales in delivery stores to 60%-70% comp against last year. Maintained a healthy 5%-10% comp against last year as a district while helping other district with store openings. District Secret Shopper score averaged 97% as of May 2017",
  },
];

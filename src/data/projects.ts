const projects: Project[] = [
  {
    id: "app",
    name: "App",
    description: "Another Platform for Posting",
    url: "https://app.billlaaayyy.dev",
    image: ["", "", ""],
    github: "https://github.com/FatCatLikesBeer/theThirdBackEnd",
    goals: "A full on web application with email based registration and authentication. Handling objects via an S3 API. SSR with Open Graph and Twitter Cards to handle link content previews.",
    technologies: ["React", "TypeScript", "Hono", "S3", "Cloudflare R2", "SQLite", "Turso", "SSR", "Open Graph", "Twitter Cards"],
  },
  {
    id: "billy-blog",
    name: "Billy-Blog",
    description: "It's my blog",
    url: "https://billy-blog.pockethost.io/",
    image: ["", "", ""],
    github: "N/A",
    goals: "Wanted to explore PocketBase",
    technologies: ["React", "PocketBase", "TypeScript"],
  },
  {
    id: "sound-lab",
    name: "Sound Lab",
    description: "Horrible Noise Maker. Best used on mobile. CAUTION: LOUD!!!",
    url: "https://noise-maker.fly.dev/",
    image: ["", "", ""],
    github: "https://github.com/FatCatLikesBeer/audio",
    goals: "Explore WebAudio API. Inspired by 3D tools from audio production. Realized controls could be spatial instead of graphical.",
    technologies: ["Web Audio API", "React", "TypeScript", "DOM Manipulation"],
  },
  {
    id: "blue-bubbles",
    name: "Blue Bubbles",
    description: "Messaging App: Blue Bubbles for Everyone!",
    url: "https://bluebubbles.fly.dev/",
    image: ["", "", ""],
    github: "https://github.com/FatCatLikesBeer/chat-app-back-end",
    goals: "Messaging app built without React. First time using WebSockets. First app built with a back-end/front-end paradigm.",
    technologies: ["Socket.io", "No-React", "MongoDB", "Express", "TTD", "Jest", "SuperTest"],
  },
  {
    id: "letter-finder",
    name: "Letter Finder",
    description: "Where's Waldo, but with letter characters",
    url: "https://letter-finder.fly.dev/",
    image: ["", "", ""],
    github: "https://github.com/FatCatLikesBeer/waldo",
    goals: "First game leverging window, page, and click locations. First time using JS classes. Part of The Odin Project",
    technologies: ["React", "MongoDB"],
  },
  {
    id: "bored-programmer",
    name: "Bored Programmer",
    description: "Like the Bored API (RIP) but for programmers",
    url: "https://bored-programmer-api.fly.dev/",
    image: ["", "", ""],
    github: "https://github.com/FatCatLikesBeer/bored_programmer",
    goals: "First CRUD app using. Part of The Odin Project",
    technologies: ["NodeJS", "MongoDB", "Express", "EJS"],
  },
  {
    id: "passwordhawk",
    name: "Password Hawk",
    description: "A passcode/passphrase generator",
    url: "https://password-hawk.fly.dev/",
    image: ["", "", ""],
    github: "https://github.com/FatCatLikesBeer/password-hawk-backend",
    goals: "Inspired by Password Wolf, I thought it would be fun to create a password generator over a weekend. Spoiler, it took more than a weekend.",
    technologies: ["React", "TypeScript"],
  },
];

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  image: [string, string, string];
  github: string;
  goals: string;
  technologies: string[];
}

projects.reverse();
export default projects;
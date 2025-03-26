const projects: Project[] = [
  {
    id: "app",
    name: "App",
    description: "Another Platform for Posting",
    url: "https://app.billlaaayyy.dev",
    github: "https://github.com/FatCatLikesBeer/theThirdBackEnd",
    goals: "A full CRUD web application with email based authentication. Handle objects via an S3, API. Server side rendering with Open Graph and Twitter Cards to render link content previews. Come check it out and leave a message! The would could social media alternatives! Odin Project Final",
    tech: ["React", "TypeScript", "Hono", "S3", "Cloudflare R2", "SQLite", "Turso", "SSR", "Open Graph", "Twitter Cards"],
    numberOfAssets: 3,
    type: "project",
    imageFormat: "png",
  },
  {
    id: "billy-blog",
    name: "Billy-Blog",
    description: "It's my blog",
    url: "https://billy-blog.pockethost.io/",
    github: "",
    goals: "Create a personal blog which explores pre packaged backends. I chose to use PocketBase instead of SupaBased because it's a smaller package and a cheaper options.",
    tech: ["React", "PocketBase", "TypeScript"],
    numberOfAssets: 3,
    type: "project",
    imageFormat: "png",
  },
  {
    id: "sound-lab",
    name: "Sound Lab",
    description: "Horrible Noise Maker. Best used on mobile. ⚠️ CAUTION: LOUD!!!",
    url: "https://noise-maker.fly.dev/",
    github: "https://github.com/FatCatLikesBeer/audio",
    goals: "Expore the WebAudio API to prep for different project. During exploration, realized I could use device orientation as controlls rather than graphical controlls. ⚠️ CAUTION: LOUD!!!",
    tech: ["Web Audio API", "Device Orientation API", "React", "TypeScript"],
    numberOfAssets: 3,
    type: "project",
    imageFormat: "png",
  },
  {
    id: "blue-bubbles",
    name: "Blue Bubbles",
    description: "Messaging App: Blue Bubbles for Everyone!",
    url: "https://bluebubbles.fly.dev/",
    github: "https://github.com/FatCatLikesBeer/chat-app-back-end",
    goals: "Messaging app built without React. In my previous React course, they taught the framework without showing the underlying DOM manipulation principles. Hence, I wanted to explore and learn more DOM manipulation. First time using WebSockets via Socket.io. First app built with a back-end/front-end paradigm. Part of The Odin Project",
    tech: ["DOM manipulation", "Socket.io", "WebSockets", "No-React", "MongoDB", "Express", "TTD", "Jest", "SuperTest"],
    numberOfAssets: 3,
    type: "project",
    imageFormat: "png",
  },
  {
    id: "letter-finder",
    name: "Letter Finder",
    description: "Where's Waldo, but with letter characters",
    url: "https://letter-finder.fly.dev/",
    github: "https://github.com/FatCatLikesBeer/waldo",
    goals: "First game leverging window, page, and click coordinates. First time using JS classes to encapsulare similar data types. Part of The Odin Project",
    tech: ["React", "MongoDB"],
    numberOfAssets: 3,
    type: "project",
    imageFormat: "png",
  },
  {
    id: "bored-programmer",
    name: "Bored Programmer API",
    description: "Like the Bored API (RIP) but for programmers",
    url: "https://bored-programmer-api.fly.dev/",
    github: "https://github.com/FatCatLikesBeer/bored_programmer",
    goals: "First CRUD app reading and writing to a database. Part of The Odin Project. Went beyond the project and created a JSON API and the ability for users to write, update, and delete records.",
    tech: ["NodeJS", "MongoDB", "Express", "EJS"],
    numberOfAssets: 3,
    type: "project",
    imageFormat: "png",
  },
  {
    id: "passwordhawk",
    name: "Password Hawk",
    description: "A passcode/passphrase generator",
    url: "https://password-hawk.fly.dev/",
    github: "https://github.com/FatCatLikesBeer/password-hawk",
    goals: "Inspired by Password Wolf, I thought it would be fun to create a password generator over a weekend. Spoiler, it took more than a weekend.",
    tech: ["React", "TypeScript"],
    numberOfAssets: 3,
    type: "project",
    imageFormat: "png",
  },
  {
    id: "meta-front",
    name: "Cert: Meta",
    description: "Coursera & Meta: Front-End Developer",
    url: "https://coursera.org/verify/professional-cert/GYGU9E5MSRQU",
    github: "",
    goals: "This is my second programming course. I wanted to learn to build things using a popular framework.",
    tech: ["React", "JavaScript", "CSS", "Git", "Figma"],
    numberOfAssets: 10,
    type: "course",
    imageFormat: "jpg",
  },
  {
    id: "google-python",
    name: "Cert: Google",
    description: "Coursera & Google: IT Automation with Python",
    github: "",
    url: "https://coursera.org/verify/professional-cert/3CJZ35W2WMDY",
    goals: "This was one of my first programming courses where I set out to learn new Python scripting techniques and rehone my rusty programming skills.",
    tech: ["Python", "Git", "Puppet"],
    numberOfAssets: 7,
    type: "course",
    imageFormat: "jpg",
  }
];

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  github: string;
  goals: string;
  tech: string[];
  numberOfAssets: number;
  type: "course" | "project";
  imageFormat: "png" | "jpg";
}

projects.reverse();
export default projects;

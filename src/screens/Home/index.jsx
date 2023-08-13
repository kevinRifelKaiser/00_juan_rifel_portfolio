import { useRef, useEffect, useState } from "react";
import Typed from "typed.js";

import { LucideGithub, MdiGmail, MdiLinkedin } from "../../assets/SVGs";

const HomePage = () => {
  const text = useRef(null);
  const [githubIsHover, setGithubIsHover] = useState(false);
  const [gmailIsHover, setGmailIsHover] = useState(false);
  const [linkedinIsHover, setLinkedinIsHover] = useState(false);

  useEffect(() => {
    const typed = new Typed(text.current, {
      strings: ["web devpeloer", "web developer"],
      typeSpeed: 70,
      backDelay: 500,
      backSpeed: 70,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="basis-full px-24 lg:px-52 py-24 h-[100rem]">
      <div className="w-auto h-auto">
        <h1 className="text-white font-mono text-[4rem]">
          Hi there! I'm Kevin,
        </h1>
        <h1 className="text-white font-mono text-[4rem]">
          <span
            ref={text}
            className="bg-gradient-to-br from-[#22c1c3] to-[#fdbb2d] text-transparent bg-clip-text"
          />
        </h1>
      </div>
      <div className="mt-24">
        <p className="font-mono leading-relaxed text-lg text-white">
          Frontend-focused web developer who loves crafting small to
          medium-sized{" "}
          <span className="bg-gradient-to-br from-[#22c1c3] to-[#fdbb2d] text-transparent bg-clip-text">
            full-stack
          </span>{" "}
          web and mobile applications using{" "}
          <span className="bg-gradient-to-br from-[#22c1c3] to-[#fdbb2d] text-transparent bg-clip-text">
            React
          </span>
          . I thrive on challenges and enjoy continuously learning. If you're
          interested in collaborating or have any exciting projects in mind,
          feel free to{" "}
          <span className="bg-gradient-to-br from-[#22c1c3] to-[#fdbb2d] text-transparent bg-clip-text">
            reach out!
          </span>
        </p>
      </div>
      <div className="mt-20 flex flex-rox">
        <LucideGithub
          className="w-12 h-12 hover:cursor-pointer"
          isHover={githubIsHover}
          onMouseEnter={() => setGithubIsHover(true)}
          onMouseLeave={() => setGithubIsHover(false)}
        />
        <MdiGmail
          className="w-12 h-12 mx-7 hover:cursor-pointer"
          isHover={gmailIsHover}
          onMouseEnter={() => setGmailIsHover(true)}
          onMouseLeave={() => setGmailIsHover(false)}
        />
        <MdiLinkedin
          className="w-12 h-12 hover:cursor-pointer"
          isHover={linkedinIsHover}
          onMouseEnter={() => setLinkedinIsHover(true)}
          onMouseLeave={() => setLinkedinIsHover(false)}
          onClick={() => console.log("cacascaac")}
        />
      </div>
    </section>
  );
};

export default HomePage;

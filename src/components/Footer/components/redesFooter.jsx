import { useState } from "react";

export const Redes = () => {
  const [iconStates, setIconStates] = useState({
    facebook: true,
    twitter: true,
    instagram: true,
  });

  const handleMouseEnter = (icon) => {
    setIconStates({ ...iconStates, [icon]: false })
  };

  const handleMouseLeave = (icon) => {
    setIconStates({ ...iconStates, [icon]: true })
  };

  return (
    <>
      <a
        className="footer__link facebook"
        href="#"
        onMouseEnter={() => handleMouseEnter("facebook")}
        onMouseLeave={() => handleMouseLeave("facebook")}
      >
        <i
          className={iconStates.facebook ? "fa-brands fa-facebook fa-lg" : "fa-brands fa-facebook fa-lg fa-beat-fade"}
        >
        </i>
      </a>
      <a
        className="footer__link twitter"
        href="#"
        onMouseEnter={() => handleMouseEnter("twitter")}
        onMouseLeave={() => handleMouseLeave("twitter")}
      >
        <i
          className={iconStates.twitter ? "fa-brands fa-twitter fa-lg" : "fa-brands fa-twitter fa-lg fa-beat-fade"}
        >
        </i>
      </a>
      <a
        className="footer__link instagram"
        href="#"
        onMouseEnter={() => handleMouseEnter("instagram")}
        onMouseLeave={() => handleMouseLeave("instagram")}
      >
        <i
          className={iconStates.instagram ? "fa-brands fa-instagram fa-lg" : "fa-brands fa-instagram fa-lg fa-beat-fade"}
        ></i>
      </a>
    </>
  );
};

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faAngellist,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/" target="_blank">
        <FontAwesomeIcon
          icon={faGithub}
          color="#333"
          style={{ fontSize: "20px" }}
        />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/" target="_blank">
        <FontAwesomeIcon
          icon={faLinkedin}
          color="#333"
          style={{ fontSize: "20px" }}
        />
      </a>
    </div>
    <div>
      <a href="https://angel.co/u/" target="_blank">
        <FontAwesomeIcon
          icon={faAngellist}
          color="#333"
          style={{ fontSize: "20px" }}
        />
      </a>
    </div>
  </div>
);

export default SocialMedia;

import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { DataContext } from "../../DataContext";

import { motion } from "framer-motion";

function SocialMedias() {
  const { darkMode } = useContext(DataContext);

  return (
    <div className="flex flex-row mt-8 gap-8 md:px-20">
      <motion.span
        whileHover={{ scale: "1.2" }}
        transition={{ type: "spring", stiffness: "300" }}
      >
        <a
          href="https://github.com/callmeVineeth"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            color={`${darkMode ? "white" : "black"}`}
            size={25}
            alt="GitHub"
          />
        </a>
      </motion.span>
      <motion.span
        whileHover={{ scale: "1.2" }}
        transition={{ type: "spring", stiffness: "300" }}
      >
        <a
          href="https://www.linkedin.com/in/vineeth-p-v-9216021b8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            color={`${darkMode ? "white" : "black"}`}
            size={25}
            alt="LinkedIn"
          />
        </a>
      </motion.span>
      <motion.span
        whileHover={{ scale: "1.2" }}
        transition={{ type: "spring", stiffness: "300" }}
      >
        <a
          href="https://twitter.com/callmeVineeth24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTwitter
            color={`${darkMode ? "white" : "black"}`}
            size={25}
            alt="Twitter"
          />
        </a>
      </motion.span>
      <motion.span
        whileHover={{ scale: "1.2" }}
        transition={{ type: "spring", stiffness: "300" }}
      >
        <a href="mailto:vineethpv024@gmail.com">
          <IoMdMail
            color={`${darkMode ? "white" : "black"}`}
            size={25}
            alt="Email"
          />
        </a>
      </motion.span>
    </div>
  );
}

export default SocialMedias;

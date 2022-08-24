import { ThemeFooter } from "./style";
import { BsLinkedin } from "react-icons/bs";
import { RiCopyrightFill } from "react-icons/ri";
import { MdOutlineContactMail } from "react-icons/md";

const Footer = () => {
  return (
    <ThemeFooter>
      <h3>
        <MdOutlineContactMail /> Contato
      </h3>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/francisco-jeihson-alves-bezerra-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%F0%9F%8C%88-abaa98226/"
          >
            <BsLinkedin /> Francisco Jeihson
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/gabriel-luz-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%F0%9F%8C%88-22287a213/"
          >
            <BsLinkedin /> Gabriel Luz
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/juliocpadua1/"
          >
            <BsLinkedin /> Julio César
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/juliocpadua1/"
          >
            <BsLinkedin /> Lucas Ribeiro
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/matheus-sam-navarro-57845316a/"
          >
            <BsLinkedin /> Matheus Sam
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/matheus-zeiser-836137230/"
          >
            <BsLinkedin /> Matheus Zeiser
          </a>
        </li>
      </ul>
      <span>
        Todos os direitos reservados, 2022. Copyright <RiCopyrightFill />
      </span>
    </ThemeFooter>
  );
};

export default Footer;

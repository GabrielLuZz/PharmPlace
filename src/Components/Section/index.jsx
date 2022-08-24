import MiniCard from "../MiniCard";
import { StyledSection } from "./style";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useRef, useState } from "react";

const Section = ({ title, listProducts }) => {
  const refe = useRef(null);
  const allSection = useRef(null);
  const [isBigger, setIsBigger] = useState(false);

  if (!listProducts || !listProducts.length) return null;

  const handleLeftClick = (e) => {
    e.preventDefault();
    refe.current.scrollLeft -= refe.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    refe.current.scrollLeft += refe.current.offsetWidth;
  };

  setInterval(() => {
    setIsBigger(refe?.current?.scrollWidth > allSection?.current?.offsetWidth);
  }, 500);

  return (
    <StyledSection ref={allSection}>
      <h2>{title}</h2>
      {isBigger && (
        <div className="controls">
          <button className="left" onClick={handleLeftClick}>
            <BsChevronCompactLeft />
          </button>
          <button className="right" onClick={handleRightClick}>
            <BsChevronCompactRight />
          </button>
        </div>
      )}

      <div className="list" ref={refe}>
        {listProducts?.map(({ id, name, price, image }) => (
          <MiniCard key={id} name={name} price={price} image={image} id={id} />
        ))}
      </div>
    </StyledSection>
  );
};

export default Section;

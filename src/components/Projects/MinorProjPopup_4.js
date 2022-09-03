import { Card, Footer, Header } from "./styles";
import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";

export default function MinorProjPopup_4(props) {
  const [expanded, setExpanded] = useState(false);
  const [accodionHeight, setAccodionHeight] = useState(0);
  const ref = useRef(null);

  const open = () => setExpanded(!expanded);

  useEffect(() => {
    const getHeight = ref.current.scrollHeight;
    setAccodionHeight(getHeight);
  }, [expanded]);

  return (
    <>
      <Card>
        <Footer
          onClick={open}
          className={expanded ? "show" : ""}
          setHeight={accodionHeight}
          ref={ref}
        >
          <span>BLOCKCHAIN based marketplace</span>
          <div className="accodion" ref={ref}>
            <p>• A decentralized marketplace to facilitate transparent interactions to buy & sell products ranging from anything and everything.<br/><br/>• The techstack includes Solidity,HTML, JavaScript and CSS.<br/><br/>• The Development environment is predominantly Remix IDE and for the deployment nodeJS was used.</p>
          </div>
        </Footer>
      </Card>
    </>
  );
}

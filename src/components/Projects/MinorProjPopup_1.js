import { Card, Footer, Header } from "./styles";
import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";

export default function MinorProjPopup_1(props) {
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
          <span>View Details</span>
          <div className="accodion" ref={ref}>
            <p>kk</p>
          </div>
        </Footer>
      </Card>
    </>
  );
}

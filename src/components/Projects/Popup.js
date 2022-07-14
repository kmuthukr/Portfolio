import { Card, Footer, Header } from "./styles";
import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";

export default function Popup(props) {
  const [expanded, setExpanded] = useState(false);
  const [accodionHeight, setAccodionHeight] = useState(0);
  const ref = useRef(null);

  const open = () => setExpanded(!expanded);
  const open_new = () => setExpanded(true);

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
            {props.description_1}<br/><br/>
            {props.description_2}<br/><br/>
            {props.description_3}<br/><br/>
            {props.description_4}<br/><br/>
            {props.description_5}<br/><br/>
            {props.description_6}<br/><br/>
          </div>
        </Footer>
      </Card>
    </>
  );
}

import { Card, Footer, Header } from "./styles";
import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";

export default function MinorProjPopup_2(props) {
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
          <span>Rooting Graph Nodes: Using Spark </span>
          <div className="accodion" ref={ref}>
            <p>• Finds the roots of each node in a graph of connected components using Apache Spark.<br/><br/>• Distributed implementation tested on <a href="https://www.buffalo.edu/ccr/support/research_facilities/ub-hpc.html" target="_blank">UB’s HPC</a></p>
          </div>
        </Footer>
      </Card>
    </>
  );
}

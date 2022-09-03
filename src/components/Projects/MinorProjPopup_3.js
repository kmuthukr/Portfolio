import { Card, Footer, Header } from "./styles";
import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";

export default function MinorProjPopup_3(props) {
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
          <span>Distributed Sorting: Using Open MPI </span>
          <div className="accodion" ref={ref}>
            <p>• Implements count sort on a range of short integers distributed across a set of processors in a cluster using Open MPI.<br/><br/>• Implemented on<a href="https://www.buffalo.edu/ccr/support/research_facilities/ub-hpc.html" target="_blank">UB’s HPC</a></p>
          </div>
        </Footer>
      </Card>
    </>
  );
}

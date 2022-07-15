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
          <span >Gaussian KDE:GPU implementation</span>

          <div className="accodion" ref={ref}>
            <p>• Parallel implementation of gaussian kernel density estimation computation for a set of floating point numbers using NVIDIA CUDA.<br/>Y
            <br/>• Project deployed and benchmarked on<a href="https://www.buffalo.edu/ccr/support/research_facilities/ub-hpc.html" target="_blank">UB’s HPC</a></p>
          <br/>
          </div>
        </Footer>
      </Card>
    </>
  );
}

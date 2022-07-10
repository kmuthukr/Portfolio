import React from "react";
import { Row,Col,Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImPointRight,ImPointLeft } from "react-icons/im";
import laptopImg from "../../Assets/about.png";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/graduate.jpg";
import Lottie from 'react-lottie';
import animation from '../../Assets/graduation.json'

function AboutCard() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    // here is where we will declare lottie animation
    // "animation" is what we imported before animationData: animation,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice",
    },
 };
  return (
      <table border="20">
        <tr>
          <td >
            <table>
              <tr ><span className="purple">B.tech </span></tr>
              <tr>
                <td>Object oriented Programming & Concepts&emsp;<ImPointRight /></td>
              </tr>
              <tr>
                <td>c# and .NET framework&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<ImPointRight /></td>
              </tr>
              <tr>
                <td>Mobile applications&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<ImPointRight /></td>
              </tr>
              <tr>
                <td>Cloud computing&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<ImPointRight /></td>
              </tr>
              <tr>
                <td>Wireless & Mobile communication&emsp;<ImPointRight /></td>
              </tr>
              <tr>
                <td>Operating Systems&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<ImPointRight /></td>
              </tr>
              <tr>
                <td>Database Systems&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<ImPointRight /></td>
              </tr>
              <tr>
                <td>Distributed Systems&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<ImPointRight /></td>
              </tr>
              <tr>
                <td>Information Security&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<ImPointRight /></td>
              </tr>
            </table>
          </td>
          <td>
  {/**          <Tilt>
                <img src={myImg}  height={265} width={300}  />
            </Tilt>
    */}
            <Tilt>
             <Lottie options={defaultOptions} height={300} width={300} />
             </Tilt>
            </td>
          <td >
            <table>
              <tr ><span className="purple">Master's </span></tr>
              <tr>
                <td><ImPointLeft/>&emsp;&emsp;&emsp;Algorithm Analysis</td>
              </tr>
              <tr>
                <td><ImPointLeft />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Parallel & Distributed Computing</td>
              </tr>
              <tr>
                <td><ImPointLeft/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Machine Learning</td>
              </tr>
              <tr>
                <td><ImPointLeft />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Computer Vision & Image Processing</td>
              </tr>
              <tr>
                <td><ImPointLeft />&emsp;&emsp;&emsp;Blockchain</td>
              </tr>
              <tr>
                <td><ImPointLeft />&emsp;&emsp;&emsp;Modern Networking</td>
              </tr>
              <tr>
                <td><ImPointLeft />&emsp;&emsp;&emsp;Software Security</td>
              </tr>
              <tr>
                <td><ImPointLeft />&emsp;&emsp;&emsp;Pattern Recognition</td>
              </tr>
              <tr>
                <td><ImPointLeft/>&emsp;&emsp;&emsp;Software Engieering</td>
              </tr>
            </table>
          </td>    
        </tr>
      </table>
    );
}

export default AboutCard;

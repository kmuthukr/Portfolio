import React from "react";
import { ImPointRight,ImPointLeft } from "react-icons/im";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/graduate.jpg";
import Lottie from 'react-lottie';
import animation from '../../Assets/90696-graduation-dark.json'

function TechCard() {
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
            <Tilt>
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
            </Tilt>
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
            <Tilt>
            <table>
              <tr ><span className="purple">Master's </span></tr>
              <tr>
                <td><ImPointLeft />&emsp;Computer Vision & Image Processing</td>
              </tr>
              <tr>
                <td><ImPointLeft />&emsp;Parallel & Distributed Computing</td>
              </tr>
              <tr>
                <td><ImPointLeft/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Algorithm Analysis</td>
              </tr>
              <tr>
                <td><ImPointLeft />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Blockchain</td>
              </tr>
              <tr>
                <td><ImPointLeft />&emsp;&emsp;&emsp;&emsp;Modern Networking</td>
              </tr>
              <tr>
                <td><ImPointLeft />&emsp;&emsp;&emsp;&emsp;&emsp;Software Security</td>
              </tr>
              <tr>
                <td><ImPointLeft />&emsp;&emsp;&emsp;&emsp;&emsp;Pattern Recognition</td>
              </tr>

              <tr>
                <td><ImPointLeft/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Machine Learning</td>
              </tr>
              <tr>
                <td><ImPointLeft/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Software Engieering</td>
              </tr>
            </table>
            </Tilt>
          </td>    
        </tr>
      </table>
    );
}

export default TechCard;

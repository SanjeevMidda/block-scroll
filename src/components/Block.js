import React, { useState } from "react";

const Block = ({ letter, backgroundImage }) => {
  const [status, setStatus] = useState(false);

  let blockStyles = {
    background: backgroundImage
      ? `url(${backgroundImage})`
      : "rgb(211, 211, 211)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div
      className="block"
      style={blockStyles}
      onMouseEnter={() => setStatus(true)}
      onMouseLeave={() => setStatus(false)}
    >
      {!status ? <h1>{letter}</h1> : null}
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eos
        eligendi magni adipisci earum temporibus at, qui cupiditate doloremque
        sint totam perferendis corporis, nisi possimus amet voluptates repellat
        natus consequuntur? Qui alias dolorum, ipsam illo ipsa ducimus
        distinctio esse? Amet ipsam accusantium impedit placeat deserunt non sit
        dolorum quasi, quam unde. Ipsa rerum quibusdam praesentium repellat
        autem pariatur iusto reiciendis? Blanditiis possimus in ducimus
      </p> */}
    </div>
  );
};

export default Block;

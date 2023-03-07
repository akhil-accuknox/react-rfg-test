import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import command from "./assets/command.svg";
import { ForceGraph2D } from "react-force-graph";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const imgs = ["cloud.svg", "command.svg", "react.svg", "shield.svg"];

  const image = new Image();
  image.src = reactLogo;
  console.log(image);

  const [graphData] = useState({
    nodes: [
      {
        id: "id1",
        name: "node1",
        group: 4,
        val: 1,
        img: `./assets/${imgs[4]}`,
      },
      {
        id: "id2",
        name: "node2",
        group: 4,
        val: 2,
        img: `./assets/${imgs[4]}`,
      },
      {
        id: "id3",
        name: "node3",
        group: 1,
        val: 3,
        img: `./assets/${imgs[1]}`,
      },
      {
        id: "id4",
        name: "node4",
        group: 2,
        val: 4,
        img: `./assets/${imgs[2]}`,
      },
      {
        id: "id5",
        name: "node5",
        group: 1,
        val: 5,
        img: `./assets/${imgs[1]}`,
      },
      {
        id: "id6",
        name: "node6",
        group: 2,
        val: 6,
        img: `./assets/${imgs[2]}`,
      },
      {
        id: "id7",
        name: "node7",
        group: 2,
        val: 7,
        img: `./assets/${imgs[2]}`,
      },
      {
        id: "id8",
        name: "node8",
        group: 3,
        val: 8,
        img: `./assets/${imgs[3]}`,
      },
      {
        id: "id9",
        name: "node9",
        group: 1,
        val: 9,
        img: `./assets/${imgs[1]}`,
      },
      {
        id: "id10",
        name: "node10",
        group: 3,
        val: 10,
        img: `./assets/${imgs[3]}`,
      },
    ],
    links: [
      {
        source: "id1",
        target: "id2",
        value: 4,
      },
      {
        source: "id2",
        target: "id3",
        value: 4,
      },
      {
        source: "id1",
        target: "id4",
        value: 6,
      },
      {
        source: "id7",
        target: "id4",
        value: 2,
      },
      {
        source: "id4",
        target: "id6",
        value: 2,
      },
      {
        source: "id3",
        target: "id5",
        value: 4,
      },
      {
        source: "id8",
        target: "id2",
        value: 7,
      },
      {
        source: "id8",
        target: "id10",
        value: 6,
      },
      {
        source: "id3",
        target: "id9",
        value: 5,
      },
    ],
  });

  const colorsGroupMap = {
    1: "#03045E",
    2: "#0077B6",
    3: "#00B4D8",
    4: "#90E0EF",
    5: "#CAF0F8",
  };

  const fgRef = useRef();

  return (
    <div className="App">
      <ForceGraph2D
        ref={fgRef}
        backgroundColor="#fff"
        onLinkClick={(link, e) => {
          console.log("link clicked", link);
        }}
        graphData={graphData}
        // nodeCanvasObject={({ src, x, y }, ctx) => {
        //   const image = new Image();
        //   image.src = src;
        //   image.backgroundColor = "#000";
        //   const size = 12;
        //   const fontSize = 16;
        //   ctx.drawImage(
        //     image,
        //     x - fontSize - 5,
        //     y - fontSize - 5,
        //     size / 2,
        //     size / 2
        //   );
        // }}
        nodeLabel={(node) =>
          `
          <div class="custom-node-label-wrapper">Node Details</div>
          <div class="custom-node-label">
          <div>
             <b>${node.name}</b> (${node.id})
          </div>
          <div>
             belongs to <b>Group ${node.group}</b>
          </div>
          </div>`
        }
        linkDirectionalParticles="value"
        nodeColor={(node) => {
          return colorsGroupMap[node.group];
        }}
        cooldownTicks={100}
        onEngineStop={() => fgRef.current.zoomToFit(400, 40)}
        linkDirectionalParticleSpeed={(d) => d.value * 0.001}
      />
    </div>
  );
}

export default App;

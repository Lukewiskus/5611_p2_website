import "./App.css";
// import img from "./dfs.png";
function App() {
  return (
    <div className="App">
      <div className=" box header">
        <h1>Luke Wiskus 5611 Project2 Submission</h1>
      </div>
      <div className=" box mouseFollow">
        <h1>Cloth Simulation</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OBELHIt-O6A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <ul>
          <li>
            <h1>What Was Implemented</h1>
          </li>
          <li>
            <ul>
              <li>
                <li>All visible from the start:</li>
                <p>Multiple Ropes (at least 2D) + 45</p>
                <p>Cloth Simulation + 20</p>
                <p>3D Simulation + 10</p>
                <p>High-quality Rendering + 5</p>
              </li>
              <li>
                <p>Ripping/Tearing (@12 seconds) + 10</p>
              </li>
            </ul>
          </li>
          <li>
            <h1>Github</h1>
            <a
              href="https://github.umn.edu/wisku005/5611_P2Proccessing.git"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <h1>Tools</h1>
            <li>
              Proccesing for code, assets found{" "}
              <a
                href="https://quaternius.com/"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>{" "}
              and Blender to put the scene together
            </li>
          </li>
          <li>
            <h1>Difficulties</h1>
            <p>
              I think the biggest difficulty for me was mostly self inflicted. I
              missed the cloth and rope lectures because I was sick, and I made
              a lot of little mistakes that made it difficult, but nothing I
              couldn't figure out.{" "}
            </p>
            <p>
              I think the most difficult was to get a texture onto the cloth,
              and I wasn't able to get an image onto the cloth but at least its
              a nice black which I think looks good. Also, I couldn't get the
              texture working with the tearing because even after it tears, it
              still renders the texture between the nodes instead of tearing. I
              wasn't able to solve that issue but I think both versions look
              good
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

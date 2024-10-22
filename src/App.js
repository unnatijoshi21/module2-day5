import './App.css';
import Islandimg from "./Assets/image/img.jpg"

function App() {
  return (
    <div>
      <h1 classname="App">Unnati Joshi</h1>
     {/* <img height="100px" width="100px" align="right" src="https://i2.wp.com/thenewcamera.com/wp-content/uploads/2016/01/Nikon-D500-Sample-Image-3.jpg"></img>
      */} 
      <img width="100px" height="100px" align="right" src={Islandimg} alt=""/>
      <p> An undergraduate from CHRIST University, Bangalore with a degree of Bachlors of Business Administration Hons. (Finance); is currently an Intern at Deloitte. She come with a background in Finance, Business Analytics, Algorithms and Community Building.</p>
      <br/>
      <hr/>
      <h3> Skills</h3>
      <ul>
        <li>PowerBI</li>
        <li>SQL</li>
        <li>Tableau</li>
        <li>Java</li>
        <li>Python</li>
      <hr/>
        
      </ul>
    </div>
  );
}

export default App;

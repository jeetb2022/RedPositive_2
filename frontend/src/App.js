import './App.css';
import { useState} from 'react';
import InternData from './components/InternData';
import ErrorModal from './components/ErrorModal';
function App() {
const [formIsVisible,setFormVisibitlity]=useState(false);
const handleClick = ()=>{
setFormVisibitlity(!formIsVisible);
}

const handleEmailClick=()=>{

};
const [selectedData,setSelectedData] = useState([]);
const dataInput = (data)=>{
// console.log(data);
setSelectedData(data);
};
// console.log(JSON.stringify(selectedData[0]));
let body="";
selectedData.forEach((data)=>{
  body=body+"Name :\n "+data.intern_name+', Email :'+data.intern_email+", Phone:"+data.intern_phone+" ------ ";
});
const url = "mailto:info@redpositive.in"+"?subject=Hello from Abstract!"+`&body=`+body;
  return (
    <div className="App">
<h1>Red Positive internship</h1>

   <InternData onselect = {dataInput} />

      <button className="button-1" role="button" onClick={handleClick}>Form</button>
      <button className="button-1" role="button" onClick={handleEmailClick}> <a href={url}>Click to Send an Email</a></button>
      {formIsVisible && <ErrorModal onCancel={handleClick}/>}
    </div>
  );
}

export default App;

import { useEffect,useState,useCallback } from "react";
import { AgGridReact } from 'ag-grid-react'; 
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css'; 
const HOME_URL ='http://localhost:3001/'
const InternData=(props)=>{
  const [internData,setInternData] = useState([]);
  useEffect(()=>{
    fetch(`${HOME_URL}`)
    .then((res)=>res.json())
    .then((jsonres)=>setInternData(jsonres));
  },[]);

  const [columnDefs] = useState([
    { field: 'intern_id',
    checkboxSelection: true },
    { field: 'intern_name' },
    { field: 'intern_email' },
    { field: 'intern_phone' },
    { field: 'intern_hobbies' },

])
const [selectedData,setSelecteddat]=useState([]); 
const cellClickedListener = useCallback(
  (e) => {
    setSelecteddat(prev => [...prev,e.data]);
  },
  []
  );
  useEffect(()=>{
    props.onselect(selectedData);
  },[selectedData])
return(
    <div>
           <div className="ag-theme-alpine" style={{height: "400px",width: "66%",margin:"auto"}}>
           <AgGridReact
              rowSelection='multiple'
               rowData={internData}
               columnDefs={columnDefs}
               onRowSelected={cellClickedListener}>
           </AgGridReact>

       </div>
    </div>
)

}

export default InternData;
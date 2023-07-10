import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
const App=()=>(

<>
<div className='heading'><h1>List of Top Netflix Series</h1></div>
<div className="container">
      {Sdata.map(val=>{
        return(
            <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            links={val.links}
            />
        );
      })};
       </div>
</>
    );
export default App;
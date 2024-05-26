export function Card(props){
    const divStyle = {
        width: '400px',
        height: '400px',
        backgroundColor: '#f0f0f0',
        boxShadow: '1px 1px 5px #888888',
        borderRadius:'10px'
      };
     // {border:'2px solid black', borderRadius:10, boxShadow:10  }
    return (
        <div style={divStyle}>

        <h1 style={{paddingLeft:20, paddingTop:20, marginBottom:0, paddingBottom:0}}>{props.name}</h1> <br></br>

        <p style={{paddingLeft:20 , marginTop:0}}>{props.description}</p> <br></br>

        <h3 style={{paddingLeft:20, marginTop:0, marginBottom:0}}>Interests</h3> <br></br>

        <ul style={{marginTop:0, marginBottom:0}}>
            <li style={{margin:5}}>Ionic</li>
            <li style={{margin:5}}>Open Source</li>
            <li style={{margin:5}}>App Dev</li>
        </ul> <br></br>

        <button style={{backgroundColor:'#1877F2', margin:20, padding:20, borderRadius:'10px', color:'white'}}>LinkedIn</button>
        <button style={{backgroundColor:'#1877F2', padding:20, borderRadius:'10px', margin:20, color:'white'}}>Twitter</button>



    
        
        </div>
    )
}
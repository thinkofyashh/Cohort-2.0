export function Card(props){
    const Style = {
        divStyle:{
         width: '400px',
        height: '400px',
        backgroundColor: '#f0f0f0',
        boxShadow: '1px 1px 5px #888888',
        borderRadius:'10px'
        },
        headOne:{
            paddingLeft:20, 
            paddingTop:20, 
            marginBottom:0, 
            paddingBottom:0
        },
        Para:{
            paddingLeft:20 , 
            marginTop:0
        } ,
        headThree:{
            paddingLeft:20, 
            marginTop:0, 
            marginBottom:0
        }
            ,
        unorderedStyle:{
            marginTop:0,
             marginBottom:0
            } ,
        interestItem:{
            marginTop:0, 
            marginBottom:20
        },
        ButtonStyle:{
        backgroundColor:'#1877F2', 
        margin:20,
         padding:20, 
         borderRadius:'10px', 
         color:'white'
        }    



      };
     // {border:'2px solid black', borderRadius:10, boxShadow:10  }
    return (
        <div style={Style.divStyle}>
        <h1 style={Style.headOne}>{props.name}</h1> <br></br>
        <p style={Style.Para}>{props.description}</p> <br></br>
        <h3 style={Style.headThree}>Interests</h3> <br></br>
        <ul style={Style.interestItem}>
            {props.interests.map((interest)=>{
                return <li >{interest}</li>
            })}
        </ul> <br></br>
        <a href={props.linkedin} style={Style.ButtonStyle}>Linkedin</a>
        <a href={props.twitter} style={Style.ButtonStyle}>Twitter</a>
        </div>
    )
}


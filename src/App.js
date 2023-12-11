
import { Card,Container,Button,Row, Col} from 'react-bootstrap';
import NavBar from './NavBar';
import './App.css';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
function App() {
  const[textinput,setTextInput]= useState('');
  const [ success,setSuccess] = useState(false);
  const[operation,setOperation]= useState('');
  const [alert,setalert] = useState(false);
  const[time,settimeer] = useState('');
  var finalresult = textinput;
  console.log(textinput);
  let purifier = textinput.replace(/\s/g,"");
  let a,word =200; 
  function UpperCaser(){
    if(textinput.length>0){
  
      setTextInput(textinput.toUpperCase());
      setSuccess(true);
      setOperation("UpperCase");
      a =finalresult.length/word;
      settimeer(a);
      setTimeout(() => {   
        setSuccess(false);
        setTextInput('');
      }, 5000);
    }
    else{
      setalert(true);
      setTimeout(() => {   
        setalert(false);
      }, 1000);
    }
  }
  function LowerCaser(){
    if(textinput.length>0){
    setTextInput(textinput.toLowerCase());
    setSuccess(true);
    setOperation("LowerCase");
    a =finalresult.length/word;
    settimeer(a);
    setTimeout(() => {   
      setSuccess(false);
      setTextInput('');
    }, 4000);
  }
    else{
      setalert(true);
      setTimeout(() => {   
        setalert(false);
      }, 1000);
    }
  }
  const ClearCaser=()=>{
    if(textinput.length>0){
    setTextInput('');
    setSuccess(true);
    setOperation("ClearCase");
    setTimeout(() => {   
      setSuccess(false);
    }, 1000);
  }
    else{
      setalert(true);
      setTimeout(() => {   
        setalert(false);
      }, 1000);
    }
  }
  const RemoveDup=()=>{
    if(textinput.length>0){
    let newer = textinput.split(" ");
    let outputter =[];
    for( let i=0; i<newer.length;i++){
       var canadd=0;
       newer[i] = newer[i].replace("\n"," ");
       console.log(newer[i]);
        for(let j=0;j<outputter.length;j++){
          if(newer[i]=== outputter[j]){
              canadd=1;
              break;
          }
        }
        if(canadd===0){
          outputter.push(newer[i]);
        }
    }
    console.log(newer);
    console.log(outputter);
    let final =outputter.join(" ");
    setTextInput(final);
    setOperation("Remove Duplicate");
    a =finalresult.length/word;
    settimeer(a);
    setSuccess(true);
    setTimeout(() => {   
      setSuccess(false);
    }, 6000);
  }
    else{
      setalert(true);
      setTimeout(() => {   
        setalert(false);
      }, 1000);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
    
    <Card className='C'>
    <Row>
    <Col class="col-sm-4"><textarea type='text' className='InputBox' onChange={(e)=>{setTextInput(e.target.value);}} value={textinput} placeholder='PlayGround'></textarea></Col>
    <Col class="col-sm-8" style={{"margin":"70px"}} > <h2 style={{"color":"black"}}>Lets Play Here!!! </h2> <Button onClick={(e)=>{UpperCaser(); e.target.blur()}}> Upper Case</Button> <Button onClick={(e)=>{LowerCaser(); e.target.blur()}}> Lower Case</Button> <Button onClick={(e)=>{RemoveDup(); e.target.blur()}}> Remove Duplicate Words</Button>  <Button onClick={(e)=>{ClearCaser(); e.target.blur()}}>Clear Text</Button>  </Col>
    </Row>
    {/* <Button> Change Theme</Button> */}
    {success === false && alert ===false && <>

    <Card.Body>
    <h3 style={{"color":"black"}}>Inputted Text {textinput} <br/> Length is {purifier.length}</h3>
    </Card.Body>
    </>}
    {success === true &&
    <>
    <Alert key={'success'} variant={'success'}>
         Success !!! {operation} operation
        </Alert> 
        <Card.Body>
    <h3 style={{"color":"black"}}>Final Result {finalresult} <br/> Length is {purifier.length} </h3><br/> <h4 style={{"color":"black"}}> Time taken to read this is {time} seconds</h4>
    </Card.Body>  
    </>
    }
    {
      alert=== true &&
      <Alert key={'danger'} variant={'danger'}>
       No Text Entered! <br/> Please Enter Some Text!!
        </Alert> 

    }
    </Card>
      </header>
    </div>
  );
}

export default App;

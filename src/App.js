import './App.css';
import Typography from '@mui/material/Typography'
import  Button  from '@mui/material/Button';
 import  TextField  from '@mui/material/TextField';
 import FaceIcon from '@mui/icons-material/Face';
 import  Avatar  from '@mui/material/Avatar';
import Form from './components/Form';


function App() {
   const name="aishu";
   alert(name);
  return(
    <div className="App">
      <Typography variant='h1'>dell</Typography>
       <TextField size='small' label="Name" autoFocus placeholder='Enter your name' multiline
      />
      <Button variant='contained'>hi</Button>
      <Avatar style={{backgroundColor:"pink"}}>a</Avatar>
      <FaceIcon/>
      <Form/> 
 
        </div>
  );
}
    
export default App;

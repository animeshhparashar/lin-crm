import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function OppertunityForm() {
  const classes = useStyles();

  return (
    <div>
      <center>
      <h1>Oppertunity Details</h1>
      </center>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
       <TextField
          id="standard-full-width"
          label="Oppertunity Name"
          style={{ margin: 8, width:'45%' }}
          placeholder="Name"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />

       <TextField
          id="standard-full-width"
          label="Account Name"
          style={{ margin: 8, width:'45%' }}
          placeholder="Name"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
       <TextField
          id="standard-full-width"
          label="Opportunity Amount:"
          style={{ margin: 8, width:'45%' }}
          placeholder="Office Phone"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />  

        <TextField
          id="standard-full-width"
          label="Expected Close Date"
          style={{ margin: 8, width:'45%' }}
          placeholder=""
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />  
      </div>
        
      <div>
      <InputLabel id="demo-simple-select-helper-label"  style={{marginLeft:'8px'}} >Sales Stages: </InputLabel>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          style={{marginLeft:'8px'}}
        >
          <MenuItem value={10}>Prospecting</MenuItem>
          <MenuItem value={20}>Qualification</MenuItem>
          <MenuItem value={30}>Needs Analysis</MenuItem>
          <MenuItem value={40}>Value Proposition</MenuItem>
          <MenuItem value={50}>Closed Won</MenuItem>

        </Select>  
        <br/>
        <br/>
        <InputLabel id="demo-simple-select-helper-label"  style={{marginLeft:'8px'}} >Type: </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          style={{marginLeft:'8px'}}
        >
          <MenuItem value={10}>Existing Business</MenuItem>
          <MenuItem value={20}>New Business</MenuItem>
        </Select>
      </div>
          
      <div>
       <TextField
          id="standard-full-width"
          label="Probability(%):"
          style={{ margin: 8, width:'45%' }}
          placeholder="%"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />  

        <TextField
          id="standard-full-width"
          label="Campaign:"
          style={{ margin: 8, width:'45%' }}
          placeholder=""
        //   type=""
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />  
      </div>

      <div>
      <TextField
          id="standard-full-width"
          label="Description :"
          style={{ margin: 8, width:'91%' }}
          placeholder=""
        //   type=""
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />    
      </div>

      <div>
      <TextField
          id="standard-full-width"
          label="Assigned to :"
          style={{ margin: 8, width:'45%' }}
          placeholder=""
        //   type=""
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />    
      </div>
   
     
     
      <ButtonGroup disableElevation variant="contained" color="primary" style={{marginLeft:'5px'}}>
        <Button>Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>          
    </form>
    </div>
  );
}
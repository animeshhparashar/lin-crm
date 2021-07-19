import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Contactform() {
  const classes = useStyles();

  return (
    <div>
      <center>
      <h1>Account Details</h1>
      </center>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
       <TextField
          id="standard-full-width"
          label="Name"
          style={{ margin: 8, width:'45%' }}
          placeholder="Name"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />

       <TextField
          id="standard-full-width"
          label="Domain"
          style={{ margin: 8, width:'45%' }}
          placeholder="Domain"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
       <TextField
          id="standard-full-width"
          label="Office Phone"
          style={{ margin: 8, width:'45%' }}
          placeholder="Office Phone"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />  

        <TextField
          id="standard-full-width"
          label="Email Address"
          style={{ margin: 8, width:'45%' }}
          placeholder="example@email.com"
          type="email"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />  
      </div>
      <table style={{width:'100%'}}>
        <tr>
          <th>
          <div style={{width:'50%'}}>
          <h3 style={{textAlign:'center'}}>Billing Address</h3> 
            
            
          </div>    
          </th>
          <th>
          <div style={{width:'50%'}}>
          <h3 style={{textAlign:'center'}}>Shipping Address</h3> 
            
            
          </div>
          </th>
        </tr>

        <tr>
          <th>
          <div style={{width:'50%'}}>
          <TextField
            id="standard-full-width"
            label="Street:"
            style={{ margin: 8, width:'100%' }}
            placeholder="Street"
            // type="email"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />  
            
            
          </div>    
          </th>
          <th>
          <div style={{width:'50%'}}>
          <TextField
            id="standard-full-width"
            label="Street:"
            style={{ margin: 8, width:'100%' }}
            placeholder="Street"
            // type="email"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
           />  
            
            
          </div>
          </th>
        </tr>     

        <tr>
          <th>
          <div style={{width:'50%'}}>
          <TextField
            id="standard-full-width"
            label="City:"
            style={{ margin: 8, width:'100%' }}
            placeholder="City"
            // type="email"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />  
            
            
          </div>    
          </th>
          <th>
          <div style={{width:'50%'}}>
          <TextField
            id="standard-full-width"
            label="City:"
            style={{ margin: 8, width:'100%' }}
            placeholder="City"
            // type="email"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
           />  
            
            
          </div>
          </th>
        </tr>  

         <tr>
          <th>
          <div style={{width:'50%'}}>
          <TextField
            id="standard-full-width"
            label="State/Region:"
            style={{ margin: 8, width:'100%' }}
            placeholder="State/Region"
            // type="email"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />  
            
            
          </div>    
          </th>
          <th>
          <div style={{width:'50%'}}>
          <TextField
            id="standard-full-width"
            label="State/Region:"
            style={{ margin: 8, width:'100%' }}
            placeholder="State/Region"
            // type="email"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
           />  
            
            
          </div>
          </th>
        </tr>            

        <tr>
          <th>
          <div style={{width:'50%'}}>
          <TextField
            id="standard-full-width"
            label="Postal Code:"
            style={{ margin: 8, width:'100%' }}
            placeholder="Postal Code"
            // type="email"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />  
            
            
          </div>    
          </th>
          <th>
          <div style={{width:'50%'}}>
          <TextField
            id="standard-full-width"
            label="Postal Code:"
            style={{ margin: 8, width:'100%' }}
            placeholder="Postal Code"
            // type="email"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
           />  
            
            
          </div>
          </th>
        </tr>     

        <tr>
          <th>
          <div style={{width:'50%'}}>
          <TextField
            id="standard-full-width"
            label="Country:"
            style={{ margin: 8, width:'100%' }}
            placeholder="Country"
            // type="email"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />  
            
            
          </div>    
          </th>
          <th>
          <div style={{width:'50%'}}>
          <TextField
            id="standard-full-width"
            label="Country:"
            style={{ margin: 8, width:'100%' }}
            placeholder="Country"
            // type="email"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
           />  
            
            
          </div>
          </th>
        </tr>  

        <tr>
            <th>
              <div style={{width:'150%'}}>
              <TextField
                id="standard-full-width"
                label="Description"
                style={{ margin: 8, width:'100%' }}
                placeholder="Description"
                // type="email"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />  
              </div>
            </th>
        </tr>   

        <tr>
           <th>
              <div style={{width:'50%'}}>
              <TextField
                id="standard-full-width"
                label="Assigned to:"
                style={{ margin: 8, width:'100%' }}
                placeholder="Assigned to"
                // type="email"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />  
              </div>  
           </th>     
        </tr> 
      </table>
      <ButtonGroup disableElevation variant="contained" color="primary" style={{marginLeft:'5px'}}>
        <Button>Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>          
    </form>
    </div>
  );
}
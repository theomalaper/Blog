import '../styles/root.scss';
import NavBar from '../components/nav-bar'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const articles = ['Article 1', 'Article 2', 'Article 3']
function Root() {
  return (
    <div className="App">
      <NavBar/>
      <div className="root__header">
        <div className="root__header__left">
          <h2>Welcome to my blog</h2>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={articles}
            sx={{ width: 450 }}
            renderInput={(params) => <TextField {...params} label="Search article name" />}
          />
        </div>
        <div className="root__header__right">
          <h4>A place to share my exploration of different topics on climate change, social impact and effective altruism</h4>
        </div>
      </div>
      <div className="root__menu">
        
      </div>
    </div>
  );
}

export default Root;

import '../styles/root.scss';
import NavBar from '../components/nav-bar'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const articles = ['Article 1', 'Article 2', 'Article 3']

function Root() {
  const [tab, setTab] = React.useState('1');

  const handleTabChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <div className="root">
      <NavBar/>
      <div className="root__header">
        <div className="root__header__left">
          <p>Welcome to my blog</p>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={articles}
            sx={{ width: 450 }}
            renderInput={(params) => <TextField {...params} label="Search article name" />}
          />
        </div>
        <div className="root__header__right">
          <p>A place to share my exploration of different topics on climate change, social impact and effective altruism</p>
        </div>
      </div>
      <div className="root__menu">
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={tab}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                <Tab label="View all" value="1" />
                <Tab label="Climate change" value="2" />
                <Tab label="Sustainability" value="3" />
                <Tab label="Social impact" value="4" />
                <Tab label="Politics" value="5" />
                <Tab label="Charities" value="6" />
                <Tab label="Biographies" value="7" />
              </TabList>
            </Box>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item Four</TabPanel>
            <TabPanel value="5">Item Five</TabPanel>
            <TabPanel value="6">Item Six</TabPanel>
            <TabPanel value="7">Item Seven</TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}

export default Root;

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MyContent from './MyContent';
import MyComment from './MyComment';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#ff9800',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#ff9800',
    },
  },
});


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <ThemeProvider theme={theme}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="primary" indicatorColor="secondary">
          <Tab label="작성 글" {...a11yProps(0)} />
          <Tab label="작성 댓글" {...a11yProps(1)} />
        </Tabs>
      </ThemeProvider>
      </Box>
      <TabPanel value={value} index={0}>
        <MyContent/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MyComment/>
      </TabPanel>
    </Box>
  );
}

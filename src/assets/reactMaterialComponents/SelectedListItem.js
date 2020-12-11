import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SelectedListItem(props) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, geojson) => {
    setSelectedIndex(geojson.id);
    props.sendGeojson(geojson)
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders" style={{paddingTop: '0px'}}>
        {
          props.geoRepository.map((geojson) => {
            return (  
              <div style={{borderBottom: '1px solid black'}}>
                  <ListItem
                  key={geojson.id}
                  button
                  selected={selectedIndex === geojson.id}
                  onClick={(event) => handleListItemClick(event, geojson)}
                  >
                  <ListItemText primary={geojson.title} />
                  </ListItem>
                </div>
            )
          })
        }
      </List>
    </div>
  );
}

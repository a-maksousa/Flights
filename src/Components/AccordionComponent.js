import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

export default function AccordionComponent(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="shadow">
      {
        props.lstResult.map(
          item =>
            <ExpansionPanel expanded={expanded === 'panel1'} >
              <ExpansionPanelSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography ><img className="icon" src={item.icon} ></img></Typography>
                <Typography className="flexwidth"><span className="heading bold"> {item.time} </span><br></br><span className="secondaryHeading"> {item.airport} </span></Typography>
                <Typography className="flexwidth txtCenter"><span className="heading"> {item.duration} </span><br></br><span className="secondaryHeading"> {item.iata} </span></Typography>
                <Typography className="flexwidth"><span className="heading"> {item.flightType} </span></Typography>
                <Typography className="flexwidth txtRight"><span className="heading bold"> {item.price} </span><br></br><span className="secondaryHeading"> {item.flightPathType} </span></Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                  maximus est, id dignissim quam.
          </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
        )
      }
    </div>
  );
}
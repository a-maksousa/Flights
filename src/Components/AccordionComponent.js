import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';


export default function AccordionComponent(props) {

  return (
    <div className="shadow">
      {
        props.lstResult.map(
          item =>
            <ExpansionPanel expanded={false} >
              <ExpansionPanelSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography ><img className="icon" src={item.icon} alt={item.airport} /></Typography>
                <Typography className="flexwidth"><span className="heading bold"> {item.time} </span><br></br><span className="secondaryHeading"> {item.airport} </span></Typography>
                <Typography className="flexwidth txtCenter"><span className="heading"> {item.duration} </span><br></br><span className="secondaryHeading"> {item.iata} </span></Typography>
                <Typography className="flexwidth"><span className="heading"> {item.flightType} </span></Typography>
                <Typography className="flexwidth txtRight"><span className="heading bold"> {item.price} </span><br></br><span className="secondaryHeading"> {item.flightPathType} </span></Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>
        )
      }
    </div>
  );
}
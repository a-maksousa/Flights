import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GenericModal from "./GenericModal"
import RangeSlider from "./RangeSlider"
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 3,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

function valuetext(value) {
    return `${value}°C`;
}

export default function TimesFilterComponent(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <GenericModal btnClass="btnSubLink" modalName="Times" controls={false}>

            <div className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    centered
                >
                    <Tab label="Outbound" {...a11yProps(0)} />
                    <Tab label="Return" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Typography id="range-slider" gutterBottom>
                        <p>
                            {props.originWhereFrom} to {props.destinationWhereTo}
                        </p>
                        <FlightTakeoffIcon />
                        Departure
                    </Typography>
                    <RangeSlider />
                    <br />
                    <Typography id="range-slider" gutterBottom>
                        <FlightLandIcon />
                        Arrival
                    </Typography>
                    <RangeSlider />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Typography id="range-slider" gutterBottom>
                        <p>
                            {props.destinationWhereTo} to {props.originWhereFrom}
                        </p>
                        <FlightTakeoffIcon />
                        Departure
                    </Typography>
                    <RangeSlider />
                    <br />
                    <Typography id="range-slider" gutterBottom>
                        <FlightLandIcon />
                        Arrival
                    </Typography>
                    <RangeSlider />
                </TabPanel>
            </div>

        </GenericModal>
    );
}

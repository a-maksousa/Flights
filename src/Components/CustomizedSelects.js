import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(1),
        },
    },
    input: {
        //borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        //border: '1px solid #ced4da',
        fontSize: 16,
        //padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            backgroundColor: 'unset'
        },
    },
}))(InputBase);

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(2),
    },
}));

export default function CustomizedSelects(props) {
    const classes = useStyles();
    const [item, setItem] = React.useState('1');
    const handleChange = event => {
        if (props.onChange) {
            props.onChange(event.target.value);
        }
        setItem(event.target.value);
    };

    if (!props.items.data) {
        return (<div> </div>)
    }

    return (
        <div>
            <FormControl className={classes.margin}>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={item}
                    onChange={handleChange}
                    input={<BootstrapInput />}>
                    {
                        props.items.data.map(
                            item => <MenuItem value={item.key}>{item.value}</MenuItem>
                        )
                    }

                </Select>
            </FormControl>
        </div>
    );
}
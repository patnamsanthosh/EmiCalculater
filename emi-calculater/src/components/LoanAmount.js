import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";



const useStyles = makeStyles({
    root: {
        width: 500
    },
    input: {
        width: 250
    }
});

export default function InputSlider() {

    const followersMarks = [
        {
            value: 0,
            scaledValue: 0,
            label: "0"
        },
        {
            value: 25,
            scaledValue: 2500000,
            label: "25L"
        },
        {
            value: 50,
            scaledValue: 5000000,
            label: "50L"
        },
        {
            value: 75,
            scaledValue: 7500000,
            label: "75L"
        },
        {
            value: 100,
            scaledValue: 10000000,
            label: "100L"
        },
        {
            value: 125,
            scaledValue: 12500000,
            label: "125L"
        },
        {
            value: 150,
            scaledValue: 15000000,
            label: "150L"
        },
        {
            value: 175,
            scaledValue: 17500000,
            label: "175L"
        },
        {
            value: 200,
            scaledValue: 20000000,
            label: "200L"
        }
    ];
    const classes = useStyles();
    const [value, setValue] = React.useState(1);

    const scaleValues = (valueArray) => {
        return [scale(valueArray[0]), scale(valueArray[1])];
    };

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const scale = (value) => {
        if (value === undefined) {
            return undefined;
        }
        const previousMarkIndex = Math.floor(value / 25);
        const previousMark = followersMarks[previousMarkIndex];
        const remainder = value % 25;
        if (remainder === 0) {
            return previousMark.scaledValue;
        }
        const nextMark = followersMarks[previousMarkIndex + 1];
        const increment = (nextMark.scaledValue - previousMark.scaledValue) / 25;
        return remainder * increment + previousMark.scaledValue;
    };

    function numFormatter(num) {
        if (num > 999 && num < 1000000) {
            return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
        } else if (num >= 1000000) {
            return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
        } else if (num < 900) {
            return num; // if value < 1000, nothing to do
        }
    }



    const handleInputChange = event => {
        setValue(event.target.value === "" ? "" : Number(event.target.value));
    };

    // const currencyFormat = (num) => {
    //     if(num)
    //     return  num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    //  }

    return (
        <div className={classes.root}>
<Slider
                style={{ maxWidth: 1000 }}
                value={value}
                min={0}
                step={1}
                max={200}
                valueLabelFormat={numFormatter}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
                marks={followersMarks}
                scale={scaleValues}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
            />

            <FormControl fullWidth className={classes.margin}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>$</Grid>
                    <Grid item>
                        <Input
                            className={classes.input}
                            value={scale(value)}
                            onChange={handleInputChange}
                            startAdornment={
                                <InputAdornment position="start">A</InputAdornment>
                            }
                            style={{ display: "inline-block" }}
                        />
                    </Grid>
                </Grid>
            </FormControl>
            
        </div>
    );
}
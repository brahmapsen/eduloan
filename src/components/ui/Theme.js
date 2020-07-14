import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"
const arcWhite = "#FFFFFF"

export default  createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
            white: arcWhite
        },
        primary: {
            main: arcWhite
        },
        secondary: {
            main: `${arcOrange}`
        },
        typography: {
            tab: {
                fontFamily: "Raleway",
                textTransform: "none",
                fontWeight: 700,
                fontSize: "1rem" 
            },
            estimate: {
                fontFamily: "Pacifico",
                fontSize: "1rem",
                textTransform: "none",
                color: "white"
            }
        }
    }
});
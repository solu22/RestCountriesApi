import { Button, Card, CardContent, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory, useParams } from 'react-router'
import useCountry from '../custom-hook/useCountry'
//import { Country } from '../types'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: 90,
            textAlign: 'center',
            width: '30%',
            minWidth: 345,
        },
       
        button: {
            marginTop: '20',
            marginLeft: '250',
        },

    })
)
type Params = {
    countryName: string
}

const SingleCountryPage = () => {
    const classes = useStyles()
    const history = useHistory()
    const { countryName } = useParams<Params>()

    const [countries] = useCountry()

    const details = countries.find((country: any) => country.name.toLowerCase() === countryName.toLowerCase())
    return (
        <>
            {details && (
                <>
                    <Grid container justifyContent="center">

                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h4" component="h2">
                                    {details.name}
                                </Typography><br></br>
                                <img src = {details.flag} style = {{width: '150px'}} alt = "flags"/>


                                <Typography variant="body2" color="textSecondary" component="p">
                                    Other Name: {details.nativeName}
                                </Typography><br></br>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Borders: {details.borders.join(",")}
                                </Typography><br></br>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Languages: {details.languages.map((lang: { name: string }) => lang.name).join(",")}
                                </Typography>
                                <br></br>
                                <Button
                                    variant="contained"
                                    onClick={() => history.push('/')}
                                    color="primary"
                                    className={classes.button}
                                >Back</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </>
            )}
        </>
    )



}

export default SingleCountryPage
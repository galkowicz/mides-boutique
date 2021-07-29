import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import meatBackground from '../../assets/meat-background.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#fff',
    [theme.breakpoints.down('xs')]: {
      overflow: 'hidden',
    },
  },
  text: {
    backgroundColor: '#fff',
    [theme.breakpoints.down('xs')]: {
      minHeight: 'unset',
    },
  },
  image: {
    display: 'flex',
  },
  title: {
    fontFamily: ['Heebo', 'sans-serif'].join(','),
    color: '#0000008a',
    fontWeight: 600,
  },
  subtitle1: {
    fontFamily: ['Heebo', 'sans-serif'].join(','),
    padding: '2rem',
  },
  subtitle2: {
    fontFamily: ['Heebo', 'sans-serif'].join(','),
    padding: '.5rem',
    color: '#e0dfde',
    backgroundColor: '#3c1d0e',
    fontWeight: 600,
    width: '15rem',
    margin: 'auto',
  },
}))

export default function LandingPage() {
  const classes = useStyles()

  return (
    <Grid
      container
      component="main"
      alignItems="center"
      justifyContent="center"
      className={classes.root}
    >
      <CssBaseline />
      <Grid
        className={classes.text}
        item
      >
        <Typography className={classes.title} variant="h2" align="center">
          מידס בוטיק
        </Typography>
        <Typography className={classes.subtitle1} variant="h4" align="center">
          חוויה קולינרית ברזילאית לכם ולאוהבים שלכם
        </Typography>
        <Typography className={classes.subtitle2} variant="h5" align="center">
          הפתיחה בקרוב
        </Typography>
      </Grid>
      <Grid
        className={classes.image}
        item
      >
        <picture>
          <source srcSet={meatBackground} />
          <img src="/media/cc0-images/painted-hand-298-332.jpg" alt="meat background" />
        </picture>
      </Grid>
    </Grid>
  )
}

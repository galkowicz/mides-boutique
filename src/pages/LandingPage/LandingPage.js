import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import InstagramIcon from '@material-ui/icons/Instagram'
import { makeStyles } from '@material-ui/core/styles'
import meatBackground from '../../assets/meat-background.jpeg'
import midesLogo from '../../assets/midesLogo.png'

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
  content: {
    backgroundColor: '#fff',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    padding: '0 2rem',
    backgroundColor: '#fff',
    [theme.breakpoints.up('xs')]: {
      position: 'fixed',
      bottom: '0',
      backgroundColor: 'transparent',
    },
  },
  logoContainer: {
    width: '5rem',
  },
  logo: {
    maxWidth: '100%',
    height: 'auto',
  },
  link: {
    color: '#e96b1e',
  },
  phoneNumber: {
    fontFamily: ['Heebo', 'sans-serif'].join(','),
    padding: '.5rem',
    fontSize: '1rem',
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
        container
        alignItems="center"
        justifyContent="center"
        className={classes.content}
      >
        <Grid className={classes.text} item>
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
        <Grid className={classes.image} item>
          <picture>
            <source srcSet={meatBackground} />
            <img alt="meat background" />
          </picture>
        </Grid>
      </Grid>
      <Grid className={classes.footer}>
        <picture className={classes.logoContainer}>
          <source srcSet={midesLogo} />
          <img className={classes.logo} alt="mides logo" />
        </picture>
        <Typography className={classes.phoneNumber} variant="h4" align="center">
          <Link href="tel:+0546744197">
            0546744197
          </Link>
        </Typography>
        <Link
          className={classes.link}
          href="https://www.instagram.com/mides_brazilian_restaurant"
          target="_blank"
        >
          <InstagramIcon className={classes.instagram} aria-label="delete" />
        </Link>
      </Grid>
    </Grid>
  )
}

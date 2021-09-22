import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { getAllCites } from '../../Api/Api'
import { GlobalContext } from '../../context/GlobalContext'
import FilterResults from 'react-filter-search'
import { Link } from 'react-router-dom'
import Loadingstate from '../Loadingstate'
import useAnimation from '../../Animations';


export default function Cities() {
  const [cities, setCitites] = useState(null)
  const {searchTerm} = useContext(GlobalContext)
  const [BackInDown, BackInUp] = useAnimation();
  const {user} = useContext(GlobalContext);
  const stored = localStorage.getItem('user')


  if(stored) {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function(event) {
      window.history.go(1);
    };
  }





  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCites()
      setCitites(data)
    }

    fetchData()
  }, [])

  return (
    <main ref={BackInDown().ref}>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 2,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Cities
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            color="primary"
          >
            Select your desired city to find locations and other informations.
          </Typography>
        </Container>
      </Box>

      {cities ? (
        <Container maxWidth="md">
          {/* End hero unit */}
          <Grid container>
            <FilterResults
              value={searchTerm}
              data={cities.data}
              renderResults={(results) => (
                <Grid container spacing={4}>
                  {results.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                        elevation={2}
                      >
                        <CardMedia
                          component="img"
                          image="https://source.unsplash.com/random"
                          alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            color="primary"
                          >
                            {item.name}
                          </Typography>
                          <Typography>code:{item.code}</Typography>
                          <Typography>Click view to find more about locations</Typography>
                        </CardContent>
                        <CardActions>
                        <Button
                              className="link2"
                              variant="text"
                              size="small"
                              href = {`/cityDetail/${item.id}`}
                            >
                              View
                            </Button>
                            <Button
                              className="link2"
                              variant="text"
                              size="small"
                            >
                              Edit
                            </Button>
                          
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}
            />
          </Grid>
        </Container>
      ) : (
        <Loadingstate />
      )}
    </main>
  )
}

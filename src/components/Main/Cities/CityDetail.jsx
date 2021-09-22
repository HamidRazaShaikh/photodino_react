import { useParams } from 'react-router-dom'
import { getCityDetail } from '../../Api/Api'
import { getLocationDetail } from '../../Api/Api'
import React, { useState, useEffect, useContext } from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'
import { useHistory } from 'react-router-dom'
import FilterResults from 'react-filter-search'
import { Link } from 'react-router-dom'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Loadingstate from '../Loadingstate';
import { GlobalContext } from '../../context/GlobalContext';


export default function CityDetail() {
  const [cityDetail, setCityDetail] = useState([])
  const [locationDetail, setLocationDetail] = useState([])
  const [loading, setLoading] = useState(false)
  const {searchTerm} = useContext(GlobalContext);
  const { toggleLocationDialoge } = useContext(GlobalContext);

  const { id } = useParams()

  // fetching data

  useEffect(() => {
    setLoading(true)

    const fetchData = async () => {
      const data = await getCityDetail(id)
      setCityDetail(data)
      if (
        data?.locations?.length > 0 &&
        locationDetail?.length !== data?.locations?.length
      ) {
        data.locations.forEach(async (item) => {
          const locationDetail = await getLocationDetail(item)
          setLocationDetail((array) => [...array, locationDetail])
        })
      }
      setLoading(false)
    }

    fetchData()
  }, []);


  // toggle locationDialogue

  const ViewDetail = (id) =>{

     toggleLocationDialoge({id : id, open : true})
  }

  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 2,
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            City Details
          </Typography>

          <Grid item style={{ marginTop: 20 }}>
            <Typography variant="h5" component="h5" color="primary">
              General information
            </Typography>
            <Divider />
            <Stack spacing={1} style={{ marginTop: 20 }}>
              <Typography>Name : {cityDetail?.name}</Typography>
              <Typography>id : {cityDetail?.id}</Typography>
              <Typography>code : {cityDetail?.code}</Typography>
            </Stack>
          </Grid>

          <Grid item style={{ marginTop: 20 }}>
            <Typography variant="h5" component="h5" color="primary">
              Locations
            </Typography>
            <Divider />

            <Typography variant="h6" component="h5" py={2}>
              Total locations in this city : {locationDetail?.length}
            </Typography>

            {!loading ? (
              <FilterResults
                value={searchTerm}
                data={locationDetail}
                renderResults={(results) => (
                  <Grid container spacing={4} py={2}>
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
                        
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            color="primary"
                          >
                            {item?.data?.name}
                          </Typography>
                          <CardMedia
                          component="img"
                          image="https://source.unsplash.com/random"
                          alt="random"
                        />
                          <Typography py = {2}>Status :{item?.data?.status}</Typography>
                          <Typography>Click view to find locations</Typography>
                        </CardContent>
                        <CardActions>
                          <p
                            // to={`/cityDetail/${item.id}`}
                            className="link2"
                            onClick = {(e)=>ViewDetail(item?.data?.id)}


                          >
                            Details
                          </p>
                          <Link className="link2">
                            Edit
                          </Link>
                        </CardActions>
                      </Card>
                      </Grid>
                    ))}
                  </Grid>
                )}
              />
            ) : (
              <Loadingstate />
            )}
          </Grid>
        </Container>
      </Box>
    </main>
  )
}

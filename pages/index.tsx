


import type { NextPage } from 'next'

import { Card, CardContent, CardHeader, Grid } from '@mui/material'

import { Layout } from '../components/layouts'
import { EntryList, NewEntry } from '../components/ui'


const HomePage: NextPage = () => {
  return (
    <Layout>
      <Grid container spacing ={2}>
        <Grid item xs={12} sm={4}  >
          <Card sx = {{height :'calc(100vh - 100px)'}}>
            <CardHeader title= 'Pendientes' />
              <NewEntry></NewEntry>
              <EntryList status='pending' ></EntryList>
              
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}  >
          <Card sx = {{height :'calc(100vh - 100px)'}}>
            <CardHeader title= 'En Progreso'/>
            <EntryList status='in-progress' ></EntryList>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}  >
          <Card sx = {{height :'calc(100vh - 100px)'}}>
            <CardHeader title= 'Terminadas'/>
            <EntryList status='finished' ></EntryList>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage

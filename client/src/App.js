import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import memories from './images/memories.png'

const App = () => {
    return (
        <Container maxidth='lg'>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>
                    Memories
                </Typography>
                <img src={memories} alt='memories' height='600' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid iteam xs={12} sm={7}>
                            {/* <Posts /> */}
                        </Grid>
                        <Grid iteam xs={12} sm={4}>
                            {/* <Form /> */}
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
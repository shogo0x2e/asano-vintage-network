// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import { BottomNavigation,  BottomNavigationAction} from '@mui/material'
// import RestoreIcon from '@mui/icons-material/Restore';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArchiveIcon from '@mui/icons-material/Archive'
import Paper from '@mui/material/Paper';
import DrawerAppBar from '@/components/DrawerAppBar';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const [value, setValue] = React.useState(0);

  return (
    <main className="">

      <DrawerAppBar />

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>

      {/* <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation> */}
      
    </main>
  )
}

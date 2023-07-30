import React, { useState } from 'react'

import NewFoodEntryDialog from './NewFoodEntryDialog'
import { HeaderWithAction } from '../components/HeaderWithAction'

const Home = () => {
  const [newDialogOpen, setNewDialogOpen] = useState<boolean>(false)

  return (
    <>
      <HeaderWithAction text="Home" onClick={() => setNewDialogOpen(true)} />
      {newDialogOpen && (
        <NewFoodEntryDialog open={newDialogOpen} onClose={setNewDialogOpen} />
      )}
    </>
  )
}

export default Home

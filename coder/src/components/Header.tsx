'use client'

import React, { use } from 'react'
import { ModeToggle } from './ModeToggle'
import { signOut, signIn, useSession } from 'next-auth/react'
import { Button } from './ui/button'


function Header() {

  const session = useSession()


  console.log('session', session.data)
  return (
    <div className='p-3 flex items-center justify-between'>

      <div>
<ModeToggle />
      </div>
      <div>
        
      </div>
      <div>
        {session.data ? (
          <Button variant="ghost" type="submit" onClick={() => signOut()}>Sign Out</Button>
        ) :(
          <Button variant="ghost" type="submit" onClick={() => signIn()}> Sign In</Button>
        )  
      }
      </div>
        
        

        
        
    </div>
  )
}

export default Header
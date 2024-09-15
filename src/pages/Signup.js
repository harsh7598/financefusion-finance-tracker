import React from 'react'
import Header from '../components/Header'
import SignUpSingInComponent from '../components/SignupSignin'

function Signup() {
  return (
    <div>
    <Header />
    <div className='wrapper'>
      <SignUpSingInComponent />
    </div>
    </div>

  )
}

export default Signup
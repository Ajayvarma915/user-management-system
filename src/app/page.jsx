import Login from '../common/Login'
import React from 'react'
// import AddUsersToFireStore  from '../app/firebase'

const page = () => {
  return (
    <>
      <main className="flex h-screen justify-center items-center bg-[url('/images/background_image.jpg')] bg-no-repeat bg-cover bg-center">
        <Login/>
    </main>
    {/* <AddUsersToFireStore/> */}
    </>
  )
}

export default page

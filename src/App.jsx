//jsx is html in the form of a programming language
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import React from 'react'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import JobPage, {jobLoader} from './pages/JobPage'
import NotFoundPage from './pages/NotFoundPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'


const App = () => {

  const addJob = async (newJob) => {
    const res= await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newJob),
    })
    return
  } 

  const deleteJob = async (id) => {
      const res= await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
      })
      return
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage/>} />
      <Route path='/jobs' element={<JobsPage/>} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
      <Route path='/edit-job/:id' element={<EditJobPage/>} loader={jobLoader}/>
      <Route path='*' element={<NotFoundPage />} />
    </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App

/* 
only one element can be passed in div or just angular brackets called fragment

variables in {}, loops, lists using arrays using map(value using key and id), condiationals on diff returns or inside return as ternary

<p style={{color: 'red, fontSize: '24 px'}}>
OR <p style={styles}>
where,  const styles={
color: 'red',
fontSize: '55 px'} is above return

const names= ['Disha', 'Mayukh'];
<ul>
{names.map((name,index) => (
   <li key={index}>{name}</li>
  ))}
   </ul>
*/ 
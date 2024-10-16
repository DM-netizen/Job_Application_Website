import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const JobPage = () => {
    const {id} = useParams()
    const [job, setJob] = useState(null)
    const [loading, setLoading] =useState(true)
  
    useEffect( () =>  {
        const fetchJobs = async () => {
          try {
            const res =  await fetch(`/api/jobs/${id}`)
            const data= await res.json();
            setJob(data);
          }
          catch (error){
            console.log('Error fetching', error)
          }
          finally{
            setLoading(false)
          }
        }
        fetchJobs()
      }, [])

      return loading ? <h1>Loading...</h1> : <h1>{job.title}</h1>
}



export default JobPage
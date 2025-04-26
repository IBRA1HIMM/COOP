// src/pages/Dashboard.jsx
import { useEffect, useState } from 'react'


export default function Dashboard() {
  const [data, setData] = useState(null)
  // const location = useLocation()
  // const role = new URLSearchParams(location.search).get('role')

  useEffect(() => {
    const token = sessionStorage.getItem('token')    
//get the data for the verified token
    fetch('http://localhost:5000/api/dashboard', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(setData)
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome, {data?.role || "Stranger" }</h1>
      {data ? (
        <pre className="mt-4 bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

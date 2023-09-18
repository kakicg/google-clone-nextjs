import Link from 'next/link'
import React from 'react'

export default async function WebSearchPage({searchParams}) {
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}}`)
  if(!response.ok) throw new Error("Something went wrong")
  const data = await response.json()
  const results = data.items
  if(!results) {
    return <div className='flex flex-col justify-center items-center pt-10'>
      <h1 className='text-3xl py-4'>No results found</h1>
      <p className='text-lg'>
        Try different keywords or go back to the homepage.
  
      </p>
      <Link className='text-blue-500' href="/">HOME</Link>
    </div>
  }
  return (
    <>
      {results.map(result => <h1>{result.title}</h1>) }
    </>
  )
}

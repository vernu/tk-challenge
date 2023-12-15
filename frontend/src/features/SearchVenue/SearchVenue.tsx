import { useState, useEffect } from 'react'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { venueApi } from '@/api/venueApi'
import SearchIcon from '@/components/icons/SearchIcon'

export default function SearchVenue() {
  const [formData, setFormData] = useState({
    search: '',
    date: '',
    location: '',
  })
  const [suggestions, setSuggestions] = useState<string[]>([])

  useEffect(() => {
    if (formData.search) {
      venueApi.getVenues({ q: formData.search }).then((res) => {
        setSuggestions(
          res.data.map((venue: any) => `${venue.name} - ${venue.type}`)
        )
      })
    }
  }, [formData.search])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className='p-2'>
      <div className='flex justify-center'>
        <h1 className='text-4xl font-bold'>
          Book Your Dream Venue Today: Find, Reserve, and Play with Ease!
        </h1>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        <Input
          name='search'
          value={formData.search}
          onChange={handleChange}
          suggestions={suggestions}
          placeholder='Venue Type'
          roundedTopLeft
          iconLeft={<SearchIcon />}
        />
        <Input
          name='date'
          value={formData.date}
          onChange={handleChange}
          placeholder='Date'
        />

        <Input
          name='location'
          value={formData.location}
          onChange={handleChange}
          placeholder='Location'
          roundedBottonRight
        />

        <Button>Search</Button>
      </div>
    </div>
  )
}

import httpClient from '@/lib/httpClient'

class VenueApi {
  async getVenues(params: { [key: string]: string }) {
    const response = await httpClient.get('/venues', { params })
    return response.data
  }
}

export const venueApi = new VenueApi()

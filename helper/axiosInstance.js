import axios from 'axios'
import https from 'https'

// Check if running on the server or client
const isServer = typeof window === 'undefined'

const axiosInstance = axios.create({
  baseURL: isServer ? 'https://mathmozocms.test/api/v1' : '/api', // Use full URL for server-side requests
  withCredentials: true, // This allows sending cookies or credentials
  headers: {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'multipart/form-data'
  },
  httpsAgent: new https.Agent({ rejectUnauthorized: false })
})

export default axiosInstance

const agent = new https.Agent({
  rejectUnauthorized: false
})

// Helper method to fetch product data
export async function fetchMetaData (apiEndPointUrl) {
  try {
    const response = await fetch(apiEndPointUrl)

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`)
    }

    const data = await response.json()
    return data?.data
  } catch (error) {
    console.error('Error fetching product data:', error)
    throw error
  }
}

export function generateMetadataHelper (data) {
  return {
    metadataBase: new URL("https://mathmozo.com"), // Change this to your actual domain
    title:
      data?.meta_title ||
      'Mathmozo IT - Top rated software company in Bangladesh',
    description:
      data?.meta_description ||
      'Mathmozo IT - Top rated software company in Bangladesh',
    keyword:
      data?.meta_keyword ||
      'Softwares, Top Rated Software Company in Bangladesh',
    openGraph: {
      title:
        data?.meta_title ||
        'Mathmozo IT - Top rated software company in Bangladesh',
      description:
        data?.meta_description ||
        'Mathmozo IT - Top rated software company in Bangladesh',
      images: [
        {
          url: data?.featured_image || '/default-image.jpg',
          width: 1200,
          height: 630,
          alt: data?.name || 'Default Image Alt'
        }
      ]
    }
  }
}

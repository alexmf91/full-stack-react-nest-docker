export async function client(endpoint: string, customConfig = {}) {
  const config = {
    ...customConfig,
    headers: { 'Content-Type': 'application/json' }
  }
  let data: unknown
  try {
    const response = await window.fetch(endpoint, config)
    data = await response.json()

    return data
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error.message ? error.message : data)
    }
    return 'Unexpected error'
  }
}

client.get = (endpoint: string) => client(endpoint, { method: 'GET' })

export async function client(endpoint: string, customConfig = {}) {
  const config = {
    ...customConfig,
    headers: { 'Content-Type': 'application/json' }
  }
  let data
  try {
    const response = await window.fetch(endpoint, config)
    data = await response.json()

    return data
  } catch (error: any) {
    return Promise.reject(error.message ? error.message : data)
  }
}

client.get = function (endpoint: string) {
  return client(endpoint, { method: 'GET' })
}

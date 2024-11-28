import https from 'https'

export const requestOptions = {
  headers: {
    Authorization: `PVEAPIToken=${process.env.PROXMOX_API_TOKEN}=${process.env.PROXMOX_API_SECRET}`,
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
}

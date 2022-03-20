import https from 'https'

export default function ({
  $axios
}) {
  const agent = new https.Agent({
    rejectUnauthorized: true,
    cert: '~/localhost.crt.pem',
    key: '~/localhost.key'
  })
  $axios.onRequest((config) => {
    config.httpsAgent = agent
  })
}

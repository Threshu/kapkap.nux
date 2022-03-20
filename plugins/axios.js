import https from 'https'

export default function ({
  $axios
}) {
  const agent = new https.Agent({
    rejectUnauthorized: true,
    cert: '~/localhost.crt',
    key: '~/localhost.key'
  })
  $axios.onRequest((config) => {
    config.httpsAgent = agent
  })
}

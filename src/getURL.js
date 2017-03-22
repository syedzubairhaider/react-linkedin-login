export default function ({clientId, state, scope, redirectUri}) {
  const current = encodeURIComponent(redirectUri)
  const base = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&'
  const fullScope = scope && scope.length ? `&scope=${encodeURIComponent(scope.join(' '))}` : ''
  return `${base}client_id=${clientId}&redirect_uri=${current}&state=${state}${fullScope}`
}

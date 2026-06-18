import http from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = path.join(root, 'dist')
const port = Number(process.env.PORT || 4175)

const types = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml; charset=utf-8']
])

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0])
  const requested = decoded === '/' ? '/index.html' : decoded
  const resolved = path.join(publicDir, requested)
  if (!resolved.startsWith(publicDir)) return null
  return resolved
}

const server = http.createServer(async (request, response) => {
  const filePath = safePath(request.url || '/')
  if (!filePath) {
    response.writeHead(403)
    response.end('Forbidden')
    return
  }

  const info = await stat(filePath).catch(() => null)
  if (!info?.isFile()) {
    response.writeHead(404)
    response.end('Not found')
    return
  }

  const body = await readFile(filePath)
  response.writeHead(200, {
    'content-type': types.get(path.extname(filePath)) || 'application/octet-stream',
    'cache-control': 'no-store'
  })
  response.end(body)
})

server.listen(port, '127.0.0.1', () => {
  console.log(`Octopus 八爪鱼 landing page: http://127.0.0.1:${port}`)
})

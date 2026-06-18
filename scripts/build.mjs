import { cp, mkdir, rm, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const sourceDir = path.join(root, 'src')
const distDir = path.join(root, 'dist')

async function ensureInput() {
  const source = await stat(sourceDir).catch(() => null)
  if (!source?.isDirectory()) {
    throw new Error(`missing source directory: ${sourceDir}`)
  }
}

await ensureInput()
await rm(distDir, { recursive: true, force: true })
await mkdir(distDir, { recursive: true })
await cp(sourceDir, distDir, { recursive: true })

console.log(`Built Octopus 八爪鱼 landing page to ${distDir}`)

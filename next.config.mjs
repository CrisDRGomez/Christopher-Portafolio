/** @type {import('next').NextConfig} */

// Cuando se despliega en GitHub Pages con un repo de proyecto
// (ej. crisdrgomez.github.io/portfolio), Next.js necesita saber
// el subdirectorio base. Lo leemos del nombre del repo en CI.
const repoName = process.env.REPO_NAME ?? ''
const isSubdir = repoName && !repoName.endsWith('.github.io')

const basePath = isSubdir ? `/${repoName}` : ''

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig

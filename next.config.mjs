/** @type {import('next').NextConfig} */

// Cuando se despliega en GitHub Pages con un repo de proyecto
// (ej. crisdrgomez.github.io/portfolio), Next.js necesita saber
// el subdirectorio base. Lo leemos del nombre del repo en CI.
const repoName = process.env.REPO_NAME ?? ''
const isSubdir = repoName && !repoName.endsWith('.github.io')

const nextConfig = {
  output: 'export',
  basePath:    isSubdir ? `/${repoName}` : '',
  assetPrefix: isSubdir ? `/${repoName}/` : '',
  images: { unoptimized: true },
}

export default nextConfig

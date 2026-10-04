# Cloudflare migration: purani OG image files delete (project root se chalao)
Remove-Item -Force "app/opengraph-image.tsx","app/[slug]/opengraph-image.tsx","app/about/opengraph-image.tsx","app/contact/opengraph-image.tsx","app/services/opengraph-image.tsx","app/tools/opengraph-image.tsx","app/work/opengraph-image.tsx" -ErrorAction SilentlyContinue
Write-Host "Done"

# Render Build Script
# This script is used by Render to build your Next.js application

echo "Installing dependencies..."
npm install

echo "Building Next.js application..."
npm run build

echo "Build completed successfully!"

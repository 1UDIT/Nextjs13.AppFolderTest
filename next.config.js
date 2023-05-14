/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["mongoose"],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'Style')],
    },
    env: {
        MONGODB_URI: "mongodb+srv://admin:UDIT@cluster0.bckpbe5.mongodb.net/?retryWrites=true&w=majority",
    }
}
module.exports = nextConfig

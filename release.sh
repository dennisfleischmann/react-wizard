mkdir -p packages/heid/release-v1/next-release/img && cp -r build/libs/wizard/img/ packages/heid/release-v1/next-release/img
cp -r build/libs/wizard/svg/ packages/heid/release-v1/next-release/svg
cp -r build/static/css/ packages/heid/release-v1/next-release/css
cp -r build/static/js/ packages/heid/release-v1/next-release/js

#get version

#Compress
cd ./packages/heid/release-v1/next-release/
zip -r -X release-v1.0.1.zip ./

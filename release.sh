mkdir -p packages/heid/release/next-release/img && cp -r build/libs/wizard/img/ packages/heid/release/next-release/img
cp -r build/libs/wizard/svg/ packages/heid/release/next-release/svg
cp -r build/static/css/ packages/heid/release/next-release/css
cp -r build/static/js/ packages/heid/release/next-release/js

#get version
VERSION='';
re="\"(version)\": \"([^\"]*)\"";

while read -r l; do
    if [[ $l =~ $re ]]; then
        value="${BASH_REMATCH[2]}";
        VERSION="$value";
    fi
done < package.json;

echo $VERSION;

#Compress
cd ./packages/heid/release/next-release/
zip -r -X release-v$VERSION.zip ./
cd ..
cd ..
cd ..
cd ..
cp -r packages/heid/release/next-release/release-v$VERSION.zip packages/heid/release/
rm -r packages/heid/release/next-release/


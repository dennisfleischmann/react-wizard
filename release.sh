#Creates a new deployable package with all artifacts with the version specified in the package.json
mkdir -p packages/"$1"/release/next-release/img && cp -r build/libs/wizard/img/ packages/"$1"/release/next-release/img
cp -r build/libs/wizard/svg/ packages/"$1"/release/next-release/svg
cp -r build/static/css/ packages/"$1"/release/next-release/css
cp -r build/static/js/ packages/"$1"/release/next-release/js

#get version from package.json
VERSION='';
re="\"(version)\": \"([^\"]*)\"";

while read -r l; do
    if [[ $l =~ $re ]]; then
        value="${BASH_REMATCH[2]}";
        VERSION="$value";
    fi
done < ./src/apps/"$1"/manifest.json;

echo $VERSION;


#Compress and copy to release folder
cd ./packages/"$1"/release/next-release/
zip -r -X release-v$VERSION.zip ./
cd ..
cd ..
cd ..
cd ..
cp -r packages/"$1"/release/next-release/release-v$VERSION.zip packages/"$1"/release/
rm -r packages/"$1"/release/next-release/


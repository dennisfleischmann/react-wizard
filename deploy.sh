#Cleanup
rm -r src/apps/"$1"/firebase/

#Creates a new deployable package with all artifacts with the version specified in the package.json
mkdir -p src/apps/"$1"/firebase/images && cp -r build/libs/wizard/img/ src/apps/"$1"/firebase/images
mkdir -p src/apps/"$1"/firebase/img && cp -r build/libs/wizard/img/ src/apps/"$1"/firebase/img
cp -r build/libs/wizard/svg/ src/apps/"$1"/firebase/svg
cp -r build/static/ src/apps/"$1"/firebase/static
cp build/index.html src/apps/"$1"/firebase/index.html

#Deploy
cd ./src/apps/"$1"/firebase/
firebase deploy
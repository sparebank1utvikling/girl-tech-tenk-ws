#!/usr/bin/env bash

echo -e "Lager pakke for CodeSandbox"

 npm run build;

read -e -p "Angi hvor du vil lage leveransemappe (default: dist/TENK):  " -i "dist/TENK" LEVERANSE_DIR
echo -e "Alle filer blir lagt i $LEVERANSE_DIR"
echo
read -p "Vil du slette gammelt innhold i mappen? (y/N) " REPLY

if [[ $REPLY =~ ^[Yy]$ ]]
then
    # Slett katalogen dersom den finnes
    if [ -d "$LEVERANSE_DIR" ]; then
        rm -rf "$LEVERANSE_DIR"
    fi
fi

mkdir -p "$LEVERANSE_DIR"

echo -e "Kopierer filer til leveransemappen..."

cp -r index.html $LEVERANSE_DIR
cp -r package.json $LEVERANSE_DIR
cp -r vite.config.js $LEVERANSE_DIR
cp -r dist/style.css $LEVERANSE_DIR
cp -r nyttige-lenker.md $LEVERANSE_DIR
cp -r src $LEVERANSE_DIR/src

echo -e "Ferdig!"
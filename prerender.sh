TITLE=$(node -e 'console.log(require("./stats.js").title())')
DESC=$(node -e 'console.log(require("./stats.js").description())')

echo "Title: $TITLE"
echo "Description: $DESC"

sed -ri .bak "s/property=\"og:title\" content=\".*\"/property=\"og:title\" content=\"$TITLE\"/" index.html
sed -ri .bak "s/property=\"og:description\" content=\".*\"/property=\"og:description\" content=\"$DESC\"/" index.html

# TODO: Rendering of image
# 
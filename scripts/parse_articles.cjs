const fs = require('fs');

const xml = fs.readFileSync('public/assets/aistudio/productoshgwpanam.WordPress.2026-11-10_d9f662d8.xml', 'utf8');
const items = xml.split('<item>').slice(1);

const articles = [];

for (const item of items) {
  const typeMatch = item.match(/<wp:post_type><!\[CDATA\[(.*?)\]\]><\/wp:post_type>/);
  const statusMatch = item.match(/<wp:status><!\[CDATA\[(.*?)\]\]><\/wp:status>/);
  if (typeMatch && typeMatch[1] === 'post' && statusMatch && statusMatch[1] === 'publish') {
    const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || item.match(/<title>(.*?)<\/title>/);
    const slugMatch = item.match(/<wp:post_name><!\[CDATA\[(.*?)\]\]><\/wp:post_name>/);
    const dateMatch = item.match(/<wp:post_date><!\[CDATA\[(.*?)\]\]><\/wp:post_date>/);
    const contentMatch = item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
    
    const title = titleMatch ? titleMatch[1] : '';
    const slug = slugMatch ? slugMatch[1] : '';
    const date = dateMatch ? dateMatch[1].split(' ')[0] : '2026-10-28';
    const content = contentMatch ? contentMatch[1] : '';

    articles.push({
      title,
      slug,
      date,
      content
    });
  }
}

fs.writeFileSync('src/data/parsed_articles.json', JSON.stringify(articles, null, 2));
console.log('Saved', articles.length, 'articles to src/data/parsed_articles.json');

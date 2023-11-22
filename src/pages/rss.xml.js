import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const blog = await getCollection('blog')
  return rss({
    stylesheet: '/rss/styles.xsl',
    title: 'DevOpSick Блог',
    description:
      'Корисна інформація для розробників та людей які працюють у сфері IT',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      author: post.data.author,
      link: `/blog/${post.slug}/`,
    })),
  })
}

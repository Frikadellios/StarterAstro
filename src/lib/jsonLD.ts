import { type CollectionEntry } from 'astro:content'

// Function to create a JsonLd acording to the type
export default function jsonLDGenerator({
  type,
  post,
}: {
  type: string
  post: CollectionEntry<'blog'>
  url: URL
}) {
  if (type === 'post') {
    return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": ${post.data.excerpt},
  "image": ${post.data.image.src},  
  "author": {
    "@type": "Person",
    "name": ${post.data.author}
  },  
  "publisher": {
    "@type": "Organization",
    "name": "DevOpSick",
    "logo": {
      "@type": "ImageObject",
      "url": "#"
    }
  },
  "datePublished": ${post.data.date}
}
</script>`
  }
  return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "StarterTemplate",
        "name": "DevOpSick",
        "image": "/og-image.png",
        "@id": "",
        "url": "https://www.devopsick.com",
        "telephone": "+380964630524",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bezvirnitskaya",
          "addressLocality": "Poltava town",
          "postalCode": "36015",
          "addressCountry": "Ukraine"
        }  
      }
      </script>`
}

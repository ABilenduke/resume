export const generateHeaders = (title, description, image, url) => {
  const CDN = 'https://cdn.andrewbilenduke.com/'
  return {
    title,
    meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: title,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: description,
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: `${CDN}${image}`,
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: url,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `${CDN}${image}`,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
  }
}

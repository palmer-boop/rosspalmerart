export const site = {
  name: 'Ross Palmer Art',
  artist: 'Ross Palmer',
  email: 'rosspalmer53@gmail.com',
  location: 'Glanmire, Cork, Ireland',
  description:
    'Paintings by Ross Palmer recording memories of a life lived in Zimbabwe and Ireland, mostly in acrylics on canvas.',
};

export const collections = {
  irish: {
    slug: 'irish-art',
    name: 'Irish Art',
    blurb: 'Cork landscapes, coast and heritage, including the Glanmire Series.',
    cover: 'the-brook-inn-glanmire',
  },
  african: {
    slug: 'african-art',
    name: 'African Art',
    blurb: 'People, villages and wildlife of Zimbabwe.',
    cover: 'rural-village-in-eastern-zimbabwe',
  },
} as const;

export type CollectionKey = keyof typeof collections;

export function enquiryLink(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

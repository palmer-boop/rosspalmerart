import type { ImageMetadata } from 'astro';
import type { CollectionKey } from './site';

/*
  One entry per painting, newest first.
  To add a painting:
    1. Put the photo in src/assets/paintings/ named <slug>.jpg
    2. Add an entry below with the same slug.
  Only slug, title, alt and collection are required. Leave out anything you don't know.
*/
export interface Painting {
  slug: string;
  title: string;
  alt: string;
  collection: CollectionKey;
  series?: string;
  medium?: string;
  size?: string;
  year?: number;
  note?: string;
  availability?: string;
  featured?: boolean;
  /** Picture frame: black, oak or gold. Leave out to use the collection default. */
  frame?: 'black' | 'oak' | 'gold';
}

const list: Painting[] = [
  { slug: 'scotch-cart-in-zimbabwe', title: 'Scotch Cart in Zimbabwe', collection: 'african', year: 2021, featured: true,
    alt: 'Two people loading a green donkey cart on a sandy road beneath granite boulders' },
  { slug: 'kudu-bull-in-zimbabwe-2', title: 'Kudu Bull in Zimbabwe', collection: 'african', year: 2021,
    alt: 'A kudu bull with long spiral horns against an ochre background' },
  { slug: 'castle-inn-at-riverstown', title: 'Castle Inn at Riverstown', collection: 'irish', series: 'Glanmire Series',
    medium: 'Acrylics on canvas board', size: '400 × 300 mm', year: 2021,
    alt: 'A blue and yellow pub on a street corner under a bright sky' },
  { slug: 'glanmire-community-centre', title: 'Glanmire Community Centre', collection: 'irish', series: 'Glanmire Series',
    medium: 'Acrylics on canvas board', size: '400 × 300 mm', year: 2021, note: 'The Community Centre at Riverstown in Glanmire.',
    alt: 'A long stone community building behind a wall on a grey day' },
  { slug: 'halloween-forest', title: 'Halloween Forest', collection: 'irish', featured: true,
    medium: 'Acrylics on canvas board', size: '300 × 400 mm', year: 2020,
    alt: 'Bare black trees against a glowing orange sky' },
  { slug: 'ardnahinch-beach-east-cork', title: 'Ardnahinch Beach, East Cork', collection: 'irish', featured: true,
    medium: 'Acrylics on canvas', size: '400 × 500 mm', year: 2020,
    alt: 'A beach at low tide with an island and lighthouse on the horizon' },
  { slug: 'sunset-at-kariba', title: 'Sunset at Kariba', collection: 'african',
    medium: 'Acrylics on canvas', size: '250 × 300 mm', year: 2019,
    alt: 'The sun setting over Lake Kariba with its reflection on the water' },
  { slug: 'renovations', title: 'Renovations', collection: 'irish',
    medium: 'Acrylics on canvas', size: '230 × 300 mm', year: 2018,
    alt: 'A red chair and a wooden chair beneath a staircase' },
  { slug: 'silver-birch-forest', title: 'Silver Birch Forest', collection: 'irish',
    medium: 'Acrylics on canvas', size: '250 × 300 mm', year: 2019,
    alt: 'White silver birch trunks against yellow leaves' },
  { slug: 'irish-cottage', title: 'Irish Cottage', collection: 'irish',
    medium: 'Oils on box canvas', size: '300 × 400 mm', year: 2020,
    alt: 'A white cottage with a red roof and washing on the line' },
  { slug: 'the-manch-house-near-ballineen-in-west-cork', title: 'The “Manch House” near Ballineen in West Cork', collection: 'irish',
    medium: 'Acrylics', size: '300 × 400 mm', year: 2018,
    alt: 'A pale stone house with dormer windows beside a tree' },
  { slug: 'view-across-loch-ine-in-baltimore-county-cork', title: 'View across Loch Ine in Baltimore, County Cork', collection: 'irish',
    medium: 'Acrylics', size: '250 × 300 mm', year: 2019,
    alt: 'A view between two rocks across a lake to an island and hills' },
  { slug: 'overlooking-baltimore-estuary-from-caseys-hotel-cork-county', title: 'Overlooking Baltimore Estuary from Casey’s Hotel, Cork County', collection: 'irish',
    medium: 'Acrylics', size: '250 × 300 mm', year: 2019,
    alt: 'A white house with a dark roof above an estuary, with a rainbow' },
  { slug: 'cobh-cathedral-in-cork-county', title: 'Cobh Cathedral in Cork County', collection: 'irish', featured: true,
    medium: 'Acrylics', size: '400 × 500 mm', year: 2020,
    alt: 'Cobh Cathedral rising above a row of brightly coloured houses' },
  { slug: 'ladies-to-market', title: 'Ladies to Market', collection: 'african', featured: true,
    alt: 'Women carrying baskets on their heads against a deep red sky' },
  { slug: 'young-boys-running-in-zimbabwe', title: 'Young Boys Running in Zimbabwe', collection: 'african',
    medium: 'Acrylics', size: '400 × 500 mm', year: 2019,
    alt: 'A group of smiling schoolboys running towards the viewer' },
  { slug: 'iconic-balancing-rocks-in-harare', title: 'Iconic Balancing Rocks in Harare', collection: 'african', featured: true,
    medium: 'Watercolour', year: 2020, note: 'The balancing rocks near Epworth in Harare.',
    alt: 'Granite boulders balanced on top of one another under a blue sky' },
  { slug: 'urban-school-life-in-harare-zimbabwe', title: 'Urban School Life in Harare, Zimbabwe', collection: 'african', featured: true,
    year: 2020, note: 'The visit of ice-cream vendors to a girls’ school.',
    alt: 'Ice-cream vendors surrounded by schoolgirls in green under jacaranda trees' },
  { slug: 'rural-village-in-eastern-zimbabwe', title: 'Rural Village in Eastern Zimbabwe', collection: 'african',
    year: 2020, note: 'Rural life in Zimbabwe.',
    alt: 'Thatched huts and villagers below granite hills' },
  { slug: 'big-5-elephant-rhino-buffalo-lion-and-leopard', title: 'Big 5 (Elephant, Rhino, Buffalo, Lion and Leopard)', collection: 'african',
    alt: 'An elephant, rhino, buffalo, lion and leopard grouped together' },
  { slug: 'flame-lillies', title: 'Flame Lilies', collection: 'african',
    medium: 'Acrylics', size: '250 × 300 mm', year: 2018, note: 'The national flower of Zimbabwe.',
    alt: 'Red and yellow flame lilies on a dark green background' },
  { slug: 'barrys-bridge-glanmire', title: 'Barry’s Bridge, Glanmire', collection: 'irish', series: 'Glanmire Series', featured: true,
    medium: 'Acrylics on board', size: '300 × 400 mm', year: 2020,
    alt: 'A stone bridge over a rushing river with a white house behind' },
  { slug: 'st-joseph-church-glanmire', title: 'St Joseph Church, Glanmire', collection: 'irish', series: 'Glanmire Series',
    medium: 'Acrylics on board', size: '300 × 400 mm', year: 2020,
    alt: 'The front of a pale church at the top of a flight of steps' },
  { slug: 'another-painting-of-glanmire', title: 'Entrance View to Glanmire in Cork, Ireland', collection: 'irish', series: 'Glanmire Series',
    medium: 'Acrylics on board', size: '300 × 400 mm', year: 2020,
    alt: 'Glanmire village and church spire reflected in still blue water' },
  { slug: 'the-brook-inn-glanmire', title: 'The Brook Inn, Glanmire', collection: 'irish', series: 'Glanmire Series',
    medium: 'Acrylics on board', size: '300 × 400 mm', year: 2020,
    alt: 'A stone pub with flower baskets on a quiet road' },
  { slug: 'african-art-2', title: 'African Fish Eagle', collection: 'african',
    medium: 'Watercolour', size: '250 × 300 mm', year: 2020, note: 'An African fish eagle in Kariba, Zimbabwe.',
    alt: 'A fish eagle with a white head perched on a branch' },
  { slug: 'this-is-my-first-art-piece', title: 'Elephant in Kariba, Zimbabwe', collection: 'african',
    year: 2019, note: 'An African elephant on the Kariba road.',
    alt: 'An elephant walking along a road towards the viewer' },
];

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/paintings/*.jpg', { eager: true });

export function imageFor(slug: string): ImageMetadata {
  const hit = images[`../assets/paintings/${slug}.jpg`];
  if (!hit) throw new Error(`No image found for painting "${slug}" in src/assets/paintings/`);
  return hit.default;
}

export const paintings = list;

export function details(p: Painting): string {
  return [p.medium, p.size, p.year].filter(Boolean).join(' · ');
}

/** Gold for the Glanmire Series, oak for other Irish paintings, black for African paintings */
export function frameFor(p: Painting): 'black' | 'oak' | 'gold' {
  if (p.frame) return p.frame;
  if (p.series) return 'gold';
  return p.collection === 'irish' ? 'oak' : 'black';
}

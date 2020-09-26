import React from 'react';
import { BookCard } from '.';

export default {
  title: 'Book Card',
  component: BookCard,
};

export const Basic = () => (
  <BookCard
    bookImage="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388184640l/7235533.jpg"
    bookTitle="The Way Of Kings"
    bookAuthor="Brandon Sanderson"
    bookSynopsis="According to mythology mankind used to live in The Tranquiline Halls. Heaven. But then the Voidbringers assaulted and captured heaven, casting out God and men. Men took root on Roshar, the world of storms. And the Voidbringers followed...

    They came against man ten thousand times. To help them cope, the Almighty gave men powerful suits of armor and mystical weapons, known as Shardblades. Led by ten angelic Heralds and ten orders of knights known as Radiants, mankind finally won.

    Or so the legends say. Today, the only remnants of those supposed battles are the Shardblades, the possession of which makes a man nearly invincible on the battlefield. The entire world is at war with itself - and has been for centuries since the Radiants turned against mankind. Kings strive to win more Shardblades, each secretly wishing to be the one who will finally unite all of mankind under a single throne.

    On a world scoured down to the rock by terrifying hurricanes that blow through every few day a young spearman forced into the army of a Shardbearer, led to war against an enemy he doesn't understand and doesn't really want to fight.

    What happened deep in mankind's past?

    Why did the Radiants turn against mankind, and what happened to the magic they used to wield?"
  />
);

import React from 'react';
import { Book } from '.';

export default {
  title: 'Book',
  component: Book,
};

export const Basic = () => (
  <Book
    bookImage="https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg"
    bookTitle="Ten Thousand Skies Above You"
  />
);

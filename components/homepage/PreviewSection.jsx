import React from 'react'
import GridMotion from '../customs/GridMotion'

// note: you'll need to make sure the parent container of this component is sized properly
const items = [
  '/images/references/1.jpg',
  '/images/references/2.jpg',
  '/images/references/3.webp',
  '/images/references/4.webp',
  '/images/references/4.webp',
  '/images/references/4.webp',
  '/images/references/4.webp',
  '/images/references/4.webp',
  '/images/references/4.webp',
  '/images/references/4.webp',
  '/images/references/4.webp',
  '/images/references/4.webp',
  '/images/references/4.webp',
  '/images/references/4.webp',
  '/images/references/4.webp',
  '/images/references/4.webp',
  '/images/references/5.jpg',
  '/images/references/6.webp',
  '/images/references/7.webp',
  '/images/references/8.webp',
  '/images/references/9.webp',
  '/images/references/10.webp',

  // Add more items as needed
];

export default function PreviewSection() {
  return (
    <GridMotion items={items} />
  )
}

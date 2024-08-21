# Knuswonen Test Solution by Jaco Kotzee

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load "Poppins", a custom *Google Font*.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Designer Feedback

* **News Section:** The main title and "View all news articles" button colour isn't clear enough. I would suggest a lighter blue background colour
* Hero Section: The background image limits what one can achieve on mobile screens due to vast light colour usage in the image which limits the positioning and visibility of the copy "Waarmee kunnen we je helpen?"
* **Icons:** Some of the icons did not have appropriate layer names
* **Footer:** Slightly decrease the font-size of the text underneath the the titles

## Responsiveness Approach

1. **TailwindCSS:** The home page design was quite simple to transform for mobile. I mainly made use of flexbox tailwind styles changing it from `flex-col to flex-row` when appropriate. I also dereased section padding on mobile. And finally decided to hide the CTA images and background graphic entirely on mobile - mainly due to my own time constraints. I am well aware that the images could have been decreased and the background elements could have been repositioned using absolute positioning properties.

### Other remarks

**State management:** Due to the nature of the project. I honestly thought using state mangement would have been overkill as there was really no need for state being updated whatsoever. I only used react hooks `useState` to show or hide the mobile navigation menu.

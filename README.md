# OTB Test
A small card display app with some sort buttons. I chose to write this in NextJS with Typescript and Redux, storing the hotel data in the redux initial state.

## Dependencies
Ensure you have Node 18.17.1 (LTS at time of writing) installed.

Run the install command
```bash
npm install
```

## Boot the project
To run the development server write the following command into your CLI while targeting the repo directory:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Testing the project
To run tests execute:
```bash
npm run test
```

## Notes and deviations
I made use of TailwindCSS here and the images provided were just static PNGs so finding sizes was difficult. As such I took a general approach to match sizing and coloring as closely as possible, leveraging Tailwind's internal tooling to get an almost match.

I didn't use the background image, instead favouring a simpler more modern background gradient which all apps should prefer over images with the retirement of older Internet Explorer browsers.
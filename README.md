# Image to RGB Array

## How to Use

First run `npm i` to install dependencies

1. Place an image in the `public/` folder
2. Change the `src` property of the `img` tag in `public/index.html`
3. Run `npm run start`
4. Open the URL shown in the prompt (e.g. `http://localhost:8080`)
5. Wait until the process completes. You'll know when you see `"Saving compressed file"` in the terminal
6. The output can be found in the `image.json` file

## How it Works

The `canvas` element allows you to get the RGB values from the image. The output is too large to do anything with on the front-end (e.g. saving to a file or displaying it so that it can be copied). To get around this, it is sent to the back-end - which is also split into rows so that it can handle it. It's then converted from the weird format that it starts in into nested arrays; compressed; and written to a file.
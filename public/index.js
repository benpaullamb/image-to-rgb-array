function imageDataToPixels(imageData, imageWidth) {
    const colours = [];
    for (let i = 0; i < imageData.length; i += 4) {
        const colour = imageData.slice(i, i + 4);
        colours.push(colour);
    }

    const pixels = [];
    for (let i = 0; i < colours.length; i += imageWidth) {
        const row = colours.slice(i, i + imageWidth);
        pixels.push(row);
    }

    return pixels;
}

async function post(url, data) {
    try {
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    } catch (err) {
        console.error(err.message);
    }
}

async function process() {
    const image = document.querySelector('#image');
    const canvas = document.querySelector('#canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);

    const imageData = ctx.getImageData(0, 0, image.width, image.height).data;
    const pixels = imageDataToPixels(imageData, image.width);

    for (let i = 0; i < pixels.length; i++) {
        console.log(`Sending row ${i} of ${pixels.length}`);
        await post('/api/packet', pixels[i]);
    }
    console.log('Done');
    fetch('/api/done');
}
const fs = require('fs');
// const text = fs.readFileSync('./image.json', 'utf8');
// const pixelRows = JSON.parse(text);

module.exports = function (pixelRows) {
    // Convert objects to arrays
    const converted = pixelRows.map((row, i) => {
        console.log(`Converting row ${i}`);
        return row.map(pixel => {
            return [
                pixel[0],
                pixel[1],
                pixel[2],
                pixel[3]
            ];
        });
    });
    console.log(`Converted width: ${converted[0].length}, Converted height: ${converted.length}`);

    // Keep every nth row/pixel in a kept row
    const n = 100;
    // Rows
    let compressed = converted.filter((row, i) => i % n === 0);
    // Pixels
    compressed = compressed.map(row => {
        return row.filter((pixel, i) => i % n === 0);
    });
    console.log(`Compressed width: ${compressed[0].length}, Compressed height: ${compressed.length}`);

    console.log(`Saving compressed file`);
    fs.writeFileSync('./image.json', JSON.stringify(compressed));
}
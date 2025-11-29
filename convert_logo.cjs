const sharp = require("sharp");
const path = require("path");

async function convert() {
    try {
        const inputPath = "src/assets/badge93-logo.png";
        const outputPath = "src/assets/badge93-logo.webp";

        console.log("Converting logo to WebP...");

        await sharp(inputPath)
            .resize(600) // Resize to 600px width, auto height
            .webp({ quality: 80 }) // Convert to WebP with 80% quality
            .toFile(outputPath);

        console.log("Logo converted successfully!");

    } catch (err) {
        console.error("Error converting logo:", err);
        process.exit(1);
    }
}

convert();

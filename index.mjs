import Jimp from "jimp";

// Função para redimensionar uma imagem para vários tamanhos
async function resizeImage(inputPath, outputPath, size) {
  const image = await Jimp.read(inputPath);
  await image.resize(size, size).writeAsync(outputPath);
}

async function execute() {
  const inputImagePath = "./icon.png";

  const sizes = [512, 192, 64, 32, 24, 16];

  for (const size of sizes) {
    const outputImagePath = `icons/icon_${size}x${size}.png`;
    await resizeImage(inputImagePath, outputImagePath, size);
    console.log(
      `Imagem redimensionada para ${size}x${size}: ${outputImagePath}`
    );
  }
}

execute().catch((error) => console.error(error));

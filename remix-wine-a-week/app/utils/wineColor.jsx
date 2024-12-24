export function getWineColor(wine) {
  const wineVarieties = wine.varieties;
  const wineName = wine.name;
  const arrayOfGrapeColors = wineVarieties.map(
    variety => (variety.type)
  );

  const isWhiteBlend = (currentColor) => currentColor === "White";
  const isRedBlend = (currentColor) => currentColor === "Red";

  if ((arrayOfGrapeColors.length > 1 && arrayOfGrapeColors.includes("White") && arrayOfGrapeColors.includes("Red")) ||
      wineName.toLowerCase().includes("rosé") ||
      wineName.toLowerCase().includes("rose")) {
    return "Rosé"
  } else if (arrayOfGrapeColors.length > 1 && arrayOfGrapeColors.every(isWhiteBlend)) {
    return "Blend (White)"
  } else if (arrayOfGrapeColors.length > 1 && arrayOfGrapeColors.every(isRedBlend)) {
    return "Blend (Red)"
  } else if (arrayOfGrapeColors.includes("White")) {
    return "White"
  } else {
    return "Red"
  }
}

export function displayWineColor(color) {
  switch(color) {
    case 'Blend (White)': return 'var(--blend-white)';
    case 'Blend (Red)': return 'var(--blend-red)';
    case 'Rosé': return 'var(--rose)';
    case 'White': return 'var(--white)';
    default: return 'var(--red)';
  }
};

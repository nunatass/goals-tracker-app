export function generateGradient(
  startColor: string,
  endColor?: string
): string[] {
  endColor = endColor || startColor;
  const startHex = startColor.slice(1);
  const endHex = endColor.slice(1);
  const hexDiff = (parseInt(endHex, 16) - parseInt(startHex, 16)) / 5;
  const color1 = `#${startHex}`;
  const color2 = `#${(parseInt(startHex, 16) + hexDiff).toString(16)}`;
  const color3 = `#${(parseInt(startHex, 16) + 2 * hexDiff).toString(16)}`;
  const color4 = `#${(parseInt(startHex, 16) + 3 * hexDiff).toString(16)}`;
  const color5 = `#${(parseInt(startHex, 16) + 4 * hexDiff).toString(16)}`;
  return [color1, color2, color3, color4, color5];
}

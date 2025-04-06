type Color = "primary" | "secondary" | "surface" | "background";

export const getColor = (color: Color) => {
  const colors: Record<Color, `#${string}`> = {
    "primary": "#222222",
    "secondary": "#3C3D37",
    "surface": "#F0A500",
    "background": "#F5E8C7",
  };

  return colors[color];
};

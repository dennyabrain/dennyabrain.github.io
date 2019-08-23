import Typography from "typography"
const typography = new Typography({
  baseFontSize: "24px",
  baseLineHeight: 1.4,
  googleFonts: [
    {
      name: "Indie Flower",
      styles: ["400"],
    },
    {
      name: "Open Sans",
      styles: ["300", "300i", "400", "400i"],
    },
  ],
  headerFontFamily: ["Indie Flower", "serif"],
  bodyFontFamily: ["Open Sans", "serif"],
  blockMarginBottom: 0.8
})
export default typography
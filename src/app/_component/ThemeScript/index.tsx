const ThemeScript = () => {
  const themeInitializerScript = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode();
  })()
  `;
  function setInitialColorMode() {
    function getInitialColorMode() {
      const savedDarkMode = localStorage.getItem("darkMode");
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const initialDarkMode =
        savedDarkMode === null
          ? prefersDarkMode
          : JSON.parse(savedDarkMode) === "dark";
      return initialDarkMode;
    }

    const currentColorMode = getInitialColorMode();

    document.documentElement.classList.toggle("dark", currentColorMode);
  }
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: themeInitializerScript,
      }}
    />
  );
};
export default ThemeScript;

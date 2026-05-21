// import React, { createContext, useState } from 'react';

// //Skapar kontexten och lägger till ett standardvärde i createContext
// const ThemeContext = createContext();

// //Skapar Provider komponenten
// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme((prevTheme) => {
//       const nextTheme = prevTheme === 'light' ? 'dark' : 'light';
//       return nextTheme;
//     });
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

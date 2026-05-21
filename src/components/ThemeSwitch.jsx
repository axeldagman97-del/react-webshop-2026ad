// import React from 'react';
// import { useTheme } from '../context/ThemeContext';

// const styles = {
//   button: `
//       flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
//       bg-slate-100 hover:bg-slate-200
//       dark:bg-slate-800 dark:hover:bg-slate-700
//       border border-slate-200 dark:border-slate-700
//       shadow-sm hover:shadow-md`,
//   icon: 'text-lg',
//   label:
//     'text-sm font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider',
// };

// //Skapar knappen som ändrar från ljust til mörkt

// const ThemeSwitch = () => {
//   const { theme, toggleTheme } = useTheme();
//   const isDark = theme === 'dark';

//   return (
//     <button onClick={toggleTheme} className={styles.button}>
//       <span className={styles.icon}>{isDark ? '☀️' : '🌙'}</span>
//       <span className={styles.label}>{isDark ? 'Light' : 'Dark'}</span>
//     </button>
//   );
// };

// export default ThemeSwitch;

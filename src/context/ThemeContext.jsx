import React, { createContext, useContext, useReducer, useEffect } from 'react'

export const ThemeContext = createContext();

const initialState = {
    theme: 'light'
};

function themeReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            };
        default:
            return state;
    }
}

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, initialState);
    
    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    };

    useEffect(() => {
        if (state.theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [state.theme]);

    return (
        <ThemeContext.Provider value={{ theme: state.theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
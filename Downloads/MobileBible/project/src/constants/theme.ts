export interface Theme {
    dark: boolean;
    background: string;
    text: string;
    textSecondary: string;
    primary: string;
    buttonBackground: string;
    progressBackground: string;
    progressFill: string;
    modalBackground: string;
  }
  
  export const themes = {
    light: {
      dark: false,
      background: '#FFFFFF',
      text: '#000000',
      textSecondary: '#666666',
      primary: '#2196F3',
      buttonBackground: '#F5F5F5',
      progressBackground: '#E0E0E0',
      progressFill: '#2196F3',
      modalBackground: '#FFFFFF',
    },
    dark: {
      dark: true,
      background: '#121212',
      text: '#FFFFFF',
      textSecondary: '#AAAAAA',
      primary: '#64B5F6',
      buttonBackground: '#272727',
      progressBackground: '#333333',
      progressFill: '#64B5F6',
      modalBackground: '#1E1E1E',
    },
    sepia: {
      dark: false,
      background: '#F4ECD8',
      text: '#5B4636',
      textSecondary: '#7A6154',
      primary: '#A67C52',
      buttonBackground: '#EAE0C9',
      progressBackground: '#D8CCAF',
      progressFill: '#A67C52',
      modalBackground: '#F4ECD8',
    },
  };
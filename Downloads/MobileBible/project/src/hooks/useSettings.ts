import { useState, useEffect } from 'react';
import BibleService from '../services/BibleService';

export function useSettings() {
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const settings = await BibleService.getSettings();
      setFontSize(settings.fontSize);
      setLineHeight(settings.lineHeight);
    } catch (error) {
      console.error('Erreur lors du chargement des paramètres:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveSettings = async (newFontSize: number, newLineHeight: number) => {
    try {
      await BibleService.saveSettings({ fontSize: newFontSize, lineHeight: newLineHeight });
      setFontSize(newFontSize);
      setLineHeight(newLineHeight);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des paramètres:', error);
    }
  };

  return {
    fontSize,
    lineHeight,
    isLoading,
    saveSettings,
  };
}
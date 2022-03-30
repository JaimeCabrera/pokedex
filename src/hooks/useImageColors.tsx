import {useEffect, useRef, useState} from 'react';
import ImageColors from 'react-native-image-colors';

export const useImageColors = (url: string) => {
  const [bgColor, setBgColor] = useState('grey');
  const [secondaryColor, setSecondaryColor] = useState('');
  const isMounted = useRef(true);

  useEffect(() => {
    if (!isMounted.current) {
      return;
    }
    getPokemoncolor();
    return () => {
      // esto se dispara cuando el componente se desmonta
      isMounted.current = false;
    };
  }, []);

  const getPokemoncolor = async () => {
    const result = await ImageColors.getColors(url, {
      fallback: bgColor,
    });
    switch (result.platform) {
      case 'android':
        setBgColor(result.dominant!);
        setSecondaryColor(result.lightMuted!);
        break;

      default:
        break;
    }
  };
  return {
    bgColor,
    secondaryColor,
  };
};

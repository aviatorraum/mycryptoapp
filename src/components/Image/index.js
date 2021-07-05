import React from 'react';
import { Image as BaseImage } from 'react-native';

const Image = ({
  uri,
  size,
  ...props
}) => {
  const imageStyle = {
    width: size,
    height: size,
    resizeMode: 'contain',
  };

  return (
    <BaseImage
      style={imageStyle}
      placeholderStyle={{ backgroundColor: 'transparent' }}
      source={{ uri }}
      {...props}
    />
  );
};

export default Image;

// ImageDragSource.tsx
import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

interface ImageDragSourceProps {
  file: File;
}

const ImageDragSource: React.FC<ImageDragSourceProps> = ({ file }) => {
  console.log('file', file);

  const [, drag] = useDrag({
    type: ItemTypes.IMAGE,
    item: { type: ItemTypes.IMAGE, file },
  });

  return (
    <div ref={drag} style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
      {/* {file.name} */}
      <img src={URL.createObjectURL(file)} alt={file.name} style={{ maxWidth: '100px' }} />
    </div>
  );
};

export default ImageDragSource;

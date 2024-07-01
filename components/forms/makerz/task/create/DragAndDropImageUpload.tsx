// DragAndDropImageUpload.tsx
import React, { useCallback } from 'react';
import { Action, State } from './reducerMakerzTaskFor';

interface DragAndDropImageUploadProps {
  dispatch: React.Dispatch<Action>;
  images: State['images'];
}

const DragAndDropImageUpload: React.FC<DragAndDropImageUploadProps> = ({ dispatch, images }) => {
  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        console.log("Dispatching ADD_IMAGE with:", result); // Debugging line

        dispatch({ type: 'ADD_IMAGE', payload: result });
      };
      reader.readAsDataURL(file);
    });
  }, [dispatch]);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        border: '2px dashed gray',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        background: 'white',
      }}
    >
      Drag & drop an image here
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Uploaded ${index}`} style={{ maxWidth: '100px', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default DragAndDropImageUpload;

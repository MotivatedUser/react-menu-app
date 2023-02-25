import { useState } from "react";


const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ["https://images.unsplash.com/photo-1534043464124-3be32fe000c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZpc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"];
  
    const handlePrevClick = () => {
      setCurrentIndex(
        currentIndex === 0 ? images.length - 1 : currentIndex - 1
      );
    };
  
    const handleNextClick = () => {
      setCurrentIndex(
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    };
  
    return (
      <div className="image-slider">
        <button onClick={handlePrevClick}>&lt;</button>
        <img className="image" src={images[currentIndex]} alt={`${currentIndex + 1}`} />
        <button onClick={handleNextClick}>&gt;</button>
      </div>
    );
  };
  
  export default ImageSlider;


//   This component uses the useState hook to keep track of the current image index. It also defines an array of image file paths, which can be imported into the component. The handlePrevClick and handleNextClick functions are called when the "previous" and "next" buttons are clicked, respectively. They update the current image index based on the current index and the length of the images array. Finally, the component returns a div with three children: the "previous" button, the image to display (which is set to the current image based on the current index), and the "next" button.
  
//   You can customize the CSS styles in the ImageSlider.css file to fit your homepage design. You can also add more images to the images array to include them in the slider.
  
  
  
  
  
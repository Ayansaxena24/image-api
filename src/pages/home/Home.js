import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "../../index";
import "../../App.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Home = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedImg, setSelectedImg] = useState(null);

  //error button
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  //error button close

  const fetchImages = (pageNo) => {
    fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=20`)
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setPage(pageNo);
      });
  };

  useEffect(() => {
    fetchImages(1);
  }, []);

  const prevPage = () => {
    fetchImages(page - 1);
  };

  const nextPage = () => {
    fetchImages(page + 1);
  };

  const goToImage = (imageId) => {
    setSelectedImg(imageId);
  };

  const goBack = () => {
    setSelectedImg(null);
  };

  return (
    <div className="justify-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {selectedImg === null ? (
        <>
          <div className="flex flex-wrap justify-center rounded-xl py-2">
            {images.map((image) => (
              <div
                key={image.id}
                onClick={() => goToImage(image.id)}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 m-2"
              >
                <div className="hover:shadow-md hover:opacity-80 hover: text-cyan-600 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 flex flex-col justify-center">
                <img
                  src={image.download_url}
                  alt={image.author}
                  className="rounded-sm hover:shadow-md h-40"
                />
                <span className="text-white">{image.author}</span>
                </div>
              </div>
            ))}
            <div className="justify-between my-2">
              <button
                onClick={prevPage}
                className="transition-property:all ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:font-bold duration-300 text-white py-2 px-4 rounded-l pr-4 mr-2 md-2"
              > <ArrowBackIosIcon />
                Prev Page
              </button>
              <button
                onClick={nextPage}
                className="transition-property:all ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white hover:font-bold py-2 px-4 rounded-r pl-4 ml-2 md-2"
              > 
                Next Page
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="border-2 border-white rounded-xl">
            {images.map((image) => {
              if (image.id === selectedImg) {
                return (
                  <div key={image.id}>
                    <img
                      src={image.download_url}
                      alt={image.author}
                      className="w-[80%] h-screen flex mx-auto my-2"
                    />
                    <p className="text-center text-white">Author - {image.author}</p>
                  </div>
                );
              }
              return null;
            })}
            <div className="flex flex-row justify-center py-4">
              <button
                onClick={goBack}
                className="transition-property:all ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:font-bold duration-300 text-white py-2 px-4 rounded-l pr-4 ml-1 my-1 mx-1"
              >
                Go Back
              </button>
              <button
                onClick={handleClick}
                className="transition-property:all ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:font-bold duration-300 text-white py-2 px-4 rounded-r pl-4 mr-1 my-1 mx-1"
              >
                Next Image
              </button>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  Please go back and select your desired image from the grid!
                </Alert>
              </Snackbar>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

"use client";
import React, { useState } from "react";
import Image from "next/image";

// Component to display the service book
const ServiceBook = () => {
  // Initial state for books: { opened: false, flip: false }
  const [isAnimating, setIsAnimating] = useState(false);
  const [booksState, setBooksState] = useState([
    { opened: false, flip: false },
    // Add more books as needed
  ]);
  const [currentPage, setCurrentPage] = useState(0);

  // Function to handle the click on the book back
  const handleBookBackClick = (index) => {
    setBooksState((prevState) =>
      prevState.map((book, i) => {
        if (i === index) {
          // Toggle the flip state and reset the opened state
          const newFlipState = !book.flip;
          return { ...book, opened: false, flip: newFlipState };
        }
        return book;
      })
    );
  };

  // Function to handle the book view click
  const handleBookViewClick = (index) => {
    setCurrentPage(0);
    setBooksState((prevState) =>
      prevState.map((book, i) => {
        if (i === index) {
          const newOpenedState = !book.opened;
          return { ...book, opened: newOpenedState, flip: false };
        } else {
          return { ...book, opened: false };
        }
      })
    );
  };

  // Function to go to the previous page
  const handlePrevPageClick = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      if (currentPage > 0) {
        setCurrentPage((prevPage) => prevPage - 1);
      }
      setBooksState((prevState) =>
        prevState.map((book, i) => {
          if (i === index && book.currentPage > 0) {
            return { ...book, currentPage: book.currentPage - 1 };
          }
          return book;
        })
      );
    }, 200);
  };

  // Function to go to the next page
  const handleNextPageClick = (index, totalPages) => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      if (currentPage < bookContents.length - 1) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
      setBooksState((prevState) =>
        prevState.map((book, i) => {
          if (i === index && book.currentPage < totalPages - 1) {
            return { ...book, currentPage: book.currentPage + 1 };
          }
          return book;
        })
      );
    }, 200);
  };

  const bookContents = [
    {
      title: "Design Proposals",
      content:
        "Crafting comprehensive proposals outlining conceptual design ideas for client review and consideration.",
    },
    {
      title: "Schematic Design",
      content:
        "Developing preliminary sketches and plans to illustrate the overall design concept and spatial arrangement.",
    },
    {
      title: "As-Built Condition Reviews",
      content:
        "Assessing and documenting the current state of a structure or space to inform design modifications or renovations.",
    },
    {
      title: "Interior Design",
      content:
        "Creating aesthetically pleasing and functional interior spaces through thoughtful selection of colors, materials, and furnishings.",
    },
    {
      title: "Floor Plan and Design Documents",
      content:
        "Producing detailed floor plans and design documentation that serve as a blueprint for construction and project execution.",
    },
    {
      title: "3D Visualization",
      content:
        "Utilizing advanced technologies to create immersive three-dimensional visual representations of design concepts for better client understanding.",
    },
    {
      title: "Construction Management and Administration",
      content:
        "Overseeing the entire construction process, from planning and coordination to execution and completion, ensuring seamless project delivery.",
    },
    {
      title: "Project Planning",
      content:
        "Developing comprehensive plans outlining project scope, timelines, and resource requirements to guide successful project execution.",
    },
    {
      title: "Procurement and Delivery",
      content:
        "Managing the sourcing and delivery of materials, equipment, and services essential for project implementation.",
    },
  ];

  return (
    <div className="flex-item-right scrollFade" style={{ flex: "70%" }}>
      <div className="main">
        <ul id="bk-list" className="bk-list clearfix">
          {booksState.map((bookState, index) => {
            const totalPages = 10; // Assuming 10 pages; adjust as needed
            return (
              <li key={index} id={`book-${index}`}>
                <div
                  className={`bk-book book-1 ${
                    bookState.opened
                      ? "bk-viewinside"
                      : bookState.flip
                      ? "bk-viewback"
                      : "bk-bookdefault"
                  }`}
                >
                  <div
                    className="bk-front bk-bookview"
                    onClick={() => handleBookViewClick(index)}
                    style={{ borderRadius: "0 20px 20px 0" }}
                  >
                    <div
                      className="book-cover"
                      style={{ borderRadius: "0 20px 20px 0" }}
                    >
                      <div className="book-spine-front"></div>
                      <div className="band"></div>
                      <h1
                        className="book-title"
                        style={{ color: "transparent", userSelect: "none" }}
                        draggable="false"
                      >
                        Our Services
                      </h1>
                      <div className="cardboard-front"></div>
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        loading="lazy"
                        src="/img/logobook.png"
                        className="book-cover-picture"
                        alt="cover"
                      />
                    </div>
                    <div
                      className="bk-cover-back"
                      style={{ borderRadius: "20px 0 0 20px" }}
                    >
                      <div
                        className="cover-back-cardboard"
                        style={{ borderRadius: "20px 0 0 20px" }}
                      ></div>
                    </div>
                  </div>

                  <div
                    className="bk-page bk-bookview"
                    style={{ borderRadius: "0 20px 20px 0" }}
                    onClick={() => handleBookViewClick(index)}
                  >
                    <div
                      className={`bk-content ${
                        isAnimating ? "" : "bk-content-current"
                      }`}
                    >
                      <h3 style={{ color: "black" }}>
                        {bookContents[currentPage].title}
                      </h3>
                      <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                        {bookContents[currentPage].content}
                      </p>
                    </div>
                    {/* Display each page based on currentPage */}
                    {totalPages > 1 && (
                      <nav
                        style={{
                          position: "relative",
                          zIndex: "10000",
                          bottom: "0px",
                          userSelect: "none",
                        }}
                      >
                        <span
                          className={`bk-page-prev ${
                            bookState.currentPage === 0 ? "disabled" : ""
                          }`}
                          style={{ cursor: "pointer" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrevPageClick(index);
                          }}
                        >
                          &lt;
                        </span>
                        <span
                          className={`bk-page-next ${
                            bookState.currentPage === totalPages - 1
                              ? "disabled"
                              : ""
                          }`}
                          style={{ cursor: "pointer" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextPageClick(index, totalPages);
                          }}
                        >
                          &gt;
                        </span>
                      </nav>
                    )}

                    {/* Navigation */}
                  </div>
                  <div
                    className="bk-back bk-bookback"
                    onClick={() => handleBookBackClick(index)}
                    style={{ borderRadius: "20px 0 0 20px" }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: "10%",
                        position: "absolute",
                        background: "#222222",
                        right: "0",
                      }}
                    ></div>
                    <div className="back-cardboard"></div>
                    <p className="back-text">
                      FORGING CONNECTIONS BY BUILDING BRIDGES ACROSS EVERY
                      INDUSTRY GAP
                    </p>
                  </div>
                  <div className="bk-right"></div>
                  <div className="bk-left">
                    <h2>
                      <span style={{ fontWeight: "bold", color: "#000" }}>
                        Our Services
                      </span>
                      <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;01
                      </span>
                    </h2>
                    <div className="spine-cardboard"></div>
                    <button
                      className="bk-bookback arrow"
                      onClick={() => handleBookBackClick(index)}
                    >
                      ➦
                    </button>
                  </div>
                  <div className="bk-top"></div>
                  <div className="bk-bottom"></div>
                </div>
                <div className="bk-info"></div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ServiceBook;

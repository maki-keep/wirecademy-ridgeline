import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import "./Article.css";

const Article = (props) => {
  const { id } = useParams();
  const article = props.data.items.find(item => item.id === id); // get by id

  // useState
  const [currentPicture, setCurrentPicture] = useState(0); // index of the pictures list

  // render
  let articleElement;
  if (article) { articleElement = (
    <div className="content Article">
      <Helmet>
        <title>{article.name} | Ridgeline</title>
        <meta property="og:title" content={`${article.name} | Ridgeline`} />
      </Helmet>
      <nav className="Article-breadcrumb">
        <Link to="/">Home</Link>
        <span className="Article-breadcrumb-slash">/</span>
        <Link to="/">Women’s</Link>
        <span className="Article-breadcrumb-slash">/</span>
        <Link to="/">Jackets</Link>
      </nav>
      <div className="Article-picture">
        <div className="Article-displayed">
          <img
            alt={article.pictures[currentPicture].alt}
            src={article.pictures[currentPicture].src}
            className="image-cover"
          />
        </div>
        <ul className="Article-list">
        {article.pictures.map((picture, index) => (
          <li key={index}>
            <div
              className={`Article-selectable${index === currentPicture ? " active" : ""}`}
              onClick={() => setCurrentPicture(index)}
            >
              <img
                alt={picture.alt}
                src={picture.src}
                className="image-cover"
              />
            </div>
          </li>
        ))}
        </ul>
      </div>
      <div className="Article-details">
        <h1 className="heading Article-title">{article.name}</h1>
        <div className="Article-box">
          <div className="Article-key">
            <span>{article.price.currency} {article.price.value}</span>
          </div>
          <div className="article-value">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              4 interest-free payments of $36.25
            </a>
          </div>
        </div>
        <div className="Article-box">
          <div className="Article-key">
            <div className="Article-star-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6_30)">
                  <path d="M4.06351 17.3734C3.62926 17.5961 3.13651 17.2058 3.22426 16.7074L4.15801 11.3861L0.194636 7.61064C-0.175489 7.25739 0.016886 6.61164 0.513011 6.54189L6.02326 5.75889L8.48026 0.891013C8.70189 0.452263 9.30151 0.452263 9.52314 0.891013L11.9801 5.75889L17.4904 6.54189C17.9865 6.61164 18.1789 7.25739 17.8076 7.61064L13.8454 11.3861L14.7791 16.7074C14.8669 17.2058 14.3741 17.5961 13.9399 17.3734L9.00001 14.8354L4.06239 17.3734H4.06351Z" fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_6_30">
                    <rect width="18" height="18" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="Article-star-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6_30)">
                  <path d="M4.06351 17.3734C3.62926 17.5961 3.13651 17.2058 3.22426 16.7074L4.15801 11.3861L0.194636 7.61064C-0.175489 7.25739 0.016886 6.61164 0.513011 6.54189L6.02326 5.75889L8.48026 0.891013C8.70189 0.452263 9.30151 0.452263 9.52314 0.891013L11.9801 5.75889L17.4904 6.54189C17.9865 6.61164 18.1789 7.25739 17.8076 7.61064L13.8454 11.3861L14.7791 16.7074C14.8669 17.2058 14.3741 17.5961 13.9399 17.3734L9.00001 14.8354L4.06239 17.3734H4.06351Z" fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_6_30">
                    <rect width="18" height="18" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="Article-star-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6_32)">
                  <path d="M6.02324 5.75887L8.48024 0.891C8.52742 0.793073 8.60116 0.710362 8.69305 0.652286C8.78493 0.594209 8.89128 0.5631 8.99999 0.5625C9.20586 0.5625 9.41174 0.671625 9.52311 0.891L11.9801 5.75887L17.4904 6.54187C17.6277 6.56347 17.7534 6.63177 17.8462 6.73527C17.9391 6.83877 17.9934 6.97112 18 7.11C18.0078 7.20246 17.9947 7.2955 17.9616 7.38218C17.9285 7.46886 17.8762 7.54695 17.8087 7.61062L13.8454 11.3861L14.7791 16.7074C14.8669 17.2057 14.3741 17.5961 13.9399 17.3734L8.99999 14.8354L4.06236 17.3734C4.01071 17.4002 3.95535 17.4191 3.89811 17.4296C3.51336 17.4971 3.14661 17.1439 3.22311 16.7074L4.15686 11.3861L0.194611 7.61062C0.133012 7.55235 0.0840498 7.48203 0.0507631 7.40404C0.0174764 7.32605 0.000575961 7.24205 0.00111095 7.15725C0.00116946 7.03737 0.034255 6.91982 0.096736 6.8175C0.141059 6.74333 0.201472 6.68006 0.273516 6.63235C0.34556 6.58465 0.427396 6.55373 0.512986 6.54187L6.02324 5.75887ZM8.99999 13.5304C9.0908 13.53 9.18035 13.5516 9.26099 13.5934L13.4077 15.7241L12.627 11.2725C12.6086 11.1701 12.6155 11.0648 12.6473 10.9657C12.6791 10.8667 12.7347 10.7769 12.8092 10.7044L16.0796 7.58812L11.5211 6.94012C11.4267 6.92587 11.3372 6.88895 11.2602 6.83252C11.1832 6.77609 11.121 6.70184 11.079 6.61613L9.00111 2.50087L8.99999 2.50425V13.5293V13.5304Z" fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_6_32">
                    <rect width="18" height="18" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="Article-star-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6_28)">
                  <path d="M3.22426 16.7063C3.13651 17.2058 3.62926 17.5961 4.06351 17.3734L9.00226 14.8354L13.9399 17.3734C14.3741 17.5961 14.8669 17.2058 14.7791 16.7074L13.8454 11.3861L17.8076 7.61063C18.1789 7.25738 17.9876 6.61163 17.4904 6.54188L11.9801 5.75888L9.52314 0.891005C9.47633 0.79233 9.40249 0.708961 9.31019 0.650584C9.21788 0.592207 9.11091 0.561218 9.0017 0.561218C8.89249 0.561218 8.78551 0.592207 8.69321 0.650584C8.60091 0.708961 8.52707 0.79233 8.48026 0.891005L6.02326 5.76L0.513011 6.543C0.016886 6.61275 -0.175489 7.2585 0.194636 7.61175L4.15801 11.3873L3.22426 16.7085V16.7063ZM8.74239 13.5934L4.59564 15.7241L5.37639 11.2725C5.39468 11.17 5.38752 11.0646 5.35555 10.9656C5.32357 10.8665 5.26776 10.7768 5.19301 10.7044L1.92376 7.58813L6.48226 6.94013C6.57665 6.92588 6.66619 6.88895 6.74319 6.83252C6.82019 6.7761 6.88236 6.70185 6.92439 6.61613L9.00001 2.50088L11.0779 6.61613C11.1199 6.70185 11.1821 6.7761 11.2591 6.83252C11.3361 6.88895 11.4256 6.92588 11.52 6.94013L16.0785 7.587L12.8093 10.7033C12.7343 10.7758 12.6784 10.8657 12.6464 10.965C12.6145 11.0642 12.6074 11.1699 12.6259 11.2725L13.4066 15.7241L9.25989 13.5934C9.1797 13.552 9.09079 13.5305 9.00057 13.5305C8.91036 13.5305 8.82145 13.552 8.74126 13.5934H8.74239Z" fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_6_28">
                    <rect width="18" height="18" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="Article-star-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6_28)">
                  <path d="M3.22426 16.7063C3.13651 17.2058 3.62926 17.5961 4.06351 17.3734L9.00226 14.8354L13.9399 17.3734C14.3741 17.5961 14.8669 17.2058 14.7791 16.7074L13.8454 11.3861L17.8076 7.61063C18.1789 7.25738 17.9876 6.61163 17.4904 6.54188L11.9801 5.75888L9.52314 0.891005C9.47633 0.79233 9.40249 0.708961 9.31019 0.650584C9.21788 0.592207 9.11091 0.561218 9.0017 0.561218C8.89249 0.561218 8.78551 0.592207 8.69321 0.650584C8.60091 0.708961 8.52707 0.79233 8.48026 0.891005L6.02326 5.76L0.513011 6.543C0.016886 6.61275 -0.175489 7.2585 0.194636 7.61175L4.15801 11.3873L3.22426 16.7085V16.7063ZM8.74239 13.5934L4.59564 15.7241L5.37639 11.2725C5.39468 11.17 5.38752 11.0646 5.35555 10.9656C5.32357 10.8665 5.26776 10.7768 5.19301 10.7044L1.92376 7.58813L6.48226 6.94013C6.57665 6.92588 6.66619 6.88895 6.74319 6.83252C6.82019 6.7761 6.88236 6.70185 6.92439 6.61613L9.00001 2.50088L11.0779 6.61613C11.1199 6.70185 11.1821 6.7761 11.2591 6.83252C11.3361 6.88895 11.4256 6.92588 11.52 6.94013L16.0785 7.587L12.8093 10.7033C12.7343 10.7758 12.6784 10.8657 12.6464 10.965C12.6145 11.0642 12.6074 11.1699 12.6259 11.2725L13.4066 15.7241L9.25989 13.5934C9.1797 13.552 9.09079 13.5305 9.00057 13.5305C8.91036 13.5305 8.82145 13.552 8.74126 13.5934H8.74239Z" fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_6_28">
                    <rect width="18" height="18" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="Article-value">
            <span>rate this article</span>
            <br />
            <span>0 reviews</span>
          </div>
        </div>
        <div className="Article-box">
          <div className="Article-key">
            <span className="Article-text-key">Color:</span>
            <span>Yellow</span>
          </div>
          <div className="Article-value Article-box-list">
            <div className="Article-circle-border">
              <div
                className="Article-circle"
                style={{
                  backgroundColor: "orangered"
                }}
              ></div>
            </div>
            <div className="Article-circle-border">
              <div
                className="Article-circle"
                style={{
                  backgroundColor: "greenyellow"
                }}
              ></div>
            </div>
            <div className="Article-circle-border active">
              <div
                className="Article-circle"
                style={{
                  backgroundColor: "yellow"
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="Article-box">
          <div className="Article-key">
            <span className="Article-text-key">Size:</span>
            <span>choose size</span>
          </div>
          <div className="Article-value Article-box-list">
            <div className="Article-square-border">
              <span>XS</span>
            </div>
            <div className="Article-square-border">
              <span>S</span>
            </div>
            <div className="Article-square-border">
              <span>M</span>
            </div>
            <div className="Article-square-border">
              <span>L</span>
            </div>
            <div className="Article-square-border">
              <span>XL</span>
            </div>
          </div>
        </div>
        <article className="Article-box Article-description-box">
          <h2 className="heading Article-heading">Description</h2>
          <p>{article.description}</p>
        </article>
        <div className="Article-box">
          <button
            className="Article-add-to-cart"
            onClick={() => props.addToCart()}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )} else { articleElement = (
    <div className="content Article">
      <Helmet>
        <title>Article not found | Ridgeline</title>
        <meta property="og:title" content={`Article not found | Ridgeline`} />
      </Helmet>
      <nav className="Article-breadcrumb">
        <Link to="/">Home</Link>
      </nav>
      <div>
        <h1 className="heading Article-title">This article does not exist</h1>
      </div>
    </div>
  )}
  return articleElement;
};

export default Article;

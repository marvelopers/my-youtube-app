import React from 'react';
import { GREY_1 } from 'src/styles/colors';

const SearchIcon = () => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10ZM2 10C2 5.58172 5.58172 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
      fill={`${GREY_1}`}
    />
    <path
      d="M23 24C22.7342 24.0016 22.4787 23.8972 22.29 23.71L16 17.42C15.6079 17.0279 15.6079 16.3921 16 16C16.3921 15.6079 17.0279 15.6079 17.42 16L23.71 22.28C23.8993 22.4678 24.0058 22.7234 24.0058 22.99C24.0058 23.2567 23.8993 23.5123 23.71 23.7C23.5229 23.8909 23.2672 23.9989 23 24Z"
      fill={`${GREY_1}`}
    />
  </svg>
);

export default SearchIcon;

import React from 'react';
import { GREY_1 } from '../../styles/colors';

interface ShuffleIconProps {
  color?: string;
}

const ShuffleIcon = ({ color = `${GREY_1}` }: ShuffleIconProps) => (
  <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.92 13.62C22.8724 13.4973 22.801 13.3851 22.71 13.29L19.71 10.29C19.4563 10.0363 19.0866 9.93728 18.7401 10.0301C18.3936 10.123 18.123 10.3936 18.0301 10.7401C17.9373 11.0866 18.0363 11.4563 18.29 11.71L19.59 13H15C14.6957 12.9986 14.4086 12.8587 14.22 12.62L11.72 9.5L14.22 6.38C14.4086 6.14126 14.6957 6.00141 15 6H19.63L18.33 7.29C18.1407 7.47777 18.0342 7.73337 18.0342 8C18.0342 8.26664 18.1407 8.52224 18.33 8.71C18.5178 8.89931 18.7734 9.0058 19.04 9.0058C19.3066 9.0058 19.5622 8.89931 19.75 8.71L22.75 5.71C22.841 5.6149 22.9124 5.50275 22.96 5.38C23.06 5.13654 23.06 4.86346 22.96 4.62C22.9124 4.49725 22.841 4.38511 22.75 4.29L19.75 1.29C19.3579 0.89788 18.7221 0.89788 18.33 1.29C17.9379 1.68212 17.9379 2.31788 18.33 2.71L19.59 4H15C14.0889 4.00179 13.2279 4.41754 12.66 5.13L10.4 7.9L7.4 4.12C6.81702 3.39463 5.93041 2.98088 5 3H1C0.447715 3 0 3.44772 0 4C0 4.55229 0.447715 5 1 5H5C5.30427 5.00141 5.59135 5.14126 5.78 5.38L9.08 9.5L5.78 13.62C5.59135 13.8587 5.30427 13.9986 5 14H1C0.447715 14 0 14.4477 0 15C0 15.5523 0.447715 16 1 16H5C5.91113 15.9982 6.77207 15.5825 7.34 14.87L10.34 11.1L12.56 13.88C13.1516 14.6167 14.0557 15.0317 15 15H19.63L18.33 16.29C18.1407 16.4778 18.0342 16.7334 18.0342 17C18.0342 17.2666 18.1407 17.5222 18.33 17.71C18.5178 17.8993 18.7734 18.0058 19.04 18.0058C19.3066 18.0058 19.5622 17.8993 19.75 17.71L22.75 14.71C22.841 14.6149 22.9124 14.5028 22.96 14.38C23.0474 14.1313 23.033 13.8582 22.92 13.62Z"
      fill={color}
    />
  </svg>
);

export default ShuffleIcon;

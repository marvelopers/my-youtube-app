import React from 'react';
import { GREY_1, WANTED_RED } from '../../styles/colors';

interface HeartIconProps {
  selected?: boolean;
}

const HeartIcon = ({ selected = false }: HeartIconProps) => (
  <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {selected ? (
      <path
        d="M5.29714 0C2.43683 0 0 2.151 0 4.94461C0 6.87175 0.897274 8.49433 2.08645 9.83833C3.27154 11.1778 4.80049 12.302 6.18271 13.243L8.56759 14.8666C8.82874 15.0445 9.17126 15.0445 9.43241 14.8666L11.8173 13.243C13.1996 12.302 14.7284 11.1778 15.9135 9.83833C17.1028 8.49433 18 6.87175 18 4.94461C18 2.151 15.5632 0 12.7029 0C11.2284 0 9.93106 0.695316 9 1.59499C8.06894 0.695316 6.77157 0 5.29714 0Z"
        fill={`${WANTED_RED}`}
      />
    ) : (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7.91139C0 3.4416 4.06138 0 8.82857 0C11.2859 0 13.4482 1.11251 15 2.55199C16.5518 1.11251 18.714 0 21.1714 0C25.9387 0 30 3.4416 30 7.91139C30 10.9733 28.6476 13.6658 26.7741 15.9418C24.9036 18.214 22.4571 20.1423 20.1146 21.7092C19.2197 22.3078 18.3146 22.8598 17.4862 23.2671C16.7083 23.6496 15.8138 24 15 24C14.1862 24 13.2917 23.6496 12.5138 23.2671C11.6854 22.8598 10.7802 22.3078 9.88548 21.7092C7.54294 20.1423 5.09635 18.214 3.22598 15.9418C1.35237 13.6658 0 10.9733 0 7.91139ZM8.82857 2.48276C5.26414 2.48276 2.57143 5.01368 2.57143 7.91139C2.57143 10.2344 3.59278 12.3972 5.23901 14.397C6.88848 16.4008 9.10786 18.1687 11.3498 19.6684C12.1982 20.2358 12.9972 20.7186 13.6809 21.0548C14.4147 21.4156 14.8401 21.5172 15 21.5172C15.1599 21.5172 15.5853 21.4156 16.3191 21.0548C17.0028 20.7186 17.8018 20.2358 18.6502 19.6684C20.8922 18.1687 23.1115 16.4008 24.761 14.397C26.4072 12.3972 27.4286 10.2344 27.4286 7.91139C27.4286 5.01368 24.7358 2.48276 21.1714 2.48276C19.1242 2.48276 17.2128 3.66359 16.0193 5.16235C15.7759 5.46796 15.3993 5.64705 15 5.64705C14.6007 5.64705 14.2241 5.46796 13.9807 5.16235C12.7872 3.66359 10.8757 2.48276 8.82857 2.48276Z"
        fill={`${GREY_1}`}
      />
    )}
  </svg>
);

export default HeartIcon;

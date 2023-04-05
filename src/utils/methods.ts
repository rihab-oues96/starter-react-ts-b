import ImAvatar from '../assets/img/icons/avatar.png';
import ImAvatarMale from '../assets/img/icons/avatar-male.png';
import ImAvatarFemale from '../assets/img/icons/avatar-female.png';
import { ReactNode } from 'react';

type Props = {
  avatar?: ReactNode;
  gender?: ReactNode;
};
export const avatarByGender = ({ avatar, gender }: Props) => {
  if (avatar !== null) {
    return avatar;
  }
  if (gender === 'male') {
    return ImAvatarMale;
  }
  if (gender === 'female') {
    return ImAvatarFemale;
  }
  return ImAvatar;
};

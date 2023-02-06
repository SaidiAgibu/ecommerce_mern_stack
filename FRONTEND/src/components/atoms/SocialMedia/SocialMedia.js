import styled from 'styled-components';
import twitterIcon from '../../icons/twitter.svg';
import facebookIcon from '../../icons/facebook.svg';
import instagramIcon from '../../icons/instagram.svg';

const icons = {
  twitter: twitterIcon,
  facebook: facebookIcon,
  instagram: instagramIcon,
};

const SocialMedia = styled.a`
  display: block;
  margin-right: 10px;
  width: 36px;
  height: 36px;
  transition: 0.2s;
  cursor: pointer;
  background: url(${({ type }) => icons[type]}) no-repeat center;
  &:hover {
    filter: brightness(120%);
  }
`;

export default SocialMedia;

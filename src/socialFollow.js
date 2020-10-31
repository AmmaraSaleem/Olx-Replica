import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faInstagram,
  faSkype,
  faYoutube

} from '@fortawesome/free-brands-svg-icons';
export default function socialFollow() {
  return (
    <div>
      <FontAwesomeIcon icon={faFacebook} size="2x" />
      <FontAwesomeIcon icon={faSkype} size="2x" />
      <FontAwesomeIcon icon={faYoutube} size="2x" />
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </div>
  )
}

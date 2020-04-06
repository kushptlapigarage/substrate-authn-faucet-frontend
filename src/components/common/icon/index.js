import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons/faArrowCircleDown';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowCircleRight';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faWallet } from '@fortawesome/free-solid-svg-icons/faWallet';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons/faFileSignature';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle';
import { faCopy } from '@fortawesome/free-solid-svg-icons/faCopy';
import Visibility from '@material-ui/icons/Visibility';
import Settings from '@material-ui/icons/Settings';
import MoreVert from '@material-ui/icons/MoreVert';
import WifiOff from '@material-ui/icons/WifiOff';

const IconEdit = props => (
  // eslint-disable-next-line react/prop-types
  <FontAwesomeIcon icon={faEdit} style={{ color: '#2f112b', fontSize: props.size }} {...props} />
);

const IconTransferFromTo = props => (
  <div
    style={{
      marginTop: '12px',
      paddingLeft: '15px',
      display: 'flex',
      flexDirection: 'row',
      width: '50%',
    }}
    {...props}
  >
    <FontAwesomeIcon
      icon={faArrowCircleDown}
      style={{
        color: '#000000',
        opacity: 1,
        fontSize: 21.2,
      }}
    />
  </div>
);

const IconTransfer = props => (
  <div {...props}>
    <FontAwesomeIcon
      icon={faArrowCircleRight}
      style={{ color: 'rgba(112, 112, 112, 1)', fontSize: '16px' }}
    />
  </div>
);

// eslint-disable-next-line react/prop-types
const IconSettings = props => <Settings style={{ ...props.style }} {...props} />;

// eslint-disable-next-line react/prop-types
const IconVisibility = props => <Visibility style={{ ...props.style }} {...props} />;

const WalletDropDownIcon = props => (
  <div {...props}>
    <FontAwesomeIcon
      icon={faWallet}
      style={{
        width: '18.29px',
        height: 16,
        color: 'rgba(255, 255, 255, 1)',
      }}
    />
    <MoreVert
      style={{
        fontSize: '1.5em',
        color: 'rgba(255, 255, 255, 1)',
      }}
    />
  </div>
);

const IconCheckCircle = props => (
  <div {...props}>
    <FontAwesomeIcon
      icon={faCheckCircle}
      style={{ width: 250, height: 250, color: 'rgba(112, 112, 112, 1)' }}
    />
  </div>
);

const NetworkDisconnectionIcon = props => (
  <div {...props}>
    <WifiOff
      style={{
        fontSize: '1.5em',
        color: 'rgba(255, 255, 255, 1)',
      }}
    />
  </div>
);


const SolidWallet = props => (
  <div {...props}>
    <FontAwesomeIcon
      icon={faWallet}
      style={{
        width: 24,
        height: 21,
        color: 'rgba(255, 255, 255, 1)'
      }}
    />
  </div>
);

const PaperPlane = props => (
  <div {...props}>
    <FontAwesomeIcon
      icon={faPaperPlane}
      style={{
        width: 24,
        height: 21,
        color: props.color
      }}
    />
  </div>
);

const FileSignature = props => (
  <div {...props}>
    <FontAwesomeIcon
      icon={faFileSignature}
      style={{
        width: 24,
        height: 21,
        color: props.color
      }}
    />
  </div>
);

const SignInIcon = props => (
  <div {...props}>
    <FontAwesomeIcon
      icon={faSignInAlt}
      style={{
        width: 24,
        height: 21,
        color: props.color
      }}
    />
  </div>
);

const SignOutIcon = props => (
  <div {...props}>
    <FontAwesomeIcon
      icon={faSignOutAlt}
      style={{
        width: 24,
        height: 21,
        color: props.color
      }}
    />
  </div>
);

const DeniedIcon = props => (
  <div {...props}>
    <FontAwesomeIcon
      icon={faTimesCircle}
      style={{
        width: props.width || 100,
        height: props.height || 100,
        color: props.color
      }}
    />
  </div>
);

const CopyIcon = props => (
  <div {...props}>
    <FontAwesomeIcon
      icon={faCopy}
      style={{
        width: 18,
        height: 16,
        color: props.color
      }}
    />
  </div>
);

export {
  IconEdit,
  IconTransferFromTo,
  IconTransfer,
  IconVisibility,
  WalletDropDownIcon,
  IconSettings,
  IconCheckCircle,
  NetworkDisconnectionIcon,
  SolidWallet,
  PaperPlane,
  FileSignature,
  SignInIcon,
  SignOutIcon,
  DeniedIcon,
  CopyIcon
};

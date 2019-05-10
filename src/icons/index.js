// NOTE: using `require` here is needed since we have to use `module.exports` below. Webpack won't
// let you mix `import/export` and `module.exports`.
import React from 'react';
import propTypes from 'prop-types';
import colorVariables from '../../variables/colors.json';

// A list of all density icons.
const ICONS = {
  ImageUpload: ({color, width, height}) => <svg width={width || '18'} height={height || '18'} viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'>
    <g id='Page-1' fill='none' fillRule='evenodd'>
        <g id='IconImageUpload' transform='translate(-1 -1)'>
            <rect id='bounds' fillOpacity='0' fill={color} width='20' height='20'
            />
            <polyline id='icon-square-copy' stroke={color} strokeWidth='1.5' strokeLinecap='square'
            strokeLinejoin='round' points='5 8 2 8 2 18 18 18 18 8 15 8' />
            <polyline id='Stroke-3' stroke={color} strokeWidth='1.5' strokeLinecap='square'
            strokeLinejoin='round' points='13 5 10 2 7 5' />
            <path d='M10,8 L10,3' id='Stroke-4' stroke={color} strokeWidth='1.5'
            strokeLinecap='square' strokeLinejoin='round' />
            <polyline id='Path-2' stroke={color} strokeWidth='1.5' points='1.99926758 18.0160522 6.0098877 13.0065918 9 15.0160522 13.0057373 10.972168 18 18.0160522'
            />
        </g>
    </g>
  </svg>,
  L: ({color, width, height}) => <svg width={width || '6'} height={height || '8'} viewBox='0 0 6 8' xmlns='http://www.w3.org/2000/svg'>
    <g id='1' fill='none' fillRule='evenodd'>
        <g id='icons' transform='translate(-389 -576)'>
            <g id='IconL' transform='translate(382 570)'>
                <rect id='bounds' fillOpacity='0' fill='#E3E3E6' width='20' height='20'
                />
                <polyline id='Path-10' stroke={color} strokeWidth='1.5' points='8 6 8 13 13 13'
                />
            </g>
          </g>
      </g>
  </svg>,
  Image: ({color, width, height}) => <svg width={width || '18'} height={height || '18'} viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'>
      <g id='Page-1' fill='none' fillRule='evenodd'>
          <g id='IconImage' transform='translate(-1 -1)'>
              <rect id='bounds' fillOpacity='0' fill={color} width='20' height='20'
              />
              <polygon id='icon-square-copy' stroke={color} strokeWidth='1.5' strokeLinecap='round'
              strokeLinejoin='round' points='2 18 18 18 18 2 2 2' />
              <polyline id='Path-2' stroke={color} strokeWidth='1.5' points='1.99926758 18.0160522 6.0098877 11.0065918 9 14.0160522 13.0057373 6.97216797 18 18.0160522'
              />
              <circle id='Oval' stroke={color} strokeWidth='1.5' cx='6' cy='6' r='2'
              />
          </g>
      </g>
  </svg>,
  Folder: ({color, width, height}) => <svg width='18' height='17' viewBox='0 0 18 17' xmlns='http://www.w3.org/2000/svg'>
      <g id='1' fill='none' fillRule='evenodd'>
          <g id='icons' transform='translate(-331 -571)'>
              <g id='IconFolder' transform='translate(330 570)'>
                  <rect id='bounds' fillOpacity='0' fill='#E3E3E6' width='20' height='20'
                  />
                  <polygon id='Stroke-3' stroke={color} strokeWidth='1.5' strokeLinecap='round'
                  strokeLinejoin='round' points='2 17 18 17 18 3.875 10 3.875 8 2 2 2 2 3.875'
                  />
                  <rect id='Rectangle' stroke={color} strokeWidth='1.5' strokeLinecap='round'
                  strokeLinejoin='round' x='2' y='7' width='16' height='10' />
              </g>
          </g>
      </g>
  </svg>,
  Info: ({color, width, height}) => <svg width={width || '18'} height={height || '18'} viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'>
      <g id='Page-1' fill='none' fillRule='evenodd'>
          <g id='IconInfo' transform='translate(-1 -1)'>
              <rect id='bounds' fillOpacity='0' fill={color} width='20' height='20'
              />
              <path d='M18,10 C18,14.4182222 14.4183333,18 10,18 C5.58177778,18 2,14.4182222 2,10 C2,5.58166667 5.58177778,2 10,2 C14.4183333,2 18,5.58166667 18,10 L18,10 Z'
              id='Stroke-1' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'
              />
              <path d='M10,14 L10,9' id='Stroke-3' stroke={color} strokeWidth='1.5' strokeLinecap='square'
              strokeLinejoin='round' />
              <path d='M10,6 L10,5.9219' id='Stroke-5' stroke={color} strokeWidth='1.5'
              strokeLinecap='square' strokeLinejoin='round' />
          </g>
      </g>
  </svg>,
  StopWatch: ({color, width, height}) => <svg width={width || '16'} height={height || '18'} viewBox="0 0 16 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="1.0" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="icons" transform="translate(-435.000000, -363.000000)">
            <g id="IconStopWatch" transform="translate(433.000000, 362.000000)">
                <rect id="bounds" fillOpacity="0" fill="#E3E3E6" x="0" y="0" width="20" height="20"></rect>
                <path d="M17,11 C17,14.866 13.866,18 10,18 C6.134,18 3,14.866 3,11 C3,7.134 6.134,4 10,4 C13.866,4 17,7.134 17,11 L17,11 Z" id="Stroke-1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M10,2 L10,4" id="Stroke-3" stroke={color} strokeWidth="1.5" strokeLinejoin="round"></path>
                <path d="M16.3639667,4.63603333 L14.9497444,6.05025556" id="Stroke-5" stroke={color} strokeWidth="1.5" strokeLinejoin="round"></path>
                <path d="M12,2 L8,2" id="Stroke-7" stroke={color} strokeWidth="1.5" strokeLinejoin="round"></path>
                <polyline id="Stroke-9" stroke={color} strokeWidth="1.5" strokeLinejoin="round" points="6 11 10 11 10 7"></polyline>
            </g>
        </g>
    </g>
  </svg>,
  Gym: ({color, width, height}) => <svg width={width || "18"} height={height || "12"} viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconGym" transform="translate(-1 -4)" fill={color} fillRule="nonzero">
              <path d="M5,15.75 C4.58578644,15.75 4.25,15.4142136 4.25,15 L4.25,5 C4.25,4.58578644 4.58578644,4.25 5,4.25 L8,4.25 C8.41421356,4.25 8.75,4.58578644 8.75,5 L8.75,15 C8.75,15.4142136 8.41421356,15.75 8,15.75 L5,15.75 Z M7.25,14.25 L7.25,5.75 L5.75,5.75 L5.75,14.25 L7.25,14.25 Z"
              id="Stroke-1" />
              <path d="M2,13.75 C1.58578644,13.75 1.25,13.4142136 1.25,13 L1.25,7 C1.25,6.58578644 1.58578644,6.25 2,6.25 L5,6.25 C5.41421356,6.25 5.75,6.58578644 5.75,7 L5.75,13 C5.75,13.4142136 5.41421356,13.75 5,13.75 L2,13.75 Z M2.75,12.25 L4.25,12.25 L4.25,7.75 L2.75,7.75 L2.75,12.25 Z"
              id="Stroke-3" />
              <path d="M15,13.75 C14.5857864,13.75 14.25,13.4142136 14.25,13 L14.25,7 C14.25,6.58578644 14.5857864,6.25 15,6.25 L18,6.25 C18.4142136,6.25 18.75,6.58578644 18.75,7 L18.75,13 C18.75,13.4142136 18.4142136,13.75 18,13.75 L15,13.75 Z M15.75,12.25 L17.25,12.25 L17.25,7.75 L15.75,7.75 L15.75,12.25 Z"
              id="Stroke-4" />
              <path d="M12,15.75 C11.5857864,15.75 11.25,15.4142136 11.25,15 L11.25,5 C11.25,4.58578644 11.5857864,4.25 12,4.25 L15,4.25 C15.4142136,4.25 15.75,4.58578644 15.75,5 L15.75,15 C15.75,15.4142136 15.4142136,15.75 15,15.75 L12,15.75 Z M14.25,14.25 L14.25,5.75 L12.75,5.75 L12.75,14.25 L14.25,14.25 Z"
              id="Stroke-5" />
              <polygon id="Stroke-7" points="7.25 10.75 12.75 10.75 12.75 9.25 7.25 9.25"
              />
          </g>
      </g>
  </svg>,
  Person: ({color, width, height}) => <svg width={width || "14"} height={height || "18"} viewBox="0 0 14 18" xmlns="http://www.w3.org/2000/svg">
    <g id='Icons' fill='none' fillRule='evenodd'>
      <g id='icons' transform='translate(-127 -379)'>
          <g id='IconPerson' transform='translate(124 378)'>
              <rect id='bounds' fillOpacity='0' fill='#E3E3E6' width='20' height='20'
              />
              <path d='M13.4285667,6 C13.4285667,8.20911111 11.8935667,10 10.0000111,10 C8.10645556,10 6.57145556,8.20911111 6.57145556,6 C6.57145556,3.79088889 8.10645556,2 10.0000111,2 C11.8935667,2 13.4285667,3.79088889 13.4285667,6 L13.4285667,6 Z'
              id='Stroke-1' stroke={color} strokeWidth='1.5' strokeLinejoin='round'
              />
              <path d='M16,18 L16,13 C16,11.3368889 14.6392222,10 12.9761111,10 L7.02388889,10 C5.36077778,10 4,11.3368889 4,13 L4,18 L16,18 L16,18 Z'
              id='Stroke-3' stroke={color} strokeWidth='1.5' strokeLinejoin='round'
              />
          </g>
      </g>
  </g>
  </svg>,
  Lightning: ({color, width, height}) => <svg width={width || "16"} height={height || "18"} viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconLightning" transform="translate(-2 -1)" fill={color} fillRule="nonzero">
              <path d="M7.91531294,12.7794118 L3,12.7794118 C2.33182136,12.7794118 1.99719627,11.9715553 2.46966991,11.4990817 L12.3961405,1.57261109 C12.9557578,1.01299383 13.8882515,1.58930666 13.6379831,2.340112 L11.9817459,7.30882353 L16.8970588,7.30882353 C17.5652375,7.30882353 17.8998626,8.11667997 17.4273889,8.58915362 L7.50091832,18.5156242 C6.94130106,19.0752415 6.00880731,18.4989286 6.25907576,17.7481233 L7.91531294,12.7794118 Z M4.81066017,11.2794118 L8.95588235,11.2794118 C9.46780065,11.2794118 9.8292776,11.7809343 9.66739483,12.2665826 L8.68677244,15.2084497 L15.0863987,8.80882353 L10.9411765,8.80882353 C10.4292582,8.80882353 10.0677812,8.30730104 10.229664,7.8216527 L11.2102864,4.87978556 L4.81066017,11.2794118 Z"
              id="icon-lightning" />
          </g>
      </g>
  </svg>,
  Bucket: ({color, width, height}) => <svg width={width || "16"} height={height || "14"} viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconBucket" transform="translate(-2 -3)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <g id="Group-7" transform="translate(2 4)" stroke={color} strokeLinejoin="round"
              strokeWidth="1.5">
                  <polygon id="Stroke-1" points="2 0 4 12 12 12 14 0" />
                  <path d="M9.06065556,4.56065556 C8.47487778,5.14643333 7.5251,5.14643333 6.93932222,4.56065556 C6.35354444,3.97487778 6.35354444,3.0251 6.93932222,2.43932222 C7.5251,1.85354444 8.47487778,1.85354444 9.06065556,2.43932222 C9.64643333,3.0251 9.64643333,3.97487778 9.06065556,4.56065556 L9.06065556,4.56065556 Z"
                  id="Stroke-3" strokeLinecap="round" />
                  <path d="M0,0 L16,0" id="Stroke-5" />
                  <path d="M6.93934444,4.56065556 L1.00001111,10.9999889" id="Stroke-7"
                  />
              </g>
          </g>
      </g>
  </svg>,
  Plane: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconPlane" transform="translate(-1 -1)" fill={color} fillRule="nonzero">
              <path d="M7.25,7.53647451 L1.6645898,10.3291796 C1.41050178,10.4562236 1.25,10.715921 1.25,11 L1.25,14 C1.25,14.5119183 1.75152249,14.8733953 2.23717082,14.7115125 L7.25,13.0405694 L7.25,14.5364745 L5.6645898,15.3291796 C5.41050178,15.4562236 5.25,15.715921 5.25,16 L5.25,18 C5.25,18.4142136 5.58578644,18.75 6,18.75 L14,18.75 C14.4142136,18.75 14.75,18.4142136 14.75,18 L14.75,16 C14.75,15.715921 14.5894982,15.4562236 14.3354102,15.3291796 L12.75,14.5364745 L12.75,13.0405694 L17.7628292,14.7115125 C18.2484775,14.8733953 18.75,14.5119183 18.75,14 L18.75,11 C18.75,10.715921 18.5894982,10.4562236 18.3354102,10.3291796 L12.75,7.53647451 L12.75,4 L11.25,4 L11.25,8 C11.25,8.28407904 11.4105018,8.54377638 11.6645898,8.67082039 L17.25,11.4635255 L17.25,12.9594306 L12.2371708,11.2884875 C11.7515225,11.1266047 11.25,11.4880817 11.25,12 L11.25,15 C11.25,15.284079 11.4105018,15.5437764 11.6645898,15.6708204 L13.25,16.4635255 L13.25,17.25 L6.75,17.25 L6.75,16.4635255 L8.3354102,15.6708204 C8.58949822,15.5437764 8.75,15.284079 8.75,15 L8.75,12 C8.75,11.4880817 8.24847751,11.1266047 7.76282918,11.2884875 L2.75,12.9594306 L2.75,11.4635255 L8.3354102,8.67082039 C8.58949822,8.54377638 8.75,8.28407904 8.75,8 L8.75,4 L7.25,4 L7.25,7.53647451 Z"
              id="Stroke-1" />
              <path d="M8.75,4 C8.75,3.30965801 9.30965801,2.75 10,2.75 C10.690342,2.75 11.25,3.30965801 11.25,4 L12.75,4 C12.75,2.48123088 11.5187691,1.25 10,1.25 C8.48123088,1.25 7.25,2.48123088 7.25,4 L8.75,4 Z"
              id="Stroke-3" />
          </g>
      </g>
  </svg>,
  Money: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconMoney" transform="translate(-1 -1)" fill={color} fillRule="nonzero">
              <path d="M2.75,10 C2.75,14.0040087 5.99599134,17.25 10,17.25 C14.0040798,17.25 17.25,14.0040486 17.25,10 C17.25,5.99588023 14.0041198,2.75 10,2.75 C5.99595135,2.75 2.75,5.99592021 2.75,10 Z M1.25,10 C1.25,5.16748987 5.16752745,1.25 10,1.25 C14.8325469,1.25 18.75,5.1674531 18.75,10 C18.75,14.8324725 14.8325101,18.75 10,18.75 C5.16756422,18.75 1.25,14.8324358 1.25,10 Z"
              id="Stroke-1" />
              <path d="M13.1500111,8 C13.1500111,6.44790798 11.7125123,5.25 10.0000111,5.25 C8.28750988,5.25 6.85001111,6.44790798 6.85001111,8 C6.85001111,9.55209202 8.28750988,10.75 10.0000111,10.75 L10.0000111,9.25 C9.06160811,9.25 8.35001111,8.6570063 8.35001111,8 C8.35001111,7.3429937 9.06160811,6.75 10.0000111,6.75 C10.9384141,6.75 11.6500111,7.3429937 11.6500111,8 L13.1500111,8 Z"
              id="Stroke-3" />
              <path d="M6.84998889,12 C6.84998889,13.552092 8.28748765,14.75 9.99998889,14.75 C11.7124901,14.75 13.1499889,13.552092 13.1499889,12 C13.1499889,10.447908 11.7124901,9.25 9.99998889,9.25 L9.99998889,10.75 C10.9383919,10.75 11.6499889,11.3429937 11.6499889,12 C11.6499889,12.6570063 10.9383919,13.25 9.99998889,13.25 C9.06158589,13.25 8.34998889,12.6570063 8.34998889,12 L6.84998889,12 Z"
              id="Stroke-5" />
              <polygon id="Stroke-7" points="9.25 4 9.25 16 10.75 16 10.75 4" />
          </g>
      </g>
  </svg>,
  Soup: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconSoup" transform="translate(-1 -1)" fill={color} fillRule="nonzero">
              <path d="M2.78892499,10.7465793 C3.16684474,14.3667532 6.25018659,17.1914069 10,17.1914069 C13.7498823,17.1914069 16.8331675,14.3667845 17.2110765,10.7465793 L2.78892499,10.7465793 Z M18.75,9.99657931 C18.75,14.7997474 14.8313527,18.6914069 10,18.6914069 C5.16872164,18.6914069 1.25,14.7997109 1.25,9.99657931 C1.25,9.58236575 1.58578644,9.24657931 2,9.24657931 L18,9.24657931 C18.4142136,9.24657931 18.75,9.58236575 18.75,9.99657931 Z"
              id="Stroke-1" />
              <path d="M9.46174456,1.52946724 C9.34115216,1.65374725 9.18223142,1.85326153 9.02588809,2.11984878 C8.42176924,3.14995593 8.37684001,4.31763642 9.28937354,5.36871412 C9.34658873,5.43461592 9.40729773,5.49945645 9.47150813,5.56322402 C9.55799386,5.64017352 9.6540801,5.74195867 9.75206571,5.88467978 C10.1139506,6.41178385 10.1139506,6.88212563 9.49015659,7.46031814 L10.5098434,8.56042668 C11.7379012,7.42214411 11.7379012,6.12696865 10.988675,5.03568191 C10.8088829,4.77380532 10.6271913,4.58133759 10.4892548,4.46261702 C10.4902947,4.46096637 10.4548445,4.42310368 10.4220536,4.38533433 C9.99179343,3.88975045 10.0103979,3.40623217 10.3197909,2.87867382 C10.408818,2.72687027 10.4952676,2.61833858 10.5382554,2.5740362 L9.46174456,1.52946724 Z"
              id="Stroke-3" />
              <path d="M14.1160668,1.52946724 C13.9954744,1.65374725 13.8365536,1.85326153 13.6802103,2.11984878 C13.0760915,3.14995593 13.0311622,4.31763642 13.9436958,5.36871412 C14.000911,5.43461592 14.06162,5.49945645 14.1258304,5.56322402 C14.2123161,5.64017352 14.3084023,5.74195867 14.4063879,5.88467978 C14.7682728,6.41178385 14.7682728,6.88212563 14.1444788,7.46031814 L15.1641656,8.56042668 C16.3922235,7.42214411 16.3922235,6.12696865 15.6429973,5.03568191 C15.4632051,4.77380532 15.2815135,4.58133759 15.143577,4.46261702 C15.1446169,4.46096637 15.1091668,4.42310368 15.0763759,4.38533433 C14.6461157,3.88975045 14.6647201,3.40623217 14.9741131,2.87867382 C15.0631402,2.72687027 15.1495898,2.61833858 15.1925777,2.5740362 L14.1160668,1.52946724 Z"
              id="Stroke-5" />
              <path d="M4.72100011,1.52946724 C4.60040771,1.65374725 4.44148698,1.85326153 4.28514364,2.11984878 C3.68102479,3.14995593 3.63609557,4.31763642 4.5486291,5.36871412 C4.60584429,5.43461592 4.66655329,5.49945645 4.73076369,5.56322402 C4.81724942,5.64017352 4.91333565,5.74195867 5.01132127,5.88467978 C5.37320616,6.41178385 5.37320616,6.88212563 4.74941215,7.46031814 L5.76909896,8.56042668 C6.9971568,7.42214411 6.9971568,6.12696865 6.24793059,5.03568191 C6.06813842,4.77380532 5.88644688,4.58133759 5.74851033,4.46261702 C5.74955025,4.46096637 5.7141001,4.42310368 5.68130919,4.38533433 C5.25104899,3.88975045 5.26965348,3.40623217 5.57904648,2.87867382 C5.66807352,2.72687027 5.75452315,2.61833858 5.797511,2.5740362 L4.72100011,1.52946724 Z"
              id="Stroke-7" />
          </g>
      </g>
  </svg>,
  DragDrop: ({color, width, height}) => <svg width={width || "18"} height={height || "17"} viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconDragDrop" transform="translate(-1 -2)" fill={color} fillRule="nonzero">
              <g id="Group-4" transform="translate(1 2)">
                  <path d="M16.15,7.25 L11.25,7.25 L11.25,8.75 L12,8.75 L15.4,8.75 L16.15,8.75 L16.15,7.25 Z M6.75,7.25 L1.85,7.25 L1.85,8.75 L6.75,8.75 L6.75,7.25 Z"
                  id="Stroke-3" />
                  <path d="M8.25,0.85 L8.25,5.75 L9.75,5.75 L9.75,0.85 L8.25,0.85 Z M8.25,10.25 L8.25,15.15 L9.75,15.15 L9.75,10.25 L8.25,10.25 Z"
                  id="Stroke-3" />
                  <path d="M10.6,3.46066017 L11.6606602,2.4 L9.53033009,0.269669914 C9.23743687,-0.0232233047 8.76256313,-0.0232233047 8.46966991,0.269669914 L6.33933983,2.4 L7.4,3.46066017 L9,1.86066017 L10.6,3.46066017 Z"
                  id="Stroke-3" />
                  <path d="M10.6,16.2606602 L11.6606602,15.2 L9.53033009,13.0696699 C9.23743687,12.7767767 8.76256313,12.7767767 8.46966991,13.0696699 L6.33933983,15.2 L7.4,16.2606602 L9,14.6606602 L10.6,16.2606602 Z"
                  id="Stroke-3-Copy-5" transform="rotate(-180 9 14.555)" />
                  <path d="M4.2,9.71599636 L5.26066017,8.65533619 L3.13033009,6.5250061 C2.83743687,6.23211288 2.36256313,6.23211288 2.06966991,6.5250061 L-0.0606601718,8.65533619 L1,9.71599636 L2.6,8.11599636 L4.2,9.71599636 Z"
                  id="Stroke-3-Copy-6" transform="rotate(-90 2.6 8.01)" />
                  <path d="M17,9.71599636 L18.0606602,8.65533619 L15.9303301,6.5250061 C15.6374369,6.23211288 15.1625631,6.23211288 14.8696699,6.5250061 L12.7393398,8.65533619 L13.8,9.71599636 L15.4,8.11599636 L17,9.71599636 Z"
                  id="Stroke-3-Copy-7" transform="rotate(90 15.4 8.01)" />
              </g>
          </g>
      </g>
  </svg>,
  Zoom: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconZoom" transform="translate(-1 -1)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <g id="Group" transform="translate(2 2)" stroke={color} strokeLinejoin="round"
              strokeWidth="1.5">
                  <path d="M9.5,13 C5.91019444,13 3,10.0898056 3,6.5 C3,2.91010417 5.91019444,0 9.5,0 C13.0898958,0 16,2.91010417 16,6.5 C16,10.0898056 13.0898958,13 9.5,13 Z"
                  id="icon_circle" strokeLinecap="round" />
                  <path d="M12.4224494,6.58823529 L6.76470588,6.58823529" id="Stroke-2"
                  strokeLinecap="square" />
                  <path d="M9.59357767,3.75936351 L9.59357767,9.41710708" id="Stroke-2"
                  strokeLinecap="square" />
                  <path d="M0,16 L4,12" id="Path-6" strokeLinecap="square" />
              </g>
          </g>
      </g>
  </svg>,
  Search: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconSearch" transform="translate(-1 -1)" fill={color} fillRule="nonzero">
              <g id="Group" transform="translate(0 1)">
                  <path d="M11.5,13.25 C14.6756495,13.25 17.25,10.6756248 17.25,7.5 C17.25,4.32431773 14.6756823,1.75 11.5,1.75 C8.32437522,1.75 5.75,4.32435052 5.75,7.5 C5.75,10.675592 8.32440801,13.25 11.5,13.25 Z M11.5,14.75 C7.49598088,14.75 4.25,11.5040191 4.25,7.5 C4.25,3.49592017 7.49595131,0.25 11.5,0.25 C15.5041094,0.25 18.75,3.4958906 18.75,7.5 C18.75,11.5040487 15.5040798,14.75 11.5,14.75 Z"
                  id="icon_circle" />
                  <polygon id="Path-6" points="2 18.0606602 7.06066017 13 6 11.9393398 0.939339828 17"
                  />
              </g>
          </g>
      </g>
  </svg>,
  Share: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconShare" transform="translate(-1 -1)" fill={color} fillRule="nonzero">
              <path d="M17.2499556,8.75 L17.2499556,17.25 L2.74995556,17.25 L2.74995556,8.75 L7.75006667,8.75 L7.75006667,7.25 L1.99995556,7.25 C1.58574199,7.25 1.24995556,7.58578644 1.24995556,8 L1.24995556,18 C1.24995556,18.4142136 1.58574199,18.75 1.99995556,18.75 L17.9999556,18.75 C18.4141691,18.75 18.7499556,18.4142136 18.7499556,18 L18.7499556,8 C18.7499556,7.58578644 18.4141691,7.25 17.9999556,7.25 L12.2499556,7.25 L12.2499556,8.75 L17.2499556,8.75 Z"
              id="Stroke-1" />
              <path d="M10,3.06066017 L13,6.06066017 L14.0606602,5 L10.5303301,1.46966991 C10.2374369,1.1767767 9.76256313,1.1767767 9.46966991,1.46966991 L5.93933983,5 L7,6.06066017 L10,3.06066017 Z"
              id="Stroke-3" />
              <polygon id="Stroke-4" points="10.75 14.75 10.75 2.25 9.25 2.25 9.25 14.75"
              />
          </g>
      </g>
  </svg>,
  Download: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconDownload" transform="translate(-1 -1)" fill={color} fillRule="nonzero">
              <path d="M17.25,4.75 L17.25,17.25 L2.75,17.25 L2.75,4.75 L7.75011111,4.75 L7.75011111,3.25 L2,3.25 C1.58578644,3.25 1.25,3.58578644 1.25,4 L1.25,18 C1.25,18.4142136 1.58578644,18.75 2,18.75 L18,18.75 C18.4142136,18.75 18.75,18.4142136 18.75,18 L18.75,4 C18.75,3.58578644 18.4142136,3.25 18,3.25 L12.25,3.25 L12.25,4.75 L17.25,4.75 Z"
              id="Stroke-1" />
              <path d="M7,9.93933983 L5.93933983,11 L9.46966991,14.5303301 C9.76256313,14.8232233 10.2374369,14.8232233 10.5303301,14.5303301 L14.0606602,11 L13,9.93933983 L10,12.9393398 L7,9.93933983 Z"
              id="Stroke-3" />
              <polygon id="Stroke-4" points="10.75 13.75 10.75 1.25 9.25 1.25 9.25 13.75"
              />
          </g>
      </g>
  </svg>,
  Export: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconExport" transform="translate(-1 -1)" fill={color} fillRule="nonzero">
              <path d="M15.25,17.25 L2.75,17.25 L2.75,4.75 L10.75,4.75 L10.75,3.25 L2,3.25 C1.58578644,3.25 1.25,3.58578644 1.25,4 L1.25,18 C1.25,18.4142136 1.58578644,18.75 2,18.75 L16,18.75 C16.4142136,18.75 16.75,18.4142136 16.75,18 L16.75,9.25 L15.25,9.25 L15.25,17.25 Z"
              id="Stroke-1" />
              <path d="M17.25,2.75 L17.25,7.75 L18.75,7.75 L18.75,2 C18.75,1.58578644 18.4142136,1.25 18,1.25 L12.25,1.25 L12.25,2.75 L17.25,2.75 Z"
              id="Stroke-3" />
              <polygon id="Stroke-5" points="17.4696699 1.46966991 6.46966991 12.4696699 7.53033009 13.5303301 18.5303301 2.53033009"
              />
          </g>
      </g>
  </svg>,
  Circle: ({color, width, height}) => <svg width={width || "18"} height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconCircle" transform="translate(-1 -1)" fill={color} fillRule="nonzero">
              <path d="M10,17.25 C14.0040798,17.25 17.25,14.0040486 17.25,10 C17.25,5.99588023 14.0041198,2.75 10,2.75 C5.99595135,2.75 2.75,5.99592021 2.75,10 C2.75,14.0040087 5.99599134,17.25 10,17.25 Z M10,18.75 C5.16756422,18.75 1.25,14.8324358 1.25,10 C1.25,5.16748987 5.16752745,1.25 10,1.25 C14.8325469,1.25 18.75,5.1674531 18.75,10 C18.75,14.8324725 14.8325101,18.75 10,18.75 Z"
              id="icon_circle" />
          </g>
      </g>
  </svg>,
  Progress: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconProgress" transform="translate(-1 -1)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <g id="Page-1" transform="translate(2 2)" stroke={color} strokeLinejoin="round"
              strokeWidth="1.5">
                  <path d="M0.106911111,7.05244444 C0.331133333,5.24011111 1.16157778,3.61555556 2.38902222,2.38811111 C3.6148,1.16233333 5.23657778,0.332444444 7.04591111,0.106888889"
                  id="Stroke-1" />
                  <path d="M7.04592222,15.9830444 C5.23658889,15.7573778 3.61492222,14.9276 2.38914444,13.7018222 C1.16158889,12.4743778 0.331144444,10.8498222 0.106922222,9.03748889"
                  id="Stroke-3" />
                  <path d="M15.9840444,9.04496667 C15.7583778,10.8543 14.9286,12.4759667 13.7028222,13.7017444 C12.4753778,14.9293 10.8508222,15.7597444 9.03837778,15.9839667"
                  id="Stroke-5" />
                  <path d="M9.04597778,0.106833333 C10.8553111,0.3325 12.4769778,1.16227778 13.7027556,2.38805556 C14.9285333,3.61383333 15.7584222,5.23561111 15.9840889,7.04494444"
                  id="Stroke-7" />
              </g>
          </g>
      </g>
  </svg>,
  Clock: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconClock" transform="translate(-1 -1)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <path d="M18,10 C18,14.4182222 14.4183333,18 10,18 C5.58177778,18 2,14.4182222 2,10 C2,5.58166667 5.58177778,2 10,2 C14.4183333,2 18,5.58166667 18,10 Z"
              id="Stroke-1" stroke={color} strokeWidth="1.5" strokeLinejoin="round"
              />
              <polyline id="Stroke-3" stroke={color} strokeWidth="1.5" strokeLinejoin="round"
              points="10 6 10 10 14 10" />
          </g>
      </g>
  </svg>,
  Globe: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconGlobe" transform="translate(-1 -1)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <path d="M18,10 C18,14.4182222 14.4183333,18 10,18 C5.58177778,18 2,14.4182222 2,10 C2,5.58166667 5.58177778,2 10,2 C14.4183333,2 18,5.58166667 18,10 Z"
              id="Stroke-1" stroke={color} strokeWidth="1.5" strokeLinejoin="round"
              />
              <path d="M18,10 C18,11.6568889 14.4183333,13 10,13 C5.58177778,13 2,11.6568889 2,10 C2,8.34311111 5.58177778,7 10,7 C14.4183333,7 18,8.34311111 18,10 Z"
              id="Stroke-3" stroke={color} strokeWidth="1.5" strokeLinejoin="round"
              />
              <path d="M10,2 C11.6568889,2 13,5.58166667 13,10 C13,14.4182222 11.6568889,18 10,18 C8.34311111,18 7,14.4182222 7,10 C7,5.58166667 8.34311111,2 10,2 Z"
              id="Stroke-5" stroke={color} strokeWidth="1.5" strokeLinejoin="round"
              />
          </g>
      </g>
  </svg>,
  Show: ({color, width, height}) => <svg width={width || "18"} height={height || "14"} viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconShow" transform="translate(-1 -3)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <path d="M10,16 C5.58177778,16 2,13.3136667 2,10 C2,6.68625 5.58177778,4 10,4 C14.4183333,4 18,6.68625 18,10 C18,13.3136667 14.4183333,16 10,16 Z"
              id="icon_circle" stroke={color} strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round" />
              <circle id="Oval-2" stroke={color} strokeWidth="1.5" cx="10" cy="10" r="2"
              />
          </g>
      </g>
  </svg>,
  Hide: ({color, width, height}) => <svg width={width || "18"} height={height || "14"} viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconHide" transform="translate(-1 -3)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <path d="M10,16 C5.58177778,16 2,13.3136667 2,10 C2,6.68625 5.58177778,4 10,4 C14.4183333,4 18,6.68625 18,10 C18,13.3136667 14.4183333,16 10,16 Z"
              id="icon_circle" stroke={color} strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round" />
              <path d="M2,10 L18,10" id="Path-9" stroke={color} strokeWidth="1.5" />
          </g>
      </g>
  </svg>,
  Locate: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconLocate" transform="translate(-1 -1)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <path d="M10,16 C6.68633333,16 4,13.3136667 4,10 C4,6.68625 6.68633333,4 10,4 C13.31375,4 16,6.68625 16,10 C16,13.3136667 13.31375,16 10,16 Z"
              id="icon_circle" stroke={color} strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round" />
              <path d="M1,10 L4,10" id="Path-8" stroke={color} strokeWidth="1.5" />
              <path d="M16,10 L19,10" id="Path-8-Copy-3" stroke={color} strokeWidth="1.5"
              />
              <path d="M10,19 L10,16" id="Path-8-Copy" stroke={color} strokeWidth="1.5"
              />
              <path d="M10,4 L10,1" id="Path-8-Copy-2" stroke={color} strokeWidth="1.5"
              />
          </g>
      </g>
  </svg>,
  Cards: ({color, width, height}) => <svg width={width || "18"} height={height || "17"} viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconCards" transform="translate(-1 -2)" fill={color} fillRule="nonzero">
              <path d="M2,18.75 C1.58578644,18.75 1.25,18.4142136 1.25,18 L1.25,10 C1.25,9.58578644 1.58578644,9.25 2,9.25 L18,9.25 C18.4142136,9.25 18.75,9.58578644 18.75,10 L18.75,18 C18.75,18.4142136 18.4142136,18.75 18,18.75 L2,18.75 Z M2.75,17.25 L17.25,17.25 L17.25,10.75 L2.75,10.75 L2.75,17.25 Z"
              id="icon-square-copy-2" />
              <path d="M4,10.75 C3.58578644,10.75 3.25,10.4142136 3.25,10 L3.25,6 C3.25,5.58578644 3.58578644,5.25 4,5.25 L16,5.25 C16.4142136,5.25 16.75,5.58578644 16.75,6 L16.75,10 C16.75,10.4142136 16.4142136,10.75 16,10.75 L4,10.75 Z M4.75,9.25 L15.25,9.25 L15.25,6.75 L4.75,6.75 L4.75,9.25 Z"
              id="icon-square-copy-3" />
              <path d="M6,6.75 C5.58578644,6.75 5.25,6.41421356 5.25,6 L5.25,3 C5.25,2.58578644 5.58578644,2.25 6,2.25 L14,2.25 C14.4142136,2.25 14.75,2.58578644 14.75,3 L14.75,6 C14.75,6.41421356 14.4142136,6.75 14,6.75 L6,6.75 Z M6.75,5.25 L13.25,5.25 L13.25,3.75 L6.75,3.75 L6.75,5.25 Z"
              id="icon-square-copy-4" />
          </g>
      </g>
  </svg>,
  Square: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconSquare" transform="translate(-1 -1)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <polygon id="icon-square" stroke={color} strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round" points="2 18 18 18 18 2 2 2" />
          </g>
      </g>
  </svg>,
  Menu: ({color, width, height}) => <svg width={width || "18"} height={height || "12"} viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconMenu" transform="translate(-1 -4)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <path d="M18,10 L2,10" id="Stroke-3" stroke={color} strokeWidth="1.5" strokeLinecap="square"
              strokeLinejoin="round" />
              <path d="M18,5 L2,5" id="Stroke-3-Copy" stroke={color} strokeWidth="1.5"
              strokeLinecap="square" strokeLinejoin="round" />
              <path d="M18,15 L2,15" id="Stroke-3-Copy-2" stroke={color} strokeWidth="1.5"
              strokeLinecap="square" strokeLinejoin="round" />
          </g>
      </g>
  </svg>,
  Refresh: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconRefresh" transform="translate(-1 -1)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <polyline id="Stroke-1" stroke={color} strokeWidth="2" strokeLinecap="square"
              strokeLinejoin="round" points="2 2 2 7 7 7" />
              <polyline id="Stroke-3" stroke={color} strokeWidth="2" strokeLinecap="square"
              strokeLinejoin="round" points="18 18 18 13 13 13" />
              <path d="M17.4184333,13.0001333 C16.2316556,15.9319111 13.3573222,18.0000222 9.99998889,18.0000222 C5.58176667,18.0000222 1.99998889,14.4182444 1.99998889,10.0000222"
              id="Stroke-5" stroke={color} strokeWidth="2" strokeLinejoin="round" />
              <path d="M2.58156667,6.99986667 C3.76834444,4.06808889 6.64267778,1.99997778 10.0000111,1.99997778 C14.4182333,1.99997778 18.0000111,5.58175556 18.0000111,9.99997778"
              id="Stroke-7" stroke={color} strokeWidth="2" strokeLinejoin="round" />
          </g>
      </g>
  </svg>,
  Tag: ({color, width, height}) => <svg width={width || "19"} height={height || "19"} viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconTag">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <path d="M10.6516504,18.429825 L18.429825,10.6516504 C18.7227182,10.3587572 18.7227182,9.88388348 18.429825,9.59099026 L9.94454365,1.10570888 C9.79512581,0.956291047 9.58960926,0.876836935 9.3785397,0.886887866 L1.9539185,1.24044126 C1.56774921,1.25883027 1.25883027,1.56774921 1.24044126,1.9539185 L0.886887866,9.3785397 C0.876836935,9.58960926 0.956291047,9.79512581 1.10570888,9.94454365 L9.59099026,18.429825 C9.88388348,18.7227182 10.3587572,18.7227182 10.6516504,18.429825 Z M2.40097111,9.11848554 L2.70631268,2.70631268 L9.11848554,2.40097111 L16.8388348,10.1213203 L10.1213203,16.8388348 L2.40097111,9.11848554 Z M9.23743687,9.23743687 C10.3113787,8.16349506 10.3113787,6.42229137 9.23743687,5.34834957 C8.16349506,4.27440777 6.42229137,4.27440777 5.34834957,5.34834957 C4.27440777,6.42229137 4.27440777,8.16349506 5.34834957,9.23743687 C6.42229137,10.3113787 8.16349506,10.3113787 9.23743687,9.23743687 Z M8.1767767,8.1767767 C7.68862133,8.66493206 6.89716511,8.66493206 6.40900974,8.1767767 C5.92085438,7.68862133 5.92085438,6.89716511 6.40900974,6.40900974 C6.89716511,5.92085438 7.68862133,5.92085438 8.1767767,6.40900974 C8.66493206,6.89716511 8.66493206,7.68862133 8.1767767,8.1767767 Z"
              id="Combined-Shape" fill={color} fillRule="nonzero" />
          </g>
      </g>
  </svg>,
  Calendar: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <g id='Page-1' fill='none' fillRule='evenodd'>
      <g id='IconCalendar' transform='translate(-1 -1)'>
        <rect id='bounds' fillOpacity='0' fill={color} width='20' height='20'
        />
        <path d='M2,18.75 L18,18.75 C18.4142136,18.75 18.75,18.4142136 18.75,18 L18.75,4 C18.75,3.58578644 18.4142136,3.25 18,3.25 L2,3.25 C1.58578644,3.25 1.25,3.58578644 1.25,4 L1.25,18 C1.25,18.4142136 1.58578644,18.75 2,18.75 Z M2.75,4.75 L17.25,4.75 L17.25,17.25 L2.75,17.25 L2.75,4.75 Z'
        id='icon-square' fill={color} fillRule='nonzero' />
        <path d='M2,9.75 L17,9.75 C17.4142136,9.75 17.75,9.41421356 17.75,9 C17.75,8.58578644 17.4142136,8.25 17,8.25 L2,8.25 C1.58578644,8.25 1.25,8.58578644 1.25,9 C1.25,9.41421356 1.58578644,9.75 2,9.75 Z'
        id='Path-3' fill={color} fillRule='nonzero' />
        <path d='M6.75,6 L6.75,2 C6.75,1.58578644 6.41421356,1.25 6,1.25 C5.58578644,1.25 5.25,1.58578644 5.25,2 L5.25,6 C5.25,6.41421356 5.58578644,6.75 6,6.75 C6.41421356,6.75 6.75,6.41421356 6.75,6 Z'
        id='Path-4' fill={color} fillRule='nonzero' />
        <path d='M14.75,6 L14.75,2 C14.75,1.58578644 14.4142136,1.25 14,1.25 C13.5857864,1.25 13.25,1.58578644 13.25,2 L13.25,6 C13.25,6.41421356 13.5857864,6.75 14,6.75 C14.4142136,6.75 14.75,6.41421356 14.75,6 Z'
        id='Path-4-Copy' fill={color} fillRule='nonzero' />
      </g>
    </g>
  </svg>,
  List: ({color, width, height}) => <svg width={width || "16"} height={height || "12"} viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconList" transform="translate(-2 -4)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <path d="M2,5 L6,5" id="Stroke-1" stroke={color} strokeWidth="1.5" strokeLinejoin="round"
              />
              <path d="M8,5 L18,5" id="Stroke-3" stroke={color} strokeWidth="1.5" strokeLinejoin="round"
              />
              <path d="M2,10 L6,10" id="Stroke-5" stroke={color} strokeWidth="1.5" strokeLinejoin="round"
              />
              <path d="M8,10 L18,10" id="Stroke-7" stroke={color} strokeWidth="1.5" strokeLinejoin="round"
              />
              <path d="M2,15 L6,15" id="Stroke-9" stroke={color} strokeWidth="1.5" strokeLinejoin="round"
              />
              <path d="M8,15 L18,15" id="Stroke-11" stroke={color} strokeWidth="1.5"
              strokeLinejoin="round" />
          </g>
      </g>
  </svg>,
  ChevronDownCircle: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconChevronDownCircle" transform="rotate(90 10 9)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <path d="M18,10 C18,14.4182222 14.4183333,18 10,18 C5.58177778,18 2,14.4182222 2,10 C2,5.58166667 5.58177778,2 10,2 C14.4183333,2 18,5.58166667 18,10 L18,10 Z"
              id="Stroke-1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              />
              <polyline id="Stroke-3" stroke={color} strokeWidth="1.5" strokeLinecap="square"
              strokeLinejoin="round" points="9 7 12 10 9 13" />
          </g>
      </g>
  </svg>,
  ChevronDown: ({color, width, height}) => <svg width={width || "18"} height={height || "10"} viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconChevronDown" transform="translate(-1 -5)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <polyline id="icon-down" stroke={color} strokeWidth="1.5" strokeLinecap="square"
              strokeLinejoin="round" transform="rotate(-180 10 10)" points="2 14 10 6 18 14"
              />
          </g>
      </g>
  </svg>,
  ChevronUpCircle: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconChevronUpCircle" transform="rotate(-90 9 10)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <path d="M18,10 C18,14.4182222 14.4183333,18 10,18 C5.58177778,18 2,14.4182222 2,10 C2,5.58166667 5.58177778,2 10,2 C14.4183333,2 18,5.58166667 18,10 L18,10 Z"
              id="Stroke-1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              />
              <polyline id="Stroke-3" stroke={color} strokeWidth="1.5" strokeLinecap="square"
              strokeLinejoin="round" points="9 7 12 10 9 13" />
          </g>
      </g>
  </svg>,
  ChevronUp: ({color, width, height}) => <svg width={width || "18"} height={height || "10"} viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconChevronUp" transform="translate(-1 -5)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <polyline id="icon-up" stroke={color} strokeWidth="1.5" strokeLinecap="square"
              strokeLinejoin="round" points="2 14 10 6 18 14" />
          </g>
      </g>
  </svg>,
  ChevronLeftCircle: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconChevronLeftCircle" transform="rotate(-180 9.5 9.5)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <path d="M18,10 C18,14.4182222 14.4183333,18 10,18 C5.58177778,18 2,14.4182222 2,10 C2,5.58166667 5.58177778,2 10,2 C14.4183333,2 18,5.58166667 18,10 L18,10 Z"
              id="Stroke-1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              />
              <polyline id="Stroke-3" stroke={color} strokeWidth="1.5" strokeLinecap="square"
              strokeLinejoin="round" points="9 7 12 10 9 13" />
          </g>
      </g>
  </svg>,
  ChevronLeft: ({color, width, height}) => <svg width={width || "10"} height={height || "18"} viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconChevronLeft" transform="translate(-5 -1)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <polyline id="icon-next-left-copy" stroke={color} strokeWidth="1.5" strokeLinecap="square"
              strokeLinejoin="round" transform="rotate(-90 10 10)" points="2 14 10 6 18 14"
              />
          </g>
      </g>
  </svg>,
  ChevronRightCircle: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconChevronRightCircle" transform="translate(-1 -1)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <path d="M18,10 C18,14.4182222 14.4183333,18 10,18 C5.58177778,18 2,14.4182222 2,10 C2,5.58166667 5.58177778,2 10,2 C14.4183333,2 18,5.58166667 18,10 L18,10 Z"
              id="Stroke-1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              />
              <polyline id="Stroke-3" stroke={color} strokeWidth="1.5" strokeLinecap="square"
              strokeLinejoin="round" points="9 7 12 10 9 13" />
          </g>
      </g>
  </svg>,
  ChevronRight: ({color, width, height}) => <svg width={width || "10"} height={height || "18"} viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconChevronRight" transform="translate(-5 -1)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <polyline id="icon-next-right" stroke={color} strokeWidth="1.5" strokeLinecap="square"
              strokeLinejoin="round" transform="rotate(90 10 10)" points="2 14 10 6 18 14"
              />
          </g>
      </g>
  </svg>,
  No: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconNo" transform="translate(-1 -1)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <path d="M5,15 L15,5" id="Stroke-1" stroke={color} strokeWidth="1.5" strokeLinecap="square"
              strokeLinejoin="round" />
              <path d="M18,10 C18,14.4182222 14.4183333,18 10,18 C5.58177778,18 2,14.4182222 2,10 C2,5.58166667 5.58177778,2 10,2 C14.4183333,2 18,5.58166667 18,10 L18,10 Z"
              id="Stroke-2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              />
          </g>
      </g>
  </svg>,
  ArrowRight: ({color, width, height}) => <svg width={width || "17"} height={height || "12"} viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconArrowRight" transform="rotate(90 11 7)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <path d="M10,18 L10,2" id="Stroke-1" stroke={color} strokeWidth="1.5" strokeLinejoin="round"
              />
              <polyline id="Stroke-3" stroke={color} strokeWidth="1.5" strokeLinecap="square"
              strokeLinejoin="round" points="5 7 10 2 15 7" />
          </g>
      </g>
  </svg>,
  ArrowLeft: ({color, width, height}) => <svg width={width || "17"} height={height || "12"} viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconArrowLeft" transform="rotate(-90 7.5 8.5)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <path d="M10,18 L10,2" id="Stroke-1" stroke={color} strokeWidth="1.5" strokeLinejoin="round"
              />
              <polyline id="Stroke-3" stroke={color} strokeWidth="1.5" strokeLinecap="square"
              strokeLinejoin="round" points="5 7 10 2 15 7" />
          </g>
      </g>
  </svg>,
  Logout: ({color, width, height}) => <svg width={width || "18"} height={height || "17"} viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconLogout" transform="translate(-1 -2)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <g id="Group-6" transform="translate(2 2)" stroke={color} strokeLinejoin="round"
              strokeWidth="1.5">
                  <path d="M13.6568333,2 C16.7810556,5.20272717 16.7810556,10.3953414 13.6568333,13.5979546 C10.5326111,16.8006818 5.46727778,16.8006818 2.34316667,13.5979546 C-0.781055556,10.3953414 -0.781055556,5.20272717 2.34316667,2"
                  id="Stroke-1" />
                  <path d="M8,0 L8,9" id="Stroke-3" />
              </g>
          </g>
      </g>
  </svg>,
  Error: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconError" transform="translate(-1 -1)">
              <rect id="bounds" fillOpacity="0" fill={color} width="20" height="20"
              />
              <polygon id="Stroke-3" stroke={color} strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round" points="2 18 18 18 18 2 2 2" />
              <path d="M8.5,10.9219 L8.5,5.9219" id="Stroke-3" stroke={color} strokeWidth="1.5"
              strokeLinecap="square" strokeLinejoin="round" transform="rotate(-180 9.25 8.422)"
              />
              <path d="M10,14 L10,13.9219" id="Stroke-5" stroke={color} strokeWidth="1.5"
              strokeLinecap="square" strokeLinejoin="round" transform="rotate(-180 10 13.96)"
              />
          </g>
      </g>
  </svg>,
  Doorway: ({color, width, height}) => <svg width={width || "16"} height={height || "16"} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <g id="Page-1" fill="none" fillRule="evenodd">
        <g id="IconDoorway" transform="translate(-2 -2)" fill={color}>
            <rect id="Rectangle-6" x="2" y="17" width="16" height="1" />
            <path d="M5,2 L15,2 L15,18 L5,18 L5,2 Z M8,11 C8.55228475,11 9,10.5522847 9,10 C9,9.44771525 8.55228475,9 8,9 C7.44771525,9 7,9.44771525 7,10 C7,10.5522847 7.44771525,11 8,11 Z"
            id="Combined-Shape" />
        </g>
    </g>
  </svg>,
  Copy: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconCopy" transform="translate(-1 -1)" fill={color} fillRule="nonzero">
              <path d="M16.6666667,17.25 C16.9857864,17.25 17.25,16.9857864 17.25,16.6666667 L17.25,7.33333333 C17.25,7.01421356 16.9857864,6.75 16.6666667,6.75 L9.33333333,6.75 C9.01421356,6.75 8.75,7.01421356 8.75,7.33333333 L8.75,16.6666667 C8.75,16.9857864 9.01421356,17.25 9.33333333,17.25 L16.6666667,17.25 Z M16.6666667,18.75 L9.33333333,18.75 C8.18578644,18.75 7.25,17.8142136 7.25,16.6666667 L7.25,7.33333333 C7.25,6.18578644 8.18578644,5.25 9.33333333,5.25 L16.6666667,5.25 C17.8142136,5.25 18.75,6.18578644 18.75,7.33333333 L18.75,16.6666667 C18.75,17.8142136 17.8142136,18.75 16.6666667,18.75 Z"
              id="Stroke-1" />
              <path d="M8.75,13.25 L3.33333333,13.25 C3.01421356,13.25 2.75,12.9857864 2.75,12.6666667 L2.75,3.33333333 C2.75,3.01421356 3.01421356,2.75 3.33333333,2.75 L10.6666667,2.75 C10.9857864,2.75 11.25,3.01421356 11.25,3.33333333 L11.25,6.75 L12.75,6.75 L12.75,3.33333333 C12.75,2.18578644 11.8142136,1.25 10.6666667,1.25 L3.33333333,1.25 C2.18578644,1.25 1.25,2.18578644 1.25,3.33333333 L1.25,12.6666667 C1.25,13.8142136 2.18578644,14.75 3.33333333,14.75 L8.75,14.75 L8.75,13.25 Z"
              id="Stroke-3" />
          </g>
      </g>
  </svg>,
  Link: ({color, width, height}) => <svg width={width || "18"} height={height || "8"} viewBox="0 0 18 8" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconLink" transform="translate(-1 -6)" fill={color} fillRule="nonzero">
              <path d="M8.83291837,13.3074687 C10.0181987,12.7203169 10.75,11.6192286 10.75,9.99999549 C10.75,9.9451753 10.758826,9.82161211 10.7866704,9.65454562 C10.833755,9.37203866 10.9181305,9.09078735 11.0458202,8.83540835 C11.3917281,8.14359363 11.9821194,7.75 13,7.75 L15,7.75 C16.2426756,7.75 17.25,8.75732291 17.25,9.99999549 C17.25,11.2426681 16.2426756,12.249991 15,12.249991 L12.25,12.249991 L12.25,13.749991 L15,13.749991 C17.0711022,13.749991 18.75,12.0710957 18.75,9.99999549 C18.75,7.92889528 17.0711022,6.25 15,6.25 L13,6.25 C11.3928806,6.25 10.2957719,6.98140468 9.70417981,8.16458715 C9.36150269,8.84994036 9.25,9.51895548 9.25,9.99999549 C9.25,11.030064 8.85680133,11.6216815 8.16708163,11.9633477 C7.9167821,12.0873385 7.6411264,12.1690533 7.36337439,12.2143313 C7.19546246,12.2417036 7.0677587,12.2503005 7.00422982,12.2500037 L5,12.249991 C3.75732442,12.249991 2.75,11.2426681 2.75,9.99999549 C2.75,8.75732291 3.75732442,7.75 5,7.75 L7.75,7.75 L7.75,6.25 L5,6.25 C2.9288978,6.25 1.25,7.92889528 1.25,9.99999549 C1.25,12.0710957 2.9288978,13.749991 5,13.749991 L6.99803062,13.749991 C7.48887744,13.7521615 8.15451742,13.643528 8.83291837,13.3074687 Z"
              id="Page-1" />
          </g>
      </g>
  </svg>,
  LinkBroken: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconLinkBroken" transform="translate(-1 -1)" fill={color} fillRule="nonzero">
              <path d="M7.75,6.25 L5,6.25 C2.92889755,6.25 1.25,7.92889755 1.25,10 C1.25,12.0711025 2.92889755,13.75 5,13.75 L7.75,13.75 L7.75,12.25 L5,12.25 C3.75732467,12.25 2.75,11.2426753 2.75,10 C2.75,8.75732467 3.75732467,7.75 5,7.75 L7.75,7.75 L7.75,6.25 Z"
              id="Stroke-1" />
              <path d="M12.25,7.75 L15,7.75 C16.2426753,7.75 17.25,8.75732467 17.25,10 C17.25,11.2426753 16.2426753,12.25 15,12.25 L12.25,12.25 L12.25,13.75 L15,13.75 C17.0711025,13.75 18.75,12.0711025 18.75,10 C18.75,7.92889755 17.0711025,6.25 15,6.25 L12.25,6.25 L12.25,7.75 Z"
              id="Stroke-3" />
              <polygon id="Stroke-5" points="10.75 4.75 10.75 1.25 9.25 1.25 9.25 4.75"
              />
              <polygon id="Stroke-7" points="14 5.06066017 16.0606602 3 15 1.93933983 12.9393398 4"
              />
              <polygon id="Stroke-9" points="7.06066017 4 5 1.93933983 3.93933983 3 6 5.06066017"
              />
              <polygon id="Stroke-11" points="9.25 15.25 9.25 18.75 10.75 18.75 10.75 15.25"
              />
              <polygon id="Stroke-13" points="6 14.9393398 3.93933983 17 5 18.0606602 7.06066017 16"
              />
              <polygon id="Stroke-15" points="12.9393398 16 15 18.0606602 16.0606602 17 14 14.9393398"
              />
          </g>
      </g>
  </svg>,
  Trash: ({color, width, height}) => <svg width={width || "16"} height={height || "18"} viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconTrash" transform="translate(-2 -1)" fill={color} fillRule="nonzero">
              <g id="Group-2" transform="translate(3 2)">
                  <path d="M-0.737560885,3.53491602 C-0.822569826,3.07399092 -0.468698699,2.64888683 0,2.64888683 L13.7142857,2.64888683 C14.1829844,2.64888683 14.5368555,3.07399092 14.4518466,3.53491602 L12.1661323,15.928237 C12.100521,16.2839869 11.7903211,16.5422078 11.4285714,16.5422078 L2.28571429,16.5422078 C1.92396459,16.5422078 1.61376476,16.2839869 1.5481534,15.928237 L-0.737560885,3.53491602 Z M0.900972257,4.14888683 L2.91003984,15.0422078 L10.8042459,15.0422078 L12.8133135,4.14888683 L0.900972257,4.14888683 Z"
                  id="Stroke-1" />
                  <path d="M9.89285714,3.39888683 C9.89285714,3.81310039 9.55707071,4.14888683 9.14285714,4.14888683 L4.57142857,4.14888683 C4.15721501,4.14888683 3.82142857,3.81310039 3.82142857,3.39888683 L3.82142857,-1.11022302e-16 C3.82142857,-0.414213562 4.15721501,-0.75 4.57142857,-0.75 L9.14285714,-0.75 C9.55707071,-0.75 9.89285714,-0.414213562 9.89285714,7.77156117e-16 L9.89285714,3.39888683 Z M8.39285714,2.64888683 L8.39285714,0.75 L5.32142857,0.75 L5.32142857,2.64888683 L8.39285714,2.64888683 Z"
                  id="Stroke-5" />
                  <polygon id="Path-7" points="4.25 6 4.25 13 5.75 13 5.75 6" />
                  <polygon id="Path-7-Copy" points="8.25 6 8.25 13 9.75 13 9.75 6" />
              </g>
          </g>
      </g>
  </svg>,
  Download: ({color, width, height}) => <svg width={width || "14"} height={height || "17"} viewBox="0 0 14 17" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconDownload" transform="rotate(-180 8.5 9)" fill={color} fillRule="nonzero">
              <g id="Group-5" transform="translate(3 1)">
                  <polygon id="Stroke-1" points="7.75 17 7.75 5 6.25 5 6.25 17" />
                  <polygon id="Stroke-1" points="14 0.25 4.75809868e-17 0.25 -4.75809868e-17 1.75 14 1.75"
                  />
                  <path d="M12,11.0606602 L13.0606602,10 L7.53033009,4.46966991 C7.23743687,4.1767767 6.76256313,4.1767767 6.46966991,4.46966991 L0.939339828,10 L2,11.0606602 L7,6.06066017 L12,11.0606602 Z"
                  id="Stroke-3" />
              </g>
          </g>
      </g>
  </svg>,
  ArrowDown: ({color, width, height}) => <svg width={width || "12"} height={height || "17"} viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconArrowDown" transform="rotate(-180 8 9)" fill={color} fillRule="nonzero">
              <polygon id="Stroke-1" points="10.75 18 10.75 2 9.25 2 9.25 18" />
              <path d="M10,3.06066017 L15,8.06066017 L16.0606602,7 L10.5303301,1.46966991 C10.2374369,1.1767767 9.76256313,1.1767767 9.46966991,1.46966991 L3.93933983,7 L5,8.06066017 L10,3.06066017 Z"
              id="Stroke-3" />
          </g>
      </g>
  </svg>,
  ArrowUp: ({color, width, height}) => <svg width={width || "12"} height={height || "17"} viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconArrowUp" transform="translate(-4 -1)" fill={color} fillRule="nonzero">
              <polygon id="Stroke-1" points="10.75 18 10.75 2 9.25 2 9.25 18" />
              <path d="M10,3.06066017 L15,8.06066017 L16.0606602,7 L10.5303301,1.46966991 C10.2374369,1.1767767 9.76256313,1.1767767 9.46966991,1.46966991 L3.93933983,7 L5,8.06066017 L10,3.06066017 Z"
              id="Stroke-3" />
          </g>
      </g>
  </svg>,
  Minus: ({color, width, height}) => <svg width={width || "18"} height={height || "2"} viewBox="0 0 18 2" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconMinus" transform="translate(-1 -9)" fill={color} fillRule="nonzero">
              <polygon id="Stroke-3" points="18.75 9.25 1.25 9.25 1.25 10.75 18.75 10.75"
              />
          </g>
      </g>
  </svg>,
  Switch: ({color, width, height}) => <svg width={width || "16"} height={height || "16"} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconSwitch" transform="translate(-2 -2)" fill={color}>
              <g id="Group-3" transform="translate(2 2)">
                  <polygon id="Stroke-3" fillRule="nonzero" points="14.0833333 11.2303922 2.80555556 11.2303922 2.80555556 12.7303922 14.0833333 12.7303922"
                  />
                  <polygon id="Stroke-3-Copy-8" fillRule="nonzero" points="12.3055556 3.20294118 1.02777778 3.20294118 1.02777778 4.70294118 12.3055556 4.70294118"
                  />
                  <polygon id="Stroke-3-Copy-6" transform="rotate(-90 2.667 11.98)" points="-0.888888889 14.1764706 2.66666667 9.78431373 6.22222222 14.1764706"
                  />
                  <polygon id="Stroke-3-Copy-9" transform="rotate(90 13.333 3.953)" points="9.77777778 6.14901961 13.3333333 1.75686275 16.8888889 6.14901961"
                  />
              </g>
          </g>
      </g>
  </svg>,
  Plus: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconPlus" transform="translate(-1 -1)" fill={color} fillRule="nonzero">
              <polygon id="Stroke-3" points="18.75 9.25 1.25 9.25 1.25 10.75 18.75 10.75"
              />
              <polygon id="Stroke-3" points="9.25 1.25 9.25 18.75 10.75 18.75 10.75 1.25"
              />
          </g>
      </g>
  </svg>,
  MinusCircle: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconMinusCircle" transform="translate(-1 -1)" fill={color} fillRule="nonzero">
              <path d="M17.25,10 C17.25,5.99588023 14.0041198,2.75 10,2.75 C5.99595135,2.75 2.75,5.99592021 2.75,10 C2.75,14.0040087 5.99599134,17.25 10,17.25 C14.0040798,17.25 17.25,14.0040486 17.25,10 Z M18.75,10 C18.75,14.8324725 14.8325101,18.75 10,18.75 C5.16756422,18.75 1.25,14.8324358 1.25,10 C1.25,5.16748987 5.16752745,1.25 10,1.25 C14.8325469,1.25 18.75,5.1674531 18.75,10 Z"
              id="Stroke-1" />
              <polygon id="Stroke-3" points="13.75 9.25 6.25 9.25 6.25 10.75 13.75 10.75"
              />
          </g>
      </g>
  </svg>,
  PlusCircle: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconPlusCircle" transform="translate(-1 -1)" fill={color} fillRule="nonzero">
              <polygon id="Stroke-1" points="10.7775862 13.5865069 10.7775862 6.46866548 9.27758621 6.46866548 9.27758621 13.5865069"
              />
              <polygon id="Stroke-2" points="13.5865069 9.27758621 6.46866548 9.27758621 6.46866548 10.7775862 13.5865069 10.7775862"
              />
              <path d="M17.2224138,10.0275862 C17.2224138,6.0539377 14.0012347,2.83275862 10.0275862,2.83275862 C6.05400832,2.83275862 2.83275862,6.05397742 2.83275862,10.0275862 C2.83275862,14.0011244 6.05404805,17.2224138 10.0275862,17.2224138 C14.001195,17.2224138 17.2224138,14.0011641 17.2224138,10.0275862 Z M18.7224138,10.0275862 C18.7224138,14.829588 14.8296253,18.7224138 10.0275862,18.7224138 C5.22562092,18.7224138 1.33275862,14.8295515 1.33275862,10.0275862 C1.33275862,5.22554707 5.22558442,1.33275862 10.0275862,1.33275862 C14.8296618,1.33275862 18.7224138,5.22551058 18.7224138,10.0275862 Z"
              id="Stroke-3" />
          </g>
      </g>
  </svg>,
  Close: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconClose" transform="translate(-1 -1)" fill={color} fillRule="nonzero">
              <polygon id="Stroke-1" points="2.58884595 18.4785453 18.4785011 2.58889009 17.4178409 1.52822991 1.52818578 17.4178851"
              />
              <polygon id="Stroke-3" points="18.4785011 17.4178851 2.58884595 1.52822991 1.52818578 2.58889009 17.4178409 18.4785453"
              />
          </g>
      </g>
  </svg>,
  CloseCircle: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconCloseCircle" transform="translate(-1 -1)" fill={color} fillRule="nonzero">
              <polygon id="Stroke-1" points="8.04137931 13.0744533 13.0744533 8.04137931 12.0137931 6.98071914 6.98071914 12.0137931"
              />
              <polygon id="Stroke-2" points="13.0744533 12.0137931 8.04137931 6.98071914 6.98071914 8.04137931 12.0137931 13.0744533"
              />
              <path d="M17.2224138,10.0275862 C17.2224138,6.0539377 14.0012347,2.83275862 10.0275862,2.83275862 C6.05400832,2.83275862 2.83275862,6.05397742 2.83275862,10.0275862 C2.83275862,14.0011244 6.05404805,17.2224138 10.0275862,17.2224138 C14.001195,17.2224138 17.2224138,14.0011641 17.2224138,10.0275862 Z M18.7224138,10.0275862 C18.7224138,14.829588 14.8296253,18.7224138 10.0275862,18.7224138 C5.22562092,18.7224138 1.33275862,14.8295515 1.33275862,10.0275862 C1.33275862,5.22554707 5.22558442,1.33275862 10.0275862,1.33275862 C14.8296618,1.33275862 18.7224138,5.22551058 18.7224138,10.0275862 Z"
              id="Stroke-3" />
          </g>
      </g>
  </svg>,
  CloseSquare: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconCloseSquare" transform="translate(-1 -1)" fill={color} fillRule="nonzero">
              <path d="M2.08275862,18.7224138 C1.66854506,18.7224138 1.33275862,18.3866274 1.33275862,17.9724138 L1.33275862,2.08275862 C1.33275862,1.66854506 1.66854506,1.33275862 2.08275862,1.33275862 L17.9724138,1.33275862 C18.3866274,1.33275862 18.7224138,1.66854506 18.7224138,2.08275862 L18.7224138,17.9724138 C18.7224138,18.3866274 18.3866274,18.7224138 17.9724138,18.7224138 L2.08275862,18.7224138 Z M2.83275862,17.2224138 L17.2224138,17.2224138 L17.2224138,2.83275862 L2.83275862,2.83275862 L2.83275862,17.2224138 Z"
              id="Stroke-1" />
              <polygon id="Stroke-3" points="7.04827586 14.0675567 14.0675567 7.04827586 13.0068966 5.98761569 5.98761569 13.0068966"
              />
              <polygon id="Stroke-4" points="14.0675567 13.0068966 7.04827586 5.98761569 5.98761569 7.04827586 13.0068966 14.0675567"
              />
          </g>
      </g>
  </svg>,
  Check: ({color, width, height}) => <svg width={width || "18"} height={height || "15"} viewBox="0 0 18 15" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconCheck" transform="translate(-1 -3)" fill={color} fillRule="nonzero">
              <path d="M2,9.90864889 L0.939339828,10.9693091 L7.08957687,17.1195461 C7.40333178,17.433301 7.91939692,17.4075619 8.20037493,17.0641444 L18.7911358,4.11988108 L17.6301999,3.1700244 L7.5642289,15.4728778 L2,9.90864889 Z"
              id="icon-check" />
          </g>
      </g>
  </svg>,
  CheckCircle: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconCheckCircle" transform="translate(-1 -1)" fill={color} fillRule="nonzero">
              <path d="M7.04827586,9.96002948 L5.98761569,11.0206897 L8.50415267,13.5372266 C8.8202354,13.8533094 9.34089039,13.8244728 9.62013437,13.4754178 L14.0610694,7.92424899 L12.8897662,6.98720642 L8.97229359,11.8840472 L7.04827586,9.96002948 Z"
              id="Stroke-1" />
              <path d="M17.3327586,10.0827586 C17.3327586,6.07863885 14.0868784,2.83275862 10.0827586,2.83275862 C6.07870998,2.83275862 2.83275862,6.07867883 2.83275862,10.0827586 C2.83275862,14.0867673 6.07874996,17.3327586 10.0827586,17.3327586 C14.0868384,17.3327586 17.3327586,14.0868073 17.3327586,10.0827586 Z M18.8327586,10.0827586 C18.8327586,14.9152312 14.9152688,18.8327586 10.0827586,18.8327586 C5.25032284,18.8327586 1.33275862,14.9151944 1.33275862,10.0827586 C1.33275862,5.25024849 5.25028607,1.33275862 10.0827586,1.33275862 C14.9153055,1.33275862 18.8327586,5.25021172 18.8327586,10.0827586 Z"
              id="Stroke-2" />
          </g>
      </g>
  </svg>,
  CheckSquare: ({color, width, height}) => <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="IconCheckSquare" transform="translate(-1 -1)" fill={color} fillRule="nonzero">
              <path d="M2,18.75 C1.58578644,18.75 1.25,18.4142136 1.25,18 L1.25,2 C1.25,1.58578644 1.58578644,1.25 2,1.25 L18,1.25 C18.4142136,1.25 18.75,1.58578644 18.75,2 L18.75,18 C18.75,18.4142136 18.4142136,18.75 18,18.75 L2,18.75 Z M2.75,17.25 L17.25,17.25 L17.25,2.75 L2.75,2.75 L2.75,17.25 Z"
              id="Stroke-1" />
              <path d="M6,8.93933983 L4.93933983,10 L8.46966991,13.5303301 C8.78152063,13.8421808 9.29382959,13.8189419 9.57616596,13.4801383 L15.0563043,6.90397234 L13.9039723,5.94369574 L8.94960124,11.8889411 L6,8.93933983 Z"
              id="Stroke-3" />
          </g>
      </g>
  </svg>,
  Building: ({color, width, height}) => <svg width={width || 18} height={height || 17} viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="1.0" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="icons" transform="translate(-70.000000, -520.000000)">
            <g id="IconBuilding" transform="translate(69.000000, 518.000000)">
                <rect id="bounds" fillOpacity="0" fill="#E3E3E6" x="0" y="0" width="20" height="20"></rect>
                <polygon id="Path" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" points="9 9 2 9 2 18 18 18 18 3 9 3"></polygon>
                <path d="M12,6 L15,6" id="---" stroke={color} strokeWidth="1.5" strokeLinecap="square"></path>
                <path d="M12,9 L15,9" id="----copy" stroke={color} strokeWidth="1.5" strokeLinecap="square"></path>
                <path d="M12,12 L15,12" id="----copy-2" stroke={color} strokeWidth="1.5" strokeLinecap="square"></path>
                <path d="M12,15 L15,15" id="----copy-3" stroke={color} strokeWidth="1.5" strokeLinecap="square"></path>
                <path d="M5,12 L8,12" id="----copy-2" stroke={color} strokeWidth="1.5" strokeLinecap="square"></path>
                <path d="M5,15 L8,15" id="----copy-3" stroke={color} strokeWidth="1.5" strokeLinecap="square"></path>
            </g>
        </g>
    </g>
  </svg>,
  Rotate: ({color, width, height}) => <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' height={height || 31.5} width={width || 31.5}>
    <defs>
        <rect id='rect-0' x='0.75' y='0.75' width='30' height='30' rx='0' ry='0'
        />
        <path id='path-1' d='M3.7500166666667383,20.249966666666637 L3.7500166666667383,24.749966666666637 L8.250016666666738,24.749966666666637'
        />
        <path id='path-2' d='M27.75001666666674,11.249966666666637 L27.75001666666674,6.749966666666637 L23.25001666666674,6.749966666666637'
        />
        <path id='path-3' d='M26.87766666666669,8.250099999999943 C25.097500000000018,12.647766666666607 20.786000000000016,15.749933333333274 15.750000000000012,15.749933333333274 C9.122666666666671,15.749933333333274 3.75,10.377266666666609 3.75,3.7499333333332743'
        />
        <path id='path-4' d='M4.622366666666721,23.24983333333333 C6.402533333333391,18.852166666666665 10.714033333333397,15.75 15.750033333333402,15.75 C22.37736666666674,15.75 27.750033333333413,21.122666666666664 27.750033333333413,27.75'
        />
        <path id='path-5' d='M12.750016666666738,18.749966666666637 L18.75001666666674,18.749966666666637 L18.75001666666674,12.749966666666637 L12.750016666666738,12.749966666666637 L12.750016666666738,18.749966666666637Z'
        />
    </defs>
    <use xlinkHref='#rect-0' fill={color} fillOpacity='0' />
    <use xlinkHref='#path-1' fillOpacity='0' stroke={color} strokeWidth='1.5'
    strokeLinecap='square' strokeLinejoin='round' transform='matrix(1 0 0 -1 0 45)'
    />
    <use xlinkHref='#path-2' fillOpacity='0' stroke={color} strokeWidth='1.5'
    strokeLinecap='square' strokeLinejoin='round' transform='matrix(1 0 0 -1 0 18)'
    />
    <use xlinkHref='#path-3' fillOpacity='0' stroke={color} strokeWidth='1.5'
    strokeLinejoin='round' transform='matrix(1 0 0 -1 0 19.5)' />
    <use xlinkHref='#path-4' fillOpacity='0' stroke={color} strokeWidth='1.5'
    strokeLinejoin='round' transform='matrix(1 0 0 -1 0 43.5)' />
    <use xlinkHref='#path-5' fillOpacity='0' stroke={color} strokeWidth='1.5'
    strokeLinecap='square' strokeLinejoin='round' transform='matrix(1 0 0 -1 0 31.5)'
    />
  </svg>,
  Floorplans: ({color, width, height}) => <svg width={width || 20} height={height || 18} viewBox='0 0 20 18' xmlns='http://www.w3.org/2000/svg'>
    <g id='Page-1' fill='none' fillRule='evenodd'>
        <g id='IconFloorplans' transform='translate(0 -1)'>
            <rect id='bounds' fillOpacity='0' fill={color} width='20' height='20'
            />
            <polygon id='Stroke-1' stroke={color} strokeWidth='1.5' strokeLinecap='square'
            strokeLinejoin='round' points='1 18 13 18 13 8 1 8' />
            <polyline id='Stroke-1-Copy' stroke={color} strokeWidth='1.5' strokeLinecap='square'
            strokeLinejoin='round' points='13 15 16 15 16 5 4 5 4 8' />
            <polyline id='Stroke-1-Copy-2' stroke={color} strokeWidth='1.5' strokeLinecap='square'
            strokeLinejoin='round' points='16 12 19 12 19 2 7 2 7 5' />
        </g>
    </g>
  </svg>,
  Dashboards: ({color, width, height}) => <svg width={width || 18} height={height || 18} viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="1.0" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="icons" transform="translate(-330.000000, -467.000000)">
            <g id="iconDashboard" transform="translate(329.000000, 466.000000)">
                <rect id="bounds" fillOpacity="0" fill="#E3E3E6" x="0" y="0" width="20" height="20"></rect>
                <path d="M5,5.03369141 L5,3 C5,2.44771525 5.44771525,2 6,2 L17,2 C17.5522847,2 18,2.44771525 18,3 L18,14 C18,14.5522847 17.5522847,15 17,15 L15.0554199,15" id="Path" stroke={color} strokeWidth="1.5" strokeLinejoin="round"></path>
                <path d="M2,17.0014977 C2,17.5529553 2.44748943,18 2.99850233,18 L14.0014977,18 C14.5529553,18 15,17.5525106 15,17.0014977 L15,5.99850233 C15,5.44704472 14.5525106,5 14.0014977,5 L2.99850233,5 C2.44704472,5 2,5.44748943 2,5.99850233 L2,17.0014977 Z" id="icon-square-copy-2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M11.5,11 L11.5,15" id="---" stroke={color} strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"></path>
                <path d="M8.5,12 L8.5,15" id="---" stroke={color} strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"></path>
                <path d="M5.5,10 L5.5,15" id="---" stroke={color} strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"></path>
            </g>
        </g>
    </g>
  </svg>,
  DensityMark: ({color, width, height}) => <svg width={width || 16} height={height || 14} viewBox='0 0 16 14' xmlns='http://www.w3.org/2000/svg'>
    <g id='Icons' fill='none' fillRule='evenodd'>
       <g id='icons' transform='translate(-71 -493)'>
           <g id='IconDensityMark' transform='translate(69 490)'>
               <rect id='bounds' fillOpacity='0' fill='#E3E3E6' width='20' height='20'
               />
               <path d='M5.76898293,12.6351831 C6.62950636,12.1144131 7.35090153,11.3857103 7.86367624,10.5183375 C8.40105377,9.60969552 8.70938043,8.54910822 8.70938043,7.41608352 L8.70938043,3.38455308 C8.70938043,3.17214703 8.88102471,3 9.09266657,3 L10.907233,3 C11.1190187,3 11.2905191,3.17214703 11.2905191,3.38455308 L11.2905191,7.41608352 C11.2905191,8.54896392 11.5989896,9.60969552 12.1362233,10.5183375 C12.6491419,11.3857103 13.3703932,12.1144131 14.2310605,12.6351831 L17.808254,14.7065751 C17.9916961,14.8127781 18.0544261,15.0478389 17.9485332,15.231674 L17.0413939,16.8076923 C16.935501,16.9916718 16.7011267,17.0545855 16.5176846,16.9483825 L13.0030773,14.9133535 C12.1173755,14.4070133 11.0924016,14.1176966 9.99994977,14.1176966 C8.9076418,14.1176966 7.88252402,14.4070133 6.99682225,14.9133535 L3.4823588,16.9483825 C3.29891667,17.0545855 3.06454237,16.9916718 2.9586495,16.8076923 L2.05136631,15.231674 C1.94561731,15.0478389 2.00834733,14.8127781 2.19178946,14.7065751 L5.76898293,12.6351831 Z'
               id='Fill-1' fill={color} />
           </g>
       </g>
    </g>
  </svg>,

  Mail: ({color, width, height}) => <svg width={width || 18} height={height || 18} viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
    <g id="IconMail" transform="translate(0, -4)">
      <rect id="Rectangle" fillOpacity="0" fill="#D8D8D8" width="20" height="20"
      />
      <rect id="Rectangle" fill="transparent" stroke={color} strokeWidth="1.5" x="2.5" y="5" width="15" height="10" />
      <polyline id="Path-28" fill="transparent" stroke={color} strokeWidth="1.5" points="2.5 5.83333333 10 10 17.5 5.83333333" />
    </g>
  </svg>,
  Notification: ({color, width, height}) => <svg width={width || 18} height={height || 18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <g id="1" fill="none" fillRule="evenodd">
      <g id="icons" transform="translate(-278 -519)">
        <g id="Group" transform="translate(277 518)">
          <rect id="Rectangle" fillOpacity="0" fill="#D8D8D8" width="20" height="20"
          />
          <path d="M1.66666667,16.6666667 L18.3333333,16.6666667 L18.3333333,18.3333333 L1.66666667,18.3333333 L1.66666667,16.6666667 Z M16.6666667,17.5 L15,17.5 L15,11.6666667 C15,8.90524292 12.7614237,6.66666667 10,6.66666667 C7.23857625,6.66666667 5,8.90524292 5,11.6666667 L5,17.5 L3.33333333,17.5 L3.33333333,11.6666667 C3.33333333,7.98476833 6.31810167,5 10,5 C13.6818983,5 16.6666667,7.98476833 16.6666667,11.6666667 L16.6666667,17.5 Z M14.4716878,5.5881428 L13.0283122,4.75480947 L14.2783122,2.58974596 L15.7216878,3.4230793 L14.4716878,5.5881428 Z M6.97168784,4.75480947 L5.52831216,5.5881428 L4.27831216,3.4230793 L5.72168784,2.58974596 L6.97168784,4.75480947 Z M10.8333333,4.16666667 L9.16666667,4.16666667 L9.16666667,1.66666667 L10.8333333,1.66666667 L10.8333333,4.16666667 Z"
            id="Combined-Shape" fill={color} fillRule="nonzero" />
        </g>
      </g>
    </g>
  </svg>,
  Star: ({color, width, height}) => <svg width={width || 20} height={height || 18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
    <g id="1" fill="none" fillRule="evenodd">
      <g id="icons" transform="translate(-225 -518)">
        <g id="IconStar" transform="translate(225 518)">
          <rect id="bounds" fillOpacity="0" fill="#E3E3E6" width="20" height="20"
          />
          <polygon id="Star" stroke={color} strokeWidth="1.5" strokeLinecap="square"
            strokeLinejoin="round" points="10 14.5 4.70993273 17.2811529 5.72024568 11.3905765 1.44049135 7.21884705 7.35496636 6.35942353 10 1 12.6450336 6.35942353 18.5595086 7.21884705 14.2797543 11.3905765 15.2900673 17.2811529"
          />
        </g>
      </g>
    </g>
  </svg>,
  Filters: ({color, width, height}) => <svg width={width || 18} height={height || 14} viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
    <g id="1" fill="none" fillRule="evenodd">
      <g id="icons" transform="translate(-330 -521)">
        <g id="IconFilters" transform="translate(329 518)">
          <rect id="bounds" fillOpacity="0" fill="#E3E3E6" width="20" height="20"
          />
          <path d="M18,10 L2,10" id="Stroke-3" stroke={color} strokeWidth="1.5"
            strokeLinecap="square" strokeLinejoin="round" />
          <path d="M18,5 L2,5" id="Stroke-3-Copy" stroke={color} strokeWidth="1.5"
            strokeLinecap="square" strokeLinejoin="round" />
          <path d="M5,6 L5,4" id="Stroke-3-Copy" stroke={color} strokeWidth="1.5"
            strokeLinecap="square" strokeLinejoin="round" />
          <path d="M15,11 L15,9" id="Stroke-3-Copy" stroke={color} strokeWidth="1.5"
            strokeLinecap="square" strokeLinejoin="round" />
          <path d="M8,16 L8,14" id="Stroke-3-Copy" stroke={color} strokeWidth="1.5"
            strokeLinecap="square" strokeLinejoin="round" />
          <path d="M18,15 L2,15" id="Stroke-3-Copy-2" stroke={color} strokeWidth="1.5"
            strokeLinecap="square" strokeLinejoin="round" />
        </g>
      </g>
    </g>
  </svg>,
  Apps: ({color, width, height}) => <svg width={width || 18} height={height || 18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <g id="1" fill="none" fillRule="evenodd">
      <g id="icons" transform="translate(-382 -467)">
        <g id="iconApps" transform="translate(381 466)">
          <rect id="bounds" fillOpacity="0" fill="#E3E3E6" width="20" height="20"
          />
          <path d="M2,8 L8,8 L8,16.9991283 C8,17.5553691 7.55641359,18 7.00922203,18 L2.99077797,18 C2.45097518,18 2,17.5518945 2,16.9991283 L2,8 Z M2.99077797,2 L7.00922203,2 L2.99077797,2 Z"
            id="Combined-Shape" stroke={color} strokeWidth="1.5" fill="#FAFAFA" strokeLinecap="round"
            strokeLinejoin="round" />
          <path d="M2,8 L16.9991283,8 C17.5518945,8 18,7.54902482 18,7.00922203 L18,2.99077797 C18,2.44358641 17.5553691,2 16.9991283,2 L3.00087166,2 C2.4481055,2 2,2.45097518 2,2.99077797 L2,8 Z"
            id="icon-square-copy-2" stroke={color} strokeWidth="1.5" fill="#FAFAFA"
            strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18,14.5 L12,14.5" id="---" stroke={color} strokeWidth="1.5"
            strokeLinecap="square" strokeLinejoin="round" />
          <path d="M15,11.5 L15,17.5" id="---" stroke={color} strokeWidth="1.5"
            strokeLinecap="square" strokeLinejoin="round" />
        </g>
      </g>
    </g>
  </svg>,
  Pin: ({color, width, height}) => <svg width={width || 12} height={height || 18} viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg">
    <g id="1" fill="none" fillRule="evenodd">
      <g id="icons" transform="translate(-541 -467)">
        <g id="iconPin" transform="translate(537 466)">
          <rect id="bounds" fillOpacity="0" fill="#E3E3E6" width="20" height="20"
          />
          <path d="M5,12 C5,10.1336294 6.15051465,8.37707426 6.42033106,7 C7.45162157,1.73655581 7.22581078,2 10,2 C12.7110391,2 12.4220782,2.20017432 13.5065529,7 C13.8221545,8.39683515 15,10.1966608 15,12 C11,13 8,12.5 5,12 Z"
            id="Path-13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          />
          <path d="M10,13 L10,18" id="Path-3" stroke={color} strokeWidth="1.5"
            fill="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </g>
  </svg>,
  Expand: ({color, width, height}) => <svg width={width || 18} height={height || 18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <g id="1" fill="none" fillRule="evenodd">
      <g id="icons" transform="translate(-122 -519)">
        <g id="IconExpand" transform="translate(121 518)">
          <rect id="bounds" fillOpacity="0" fill="#E3E3E6" width="20" height="20"
          />
          <polyline id="Stroke-3" stroke={color} strokeWidth="1.5" strokeLinecap="square"
            strokeLinejoin="round" points="13 2 18 2 18 7" />
          <path d="M18,2 L11,9" id="Stroke-5" stroke={color} strokeWidth="1.5"
            strokeLinejoin="round" />
          <polyline id="Stroke-3-Copy-3" stroke={color} strokeWidth="1.5" strokeLinecap="square"
            strokeLinejoin="round" points="2 13 2 18 7 18" />
          <path d="M9,11 L2,18" id="Stroke-5-Copy" stroke={color} strokeWidth="1.5"
            strokeLinejoin="round" />
        </g>
      </g>
    </g>
  </svg>,
  Team: ({color, width, height}) => <svg width={width || 20} height={height || 18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
    <g id="1" fill="none" fillRule="evenodd">
      <g id="icons" transform="translate(-433 -519)">
        <g id="IconTeam" transform="translate(433 518)">
          <rect id="bounds" fillOpacity="0" fill="#E3E3E6" width="20" height="20"
          />
          <path d="M7.00001111,10 C5.10645556,10 3.57145556,8.20911111 3.57145556,6 C3.57145556,3.79088889 5.10645556,2 7.00001111,2 C8.89356667,2 10.4285667,3.79088889 10.4285667,6 C10.4285667,8.20911111 8.89356667,10 7.00001111,10 Z"
            id="Stroke-1" stroke={color} strokeWidth="1.5" fill="#FFF" strokeLinejoin="round"
          />
          <path d="M13,18 L13,13 C13,11.3368889 11.6392222,10 9.97611111,10 L4.02388889,10 C2.36077778,10 1,11.3368889 1,13 L1,18 L13,18 L13,18 Z"
            id="Stroke-3" stroke={color} strokeWidth="1.5" fill="#FFF" strokeLinejoin="round"
          />
          <path d="M10.0000111,10 C8.10645556,10 6.57145556,8.20911111 6.57145556,6 C6.57145556,3.79088889 8.10645556,2 10.0000111,2 C11.8935667,2 13.4285667,3.79088889 13.4285667,6 C13.4285667,8.20911111 11.8935667,10 10.0000111,10 Z"
            id="Stroke-1" stroke={color} strokeWidth="1.5" fill="#FFF" strokeLinejoin="round"
          />
          <path d="M16,18 L16,13 C16,11.3368889 14.6392222,10 12.9761111,10 L7.02388889,10 C5.36077778,10 4,11.3368889 4,13 L4,18 L16,18 L16,18 Z"
            id="Stroke-3" stroke={color} strokeWidth="1.5" fill="#FFF" strokeLinejoin="round"
          />
          <path d="M13.0000111,10 C11.1064556,10 9.57145556,8.20911111 9.57145556,6 C9.57145556,3.79088889 11.1064556,2 13.0000111,2 C14.8935667,2 16.4285667,3.79088889 16.4285667,6 C16.4285667,8.20911111 14.8935667,10 13.0000111,10 Z"
            id="Stroke-1" stroke={color} strokeWidth="1.5" fill="#FFF" strokeLinejoin="round"
          />
          <path d="M19,18 L19,13 C19,11.3368889 17.6392222,10 15.9761111,10 L10.0238889,10 C8.36077778,10 7,11.3368889 7,13 L7,18 L19,18 L19,18 Z"
            id="Stroke-3" stroke={color} strokeWidth="1.5" fill="#FFF" strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
  </svg>,
  Apps: ({color, width, height}) => <svg width={width || 18} height={height || 18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <g id="1" fill="none" fillRule="evenodd">
      <g id="icons" transform="translate(-486 -519)">
        <g id="iconApps" transform="translate(485 518)">
          <rect id="bounds" fillOpacity="0" fill="#E3E3E6" width="20" height="20"
          />
          <path d="M2,8 L8,8 L8,16.9991283 C8,17.5553691 7.55641359,18 7.00922203,18 L2.99077797,18 C2.45097518,18 2,17.5518945 2,16.9991283 L2,8 Z M2.99077797,2 L7.00922203,2 L2.99077797,2 Z"
            id="Combined-Shape" stroke={color} strokeWidth="1.5" fill="#FAFAFA" strokeLinecap="round"
            strokeLinejoin="round" />
          <path d="M2,8 L16.9991283,8 C17.5518945,8 18,7.54902482 18,7.00922203 L18,2.99077797 C18,2.44358641 17.5553691,2 16.9991283,2 L3.00087166,2 C2.4481055,2 2,2.45097518 2,2.99077797 L2,8 Z"
            id="icon-square-copy-2" stroke={color} strokeWidth="1.5" fill="#FAFAFA"
            strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </g>
  </svg>,
  AddReport: ({color, width, height}) => <svg width={width || 18} height={height || 18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <g id="1" fill="none" fillRule="evenodd">
      <g id="icons" transform="translate(-539 -519)">
        <g id="iconDashboard" transform="translate(537 518)">
          <rect id="bounds" fillOpacity="0" fill="#E3E3E6" width="20" height="20"
          />
          <path d="M12.5,10.5 L12.5,14.5" id="---" stroke={color} strokeWidth="1.5"
            strokeLinecap="square" strokeLinejoin="round" />
          <path d="M10,5 L4,5 C3.44771525,5 3,5.44771525 3,6 L3,17 C3,17.5522847 3.44771525,18 4,18 L15,18 C15.5522847,18 16,17.5522847 16,17 L16,11"
            id="Path-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          />
          <g id="plus" transform="translate(13.25 2.25)" stroke={color} strokeLinecap="square"
            strokeLinejoin="round" strokeWidth="1.5">
            <path d="M2.80892073,5.61784146 L2.80892073,3.73034936e-14" id="Stroke-1"
            />
            <path d="M5.61784146,2.80892073 L3.73034936e-14,2.80892073" id="Stroke-2"
            />
          </g>
          <path d="M9.5,11.5 L9.5,14.5" id="---" stroke={color} strokeWidth="1.5"
            strokeLinecap="square" strokeLinejoin="round" />
          <path d="M6.5,9.5 L6.5,14.5" id="---" stroke={color} strokeWidth="1.5"
            strokeLinecap="square" strokeLinejoin="round" />
        </g>
      </g>
    </g>
  </svg>,
  Algo: ({color, width, height}) => <svg width={width || 20} height={height || 18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
    <g id="1" fill="none" fillRule="evenodd">
      <g id="icons" transform="translate(-174 -571)">
        <g id="IconAlgo" transform="translate(174 570)">
          <rect id="bounds" fillOpacity="0" fill="#E3E3E6" width="20" height="20"
          />
          <path d="M15.114355,3.8480373 C13.7277936,2.69406988 11.9449512,2 10,2 C6.42497389,2 3.39765363,4.34500749 2.37231626,7.58074541"
            id="Oval" stroke={color} strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"
          />
          <path d="M17.6731057,14.155095 C16.3053075,13.0627961 14.5712963,12.4097981 12.6847693,12.4097981 C9.10626145,12.4097981 6.07652677,14.7593754 5.05409551,18"
            id="Oval" stroke={color} strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"
            transform="rotate(180 11.364 15.205)" />
          <circle id="Oval" stroke={color} strokeWidth="1.5" strokeLinecap="square"
            strokeLinejoin="round" cx="17" cy="6" r="2" />
          <circle id="Oval" stroke={color} strokeWidth="1.5" strokeLinecap="square"
            strokeLinejoin="round" cx="3" cy="15" r="2" />
          <rect id="Rectangle" fill={color} x="7" y="7" width="6" height="6" rx="3"
          />
        </g>
      </g>
    </g>
  </svg>,
  Security: ({color, width, height}) => <svg width={width || 20} height={height || 20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <g id="1" fill="none" fillRule="evenodd">
      <g id="icons" transform="translate(-434 -570)">
        <g id="IconSecurity" transform="translate(434 570)">
          <rect id="bounds" fillOpacity="0" fill="#E3E3E6" width="20" height="20"
          />
          <polygon id="Path" stroke={color} strokeWidth="1.5" points="10 1 1 4 4 15 10 19 16 15 19 4"
          />
          <circle id="Oval" stroke={color} strokeWidth="1.5" cx="10" cy="6.5"
            r="2.75" />
          <path d="M5,15.5 C5,15.3338815 5.01620211,14.1715473 5.04711229,14.0144913 C5.27311546,12.866159 6.28540659,12 7.5,12 L12.5,12 C13.7163773,12 14.7298576,12.8687051 14.9538784,14.0195528 C14.984144,14.1750342 15,15.3356654 15,15.5"
            id="Path" stroke={color} strokeWidth="1.5" />
        </g>
      </g>
    </g>
  </svg>,
  Save: ({color, width, height}) => <svg width={width || 18} height={height || 17} viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
    <g id="1" fill="none" fillRule="evenodd">
      <g id="icons" transform="translate(-486 -571)">
        <g id="IconSave" transform="translate(485 570)">
          <rect id="bounds" fillOpacity="0" fill="#E3E3E6" width="20" height="20"
          />
          <polygon id="Stroke-3" stroke={color} strokeWidth="1.5" strokeLinecap="round"
            strokeLinejoin="round" points="2 17 18 17 18 3.875 10 3.875 8 2 2 2 2 3.875"
          />
          <polygon id="Star" stroke={color} strokeWidth="1.5" strokeLinecap="square"
            strokeLinejoin="round" points="9.5 12.75 6.85496636 14.1405765 7.36012284 11.1952882 5.22024568 9.10942353 8.17748318 8.67971176 9.5 6 10.8225168 8.67971176 13.7797543 9.10942353 11.6398772 11.1952882 12.1450336 14.1405765"
          />
        </g>
      </g>
    </g>
  </svg>,
  Progress: ({color, width, height}) => <svg width={width || 18} height={height || 18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <g id="1" fill="none" fillRule="evenodd">
      <g id="icons" transform="translate(-538 -571)">
        <g id="IconProgress" transform="translate(537 570)">
          <rect id="bounds" fillOpacity="0" fill="#E3E3E6" width="20" height="20"
          />
          <g id="Page-1" transform="translate(2 2)" stroke={color} strokeLinejoin="round"
            strokeWidth="1.5">
            <path d="M0.106911111,7.05244444 C0.331133333,5.24011111 1.16157778,3.61555556 2.38902222,2.38811111 C3.6148,1.16233333 5.23657778,0.332444444 7.04591111,0.106888889"
              id="Stroke-1" />
            <path d="M7.04592222,15.9830444 C5.23658889,15.7573778 3.61492222,14.9276 2.38914444,13.7018222 C1.16158889,12.4743778 0.331144444,10.8498222 0.106922222,9.03748889"
              id="Stroke-3" />
            <path d="M15.9840444,9.04496667 C15.7583778,10.8543 14.9286,12.4759667 13.7028222,13.7017444 C12.4753778,14.9293 10.8508222,15.7597444 9.03837778,15.9839667"
              id="Stroke-5" />
            <path d="M9.04597778,0.106833333 C10.8553111,0.3325 12.4769778,1.16227778 13.7027556,2.38805556 C14.9285333,3.61383333 15.7584222,5.23561111 15.9840889,7.04494444"
              id="Stroke-7" />
          </g>
        </g>
      </g>
    </g>
  </svg>,
  Heartbeat: ({color, width, height}) => <svg width={width || 18} height={height || 17} viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="1.0" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="icons" transform="translate(-486.000000, -624.000000)">
            <g id="IconHeartbeat" transform="translate(485.000000, 622.000000)">
                <rect id="bounds" fillOpacity="0" fill="#E3E3E6" x="0" y="0" width="20" height="20"></rect>
                <path d="M17.0700935,10.4228531 C17.6715698,9.43034848 18,8.44801726 18,7.4 C18,4.928 16.064,3 13.6,3 L13.6,3 C12.208,3 10.872,3.648 10,4.664 C9.128,3.648 7.792,3 6.4,3 C3.936,3 2,4.928 2,7.4 C2,10.416 4.72,12.888 8.84,16.624 L10,17.68 L11.16,16.624 C12.3144613,15.577139 13.3589987,14.6295235 14.2645705,13.7413756" id="Path" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <polyline id="Path-16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" points="8 9 9 12 11.2857143 8 13 10.5 17 10.5"></polyline>
            </g>
        </g>
    </g>
  </svg>,
  Cog: ({color, width, height}) => <svg width={width || 18} height={height || 18} viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="1.0" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="icons" transform="translate(-71.000000, -571.000000)">
            <g id="IconCog" transform="translate(70.000000, 570.000000)">
                <rect id="Rectangle" fillOpacity="0" fill="#D8D8D8" x="0" y="0" width="20" height="20"></rect>
                <circle id="Oval" stroke={color} strokeWidth="2" cx="10" cy="10" r="6"></circle>
                <polygon id="Path-25" fill={color} fillRule="nonzero" points="8 1 12 1 12 4 8 4"></polygon>
                <polygon id="Path-25" fill={color} fillRule="nonzero" transform="translate(10.000000, 17.500000) rotate(-180.000000) translate(-10.000000, -17.500000) " points="8 16 12 16 12 19 8 19"></polygon>
                <polygon id="Path-25" fill={color} fillRule="nonzero" transform="translate(2.500000, 10.000000) rotate(-90.000000) translate(-2.500000, -10.000000) " points="0.5 8.5 4.5 8.5 4.5 11.5 0.5 11.5"></polygon>
                <polygon id="Path-25" fill={color} fillRule="nonzero" points="19 8 19 12 16 12 16 8"></polygon>
                <polygon id="Path-25" fill={color} fillRule="nonzero" transform="translate(4.696699, 4.696699) rotate(-45.000000) translate(-4.696699, -4.696699) " points="2.69669914 3.19669914 6.69669914 3.19669914 6.69669914 6.19669914 2.69669914 6.19669914"></polygon>
                <polygon id="Path-25" fill={color} fillRule="nonzero" transform="translate(15.303301, 15.303301) rotate(-225.000000) translate(-15.303301, -15.303301) " points="13.3033009 13.8033009 17.3033009 13.8033009 17.3033009 16.8033009 13.3033009 16.8033009"></polygon>
                <polygon id="Path-25" fill={color} fillRule="nonzero" transform="translate(4.696699, 15.303301) rotate(-135.000000) translate(-4.696699, -15.303301) " points="2.69669914 13.8033009 6.69669914 13.8033009 6.69669914 16.8033009 2.69669914 16.8033009"></polygon>
                <polygon id="Path-25" fill={color} fillRule="nonzero" transform="translate(15.303301, 4.696699) rotate(-45.000000) translate(-15.303301, -4.696699) " points="16.8033009 2.69669914 16.8033009 6.69669914 13.8033009 6.69669914 13.8033009 2.69669914"></polygon>
            </g>
        </g>
    </g>
  </svg>,
  Code: ({color, width, height}) => <svg width={width || 20} height={height || 20} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="1.0" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="icons" transform="translate(-122.000000, -570.000000)">
            <g id="IconCode" transform="translate(122.000000, 570.000000)">
                <rect id="bounds" fillOpacity="0" fill="#E3E3E6" x="0" y="1.13686838e-13" width="20" height="20"></rect>
                <polyline id="icon-next-left-copy" stroke={color} strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" transform="translate(3.500000, 10.000000) rotate(-90.000000) translate(-3.500000, -10.000000) " points="-1.5 12.5 3.5 7.5 8.5 12.5"></polyline>
                <polyline id="icon-next-left-copy" stroke={color} strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" transform="translate(16.500000, 10.000000) scale(-1, 1) rotate(-90.000000) translate(-16.500000, -10.000000) " points="11.5 12.5 16.5 7.5 21.5 12.5"></polyline>
                <path d="M12,1 L8,19" id="Path-17" stroke={color} strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"></path>
            </g>
        </g>
    </g>
  </svg>,
  Reset: ({color, width, height}) => <svg width={width || 18} height={height || 18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g id="Admin:-Locations-(release)" fill="none" fillRule="evenodd">
          <g id="org.locations.level.edit" transform="translate(-322 -1697)">
              <g id="operating-hours" transform="translate(297 1484)">
                  <g id="segment" transform="translate(1 130)">
                      <g id="time-slider" transform="translate(23 82)">
                          <g id="time">
                              <g id="icon-/-reset-time">
                                  <rect id="bounds" width="20" height="20" />
                                  <path d="M4.41662486,6.35416667 L7.1875,6.35416667 L7.1875,8.02083333 L1.66666667,8.02083333 L1.66666667,2.5 L3.33333333,2.5 L3.33333333,4.99753639 C4.87471765,2.9448891 7.31865052,1.66664583 10.0000104,1.66664583 C14.602331,1.66664583 18.3333437,5.39765854 18.3333437,9.99997917 L16.6666771,9.99997917 C16.6666771,6.31813312 13.6818565,3.3333125 10.0000104,3.3333125 C7.70362663,3.3333125 5.62498766,4.50504625 4.41662486,6.35416667 Z M16.6666667,10 L18.3333333,10 C18.3333333,11.5096931 17.9305537,12.9624562 17.1784472,14.2348686 C15.6893531,16.754115 12.9812401,18.3333333 10,18.3333333 C6.28459175,18.3333333 3.04888305,15.8804893 2.00902252,12.3709699 C1.78278145,11.6074084 1.66666667,10.811017 1.66666667,10 L3.33333333,10 C3.33333333,10.6502837 3.42620039,11.287227 3.60701901,11.8974881 C4.43857584,14.7039845 7.02767963,16.6666667 10,16.6666667 C12.3858002,16.6666667 14.5514769,15.4037665 15.7436815,13.3867971 C16.3449966,12.3694934 16.6666667,11.2092797 16.6666667,10 Z M13.75,10.8333333 L10.8333333,10.8333333 L10.8333333,14.6875 L9.16666667,14.6875 L9.16666667,9.16666667 L13.75,9.16666667 L13.75,10.8333333 Z"
                                  id="Combined-Shape" fill={color} fillRule="nonzero" />
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
      </g>
  </svg>,
};

// Wrap each icon in a component.
let ICON_COMPONENTS = {};
for (let iconName in ICONS) {
  ICON_COMPONENTS[iconName] = function IconComponent(props) {
    const color = props.color;
    const iconFactory = ICONS[iconName];
    return iconFactory(Object.assign({}, props, {

      // `color` can either be `primary`, `darker`, or a hex/rgb color.
      color: color && typeof color === 'string' ? (
        colorVariables[`brand${color[0].toUpperCase()}${color.slice(1)}`] || /* ie, brandPrimary */
        colorVariables[`gray${color[0].toUpperCase()}${color.slice(1)}`] || /* ie, grayDarker */
        color /* ie, #555 */
      ) : colorVariables.grayCinder, /* defaults to gray-cinder */

    }));
  }
  ICON_COMPONENTS[iconName].displayName = iconName;
  ICON_COMPONENTS[iconName].propTypes = {
    color: propTypes.string,
    width: propTypes.number,
    height: propTypes.number,
  };

  // Since the name of the function of each component is `IconComponent`, add a name that React will
  // use when debugging to make icons easier to identify.
  ICON_COMPONENTS[iconName].displayName = iconName;
}

// (note: must use a commonjs-style export here since the exports all aren't known at compile-time)
//module.exports = ICON_COMPONENTS;
export default ICON_COMPONENTS;

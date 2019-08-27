// NOTE: using `require` here is needed since we have to use `module.exports` below. Webpack won't
// let you mix `import/export` and `module.exports`.
import React from 'react';
import propTypes from 'prop-types';
import colorVariables from '../../variables/colors.json';

import Alert from './symbols/alert.js';
import ArrowDown from './symbols/arrow-down.js';
import ArrowDownLeft from './symbols/arrow-down-left.js';
import ArrowDownRight from './symbols/arrow-down-right.js';
import ArrowLeft from './symbols/arrow-left.js';
import ArrowRight from './symbols/arrow-right.js';
import ArrowUp from './symbols/arrow-up.js';
import ArrowUpLeft from './symbols/arrow-up-left.js';
import ArrowUpRight from './symbols/arrow-up-right.js';
import BookmarkFill from './symbols/bookmark-fill.js';
import BookmarkOutline from './symbols/bookmark-outline.js';
import CalendarDetail from './symbols/calendar-detail.js';
import CalendarSimple from './symbols/calendar-simple.js';
import Camera from './symbols/camera.js';
import Chart1 from './symbols/chart-1.js';
import Chart2 from './symbols/chart-2.js';
import ChartLineDown from './symbols/chart-line-down.js';
import ChartLineUp from './symbols/chart-line-up.js';
import Chat from './symbols/chat.js';
import Check from './symbols/check.js';
import CheckBox from './symbols/check-box.js';
import CheckCircle from './symbols/check-circle.js';
import ChevronDown from './symbols/chevron-down.js';
import ChevronDownCircle from './symbols/chevron-down-circle.js';
import ChevronLeft from './symbols/chevron-left.js';
import ChevronLeftCircle from './symbols/chevron-left-circle.js';
import ChevronRight from './symbols/chevron-right.js';
import ChevronRightCircle from './symbols/chevron-right-circle.js';
import ChevronUp from './symbols/chevron-up.js';
import ChevronUpCircle from './symbols/chevron-up-circle.js';
import Clock from './symbols/clock.js';
import ClockReset from './symbols/clock-reset.js';
import ClockTimer from './symbols/clock-timer.js';
import Close from './symbols/close.js';
import CloseBox from './symbols/close-box.js';
import CloseCircle from './symbols/close-circle.js';
import CloudSecure from './symbols/cloud-secure.js';
import Code from './symbols/code.js';
import Cog from './symbols/cog.js';
import Collapse from './symbols/collapse.js';
import Control1 from './symbols/control-1.js';
import Control2 from './symbols/control-2.js';
import Copy from './symbols/copy.js';
import Danger from './symbols/danger.js';
import Dashboard from './symbols/dashboard.js';
import DashboardAdd from './symbols/dashboard-add.js';
import DoNotEnter from './symbols/do-not-enter.js';
import Door from './symbols/door.js';
import Dot from './symbols/dot.js';
import Download from './symbols/download.js';
import Ebook from './symbols/ebook.js';
import EgressDown from './symbols/egress-down.js';
import EgressLeft from './symbols/egress-left.js';
import Filter from './symbols/filter.js';
import FoodUtensils from './symbols/food-utensils.js';
import Globe from './symbols/globe.js';
import Health from './symbols/health.js';
import Heart from './symbols/heart.js';
import Help from './symbols/help.js';
import ImageUpload from './symbols/image-upload.js';
import Info from './symbols/info.js';
import IngressRight from './symbols/ingress-right.js';
import IngressUp from './symbols/ingress-up.js';
import Integrations1 from './symbols/integrations-1.js';
import Integrations2 from './symbols/integrations-2.js';
import Interview from './symbols/interview.js';
import Keyhole from './symbols/keyhole.js';
import Lightbulb from './symbols/lightbulb.js';
import LightningFill from './symbols/lightning-fill.js';
import LightningOutline from './symbols/lightning-outline.js';
import LinkBroken from './symbols/link-broken.js';
import LinkLinked from './symbols/link-linked.js';
import List from './symbols/list.js';
import Listening from './symbols/listening.js';
import Message from './symbols/message.js';
import Minus from './symbols/minus.js';
import MinusCircle from './symbols/minus-circle.js';
import Money from './symbols/money.js';
import More from './symbols/more.js';
import Move from './symbols/move.js';
import Notification from './symbols/notification.js';
import Paintbrush from './symbols/paintbrush.js';
import Parking from './symbols/parking.js';
import PencilFill from './symbols/pencil-fill.js';
import PencilOutline from './symbols/pencil-outline.js';
import Person from './symbols/person.js';
import PersonHuddle from './symbols/person-huddle.js';
import PersonMinus from './symbols/person-minus.js';
import PersonPlus from './symbols/person-plus.js';
import PersonRemove from './symbols/person-remove.js';
import Phone from './symbols/phone.js';
import PlaybackNext from './symbols/playback-next.js';
import PlaybackPlay from './symbols/playback-play.js';
import PlaybackPrev from './symbols/playback-prev.js';
import Plus from './symbols/plus.js';
import PlusCircle from './symbols/plus-circle.js';
import Power from './symbols/power.js';
import Refresh from './symbols/refresh.js';
import Report from './symbols/report.js';
import ReportAdd from './symbols/report-add.js';
import Rotate from './symbols/rotate.js';
import SaveFill from './symbols/save-fill.js';
import SaveOutline from './symbols/save-outline.js';
import Search from './symbols/search.js';
import Security1 from './symbols/security-1.js';
import Security2 from './symbols/security-2.js';
import Security3 from './symbols/security-3.js';
import Security4 from './symbols/security-4.js';
import Share from './symbols/share.js';
import SoundOff from './symbols/sound-off.js';
import SoundOn from './symbols/sound-on.js';
import SpaceAdd from './symbols/space-add.js';
import StairsDown from './symbols/stairs-down.js';
import StairsUp from './symbols/stairs-up.js';
import SwapHorizontal from './symbols/swap-horizontal.js';
import SwapVertical from './symbols/swap-vertical.js';
import Trash from './symbols/trash.js';
import Tray from './symbols/tray.js';
import Upload from './symbols/upload.js';
import Video from './symbols/video.js';

// A list of all density icons.
const ICONS = {
  Alert: Alert,

  ArrowDown: ArrowDown,
  ArrowDownLeft: ArrowDownLeft,
  ArrowDownRight: ArrowDownRight,
  ArrowLeft: ArrowLeft,
  ArrowRight: ArrowRight,
  ArrowUp: ArrowUp,
  ArrowUpLeft: ArrowUpLeft,
  ArrowUpRight: ArrowUpRight,

  BookmarkFill: BookmarkFill,
  BookmarkOutline: BookmarkOutline,
  Bookmark: BookmarkOutline,

  CalendarDetail: CalendarDetail,
  CalendarSimple: CalendarSimple,
  Calendar: CalendarDetail,

  Camera: Camera,

  Chart1: Chart1,
  Chart2: Chart2,
  ChartLineDown: ChartLineDown,
  ChartLineUp: ChartLineUp,

  Chat: Chat,

  Check: Check,
  CheckBox: CheckBox,
  CheckSquare: CheckBox,
  CheckCircle: CheckCircle,

  ChevronDown: ChevronDown,
  ChevronDownCircle: ChevronDownCircle,
  ChevronLeft: ChevronLeft,
  ChevronLeftCircle: ChevronLeftCircle,
  ChevronRight: ChevronRight,
  ChevronRightCircle: ChevronRightCircle,
  ChevronUp: ChevronUp,
  ChevronUpCircle: ChevronUpCircle,

  Clock: Clock,
  ClockReset: ClockReset,
  Reset: ClockReset,
  ClockTimer: ClockTimer,
  StopWatch: ClockTimer,

  Close: Close,
  CloseBox: CloseBox,
  CloseSquare: CloseBox,
  CloseCircle: CloseCircle,

  CloudSecure: CloudSecure,
  Code: Code,
  Cog: Cog,
  Collapse: Collapse,
  Control1: Control1,
  Control2: Control2,
  Copy: Copy,
  Danger: Danger,

  Dashboard: Dashboard,
  DashboardAdd: DashboardAdd,
  DoNotEnter: DoNotEnter,
  Door: Door,
  Doorway: Door,
  Dot: Dot,
  Download: Download,
  Ebook: Ebook,

  EgressDown: EgressDown,
  EgressLeft: EgressLeft,

  Filter: Filter,
  FoodUtensils: FoodUtensils,
  Globe: Globe,
  Health: Health,
  Heartbeat: Health,
  Heart: Heart,
  Help: Help,
  ImageUpload: ImageUpload,
  Info: Info,

  IngressRight: IngressRight,
  IngressUp: IngressUp,

  Integrations1: Integrations1,
  Integrations2: Integrations2,
  Interview: Interview,
  Keyhole: Keyhole,
  Lightbulb: Lightbulb,

  LightningFill: LightningFill,
  LightningOutline: LightningOutline,
  Lightning: LightningOutline,

  LinkBroken: LinkBroken,
  LinkLinked: LinkLinked,
  Link: LinkLinked,

  List: List,
  Listening: Listening,

  Message: Message,
  Minus: Minus,
  MinusCircle: MinusCircle,
  Money: Money,
  More: More,
  Move: Move,
  Notification: Notification,
  Paintbrush: Paintbrush,
  Parking: Parking,

  PencilFill: PencilFill,
  PencilOutline: PencilOutline,
  Pencil: PencilOutline,

  Person: Person,
  PersonHuddle: PersonHuddle,
  Team: PersonHuddle,
  PersonMinus: PersonMinus,
  PersonPlus: PersonPlus,
  PersonRemove: PersonRemove,

  Phone: Phone,
  PlaybackNext: PlaybackNext,
  PlaybackPlay: PlaybackPlay,
  PlaybackPrev: PlaybackPrev,
  Plus: Plus,
  PlusCircle: PlusCircle,
  Power: Power,
  Refresh: Refresh,

  Report: Report,
  ReportAdd: ReportAdd,
  AddReport: ReportAdd,

  Rotate: Rotate,

  SaveFill: SaveFill,
  SaveOutline: SaveOutline,
  Save: SaveOutline,

  Search: Search,

  Security1: Security1,
  Security2: Security2,
  Security3: Security3,
  Security4: Security4,
  Security: Security1,

  Share: Share,
  SoundOff: SoundOff,
  SoundOn: SoundOn,
  SpaceAdd: SpaceAdd,

  StairsDown: StairsDown,
  StairsUp: StairsUp,
  SwapHorizontal: SwapHorizontal,
  SwapVertical: SwapVertical,

  Trash: Trash,
  Tray: Tray,
  Upload: Upload,
  Video: Video,

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
};

// colors can either be `primary`, `darker`, or a hex/rgb color.
function parseColor(color) {
    return color && typeof color === 'string' ? (
        colorVariables[`brand${color[0].toUpperCase()}${color.slice(1)}`] || /* ie, brandPrimary */
        colorVariables[`gray${color[0].toUpperCase()}${color.slice(1)}`] || /* ie, grayDarker */
        color /* ie, #555 */
    ) : colorVariables.grayCinder; /* defaults to gray-cinder */
}

// Wrap each icon in a component.
let ICON_COMPONENTS = {};
for (let iconName in ICONS) {
  ICON_COMPONENTS[iconName] = function IconComponent(props) {
    return ICONS[iconName](Object.assign({}, props, {
        color: parseColor(props.color),
        accentColor: props.accentColor && parseColor(props.accentColor)
    }));
  }
  ICON_COMPONENTS[iconName].displayName = iconName;
  ICON_COMPONENTS[iconName].propTypes = {
    color: propTypes.string,
    accentColor: propTypes.string,
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

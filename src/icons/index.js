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
import StarFill from './symbols/star-fill.js';
import StarOutline from './symbols/star-outline.js';
import SwapHorizontal from './symbols/swap-horizontal.js';
import SwapVertical from './symbols/swap-vertical.js';
import Trash from './symbols/trash.js';
import Tray from './symbols/tray.js';
import Upload from './symbols/upload.js';
import Video from './symbols/video.js';
import VisibilityHide from './symbols/visibility-hide.js';
import Workflow from './symbols/workflow.js';

import BabyChanging from './space-functions/baby-changing.js';
import BreakoutRoom from './space-functions/breakout-room.js';
import Breakroom from './space-functions/breakroom.js';
import Cafe from './space-functions/cafe.js';
import Cafeteria from './space-functions/cafeteria.js';
import CallRoom from './space-functions/call-room.js';
import ConferenceRoom from './space-functions/conference-room.js';
import EventSpace from './space-functions/event-space.js';
import Gym from './space-functions/gym.js';
import Kitchen from './space-functions/kitchen.js';
import Lab from './space-functions/lab.js';
import Lobby from './space-functions/lobby.js';
import Lounge from './space-functions/lounge.js';
import RestroomMen from './space-functions/restroom-men.js';
import RestroomUnisex from './space-functions/restroom-unisex.js';
import RestroomWomen from './space-functions/restroom-women.js';
import Study from './space-functions/study.js';
import Theater from './space-functions/theater.js';
import UtilityRoom from './space-functions/utility-room.js';

import Building from './space-types/building.js';
import Floor from './space-types/floor.js';
import Space from './space-types/space.js';
import L from './legacy/l.js';
import Image from './legacy/image.js';
import Folder from './legacy/folder.js';
import Bucket from './legacy/bucket.js';
import Plane from './legacy/plane.js';
import Soup from './legacy/soup.js';
import DragDrop from './legacy/drag-drop.js';
import Zoom from './legacy/zoom.js';
import Export from './legacy/export.js';
import Circle from './legacy/circle.js';
import Progress from './legacy/progress.js';
import VisibilityShow from './symbols/visibility-show.js';

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

  StarFill: StarFill,
  StarOutline: StarOutline,
  Star: StarOutline,

  SwapHorizontal: SwapHorizontal,
  Switch: SwapHorizontal,
  SwapVertical: SwapVertical,

  Trash: Trash,
  Tray: Tray,
  Menu: Tray,
  Upload: Upload,
  Video: Video,

  VisibilityHide: VisibilityHide,
  Hide: VisibilityHide,
  VisibilityShow: VisibilityShow,
  Show: VisibilityShow,

  Workflow: Workflow,


  // Space Functions
  BabyChanging: BabyChanging,
  BreakoutRoom: BreakoutRoom,
  Breakroom: Breakroom,
  Cafe: Cafe,
  Cafeteria: Cafeteria,
  CallRoom: CallRoom,
  ConferenceRoom: ConferenceRoom,
  EventSpace: EventSpace,
  Gym: Gym,
  Kitchen: Kitchen,
  Lab: Lab,
  Lobby: Lobby,
  Lounge: Lounge,
  RestroomMen: RestroomMen,
  RestroomUnisex: RestroomUnisex,
  RestroomWomen: RestroomWomen,
  Study: Study,
  Theater: Theater,
  UtilityRoom: UtilityRoom,


  // Space Types
  Building: Building,
  Floor: Floor,
  Space: Space,


  L: L,
  Image: Image,
  Folder: Folder,
  Bucket: Bucket,
  Plane: Plane,
  Soup: Soup,
  DragDrop: DragDrop,
  Zoom: Zoom,
  Export: Export,
  Circle: Circle,
  Progress: Progress,
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

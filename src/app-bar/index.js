import React, { useContext } from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

// Classes to merge in, depending on context
const CONTEXT_CLASSES = {
  'TRANSPARENT': styles.contextTransparent,
  'BOTTOM_ACTIONS': styles.contextBottomActions,
  'ADMIN_LOCATIONS_EDIT_MODULE_HEADER': styles.contextAdminLocationsEditModuleHeader,
};

export const AppBarContext = React.createContext(null);

export function AppBarTitle({ children }) {
  return (
    <span className={styles.appBarTitle}>
      {children}
    </span>
  );
}

export function AppBarSection({ children }) {
  return (
    <span className={styles.appBarSection}>
      {children}
    </span>
  );
}

export default function AppBar({ children }) {
  const context = useContext(AppBarContext);
  const containerClasses = classnames(CONTEXT_CLASSES[context], styles.appBar);
  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
}

AppBar.displayName = 'AppBar';

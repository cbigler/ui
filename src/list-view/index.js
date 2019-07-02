import React, { useContext } from 'react';
import classnames from 'classnames';
import { v4 } from 'uuid';

import styles from './styles.module.scss';

const TABLE_HEADER = 'TABLE_HEADER',
  TABLE_ROW = 'TABLE_ROW';

const ListViewContext = React.createContext({});


// type ListViewClickableLinkProps = {
//   onClick?: () => any,
//   children: ReactNode
// }

export function ListViewClickableLink({ onClick, children }) {
  return (
    <span role="button" className={styles.listViewClickableLink} onClick={onClick}>
      {children}
    </span>
  );
}


export default function ListView({
  data = [],
  keyTemplate = item => item.id,
  showHeaders = true,
  children = null,
}) {
  return (
    <table className={styles.listView}>
      {showHeaders ? (
        <thead>
          <tr>
            <ListViewContext.Provider value={{ mode: TABLE_HEADER }}>
              {children}
            </ListViewContext.Provider>
          </tr>
        </thead>
      ) : null}
      <tbody>
        {data.map(item => (
          <tr key={keyTemplate(item)}>
            <ListViewContext.Provider value={{ mode: TABLE_ROW, item }}>
              {children}
            </ListViewContext.Provider>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


// type ListViewColumnProps = {
//   title?: any,
//   template?: any,
//   onClick?: (any) => any,
//   href?: (any) => string,
//   disabled?: (any) => boolean,
//   flexGrow?: number,
//   flexShrink?: number,
//   width?: string | number,
// }

export function ListViewColumn({
  id = null,
  title = null,
  template = null,
  onClick = null,
  disabled = item => false,

  width = 'auto',
  minWidth = 'auto'
}) {
  const { mode, item } = useContext(ListViewContext);
  const clickable = item && !disabled(item) && Boolean(onClick);

  return mode === TABLE_HEADER ? (
    <th key={id || title || v4()} style={{width, minWidth}}>
      <div className={styles.listViewHeader}>{title}</div>
    </th>
  ) : (
    <td key={id || title || v4()} style={{width}}>
      <div
        className={classnames(styles.listViewCell, { [styles.clickable]: clickable })}
        onClick={() => clickable && onClick(item)}
      >
        {template(item)}
      </div>
    </td>
  );
}

import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";

import styles from "../styles/Skeleton.module.css";
const ColorContext = React.createContext();

export function SkeletonContainer({ children, color = "lightgray" }) {
  return (
    <ColorContext.Provider value={color}>
      <div className={styles.skeletonContainer}>{children}</div>
    </ColorContext.Provider>
  );
}

export function SkeletonRow({ rows = 1, rowHeight = 1, cols = 1, padding }) {
  const bones = [];
  const color = useContext(ColorContext);

  for (let i = 0; i < rows; i++) {
    bones.push(
      <span
        key={i}
        className={styles.bone}
        style={{
          height: `${rowHeight}rem`,
          width: `${cols}rem`,
          padding: padding ? `${padding}rem` : "0",
          backgroundColor: color,
        }}
      ></span>
    );
  }
  return <>{bones}</>;
}

export function SkeletonCircle({ radius = 2 }) {
  const color = useContext(ColorContext);
  return (
    <span
      className={`${styles.bone} ${styles.boneCircle}`}
      style={{
        width: `${radius}rem`,
        height: `${radius}rem`,
        backgroundColor: color,
      }}
    />
  );
}

export function SkeletonGroup({ children }) {
  return <div className={styles.skeletonGroup}>{children}</div>;
}

export function SkeletonButton() {
  return <SkeletonRow rows={1} rowHeight={3} cols={10} />;
}
SkeletonRow.propTypes = {
  rows: PropTypes.number,
  rowHeight: PropTypes.number,
  cols: PropTypes.number,
  padding: PropTypes.number,
};

SkeletonContainer.propTypes = {
  children: PropTypes.array,
};

SkeletonCircle.propTypes = {
  radius: PropTypes.number,
};

import React from "react";
import galaxyBg from "../styles/galaxy-bg.module.css";

export const GalaxyBg = () => {
  return (
    <section>
      <div className={galaxyBg["galaxy-bg"]}>
        <div className={galaxyBg["bg"]}></div>
        <div className={galaxyBg["star-field"]}>
          <div className={galaxyBg["layer"]}></div>
          <div className={galaxyBg["layer"]}></div>
          <div className={galaxyBg["layer"]}></div>
        </div>
      </div>
    </section>
  );
};

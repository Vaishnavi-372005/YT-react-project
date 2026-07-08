import React from "react";
import Style from "./css/Sidebar.module.css";

import {
  House,
  Clapperboard,
  PlaySquare,
  History,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className={Style.sidebar}>

      {/* Main Menu */}
      <div className={Style.item}>
        <House size={24} />
        <span>Home</span>
      </div>

      <div className={Style.item}>
        <Clapperboard size={24} />
        <span>Shorts</span>
      </div>

      <div className={Style.item}>
        <PlaySquare size={24} />
        <span>Subscriptions</span>
      </div>

      <div className={Style.item}>
        <History size={24} />
        <span>History</span>
      </div>

      <hr className={Style.line} />

      {/* Subscription Section */}
      <h3 className={Style.heading}>Subscriptions</h3>

      <div className={Style.channel}>
        <img
          src="https://i.pravatar.cc/40?img=1"
          alt="channel"
        />
        <span>CodeWithHarry</span>
      </div>

      <div className={Style.channel}>
        <img
          src="https://i.pravatar.cc/40?img=2"
          alt="channel"
        />
        <span>Apna College</span>
      </div>

      <div className={Style.channel}>
        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="channel"
        />
        <span>Take U Forward</span>
      </div>

      <div className={Style.channel}>
        <img
          src="https://i.pravatar.cc/40?img=4"
          alt="channel"
        />
        <span>Hitesh Choudhary</span>
      </div>

      <div className={Style.channel}>
        <img
          src="https://i.pravatar.cc/40?img=5"
          alt="channel"
        />
        <span>FreeCodeCamp</span>
      </div>

    </aside>
  );
};

export default Sidebar;
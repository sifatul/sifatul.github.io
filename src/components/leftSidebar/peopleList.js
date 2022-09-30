import { useCallback, useEffect, useMemo, useState } from "react";
import { MY_INFO } from "../../constants/index";
import RealtimeDatabaseManage from "../../hooks/RealtimeDatabase";
import { useStore } from "../../store";
import AddChannel from "./addChannel";
import ChannelItem from "./channelItem";
import ChannelLabel from "./labelChannel";
import Style from "./leftSidebar.module.scss";

export const SIFATUL_INFO = {
  label: MY_INFO.name,
  imgSrc: MY_INFO.avatar,
};
const ChannelList = () => {
  const [open, setOpen] = useState(true);
  const {
    setActiveSidebar,
    activeSidebarItem,
    sifatulInfo,
    myInfo,
    users,
    addUsers,
  } = useStore();

  const { activeSidebarLabel } = activeSidebarItem;

  const { getAllUsers } = RealtimeDatabaseManage();
  const handleUserList = useCallback(async () => {
    const users = await getAllUsers();
    addUsers(users);
  }, [[myInfo]]);

  useEffect(() => {
    if (!myInfo) return;
    handleUserList();
  }, [myInfo]);

  const senders = useMemo(() => {
    return Object.keys(users).map((userID) => {
      return users[userID];
    });
  }, [users]);

  console.log("senders: ", senders)

  return (
    <>
      <div className={`${Style.channelListSection} ${Style.peopleList}`}>
        <ChannelLabel
          toggleOpen={() => setOpen(!open)}
          open={open}
          label="Direct messages"
        />


        {open && (
          <>
            {senders.map((people) => {
              const { name, avatar, extraLabel } = people;
              return (
                <ChannelItem
                  key={name}
                  label={name}
                  imgSrc={avatar}
                  active
                  onClick
                  extraLabel={extraLabel}
                  active={activeSidebarLabel === name}
                  onClick={(e) => setActiveSidebar(name, avatar)}
                />
              );
            })}
            <AddChannel label="Add teammates" />
          </>
        )}
      </div>
    </>
  );
};
export default ChannelList;

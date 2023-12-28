import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { BsFillPersonLinesFill } from "react-icons/bs";
export default function BottomNavBar() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="sm:hidden sticky bottom-0">
      <BottomNavigation
        sx={{ width: 360 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          
          icon={<FaLinkedin className="text-[#0077b5]" size={30} />}
        />
        <BottomNavigationAction
         
          icon={<FaGithub className="text-[#2b3137]" size={30} />}
        />
        <BottomNavigationAction
          icon={<HiOutlineMail className="text-[#E74C3C]" size={30} />}
        />
        <BottomNavigationAction
         
          icon={<BsFillPersonLinesFill className="text-[#F1C40F]" size={30} />}
        />
      </BottomNavigation>
    </div>
  );
}

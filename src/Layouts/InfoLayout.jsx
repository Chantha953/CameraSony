import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
const InfoLayout = () => {
  const [activeLink, setActiveLink] = useState(null);
  const navigation = [
    {
      id: 1,
      link: "My Profile",
      icon: <i class="fa-regular fa-user ms-1"></i>,
    },
    { id: 2, link: "My Order", icon: <i class="fa-solid fa-list ms-2"></i> },
    {
      id: 3,
      link: "Sign out",
      icon: <i class="fa-solid fa-right-from-bracket ms-3"></i>,
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-3 hieghtAside" style={{ height: "86vh", transform : "translateY(6rem)"}}>
          <aside
            className="border h-100 rounded asideNavigateInfo"
          >
            <nav>
              <ul className="text-white navigateInfo">
                {navigation.map((url) => (
                  <li className="list-unstyled mt-4">
                    <Link className="text-decoration-none text-white fw-bold">
                      {url.link} {url.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
        <div className="col-12 col-md-8">
          <ProfilePage />
        </div>
      </div>
    </div>
  );
};

export default InfoLayout;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { Button, Dropdown, Menu } from "antd";
import {
  ArrowRightOutlined,
  MenuOutlined,
  CloseOutlined,
  DownOutlined,
} from "@ant-design/icons";

import "./Header.scss";

interface HeaderProps {
  onReserveClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onReserveClick = () => {} }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [_, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024 && window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigationLinks = [
    {
      id: 1,
      text: "Titre 1",
      subItems: [
        { id: "sub1-1", text: "Sous-titre 1.1" },
        { id: "sub1-2", text: "Sous-titre 1.2" },
      ],
    },
    { id: 2, text: "Titre 2" },
    { id: 3, text: "Titre 3" },
    { id: 4, text: "Titre 4" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        mobileMenuOpen &&
        !target.closest(".header__navigation") &&
        !target.closest(".header__mobile-toggle")
      ) {
        setMobileMenuOpen(false);
        document.body.classList.remove("mobile-menu-open");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("mobile-menu-open");
    };
  }, [mobileMenuOpen]);

  const renderNavItem = (link: any) => {
    if (link.subItems) {
      const menu = (
        <Menu>
          {link.subItems.map((subItem: any) => (
            <Menu.Item key={subItem.id}>
              <a href="#">{subItem.text}</a>
            </Menu.Item>
          ))}
        </Menu>
      );

      return (
        <Dropdown
          overlay={menu}
          placement="bottom"
          arrow
          trigger={["click"]}
          className="header__nav-dropdown"
        >
          <div className="header__nav-item dropdown">
            {link.text} <DownOutlined className="dropdown-icon" />
          </div>
        </Dropdown>
      );
    }

    return <div className="header__nav-item">{link.text}</div>;
  };

  const mobileMenuItems = [
    {
      id: "mobile-1",
      text: "Gallery",
      icon: "svg/mountain-28.svg",
    },
    {
      id: "mobile-2",
      text: "Info",
      icon: "svg/fishing-28.svg",
    },
    {
      id: "mobile-3",
      text: "Location",
      icon: "svg/crosshair-28.svg",
    },
  ];

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">LOGO SAMPLE</div>

        <button className="header__mobile-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>

        <div className={`header__navigation ${mobileMenuOpen ? "active" : ""}`}>
          {navigationLinks.map((link) => (
            <div key={link.id} className="header__nav-item-container">
              {renderNavItem(link)}
            </div>
          ))}

          {isMobile && (
            <div className="header__mobile-actions">
              <div className="header__mobile-icons">
                {mobileMenuItems.map((item) => (
                  <div className="header__mobile-icon-item" key={item.id}>
                    <div className="header__icon-wrapper">
                      <img
                        src={item.icon}
                        alt={item.text}
                        className="header__icon"
                      />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <Button
                type="primary"
                icon={<ArrowRightOutlined />}
                className="header__mobile-button"
                onClick={() => {
                  onReserveClick();
                  setMobileMenuOpen(false);
                  document.body.classList.remove("mobile-menu-open");
                }}
              >
                Reserve Now
              </Button>
            </div>
          )}
        </div>

        <div className="header__actions">
          <div className="header__icons">
            <div className="header__icon-wrapper">
              <img
                src="svg/mountain-28.svg"
                alt="Mountain"
                className="header__icon"
              />
            </div>
            <div className="header__icon-wrapper">
              <img
                src="svg/fishing-28.svg"
                alt="Fishing"
                className="header__icon"
              />
            </div>
            <div className="header__icon-wrapper">
              <img
                src="svg/crosshair-28.svg"
                alt="Around"
                className="header__icon"
              />
            </div>
          </div>

          <Button
            type="primary"
            shape="circle"
            icon={<ArrowRightOutlined />}
            className="header__button"
            onClick={onReserveClick}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

function MenuItems({ menuItem }) {
  return (
    <div className="portfolis">
      {menuItem.map((item) => {
        return (
          <div className="portfolio" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li>
                  <a
                    href={item.link1}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* we use target attribute for this link open in new tab and rel attribute for security */}
                    {item.icon1}
                  </a>
                  <a
                    href={item.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* we use target attribute for this link open in new tab and rel attribute for security */}
                    {item.icon2}
                  </a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;

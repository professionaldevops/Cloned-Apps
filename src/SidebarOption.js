import React from 'react';
import './SidebarOption.css';

function SidebarOption({Icon,title}) {
    return (
        <div className='SidebarOption'>
          {Icon && <Icon className='SidebarOption__icon'/> }
          {
              Icon ? (
                  <h3>{title}</h3>
              ):(
                  <h3 className='SidebarOption__withoutIcon'>
                      <span className='SidebarOption__hash'>#</span>{title}
                    </h3>
              )
          }
        </div>
    )
}

export default SidebarOption

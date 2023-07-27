import React from 'react'
import "./css/Widget.css"
import InfoIcon from '@mui/icons-material/Info';
const Widget = () => {
  return (
    <div className='widget'>
    <div className='widget__top'>
     <div className='widget__header'>
        <h4>LinkedIn News</h4>
        <InfoIcon/>
     </div>

     <div className='widget__body'>
         <ul className='widget__options'>
            <li>
                <h4>Slaying Job Search Fees</h4>
                <p>6d ago * 4,55 renders</p>
            </li>

            <li>
                <h4>A Two Pizza rule for eating</h4>
                <p>2d ago * 6,12 renders</p>
            </li>

            <li>
                <h4>How to handle a workplace breakup</h4>
                <p>3d ago * 4,45 renders</p>
            </li>

            <li>
                <h4>Flexi leave is the new Flexi</h4>
                <p>3d ago * 3,55 renders</p>
            </li>

            <li>
                <h4>Shoter hour boost productivity </h4>
                <p>1d ago * 4,55 renders</p>
            </li>
         </ul>
     </div>
     </div>
     <div className='widget__bottom'>
        <div className='widget__header'>
             <h4>Todays top course</h4>
             <InfoIcon/>
        </div>
        <div className='widget_body'>
            <ul className='widget__options'>
            <li>
                <h4>Leading with a heavy heat</h4>
                <p>Kay Coly</p>
            </li>
            <li>
                <h4>Building Resillience </h4>
                <p>Tatianan Kolovau</p>
            </li>
            <li>
                <h4>Critical Thinking for better judgement</h4>
                <p>3d ago * 3,55 renders</p>
            </li>
            <li>
                <h4>Shoter hour boost productivity </h4>
                <p>1d ago * 4,55 renders</p>
            </li>
            <li>
                <h4>Flexi leave is the new Flexi</h4>
                <p>3d ago * 3,55 renders</p>
            </li>
            </ul>

        </div>
     </div>
    
    </div>
  )
}

export default Widget
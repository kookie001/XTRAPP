import React from 'react';
import { Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed w-64 h-full bg-blue-50 flex flex-col justify-between mt-[-0.5rem]">
      <div>
      <div className="p-4"> <input type="text" placeholder="Search" className="w-full p-2 rounded bg-gray-200" /> </div>
        <nav className="p-6 ">
          <ul className='space-y-4'>
            <li className="flex items-center p-2 rounded hover:bg-gray-200">
              <span className="material-icons">home</span>
             <Link to="/user-dashboard"><span className="ml-2">Home</span></Link> 
            </li>
            <li className="flex items-center p-2 rounded hover:bg-gray-200">
              <span className="material-icons">work</span>
             <Link to="/portfolio"> <span className="ml-2">Portfolio</span></Link>
            </li>
            <li className="flex items-center p-2 rounded hover:bg-gray-200">
              <span className="material-icons">notifications</span>
              <span className="ml-2">Requests</span>
            </li>
            <li className="flex items-center p-2 rounded hover:bg-gray-200">
              <span className="material-icons">group</span>
              <span className="ml-2">Collaboration</span>
            </li>
            <li className="flex items-center p-2 rounded hover:bg-gray-200">
              <span className="material-icons">account_balance_wallet</span>
              <span className="ml-2">Wallet</span>
            </li>
            <li className="flex items-center p-2 rounded hover:bg-gray-200">
              <span className="material-icons">settings</span>
              <span className="ml-2">Setting</span>
            </li>

           
          </ul>
        </nav>
        <div className='p-6 mt-[8rem]'>
        <li className="flex items-center p-2 rounded hover:bg-gray-200">
              <span className="material-icons">exit_to_app</span>
              <Link to="/" className=" text-black px-4 py-2">
                Sign Out
              </Link>
            </li>
      </div>
      </div>
     
    </div>
  );
};

export default Sidebar;

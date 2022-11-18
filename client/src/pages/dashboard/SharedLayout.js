import { Outlet } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { Navbar, SmallSidebar, BigSidebar } from '../../components';
import { useAppContext } from '../../context/appContext';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';

const SharedLayout = () => {
  const { user } = useAppContext();
  return (
    <>
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar /> {/* because of css rules only one is rendered */}
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
};

export default SharedLayout;
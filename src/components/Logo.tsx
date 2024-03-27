import { Link } from 'react-router-dom';
import { RoutePath } from '../utils/pages';

const Logo = () => {
  return (
    <h1>
      <Link
        to={RoutePath.main}
        className='uppercase font-bold text-xxl text-mainColor hover:opacity-70 transition-opacity'
      >
        Qpick
      </Link>
    </h1>
  );
};

export default Logo;

import Facebook from "./icons/Facebook";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";
import Link from 'next/link'

function Social() {
  return (
    <div className="social_icons flex space-x-4">
        <div className="social_icon rounded-md bg-gray-100 p-2 ">
          <Link href='/'>
            <Twitter />
          </Link>
        </div>
        <div className="social_icon rounded-md bg-gray-100 p-2 ">
          <Link href='/'>
            <Facebook />
          </Link>
        </div>
        <div className="social_icon rounded-md bg-gray-100 p-2 ">
          <Link href='/'>
            <LinkedIn />
          </Link>
        </div>
    </div>
  );
}

export default Social;

import Image from 'next/image';
import Link from 'next/link';
import { CMS_NAME, CMS_URL } from "../lib/constants";
import logo from '../public/logo.svg';

export default function CustomLayout() {
  return (
    <div className="bg-black text-white w-full h-screen flex flex-col justify-between md:flex-row">
      <header className="flex justify-between p-5 items-start md:items-center">
        <Link href="/" passHref>
         <Image src={logo} alt="Logo" width={100} height={100} />
        </Link>
  
      </header>
      <main className="flex-1 flex items-center justify-center flex-col md:flex-row">
        <div className="mb-5 md:mb-0 md:mr-5">
          <Image src="https://howell.studio/wp-content/uploads/2024/02/wwip-stacked.svg" alt="Descriptive Image Text" width={300} height={200} />
        </div>
        <div className="text-center md:text-right">
          <p className="text-lg">
            — a creative & design studio focused on merging the tangible with the ethereal, creating a symphony of art & ambiance that resonates with cultural significance. 
          </p>
        </div>
      </main>

    </div>
  );
}

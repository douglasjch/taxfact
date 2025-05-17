import Link from 'next/link';
import Image from 'next/image';
import Pict01 from '../../public/oppressive-taxes.jpg';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Direct Taxes and Constitutional Representation</h1>
      <h2 className="mb-4 font-bold m-6 text-sm sm:text-base md:text-lg lg:text-xl ">The Framers of the Constitution found direct taxes 
        to be profoundly unpopular and expected the government to rely principally on indirect taxes. The Framers affixed the rule of apportionment for direct taxes with the 
        census in proportion to suffrage and Representation, along with the power of the purse, being one of the most important and potent powers of the government. 
      </h2>
      <h2 className="mb-8 mt-6 text-lg font-serif font-bold">The Revenue of the State is the State. ~ Edmund Burke</h2>
      

      <p className="text-lg text-fd-foreground">
        Open{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        to see the documentation.
      </p>
      <Image
            src={Pict01}
            alt="Oppressive Taxes"
            className="mx-auto bg-local bg-opacity-50 mb-4"
            width={500}
            height={500}
            blurDataURL="data:..." 
            placeholder="blur"
    />



    </main>
  );
}

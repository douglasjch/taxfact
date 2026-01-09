import Link from 'next/link';
import Image from 'next/image';
import Pict01 from '../../public/oppressive-taxes.jpg';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="ml-4 mr-5 mb-4 mt-5 text-2xl font-bold">Direct Taxes and Constitutional Representation</h1>
      <h2 className="mb-4 m-6 text-sm sm:text-base md:text-lg lg:text-xl ">IRS calls them &quot;direct taxes&quot; while the Supreme Court calls them &quot;indirect taxes&quot;.
      </h2>
      <h3 className="my-6 mx-8 text-sm sm:text-base md:text-lg lg:text-xl ">
        The Framers of the Constitution found direct taxes to be profoundly unpopular and expected the federal government to rely principally on indirect taxes. 
        The Framers affixed the rule of apportionment for direct taxes with the 
        census in proportion to suffrage and representation. 
        <p>The Constitution grants control over the power of the purse 
        and the power to levy taxes to these same Representatives.
        </p>
     </h3>
      <h2 className="mb-8 mt-6 text-lg font-serif font-bold">The Revenue of the State is the State. ~ Edmund Burke</h2>
      
      <p className="text-lg text-fd-foreground">
        Open{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          docs
        </Link>{' '}
        to see the documentation or 
        <Link
          href="/docs/tldr"
          className="text-fd-foreground underline ml-1.5"
        >
          tl;dr
        </Link>{' '}
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

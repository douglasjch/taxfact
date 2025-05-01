import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Direct Taxes and Constitutional Representation</h1>
      <h2 className="mb-4 font-bold m-6 text-sm sm:text-base md:text-lg lg:text-xl ">The Framers of the Constitution expected the government to rely principally 
        on indirect taxes and found direct taxes to be profoundly unpopular. The Framers affixed the rule of apportionment for direct taxes with the 
        census in proportion to suffrage and Representation, along with the power of the purse, being one of the most important and potent powers of the government. 
      </h2>
      <h2 className="mb-8 text-lg font-serif font-bold">The Revenue of the State is the State. ~ Edmund Burke</h2>

      <h2 className="mb-8 text-lg font-serif font-bold"> "The great object of the Constitution was, to give Congress a power to lay taxes, 
        adequate to the exigencies of government; but they were to observe...the rule of apportionment, according to the census, when they 
        laid any direct tax." Hylton v. United States, 3 U.S. (3 Dall.) 171, 173 (1796) (opinion of Chase, J.) </h2>
      
      

      <p className="text-lg text-fd-foreground">
        You can open{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </main>
  );
}

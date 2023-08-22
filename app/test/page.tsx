import React from "react";
import "../../styles/test.css";
import Link from "next/link";

function TestPage() {
  return (
    <div className="flex flex-col gap-5 px-10">
      <Link href="/test/loadmore">Load More Paginate</Link>
      <Link href="/test/memo">Memo</Link>
      <Link href="/test/selectfilter">
        Filter item with Select and option (dropdown)
      </Link>
      <Link href="/test/showmore">Show More in map item</Link>
      <Link href="/test/suspense">Suspense Example</Link>
      <Link href="/test/setinterval">
        setInterval in react components with useEffect
      </Link>
      <Link href="/test/usetransition">useTransition Hook</Link>
      <Link href="/test/usedeferredvalue">useDeferredValue Hook</Link>
      <Link href="/test/usecallback">useCallback Hook</Link>
      <Link href="/test/passchildtoparent">
        Pass data from child to parent and use spread to pass data from parnet
        to child
      </Link>
      <Link href="/test/crud">Get , Post , Put, Delete in react</Link>
      <Link href="/test/inputref">Input ref</Link>
      <Link href="/test/usescrollhook">usescrollhook</Link>
      <Link href="/test/reusable-input">Create Reusable input</Link>
      <Link href="/test/listbox-select">Listbox Select</Link>
      <Link href="/test/slider">Slider</Link>
    </div>
  );
}

export default TestPage;

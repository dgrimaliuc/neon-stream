import { useState, useEffect } from 'react';

/*
Example:

function Page() {
  let isPageWide = useMediaQuery('(min-width: 800px)')
    
    return <>
    {isPageWide && <UnnecessarySidebar />}
    <ImportantContent />
  </>
}

*/
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

import { useEffect } from "react";
function Work() {
  useEffect(() => {
    // Scroll to the top when the pathname changes
    window.scrollTo(0, 0);
  }, []);
  return <div>Work</div>;
}

export default Work;

import {
  SkeletonButton,
  SkeletonCircle,
  SkeletonContainer,
  SkeletonGroup,
  SkeletonImage,
  SkeletonRow,
  SkeletonStack,
} from "./components/Skeleton";

import "./App.css";
import { useEffect, useState } from "react";

function ParagraphPlaceHolder() {
  return (
    <SkeletonContainer>
      <SkeletonRow rows={1} rowHeight={2} cols={20} />
      <SkeletonRow rows={4} fullWidth />
    </SkeletonContainer>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => setLoading((state) => !state), 2000);
  }, []);

  return (
    <div style={{ color: "white" }}>
      <h1>This is a skeleton.</h1>
      {loading ? (
        <ParagraphPlaceHolder />
      ) : (
        <>
          <h2>This is a Paragraph</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            illum repellat illo quod mollitia nisi voluptate consequuntur sequi
            ex sunt aperiam expedita in aut, itaque explicabo doloribus
            recusandae. Ab voluptatum quas modi! Beatae, expedita. Cumque illum
            qui dignissimos iusto totam nesciunt nemo soluta? Autem, molestias!
            Soluta ad dolores quas suscipit?
          </p>
        </>
      )}
    </div>
  );
}

export default App;

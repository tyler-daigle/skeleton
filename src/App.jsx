import {
  SkeletonButton,
  SkeletonCircle,
  SkeletonContainer,
  SkeletonGroup,
  SkeletonRow,
} from "./components/Skeleton";

import "./App.css";

function App() {
  return (
    <div>
      <h1>This is a skeleton.</h1>
      <SkeletonContainer color="#ABC">
        <SkeletonGroup>
          <SkeletonCircle radius={5} />
          <SkeletonCircle radius={5} />
        </SkeletonGroup>
        <SkeletonRow rows={5} rowHeight={1} cols={25} padding={0.5} />
        <SkeletonGroup>
          <SkeletonButton />
          <SkeletonButton />
        </SkeletonGroup>
      </SkeletonContainer>
    </div>
  );
}

export default App;

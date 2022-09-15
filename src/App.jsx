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

function App() {
  return (
    <div>
      <h1>This is a skeleton.</h1>
      <SkeletonContainer color="#ABC">
        <SkeletonGroup>
          <SkeletonCircle radius={5} />
          <SkeletonCircle radius={5} />
        </SkeletonGroup>
        <SkeletonGroup>
          <SkeletonImage width={300} height={200} />
          <SkeletonStack>
            <SkeletonRow rows={5} rowHeight={1} cols={25} padding={0.5} />
          </SkeletonStack>
        </SkeletonGroup>
        <SkeletonGroup>
          <SkeletonButton />
          <SkeletonButton />
        </SkeletonGroup>
      </SkeletonContainer>
    </div>
  );
}

export default App;

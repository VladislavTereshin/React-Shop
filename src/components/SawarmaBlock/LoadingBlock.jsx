import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="sawarma-block"
      speed={2}
      width={280}
      height={510}
      viewBox="0 0 280 510"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="140" cy="112" r="75" />
      <rect x="0" y="210" rx="6" ry="6" width="280" height="156" />
      <rect x="0" y="360" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="472" rx="6" ry="6" width="91" height="31" />
      <rect x="137" y="465" rx="25" ry="25" width="140" height="46" />
    </ContentLoader>
  );
}

export default LoadingBlock;

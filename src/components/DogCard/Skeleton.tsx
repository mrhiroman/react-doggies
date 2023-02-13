import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = () => (
  <ContentLoader 
    speed={2}
    width={270}
    height={270}
    viewBox="0 0 270 270"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="30" y="30" rx="25" ry="25" width="200" height="150" /> 
    <rect x="32" y="196" rx="0" ry="0" width="190" height="17" /> 
    <rect x="32" y="221" rx="0" ry="0" width="190" height="17" />
  </ContentLoader>
)

export default Skeleton
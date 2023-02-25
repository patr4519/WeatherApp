import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={240}
    height={240}
    viewBox="0 0 240 240"
    backgroundColor="#e1e0e0"
    foregroundColor="#636363"
    {...props}
  >
    <rect x="0" y="0" rx="14" ry="14" width="240" height="240" /> 
    <rect x="0" y="257" rx="5" ry="5" width="220" height="15" /> 
    <rect x="0" y="278" rx="5" ry="5" width="220" height="15" /> 
    <rect x="20" y="298" rx="5" ry="5" width="180" height="15" />
  </ContentLoader>
)

export default Skeleton


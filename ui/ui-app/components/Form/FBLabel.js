import React from 'react'

const FBLabel = ({ text, className, ...props }) => {
  
  const defaultClasses = "text-base";
  const combinedClassNames = `${defaultClasses} ${className}`;

  return (
    <div className={combinedClassNames} {...props}>
      {text}
    </div>
  )
}

export default FBLabel
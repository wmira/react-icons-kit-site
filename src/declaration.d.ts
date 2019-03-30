declare module "react-markings" {
  import * as React from 'react'

  function md(s: TemplateStringsArray, ...interpolations: any[]): React.ReactElement<string>    
  export default md
}
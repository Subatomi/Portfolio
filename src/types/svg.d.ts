declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*?react' {
  import * as React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export default ReactComponent;
}

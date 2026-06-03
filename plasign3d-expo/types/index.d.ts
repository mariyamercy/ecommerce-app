declare module 'expo-gl' {
  import { ViewProps } from 'react-native';
  import React from 'react';

  export interface GLViewProps extends ViewProps {
    onContextCreate: (gl: WebGLRenderingContext) => void;
  }

  export class GLView extends React.Component<GLViewProps> {}
}

declare module 'expo-three' {
  import * as THREE from 'three';
  export class Renderer extends THREE.WebGLRenderer {
    constructor(params: { gl: WebGLRenderingContext });
  }
}

declare module 'three';

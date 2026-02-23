import 'styled-components';

// 扩展 DefaultTheme 接口，添加自定义主题属性
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
    };
    size: {};
    mixin: {
      wrapv1: string;
    };
  }
}

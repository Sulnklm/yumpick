// src/styles/Typography.js
import { Colors } from './Colors'; // Colors를 import

export const Typography = {
  h1: {
    fontSize: 22,
    color: Colors.grayDark,
    fontWeight: 'semi-bold',
    fontFamily: 'Afacad-Bold', // 폰트 패밀리 설정
  },
  h2: {
    fontSize: 20,
    color: Colors.grayDark,
    fontWeight: 'semi-bold',
    fontFamily: 'Afacad-SemiBold',
  },
  h3: {
    fontSize: 18,
    color: Colors.gray,
    fontWeight: 'medium',
    fontFamily: 'Afacad-Medium',
  },
  p: {
    fontSize: 15,
    color: Colors.grayDark,
    fontWeight: 'regular',
    fontFamily: 'Afacad-Regular',
  },
  caption: {
    fontSize: 13,
    color: Colors.grayDark,
    fontWeight: 'semiBold',
    fontFamily: 'Afacad-Medium',
  },
};

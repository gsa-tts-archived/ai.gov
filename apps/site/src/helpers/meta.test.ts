import { describe, it, expect } from 'vitest';
import { getPageTitle } from './meta.js';
import { siteName } from '../../constants.js';

describe('getPageTitle', () => {
  it('should return the title from props if it exists', () => {
    const mockAstroGlobal = {
      props: {
        title: 'Page Title',
      },
    } as any;

    const result = getPageTitle(mockAstroGlobal);

    expect(result).toBe('Page Title');
  });

  it('should return the siteName if title is not provided in props', () => {
    const mockAstroGlobal = {
      props: {},
    } as any;

    const result = getPageTitle(mockAstroGlobal);

    expect(result).toBe(siteName);
  });
});

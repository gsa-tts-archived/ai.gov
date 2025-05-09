import { AstroGlobal } from 'astro';
import { siteName } from '../../constants.js';

export const getPageTitle = ({ props }: AstroGlobal) => {
  return props.title || siteName;
};

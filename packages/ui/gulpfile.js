/**
 * Import uswds-compile
 */
import uswds from '@uswds/compile';

/**
 * USWDS version
 * Set the major version of USWDS you're using
 * (Current options are the numbers 2 or 3)
 */
uswds.settings.version = 3;

uswds.paths.dist.css = './static/uswds/styles';
uswds.paths.dist.fonts = './static/uswds/fonts';
uswds.paths.dist.img = './static/uswds/img';
uswds.paths.dist.js = './static/uswds/js';

export const compile = uswds.compile;
export const init = uswds.init;
export const update = uswds.updateUswds;
export const watch = uswds.watch;

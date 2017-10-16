// @flow
import config from 'lib/config';

export const ias: ThirdPartyTag = {
    shouldRun: config.switches.iasOptimisation,
    url: '//cdn.adsafeprotected.com/iasPET.1.js',
};

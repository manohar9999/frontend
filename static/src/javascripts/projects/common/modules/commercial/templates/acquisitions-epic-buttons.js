// @flow
import type { CtaUrls } from 'common/modules/commercial/contributions-utilities';

export const epicButtonsTemplate = (
    { membershipUrl = '', contributeUrl = '' }: CtaUrls,
    useSupportDomain: boolean = false
) => {
    const contribButton = `
        <div>
            <a class="contributions__option-button contributions__contribute contributions__contribute--epic contributions__contribute--epic-member"
             href="${contributeUrl}"
             target="_blank">
             Make a contribution
            </a>
        </div>`;
    const supportButtonBecome = `
        <div>
            <a class="contributions__option-button contributions__contribute contributions__contribute--epic contributions__contribute--epic-member contributions__contribute--epic-member-top"
              href="${membershipUrl}"
              target="_blank">
              Become a supporter
            </a>
        </div>`;
    const supportButtonSupport = `
        <div>
            <a class="contributions__option-button contributions__contribute contributions__contribute--epic contributions__contribute--epic-member contributions__contribute--epic-member-top contributions__contribute--epic-single-button"
              href="${membershipUrl}"
              target="_blank">
              Support the Guardian
            </a>
        </div>`;

    return `
        <div class="contributions__amount-field">
            ${!useSupportDomain ? supportButtonBecome : supportButtonSupport}
            ${!useSupportDomain ? contribButton : ''}
        </div>`;
};

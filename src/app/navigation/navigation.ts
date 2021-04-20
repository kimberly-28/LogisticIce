import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'logistic-temperature',
                title    : 'Logistic and Transportation',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'multiline_chart', //network_check multiline_chart settings_remote 
                url      : '/logistic-temperature',
            }
        ]
    }
];

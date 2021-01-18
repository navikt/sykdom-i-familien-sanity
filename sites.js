const SITES = {
    sif: {
        id: 'sykdom-i-familien',
        title: 'Sykdom i familien (hoved)',
        path: '/',
    },
    arbeidsgiver: {
        id: 'arbeidsgiver',
        title: 'Arbeidsgiver',
        path: '/arbeidsgiver',
    },
    samarbeid: {
        id: 'samarbeid',
        title: 'Samarbeidspartnere',
        path: '/helsepersonell',
    },
};

export const getSiteById = (id) => {
    switch (id) {
        case SITES.arbeidsgiver.id:
            return SITES.arbeidsgiver;
        case SITES.samarbeid.id:
            return SITES.samarbeid;
        default:
            return SITES.sif;
    }
};

export default SITES;

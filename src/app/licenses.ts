export const proprietaryLicense = 'SEE LICENSE IN <LICENSE>'

export const supportedLicenses = [
    "ISC",
    proprietaryLicense,
    "Apache-2.0",
    "BSD-2-Clause",
    "BSD-3-Clause",
    "BSD-4-Clause",
    "GPL-2.0-only",
    "GPL-2.0-or-later",
    "GPL-3.0-only",
    "GPL-3.0-or-later"
] as const

export type SupportedLicense = (typeof supportedLicenses)[number]

import { deburr } from "lodash";

interface NormalizeOptions {
    lowerCase?: boolean;
    upperCase?: boolean;
    capitalize?: boolean;
    trim?: boolean;
    deburr?: boolean;
}

export const toLowerCase = (str?: string) => {
    if (!str) return '';
    return str.toLowerCase();
};

export const toUpperCase = (str?: string) => {
    if (!str) return '';
    return str.toUpperCase();
};

export const toCapitalize = (str?: string) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const trim = (str?: string) => {
    if (!str) return '';
    return str.trim();
};

export const deburrString = (str?: string) => {
    if (!str) return '';
    return deburr(str);
}

export const normalizeString = (options: NormalizeOptions, str?: string) => {
    if (!str) return '';
    let result = str;
    if (options.lowerCase) {
        result = toLowerCase(result);
    }
    if (options.upperCase) {
        result = toUpperCase(result);
    }
    if (options.capitalize) {
        result = toCapitalize(result);
    }
    if (options.trim) {
        result = trim(result);
    }
    if (options.deburr) {
        result = deburrString(result);
    }
    return result;
}
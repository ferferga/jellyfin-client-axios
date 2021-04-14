/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.7.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface TrailerInfo
 */
export interface TrailerInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof TrailerInfo
     */
    Name?: string | null;
    /**
     * Gets or sets the path.
     * @type {string}
     * @memberof TrailerInfo
     */
    Path?: string | null;
    /**
     * Gets or sets the metadata language.
     * @type {string}
     * @memberof TrailerInfo
     */
    MetadataLanguage?: string | null;
    /**
     * Gets or sets the metadata country code.
     * @type {string}
     * @memberof TrailerInfo
     */
    MetadataCountryCode?: string | null;
    /**
     * Gets or sets the provider ids.
     * @type {{ [key: string]: string; }}
     * @memberof TrailerInfo
     */
    ProviderIds?: { [key: string]: string; } | null;
    /**
     * Gets or sets the year.
     * @type {number}
     * @memberof TrailerInfo
     */
    Year?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TrailerInfo
     */
    IndexNumber?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TrailerInfo
     */
    ParentIndexNumber?: number | null;
    /**
     * 
     * @type {string}
     * @memberof TrailerInfo
     */
    PremiereDate?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TrailerInfo
     */
    IsAutomated?: boolean;
}



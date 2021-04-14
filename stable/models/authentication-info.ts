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
 * @interface AuthenticationInfo
 */
export interface AuthenticationInfo {
    /**
     * Gets or sets the identifier.
     * @type {number}
     * @memberof AuthenticationInfo
     */
    Id?: number;
    /**
     * Gets or sets the access token.
     * @type {string}
     * @memberof AuthenticationInfo
     */
    AccessToken?: string | null;
    /**
     * Gets or sets the device identifier.
     * @type {string}
     * @memberof AuthenticationInfo
     */
    DeviceId?: string | null;
    /**
     * Gets or sets the name of the application.
     * @type {string}
     * @memberof AuthenticationInfo
     */
    AppName?: string | null;
    /**
     * Gets or sets the application version.
     * @type {string}
     * @memberof AuthenticationInfo
     */
    AppVersion?: string | null;
    /**
     * Gets or sets the name of the device.
     * @type {string}
     * @memberof AuthenticationInfo
     */
    DeviceName?: string | null;
    /**
     * Gets or sets the user identifier.
     * @type {string}
     * @memberof AuthenticationInfo
     */
    UserId?: string;
    /**
     * Gets or sets a value indicating whether this instance is active.
     * @type {boolean}
     * @memberof AuthenticationInfo
     */
    IsActive?: boolean;
    /**
     * Gets or sets the date created.
     * @type {string}
     * @memberof AuthenticationInfo
     */
    DateCreated?: string;
    /**
     * Gets or sets the date revoked.
     * @type {string}
     * @memberof AuthenticationInfo
     */
    DateRevoked?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationInfo
     */
    DateLastActivity?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationInfo
     */
    UserName?: string | null;
}



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


import { DlnaProfileType } from './dlna-profile-type';
import { ProfileCondition } from './profile-condition';

/**
 * 
 * @export
 * @interface ContainerProfile
 */
export interface ContainerProfile {
    /**
     * 
     * @type {DlnaProfileType}
     * @memberof ContainerProfile
     */
    Type?: DlnaProfileType;
    /**
     * 
     * @type {Array<ProfileCondition>}
     * @memberof ContainerProfile
     */
    Conditions?: Array<ProfileCondition> | null;
    /**
     * 
     * @type {string}
     * @memberof ContainerProfile
     */
    Container?: string | null;
}



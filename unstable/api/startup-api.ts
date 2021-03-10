/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { StartupConfigurationDto } from '../models';
// @ts-ignore
import { StartupRemoteAccessDto } from '../models';
// @ts-ignore
import { StartupUserDto } from '../models';
// @ts-ignore
import { UNKNOWN_BASE_TYPE } from '../models';
/**
 * StartupApi - axios parameter creator
 * @export
 */
export const StartupApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Completes the startup wizard.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        completeWizard: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Startup/Complete`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets the first user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFirstUser: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Startup/User`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets the first user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFirstUser2: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Startup/FirstUser`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets the initial startup wizard configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStartupConfiguration: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Startup/Configuration`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Sets remote access and UPnP.
         * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The startup remote access dto.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setRemoteAccess: async (uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'uNKNOWNBASETYPE' is not null or undefined
            assertParamExists('setRemoteAccess', 'uNKNOWNBASETYPE', uNKNOWNBASETYPE)
            const localVarPath = `/Startup/RemoteAccess`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(uNKNOWNBASETYPE, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Sets the initial startup wizard configuration.
         * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The updated startup configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateInitialConfiguration: async (uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'uNKNOWNBASETYPE' is not null or undefined
            assertParamExists('updateInitialConfiguration', 'uNKNOWNBASETYPE', uNKNOWNBASETYPE)
            const localVarPath = `/Startup/Configuration`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(uNKNOWNBASETYPE, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Sets the user name and password.
         * @param {UNKNOWN_BASE_TYPE} [uNKNOWNBASETYPE] The DTO containing username and password.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateStartupUser: async (uNKNOWNBASETYPE?: UNKNOWN_BASE_TYPE, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Startup/User`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(uNKNOWNBASETYPE, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StartupApi - functional programming interface
 * @export
 */
export const StartupApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StartupApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Completes the startup wizard.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async completeWizard(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.completeWizard(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets the first user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFirstUser(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StartupUserDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFirstUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets the first user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFirstUser2(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StartupUserDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFirstUser2(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets the initial startup wizard configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStartupConfiguration(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StartupConfigurationDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStartupConfiguration(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sets remote access and UPnP.
         * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The startup remote access dto.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setRemoteAccess(uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setRemoteAccess(uNKNOWNBASETYPE, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sets the initial startup wizard configuration.
         * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The updated startup configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateInitialConfiguration(uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateInitialConfiguration(uNKNOWNBASETYPE, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sets the user name and password.
         * @param {UNKNOWN_BASE_TYPE} [uNKNOWNBASETYPE] The DTO containing username and password.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateStartupUser(uNKNOWNBASETYPE?: UNKNOWN_BASE_TYPE, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateStartupUser(uNKNOWNBASETYPE, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * StartupApi - factory interface
 * @export
 */
export const StartupApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StartupApiFp(configuration)
    return {
        /**
         * 
         * @summary Completes the startup wizard.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        completeWizard(options?: any): AxiosPromise<void> {
            return localVarFp.completeWizard(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets the first user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFirstUser(options?: any): AxiosPromise<StartupUserDto> {
            return localVarFp.getFirstUser(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets the first user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFirstUser2(options?: any): AxiosPromise<StartupUserDto> {
            return localVarFp.getFirstUser2(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets the initial startup wizard configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStartupConfiguration(options?: any): AxiosPromise<StartupConfigurationDto> {
            return localVarFp.getStartupConfiguration(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sets remote access and UPnP.
         * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The startup remote access dto.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setRemoteAccess(uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options?: any): AxiosPromise<void> {
            return localVarFp.setRemoteAccess(uNKNOWNBASETYPE, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sets the initial startup wizard configuration.
         * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The updated startup configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateInitialConfiguration(uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options?: any): AxiosPromise<void> {
            return localVarFp.updateInitialConfiguration(uNKNOWNBASETYPE, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sets the user name and password.
         * @param {UNKNOWN_BASE_TYPE} [uNKNOWNBASETYPE] The DTO containing username and password.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateStartupUser(uNKNOWNBASETYPE?: UNKNOWN_BASE_TYPE, options?: any): AxiosPromise<void> {
            return localVarFp.updateStartupUser(uNKNOWNBASETYPE, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StartupApi - interface
 * @export
 * @interface StartupApi
 */
export interface StartupApiInterface {
    /**
     * 
     * @summary Completes the startup wizard.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApiInterface
     */
    completeWizard(options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Gets the first user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApiInterface
     */
    getFirstUser(options?: any): AxiosPromise<StartupUserDto>;

    /**
     * 
     * @summary Gets the first user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApiInterface
     */
    getFirstUser2(options?: any): AxiosPromise<StartupUserDto>;

    /**
     * 
     * @summary Gets the initial startup wizard configuration.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApiInterface
     */
    getStartupConfiguration(options?: any): AxiosPromise<StartupConfigurationDto>;

    /**
     * 
     * @summary Sets remote access and UPnP.
     * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The startup remote access dto.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApiInterface
     */
    setRemoteAccess(uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Sets the initial startup wizard configuration.
     * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The updated startup configuration.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApiInterface
     */
    updateInitialConfiguration(uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Sets the user name and password.
     * @param {UNKNOWN_BASE_TYPE} [uNKNOWNBASETYPE] The DTO containing username and password.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApiInterface
     */
    updateStartupUser(uNKNOWNBASETYPE?: UNKNOWN_BASE_TYPE, options?: any): AxiosPromise<void>;

}

/**
 * StartupApi - object-oriented interface
 * @export
 * @class StartupApi
 * @extends {BaseAPI}
 */
export class StartupApi extends BaseAPI implements StartupApiInterface {
    /**
     * 
     * @summary Completes the startup wizard.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApi
     */
    public completeWizard(options?: any) {
        return StartupApiFp(this.configuration).completeWizard(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets the first user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApi
     */
    public getFirstUser(options?: any) {
        return StartupApiFp(this.configuration).getFirstUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets the first user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApi
     */
    public getFirstUser2(options?: any) {
        return StartupApiFp(this.configuration).getFirstUser2(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets the initial startup wizard configuration.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApi
     */
    public getStartupConfiguration(options?: any) {
        return StartupApiFp(this.configuration).getStartupConfiguration(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sets remote access and UPnP.
     * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The startup remote access dto.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApi
     */
    public setRemoteAccess(uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options?: any) {
        return StartupApiFp(this.configuration).setRemoteAccess(uNKNOWNBASETYPE, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sets the initial startup wizard configuration.
     * @param {UNKNOWN_BASE_TYPE} uNKNOWNBASETYPE The updated startup configuration.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApi
     */
    public updateInitialConfiguration(uNKNOWNBASETYPE: UNKNOWN_BASE_TYPE, options?: any) {
        return StartupApiFp(this.configuration).updateInitialConfiguration(uNKNOWNBASETYPE, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sets the user name and password.
     * @param {UNKNOWN_BASE_TYPE} [uNKNOWNBASETYPE] The DTO containing username and password.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StartupApi
     */
    public updateStartupUser(uNKNOWNBASETYPE?: UNKNOWN_BASE_TYPE, options?: any) {
        return StartupApiFp(this.configuration).updateStartupUser(uNKNOWNBASETYPE, options).then((request) => request(this.axios, this.basePath));
    }
}
/// <reference path="android-declarations.d.ts"/>

declare module android {
  export module adservices {
    export module common {
      export class AdData {
        public static class: java.lang.Class<android.adservices.common.AdData>;
        public constructor();
      }
      export module AdData {
        export class Builder {
          public static class: java.lang.Class<android.adservices.common.AdData.Builder>;
          public build(): android.adservices.common.AdData;
          public constructor();
          public setRenderUri(renderUri: android.net.Uri): android.adservices.common.AdData.Builder;
          public setMetadata(metadata: string): android.adservices.common.AdData.Builder;
        }
      }
    }
  }
}

declare module android {
  export module adservices {
    export module common {
      export class AdSelectionSignals {
        public static class: java.lang.Class<android.adservices.common.AdSelectionSignals>;
        public static fromString(source: string): android.adservices.common.AdSelectionSignals;
        public constructor();
      }
    }
  }
}

declare module android {
  export module adservices {
    export module common {
      export class AdServicesOutcomeReceiver<R, E> extends java.lang.Object {
        public static class: java.lang.Class<android.adservices.common.AdServicesOutcomeReceiver<any, any>>;
        /**
         * Constructs a new instance of the android.adservices.common.AdServicesOutcomeReceiver<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onResult(param0: R): void; onError(error: E): void });
        public constructor();
        public onError(error: E): void;
        public onResult(param0: R): void;
      }
    }
  }
}

declare module android {
  export module adservices {
    export module common {
      export class AdTechIdentifier {
        public static class: java.lang.Class<android.adservices.common.AdTechIdentifier>;
        public static fromString(source: string): android.adservices.common.AdTechIdentifier;
        public constructor();
      }
    }
  }
}

declare module android {
  export module adservices {
    export module customaudience {
      export class CustomAudience {
        public static class: java.lang.Class<android.adservices.customaudience.CustomAudience>;
        public constructor();
      }
      export module CustomAudience {
        export class Builder {
          public static class: java.lang.Class<android.adservices.customaudience.CustomAudience.Builder>;
          public setAds(ads: java.util.List<android.adservices.common.AdData>): android.adservices.customaudience.CustomAudience.Builder;
          public setUserBiddingSignals(userBiddingSignals: android.adservices.common.AdSelectionSignals): android.adservices.customaudience.CustomAudience.Builder;
          public setBuyer(buyer: android.adservices.common.AdTechIdentifier): android.adservices.customaudience.CustomAudience.Builder;
          public constructor();
          public setName(name: string): android.adservices.customaudience.CustomAudience.Builder;
          public build(): android.adservices.customaudience.CustomAudience;
          public setDailyUpdateUri(dailyUpdateUri: android.net.Uri): android.adservices.customaudience.CustomAudience.Builder;
          public setBiddingLogicUri(biddingLogicUri: android.net.Uri): android.adservices.customaudience.CustomAudience.Builder;
          public setTrustedBiddingData(trustedBiddingData: android.adservices.customaudience.TrustedBiddingData): android.adservices.customaudience.CustomAudience.Builder;
        }
      }
    }
  }
}

declare module android {
  export module adservices {
    export module customaudience {
      export class CustomAudienceManager {
        public static class: java.lang.Class<android.adservices.customaudience.CustomAudienceManager>;
        public joinCustomAudience(joinCustomAudienceRequest: android.adservices.customaudience.JoinCustomAudienceRequest, executor: java.util.concurrent.Executor, receiver: android.os.OutcomeReceiver<any, java.lang.Exception>): void;
        public static get(context: android.content.Context): android.adservices.customaudience.CustomAudienceManager;
        public constructor();
      }
    }
  }
}

declare module android {
  export module adservices {
    export module customaudience {
      export class JoinCustomAudienceRequest {
        public static class: java.lang.Class<android.adservices.customaudience.JoinCustomAudienceRequest>;
        public constructor();
      }
      export module JoinCustomAudienceRequest {
        export class Builder {
          public static class: java.lang.Class<android.adservices.customaudience.JoinCustomAudienceRequest.Builder>;
          public constructor();
          public build(): android.adservices.customaudience.JoinCustomAudienceRequest;
          public setCustomAudience(customAudience: android.adservices.customaudience.CustomAudience): android.adservices.customaudience.JoinCustomAudienceRequest.Builder;
        }
      }
    }
  }
}

declare module android {
  export module adservices {
    export module customaudience {
      export class TrustedBiddingData {
        public static class: java.lang.Class<android.adservices.customaudience.TrustedBiddingData>;
        public constructor();
      }
      export module TrustedBiddingData {
        export class Builder {
          public static class: java.lang.Class<android.adservices.customaudience.TrustedBiddingData.Builder>;
          public setTrustedBiddingUri(trustedBiddingUri: android.net.Uri): android.adservices.customaudience.TrustedBiddingData.Builder;
          public setTrustedBiddingKeys(trustedBiddingKeys: java.util.List<string>): android.adservices.customaudience.TrustedBiddingData.Builder;
          public constructor();
          public build(): android.adservices.customaudience.TrustedBiddingData;
        }
      }
    }
  }
}

declare module android {
  export module adservices {
    export module measurement {
      export class MeasurementManager {
        public static class: java.lang.Class<android.adservices.measurement.MeasurementManager>;
        public static get(context: android.content.Context): android.adservices.measurement.MeasurementManager;
        public registerTrigger(trigger: android.net.Uri, executor: java.util.concurrent.Executor, callback: android.os.OutcomeReceiver<any, java.lang.Exception>): void;
        public registerTrigger(trigger: android.net.Uri, executor: java.util.concurrent.Executor, callback: android.adservices.common.AdServicesOutcomeReceiver<any, java.lang.Exception>): void;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class AccessToken {
      public static class: java.lang.Class<com.facebook.AccessToken>;
      public static ACCESS_TOKEN_KEY: string = 'access_token';
      public static EXPIRES_IN_KEY: string = 'expires_in';
      public static USER_ID_KEY: string = 'user_id';
      public static DATA_ACCESS_EXPIRATION_TIME: string = 'data_access_expiration_time';
      public static GRAPH_DOMAIN: string = 'graph_domain';
      public static DEFAULT_GRAPH_DOMAIN: string = 'facebook';
      public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.AccessToken>;
      public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
      public static getPermissionsFromBundle$facebook_core_release(bundle: globalAndroid.os.Bundle, key: string): java.util.List<string>;
      public getPermissions(): java.util.Set<string>;
      public constructor(accessToken: string, applicationId: string, userId: string, permissions: java.util.Collection<string>, declinedPermissions: java.util.Collection<string>, expiredPermissions: java.util.Collection<string>, accessTokenSource: com.facebook.AccessTokenSource, expirationTime: java.util.Date, lastRefreshTime: java.util.Date, dataAccessExpirationTime: java.util.Date);
      public constructor(accessToken: string, applicationId: string, userId: string, permissions: java.util.Collection<string>, declinedPermissions: java.util.Collection<string>, expiredPermissions: java.util.Collection<string>, accessTokenSource: com.facebook.AccessTokenSource, expirationTime: java.util.Date, lastRefreshTime: java.util.Date, dataAccessExpirationTime: java.util.Date, graphDomain: string);
      public isDataAccessExpired(): boolean;
      public isInstagramToken(): boolean;
      public static isLoggedInWithInstagram(): boolean;
      public constructor(token: globalAndroid.os.Parcel);
      public static refreshCurrentAccessTokenAsync(): void;
      public static createFromJSONObject$facebook_core_release(jsonObject: org.json.JSONObject): com.facebook.AccessToken;
      public equals(other: any): boolean;
      public getExpires(): java.util.Date;
      public static createFromLegacyCache$facebook_core_release(bundle: globalAndroid.os.Bundle): com.facebook.AccessToken;
      public getUserId(): string;
      public isExpired(): boolean;
      public static isCurrentAccessTokenActive(): boolean;
      public static createFromRefresh$facebook_core_release(current: com.facebook.AccessToken, bundle: globalAndroid.os.Bundle): com.facebook.AccessToken;
      public getDeclinedPermissions(): java.util.Set<string>;
      public getGraphDomain(): string;
      public getToken(): string;
      public getExpiredPermissions(): java.util.Set<string>;
      public static createFromNativeLinkingIntent(intent: globalAndroid.content.Intent, applicationId: string, accessTokenCallback: com.facebook.AccessToken.AccessTokenCreationCallback): void;
      public getApplicationId(): string;
      public static isDataAccessActive(): boolean;
      public static setCurrentAccessToken(accessToken: com.facebook.AccessToken): void;
      public toJSONObject$facebook_core_release(): org.json.JSONObject;
      public toString(): string;
      public getSource(): com.facebook.AccessTokenSource;
      public getLastRefresh(): java.util.Date;
      public describeContents(): number;
      public static getCurrentAccessToken(): com.facebook.AccessToken;
      public static refreshCurrentAccessTokenAsync(callback: com.facebook.AccessToken.AccessTokenRefreshCallback): void;
      public static expireCurrentAccessToken(): void;
      public getDataAccessExpirationTime(): java.util.Date;
      public hashCode(): number;
    }
    export module AccessToken {
      export class AccessTokenCreationCallback {
        public static class: java.lang.Class<com.facebook.AccessToken.AccessTokenCreationCallback>;
        /**
         * Constructs a new instance of the com.facebook.AccessToken$AccessTokenCreationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onSuccess(param0: com.facebook.AccessToken): void; onError(param0: com.facebook.FacebookException): void });
        public constructor();
        public onSuccess(param0: com.facebook.AccessToken): void;
        public onError(param0: com.facebook.FacebookException): void;
      }
      export class AccessTokenRefreshCallback {
        public static class: java.lang.Class<com.facebook.AccessToken.AccessTokenRefreshCallback>;
        /**
         * Constructs a new instance of the com.facebook.AccessToken$AccessTokenRefreshCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { OnTokenRefreshed(param0: com.facebook.AccessToken): void; OnTokenRefreshFailed(param0: com.facebook.FacebookException): void });
        public constructor();
        public OnTokenRefreshFailed(param0: com.facebook.FacebookException): void;
        public OnTokenRefreshed(param0: com.facebook.AccessToken): void;
      }
      export class Companion {
        public static class: java.lang.Class<com.facebook.AccessToken.Companion>;
        public refreshCurrentAccessTokenAsync(): void;
        public createExpired$facebook_core_release(current: com.facebook.AccessToken): com.facebook.AccessToken;
        public isDataAccessActive(): boolean;
        public createFromNativeLinkingIntent(accessToken: globalAndroid.content.Intent, userId: string, this_: com.facebook.AccessToken.AccessTokenCreationCallback): void;
        public isLoggedInWithInstagram(): boolean;
        public createFromLegacyCache$facebook_core_release(permissions: globalAndroid.os.Bundle): com.facebook.AccessToken;
        public createFromJSONObject$facebook_core_release(token: org.json.JSONObject): com.facebook.AccessToken;
        public expireCurrentAccessToken(): void;
        public getCurrentAccessToken(): com.facebook.AccessToken;
        public isCurrentAccessTokenActive(): boolean;
        public refreshCurrentAccessTokenAsync(callback: com.facebook.AccessToken.AccessTokenRefreshCallback): void;
        public getPermissionsFromBundle$facebook_core_release(permissions: globalAndroid.os.Bundle, this_: string): java.util.List<string>;
        public createFromRefresh$facebook_core_release(token: com.facebook.AccessToken, graphDomain: globalAndroid.os.Bundle): com.facebook.AccessToken;
        public setCurrentAccessToken(accessToken: com.facebook.AccessToken): void;
      }
      export class WhenMappings {
        public static class: java.lang.Class<com.facebook.AccessToken.WhenMappings>;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class AccessTokenCache {
      public static class: java.lang.Class<com.facebook.AccessTokenCache>;
      public static CACHED_ACCESS_TOKEN_KEY: string = 'com.facebook.AccessTokenManager.CachedAccessToken';
      public clear(): void;
      public constructor(sharedPreferences: globalAndroid.content.SharedPreferences, tokenCachingStrategyFactory: com.facebook.AccessTokenCache.SharedPreferencesTokenCachingStrategyFactory);
      public save(this_: com.facebook.AccessToken): void;
      public constructor();
      public load(): com.facebook.AccessToken;
    }
    export module AccessTokenCache {
      export class Companion {
        public static class: java.lang.Class<com.facebook.AccessTokenCache.Companion>;
      }
      export class SharedPreferencesTokenCachingStrategyFactory {
        public static class: java.lang.Class<com.facebook.AccessTokenCache.SharedPreferencesTokenCachingStrategyFactory>;
        public create(): com.facebook.LegacyTokenHelper;
        public constructor();
      }
    }
  }
}

declare module com {
  export module facebook {
    export class AccessTokenManager {
      public static class: java.lang.Class<com.facebook.AccessTokenManager>;
      public static TAG: string = 'AccessTokenManager';
      public static ACTION_CURRENT_ACCESS_TOKEN_CHANGED: string = 'com.facebook.sdk.ACTION_CURRENT_ACCESS_TOKEN_CHANGED';
      public static EXTRA_OLD_ACCESS_TOKEN: string = 'com.facebook.sdk.EXTRA_OLD_ACCESS_TOKEN';
      public static EXTRA_NEW_ACCESS_TOKEN: string = 'com.facebook.sdk.EXTRA_NEW_ACCESS_TOKEN';
      public static SHARED_PREFERENCES_NAME: string = 'com.facebook.AccessTokenManager.SharedPreferences';
      public loadCurrentAccessToken(): boolean;
      public currentAccessTokenChanged(): void;
      public refreshCurrentAccessToken(this_: com.facebook.AccessToken.AccessTokenRefreshCallback): void;
      public getCurrentAccessToken(): com.facebook.AccessToken;
      public setCurrentAccessToken(value: com.facebook.AccessToken): void;
      public constructor(localBroadcastManager: androidx.localbroadcastmanager.content.LocalBroadcastManager, accessTokenCache: com.facebook.AccessTokenCache);
      public static getInstance(): com.facebook.AccessTokenManager;
      public extendAccessTokenIfNeeded(): void;
    }
    export module AccessTokenManager {
      export class Companion {
        public static class: java.lang.Class<com.facebook.AccessTokenManager.Companion>;
        public getInstance(): com.facebook.AccessTokenManager;
      }
      export class FacebookRefreshTokenInfo extends com.facebook.AccessTokenManager.RefreshTokenInfo {
        public static class: java.lang.Class<com.facebook.AccessTokenManager.FacebookRefreshTokenInfo>;
        public getGrantType(): string;
        public getGraphPath(): string;
        public constructor();
      }
      export class InstagramRefreshTokenInfo extends com.facebook.AccessTokenManager.RefreshTokenInfo {
        public static class: java.lang.Class<com.facebook.AccessTokenManager.InstagramRefreshTokenInfo>;
        public getGrantType(): string;
        public getGraphPath(): string;
        public constructor();
      }
      export class RefreshResult {
        public static class: java.lang.Class<com.facebook.AccessTokenManager.RefreshResult>;
        public getExpiresAt(): number;
        public getExpiresIn(): number;
        public setDataAccessExpirationTime(set: java.lang.Long): void;
        public setAccessToken(set: string): void;
        public setExpiresIn(set: number): void;
        public getGraphDomain(): string;
        public getAccessToken(): string;
        public setGraphDomain(set: string): void;
        public setExpiresAt(set: number): void;
        public constructor();
        public getDataAccessExpirationTime(): java.lang.Long;
      }
      export class RefreshTokenInfo {
        public static class: java.lang.Class<com.facebook.AccessTokenManager.RefreshTokenInfo>;
        /**
         * Constructs a new instance of the com.facebook.AccessTokenManager$RefreshTokenInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getGraphPath(): string; getGrantType(): string });
        public constructor();
        public getGrantType(): string;
        public getGraphPath(): string;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class AccessTokenSource {
      public static class: java.lang.Class<com.facebook.AccessTokenSource>;
      public static NONE: com.facebook.AccessTokenSource;
      public static FACEBOOK_APPLICATION_WEB: com.facebook.AccessTokenSource;
      public static FACEBOOK_APPLICATION_NATIVE: com.facebook.AccessTokenSource;
      public static FACEBOOK_APPLICATION_SERVICE: com.facebook.AccessTokenSource;
      public static WEB_VIEW: com.facebook.AccessTokenSource;
      public static CHROME_CUSTOM_TAB: com.facebook.AccessTokenSource;
      public static TEST_USER: com.facebook.AccessTokenSource;
      public static CLIENT_TOKEN: com.facebook.AccessTokenSource;
      public static DEVICE_AUTH: com.facebook.AccessTokenSource;
      public static INSTAGRAM_APPLICATION_WEB: com.facebook.AccessTokenSource;
      public static INSTAGRAM_CUSTOM_CHROME_TAB: com.facebook.AccessTokenSource;
      public static INSTAGRAM_WEB_VIEW: com.facebook.AccessTokenSource;
      public static values(): androidNative.Array<com.facebook.AccessTokenSource>;
      public fromInstagram(): boolean;
      public static valueOf(value: string): com.facebook.AccessTokenSource;
      public canExtendToken(): boolean;
    }
    export module AccessTokenSource {
      export class WhenMappings {
        public static class: java.lang.Class<com.facebook.AccessTokenSource.WhenMappings>;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class AuthenticationToken {
      public static class: java.lang.Class<com.facebook.AuthenticationToken>;
      public static AUTHENTICATION_TOKEN_KEY: string = 'id_token';
      public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.AuthenticationToken>;
      public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
      public getHeader(): com.facebook.AuthenticationTokenHeader;
      public getToken(): string;
      public constructor(claimsJSONObject: org.json.JSONObject);
      public static getCurrentAuthenticationToken(): com.facebook.AuthenticationToken;
      public constructor(requireAuthenticationToken$2: string, tokenArray: string);
      public getExpectedNonce(): string;
      public constructor(expectedNonce: globalAndroid.os.Parcel);
      public equals(other: any): boolean;
      public toJSONObject$facebook_core_release(): org.json.JSONObject;
      public describeContents(): number;
      public getSignature(): string;
      public static setCurrentAuthenticationToken(authenticationToken: com.facebook.AuthenticationToken): void;
      public getClaims(): com.facebook.AuthenticationTokenClaims;
      public hashCode(): number;
    }
    export module AuthenticationToken {
      export class Companion {
        public static class: java.lang.Class<com.facebook.AuthenticationToken.Companion>;
        public setCurrentAuthenticationToken(authenticationToken: com.facebook.AuthenticationToken): void;
        public getCurrentAuthenticationToken(): com.facebook.AuthenticationToken;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class AuthenticationTokenCache {
      public static class: java.lang.Class<com.facebook.AuthenticationTokenCache>;
      public static CACHED_AUTHENTICATION_TOKEN_KEY: string = 'com.facebook.AuthenticationManager.CachedAuthenticationToken';
      public save(this_: com.facebook.AuthenticationToken): void;
      public clear(): void;
      public load(): com.facebook.AuthenticationToken;
      public constructor();
      public constructor(sharedPreferences: globalAndroid.content.SharedPreferences);
    }
    export module AuthenticationTokenCache {
      export class Companion {
        public static class: java.lang.Class<com.facebook.AuthenticationTokenCache.Companion>;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class AuthenticationTokenClaims {
      public static class: java.lang.Class<com.facebook.AuthenticationTokenClaims>;
      public static MAX_TIME_SINCE_TOKEN_ISSUED: number = 600000;
      public static JSON_KEY_JIT: string = 'jti';
      public static JSON_KEY_ISS: string = 'iss';
      public static JSON_KEY_AUD: string = 'aud';
      public static JSON_KEY_NONCE: string = 'nonce';
      public static JSON_KEY_EXP: string = 'exp';
      public static JSON_KEY_IAT: string = 'iat';
      public static JSON_KEY_SUB: string = 'sub';
      public static JSON_KEY_NAME: string = 'name';
      public static JSON_KEY_GIVEN_NAME: string = 'given_name';
      public static JSON_KEY_MIDDLE_NAME: string = 'middle_name';
      public static JSON_KEY_FAMILY_NAME: string = 'family_name';
      public static JSON_KEY_EMAIL: string = 'email';
      public static JSON_KEY_PICTURE: string = 'picture';
      public static JSON_KEY_USER_FRIENDS: string = 'user_friends';
      public static JSON_KEY_USER_BIRTHDAY: string = 'user_birthday';
      public static JSON_KEY_USER_AGE_RANGE: string = 'user_age_range';
      public static JSON_KEY_USER_HOMETOWN: string = 'user_hometown';
      public static JSON_KEY_USER_GENDER: string = 'user_gender';
      public static JSON_KEY_USER_LINK: string = 'user_link';
      public static JSON_KEY_USER_LOCATION: string = 'user_location';
      public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.AuthenticationTokenClaims>;
      public getNonce(): string;
      public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
      public constructor(jti: string, iss: string, aud: string, nonce: string, exp: number, iat: number, sub: string, name: string, givenName: string, middleName: string, familyName: string, email: string);
      public getFamilyName(): string;
      public constructor(jti: string, iss: string, aud: string, nonce: string, exp: number, iat: number, sub: string, name: string);
      public getJti(): string;
      public getPicture(): string;
      public constructor(jti: string, iss: string, aud: string, nonce: string, exp: number, iat: number, sub: string, name: string, givenName: string, middleName: string);
      public constructor(jti: string, iss: string, aud: string, nonce: string, exp: number, iat: number, sub: string, name: string, givenName: string, middleName: string, familyName: string, email: string, picture: string, userFriends: java.util.Collection<string>, userBirthday: string);
      public getUserHometown(): java.util.Map<string, string>;
      public constructor(jti: string, iss: string, aud: string, nonce: string, exp: number, iat: number, sub: string, name: string, givenName: string, middleName: string, familyName: string, email: string, picture: string, userFriends: java.util.Collection<string>, userBirthday: string, userAgeRange: java.util.Map<string, java.lang.Integer>, userHometown: java.util.Map<string, string>, userLocation: java.util.Map<string, string>, userGender: string, userLink: string);
      public constructor(jti: string, iss: string, aud: string, nonce: string, exp: number, iat: number, sub: string, name: string, givenName: string, middleName: string, familyName: string, email: string, picture: string, userFriends: java.util.Collection<string>, userBirthday: string, userAgeRange: java.util.Map<string, java.lang.Integer>, userHometown: java.util.Map<string, string>, userLocation: java.util.Map<string, string>);
      public getExp(): number;
      public equals(other: any): boolean;
      public getUserAgeRange(): java.util.Map<string, java.lang.Integer>;
      public constructor(jti: string, iss: string, aud: string, nonce: string, exp: number, iat: number, sub: string, name: string, givenName: string, middleName: string, familyName: string, email: string, picture: string, userFriends: java.util.Collection<string>, userBirthday: string, userAgeRange: java.util.Map<string, java.lang.Integer>);
      public constructor(jti: string, iss: string, aud: string, nonce: string, exp: number, iat: number, sub: string, name: string, givenName: string);
      public constructor(jti: string, iss: string, aud: string, nonce: string, exp: number, iat: number, sub: string);
      public getAud(): string;
      public constructor(iss: globalAndroid.os.Parcel);
      public getUserLocation(): java.util.Map<string, string>;
      public getUserBirthday(): string;
      public constructor(jti: string, iss: string, aud: string, nonce: string, exp: number, iat: number, sub: string, name: string, givenName: string, middleName: string, familyName: string, email: string, picture: string, userFriends: java.util.Collection<string>, userBirthday: string, userAgeRange: java.util.Map<string, java.lang.Integer>, userHometown: java.util.Map<string, string>, userLocation: java.util.Map<string, string>, userGender: string);
      public getUserLink(): string;
      public constructor(jti: string, iss: string, aud: string, nonce: string, exp: number, iat: number, sub: string, name: string, givenName: string, middleName: string, familyName: string, email: string, picture: string, userFriends: java.util.Collection<string>, userBirthday: string, userAgeRange: java.util.Map<string, java.lang.Integer>, userHometown: java.util.Map<string, string>);
      public toJSONObject$facebook_core_release(): org.json.JSONObject;
      public constructor(jti: string, iss: string, aud: string, nonce: string, exp: number, iat: number, sub: string, name: string, givenName: string, middleName: string, familyName: string, email: string, picture: string, userFriends: java.util.Collection<string>);
      public toString(): string;
      public getName(): string;
      public getMiddleName(): string;
      public constructor(jti: string, iss: string, aud: string, nonce: string, exp: number, iat: number, sub: string, name: string, givenName: string, middleName: string, familyName: string, email: string, picture: string);
      public getIat(): number;
      public getSub(): string;
      public describeContents(): number;
      public getGivenName(): string;
      public static createFromJSONObject$facebook_core_release(jsonObject: org.json.JSONObject): com.facebook.AuthenticationTokenClaims;
      public constructor(decodedBytes: string, claimsString: string);
      public getIss(): string;
      public toEnCodedString(): string;
      public getUserGender(): string;
      public constructor(jti: string, iss: string, aud: string, nonce: string, exp: number, iat: number, sub: string, name: string, givenName: string, middleName: string, familyName: string);
      public getUserFriends(): java.util.Set<string>;
      public getEmail(): string;
      public hashCode(): number;
    }
    export module AuthenticationTokenClaims {
      export class Companion {
        public static class: java.lang.Class<com.facebook.AuthenticationTokenClaims.Companion>;
        public createFromJSONObject$facebook_core_release(iss: org.json.JSONObject): com.facebook.AuthenticationTokenClaims;
        public getNullableString$facebook_core_release($this$getNullableString: org.json.JSONObject, name: string): string;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class AuthenticationTokenHeader {
      public static class: java.lang.Class<com.facebook.AuthenticationTokenHeader>;
      public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.AuthenticationTokenHeader>;
      public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
      public getKid(): string;
      public constructor(typ: globalAndroid.os.Parcel);
      public getAlg(): string;
      public equals(other: any): boolean;
      public toJSONObject$facebook_core_release(): org.json.JSONObject;
      public toString(): string;
      public describeContents(): number;
      public constructor(jsonObject: org.json.JSONObject);
      public constructor(alg: string, typ: string, kid: string);
      public toEnCodedString(): string;
      public getTyp(): string;
      public constructor(decodedBytes: string);
      public hashCode(): number;
    }
    export module AuthenticationTokenHeader {
      export class Companion {
        public static class: java.lang.Class<com.facebook.AuthenticationTokenHeader.Companion>;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class AuthenticationTokenManager {
      public static class: java.lang.Class<com.facebook.AuthenticationTokenManager>;
      public static TAG: string = 'AuthenticationTokenManager';
      public static ACTION_CURRENT_AUTHENTICATION_TOKEN_CHANGED: string = 'com.facebook.sdk.ACTION_CURRENT_AUTHENTICATION_TOKEN_CHANGED';
      public static EXTRA_OLD_AUTHENTICATION_TOKEN: string = 'com.facebook.sdk.EXTRA_OLD_AUTHENTICATION_TOKEN';
      public static EXTRA_NEW_AUTHENTICATION_TOKEN: string = 'com.facebook.sdk.EXTRA_NEW_AUTHENTICATION_TOKEN';
      public static SHARED_PREFERENCES_NAME: string = 'com.facebook.AuthenticationTokenManager.SharedPreferences';
      public static getInstance(): com.facebook.AuthenticationTokenManager;
      public getCurrentAuthenticationToken(): com.facebook.AuthenticationToken;
      public setCurrentAuthenticationToken(value: com.facebook.AuthenticationToken): void;
      public loadCurrentAuthenticationToken(): boolean;
      public constructor(localBroadcastManager: androidx.localbroadcastmanager.content.LocalBroadcastManager, authenticationTokenCache: com.facebook.AuthenticationTokenCache);
      public currentAuthenticationTokenChanged(): void;
    }
    export module AuthenticationTokenManager {
      export class Companion {
        public static class: java.lang.Class<com.facebook.AuthenticationTokenManager.Companion>;
        public getInstance(): com.facebook.AuthenticationTokenManager;
      }
      export class CurrentAuthenticationTokenChangedBroadcastReceiver {
        public static class: java.lang.Class<com.facebook.AuthenticationTokenManager.CurrentAuthenticationTokenChangedBroadcastReceiver>;
        public onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void;
        public constructor();
      }
    }
  }
}

declare module com {
  export module facebook {
    export class CallbackManager {
      public static class: java.lang.Class<com.facebook.CallbackManager>;
      /**
       * Constructs a new instance of the com.facebook.CallbackManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean });
      public constructor();
      public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
    }
    export module CallbackManager {
      export class ActivityResultParameters {
        public static class: java.lang.Class<com.facebook.CallbackManager.ActivityResultParameters>;
        public constructor(requestCode: number, resultCode: number, data: globalAndroid.content.Intent);
        public getData(): globalAndroid.content.Intent;
        public equals(other: any): boolean;
        public component2(): number;
        public hashCode(): number;
        public component3(): globalAndroid.content.Intent;
        public component1(): number;
        public getRequestCode(): number;
        public copy(requestCode: number, resultCode: number, data: globalAndroid.content.Intent): com.facebook.CallbackManager.ActivityResultParameters;
        public toString(): string;
        public getResultCode(): number;
      }
      export class Factory {
        public static class: java.lang.Class<com.facebook.CallbackManager.Factory>;
        public static INSTANCE: com.facebook.CallbackManager.Factory;
        public static create(): com.facebook.CallbackManager;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class CurrentAccessTokenExpirationBroadcastReceiver {
      public static class: java.lang.Class<com.facebook.CurrentAccessTokenExpirationBroadcastReceiver>;
      public onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void;
      public constructor();
    }
  }
}

declare module com {
  export module facebook {
    export class FacebookBroadcastReceiver {
      public static class: java.lang.Class<com.facebook.FacebookBroadcastReceiver>;
      public onReceive(action: globalAndroid.content.Context, extras: globalAndroid.content.Intent): void;
      public onSuccessfulAppCall(appCallId: string, action: string, extras: globalAndroid.os.Bundle): void;
      public onFailedAppCall(appCallId: string, action: string, extras: globalAndroid.os.Bundle): void;
      public constructor();
    }
  }
}

declare module com {
  export module facebook {
    export class FacebookContentProvider {
      public static class: java.lang.Class<com.facebook.FacebookContentProvider>;
      public onCreate(): boolean;
      public getType(uri: globalAndroid.net.Uri): string;
      public query(uri: globalAndroid.net.Uri, strings: androidNative.Array<string>, s: string, strings2: androidNative.Array<string>, s2: string): globalAndroid.database.Cursor;
      public static getAttachmentUrl(applicationId: string, callId: java.util.UUID, attachmentName: string): string;
      public constructor();
      public update(uri: globalAndroid.net.Uri, contentValues: globalAndroid.content.ContentValues, s: string, strings: androidNative.Array<string>): number;
      public insert(uri: globalAndroid.net.Uri, contentValues: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
      public delete(uri: globalAndroid.net.Uri, s: string, strings: androidNative.Array<string>): number;
      public openFile(exception: globalAndroid.net.Uri, callIdAndAttachmentName: string): globalAndroid.os.ParcelFileDescriptor;
    }
    export module FacebookContentProvider {
      export class Companion {
        public static class: java.lang.Class<com.facebook.FacebookContentProvider.Companion>;
        public getAttachmentUrl(applicationId: string, callId: java.util.UUID, attachmentName: string): string;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class FacebookException {
      public static class: java.lang.Class<com.facebook.FacebookException>;
      public static serialVersionUID: number = 1;
      public constructor(throwable: java.lang.Throwable);
      public toString(): string;
      public constructor(format: string, args: androidNative.Array<any>);
      public constructor();
      public constructor(message: string, throwable: java.lang.Throwable);
      public constructor(this_: string);
    }
    export module FacebookException {
      export class Companion {
        public static class: java.lang.Class<com.facebook.FacebookException.Companion>;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class FacebookGraphResponseException extends com.facebook.FacebookException {
      public static class: java.lang.Class<com.facebook.FacebookGraphResponseException>;
      public constructor(throwable: java.lang.Throwable);
      public toString(): string;
      public constructor(format: string, args: androidNative.Array<any>);
      public constructor();
      public constructor(graphResponse: com.facebook.GraphResponse, errorMessage: string);
      public constructor(message: string, throwable: java.lang.Throwable);
      public constructor(this_: string);
      public getGraphResponse(): com.facebook.GraphResponse;
    }
  }
}

declare module com {
  export module facebook {
    export class FacebookOperationCanceledException extends com.facebook.FacebookException {
      public static class: java.lang.Class<com.facebook.FacebookOperationCanceledException>;
      public static serialVersionUID: number = 1;
      public constructor(message: string);
      public constructor(throwable: java.lang.Throwable);
      public constructor(format: string, args: androidNative.Array<any>);
      public constructor();
      public constructor(message: string, throwable: java.lang.Throwable);
      public constructor(this_: string);
    }
    export module FacebookOperationCanceledException {
      export class Companion {
        public static class: java.lang.Class<com.facebook.FacebookOperationCanceledException.Companion>;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class FacebookRequestError {
      public static class: java.lang.Class<com.facebook.FacebookRequestError>;
      public static INVALID_ERROR_CODE: number = -1;
      public static INVALID_HTTP_STATUS_CODE: number = -1;
      public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.FacebookRequestError>;
      public getErrorCode(): number;
      public getCategory(): com.facebook.FacebookRequestError.Category;
      public getConnection(): java.net.HttpURLConnection;
      public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
      public getErrorUserMessage(): string;
      public getBatchRequestResult(): any;
      public getRequestResult(): org.json.JSONObject;
      public getSubErrorCode(): number;
      public static getErrorClassification(): com.facebook.internal.FacebookRequestErrorClassification;
      public constructor(errorCode: number, errorType: string, errorMessage: string);
      public getErrorMessage(): string;
      public toString(): string;
      public constructor(connection: java.net.HttpURLConnection, exception: java.lang.Exception);
      public describeContents(): number;
      public getErrorType(): string;
      public getErrorUserTitle(): string;
      public getErrorRecoveryMessage(): string;
      public getRequestStatusCode(): number;
      public getRequestResultBody(): org.json.JSONObject;
      public getException(): com.facebook.FacebookException;
      public static checkResponseAndCreateError(singleResult: org.json.JSONObject, batchResult: any, connection: java.net.HttpURLConnection): com.facebook.FacebookRequestError;
    }
    export module FacebookRequestError {
      export class Category {
        public static class: java.lang.Class<com.facebook.FacebookRequestError.Category>;
        public static LOGIN_RECOVERABLE: com.facebook.FacebookRequestError.Category;
        public static OTHER: com.facebook.FacebookRequestError.Category;
        public static TRANSIENT: com.facebook.FacebookRequestError.Category;
        public static values(): androidNative.Array<com.facebook.FacebookRequestError.Category>;
        public static valueOf(value: string): com.facebook.FacebookRequestError.Category;
      }
      export class Companion {
        public static class: java.lang.Class<com.facebook.FacebookRequestError.Companion>;
        public getErrorClassification(): com.facebook.internal.FacebookRequestErrorClassification;
        public checkResponseAndCreateError(jsonBody: org.json.JSONObject, errorType: any, errorMessage: java.net.HttpURLConnection): com.facebook.FacebookRequestError;
        public getHTTP_RANGE_SUCCESS$facebook_core_release(): com.facebook.FacebookRequestError.Range;
      }
      export class Range {
        public static class: java.lang.Class<com.facebook.FacebookRequestError.Range>;
        public contains(value: number): boolean;
        public constructor(start: number, end: number);
      }
    }
  }
}

declare module com {
  export module facebook {
    export class FacebookSdk {
      public static class: java.lang.Class<com.facebook.FacebookSdk>;
      public static INSTANCE: com.facebook.FacebookSdk;
      public static CALLBACK_OFFSET_CHANGED_AFTER_INIT: string = "The callback request code offset can't be updated once the SDK is initialized. Call FacebookSdk.setCallbackRequestCodeOffset inside your Application.onCreate method";
      public static CALLBACK_OFFSET_NEGATIVE: string = "The callback request code offset can't be negative.";
      public static APP_EVENT_PREFERENCES: string = 'com.facebook.sdk.appEventPreferences';
      public static DATA_PROCESSING_OPTIONS_PREFERENCES: string = 'com.facebook.sdk.DataProcessingOptions';
      public static APPLICATION_ID_PROPERTY: string = 'com.facebook.sdk.ApplicationId';
      public static APPLICATION_NAME_PROPERTY: string = 'com.facebook.sdk.ApplicationName';
      public static CLIENT_TOKEN_PROPERTY: string = 'com.facebook.sdk.ClientToken';
      public static WEB_DIALOG_THEME: string = 'com.facebook.sdk.WebDialogTheme';
      public static AUTO_INIT_ENABLED_PROPERTY: string = 'com.facebook.sdk.AutoInitEnabled';
      public static AUTO_LOG_APP_EVENTS_ENABLED_PROPERTY: string = 'com.facebook.sdk.AutoLogAppEventsEnabled';
      public static CODELESS_DEBUG_LOG_ENABLED_PROPERTY: string = 'com.facebook.sdk.CodelessDebugLogEnabled';
      public static ADVERTISER_ID_COLLECTION_ENABLED_PROPERTY: string = 'com.facebook.sdk.AdvertiserIDCollectionEnabled';
      public static CALLBACK_OFFSET_PROPERTY: string = 'com.facebook.sdk.CallbackOffset';
      public static MONITOR_ENABLED_PROPERTY: string = 'com.facebook.sdk.MonitorEnabled';
      public static DATA_PROCESSION_OPTIONS: string = 'data_processing_options';
      public static DATA_PROCESSION_OPTIONS_COUNTRY: string = 'data_processing_options_country';
      public static DATA_PROCESSION_OPTIONS_STATE: string = 'data_processing_options_state';
      public static hasCustomTabsPrefetching: boolean;
      public static ignoreAppSwitchToLoggedOut: boolean;
      public static bypassAppSwitch: boolean;
      public static INSTAGRAM: string = 'instagram';
      public static GAMING: string = 'gaming';
      public static FACEBOOK_COM: string = 'facebook.com';
      public static FB_GG: string = 'fb.gg';
      public static INSTAGRAM_COM: string = 'instagram.com';
      public static CLOUDBRIDGE_SAVED_CREDENTIALS: string = 'com.facebook.sdk.CloudBridgeSavedCredentials';
      public static getCodelessDebugLogEnabled(): boolean;
      public static clearLoggingBehaviors(): void;
      public static setApplicationName(applicationName: string): void;
      public static getInstagramDomain(): string;
      public static getCodelessSetupEnabled(): boolean;
      public static setFacebookDomain(facebookDomain: string): void;
      public static addLoggingBehavior(synchronizedFacebookSdk$addLoggingBehavior$1: com.facebook.LoggingBehavior): void;
      public static setAutoLogAppEventsEnabled(application: boolean): void;
      public static isInitialized(): boolean;
      public static getApplicationId(): string;
      public static setGraphRequestCreator$facebook_core_release(graphRequestCreator: com.facebook.FacebookSdk.GraphRequestCreator): void;
      public static setGraphApiVersion(graphApiVersion: string): void;
      public static loadDefaultsFromMetadata$facebook_core_release(e: globalAndroid.content.Context): void;
      public static setCodelessDebugLogEnabled(flag: boolean): void;
      public static getLimitEventAndDataUsage(preferences: globalAndroid.content.Context): boolean;
      public static getAutoInitEnabled(): boolean;
      public static isLoggingBehaviorEnabled(synchronizedFacebookSdk$isLoggingBehaviorEnabled$1: com.facebook.LoggingBehavior): boolean;
      public static getAutoLogAppEventsEnabled(): boolean;
      /** @deprecated */
      public static sdkInitialize(applicationContext: globalAndroid.content.Context): void;
      public static fullyInitialize(): void;
      public static setDataProcessingOptions(dataProcessingOptions: androidNative.Array<string>, array: number, optionsNotNull: number): void;
      public static setClientToken(clientToken: string): void;
      public static setAutoInitEnabled(flag: boolean): void;
      public static setOnProgressThreshold(threshold: number): void;
      public static getExecutor(): java.util.concurrent.Executor;
      public static isDebugEnabled(): boolean;
      public static setCacheDir(cacheDir: java.io.File): void;
      public static getGraphApiVersion(): string;
      public static getAdvertiserIDCollectionEnabled(): boolean;
      public static getApplicationSignature(e: globalAndroid.content.Context): string;
      /** @deprecated */
      public static sdkInitialize(futureTask: globalAndroid.content.Context, applicationContext: com.facebook.FacebookSdk.InitializeCallback): void;
      public static isFullyInitialized(): boolean;
      public static getCallbackRequestCodeOffset(): number;
      public static removeLoggingBehavior(synchronizedFacebookSdk$removeLoggingBehavior$1: com.facebook.LoggingBehavior): void;
      /** @deprecated */
      public static sdkInitialize(applicationContext: globalAndroid.content.Context, callbackRequestCodeOffset: number): void;
      /** @deprecated */
      public static sdkInitialize(applicationContext: globalAndroid.content.Context, callbackRequestCodeOffset: number, callback: com.facebook.FacebookSdk.InitializeCallback): void;
      public static getOnProgressThreshold(): number;
      public static setLimitEventAndDataUsage(context: globalAndroid.content.Context, limitEventUsage: boolean): void;
      public static setAdvertiserIDCollectionEnabled(flag: boolean): void;
      public static getGraphDomain(): string;
      public static setExecutor(withLockFacebookSdk$setExecutor$1: java.util.concurrent.Executor): void;
      public static getApplicationContext(): globalAndroid.content.Context;
      public static getLoggingBehaviors(): java.util.Set<com.facebook.LoggingBehavior>;
      public static getApplicationName(): string;
      public static getMonitorEnabled(): boolean;
      public static getFacebookDomain(): string;
      public static isFacebookRequestCode(requestCode: number): boolean;
      public static getClientToken(): string;
      public static setApplicationId(applicationId: string): void;
      public static setMonitorEnabled(flag: boolean): void;
      public static publishInstallAsync(applicationContext: globalAndroid.content.Context, context: string): void;
      public static getCacheDir(): java.io.File;
      public static setIsDebugEnabled(enabled: boolean): void;
      public static setLegacyTokenUpgradeSupported(supported: boolean): void;
      public static getSdkVersion(): string;
      public static setDataProcessingOptions(options: androidNative.Array<string>): void;
      public static isLegacyTokenUpgradeSupported(): boolean;
      public static getFacebookGamingDomain(): string;
    }
    export module FacebookSdk {
      export class GraphRequestCreator {
        public static class: java.lang.Class<com.facebook.FacebookSdk.GraphRequestCreator>;
        /**
         * Constructs a new instance of the com.facebook.FacebookSdk$GraphRequestCreator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { createPostRequest(param0: com.facebook.AccessToken, param1: string, param2: org.json.JSONObject, param3: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest });
        public constructor();
        public createPostRequest(param0: com.facebook.AccessToken, param1: string, param2: org.json.JSONObject, param3: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
      }
      export class InitializeCallback {
        public static class: java.lang.Class<com.facebook.FacebookSdk.InitializeCallback>;
        /**
         * Constructs a new instance of the com.facebook.FacebookSdk$InitializeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onInitialized(): void });
        public constructor();
        public onInitialized(): void;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class FacebookSdkNotInitializedException extends com.facebook.FacebookException {
      public static class: java.lang.Class<com.facebook.FacebookSdkNotInitializedException>;
      public static serialVersionUID: number = 1;
      public constructor(message: string);
      public constructor(throwable: java.lang.Throwable);
      public constructor(format: string, args: androidNative.Array<any>);
      public constructor();
      public constructor(message: string, throwable: java.lang.Throwable);
      public constructor(this_: string);
    }
    export module FacebookSdkNotInitializedException {
      export class Companion {
        public static class: java.lang.Class<com.facebook.FacebookSdkNotInitializedException.Companion>;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class FacebookSdkVersion {
      public static class: java.lang.Class<com.facebook.FacebookSdkVersion>;
      public static INSTANCE: com.facebook.FacebookSdkVersion;
      public static BUILD: string = '18.0.2';
    }
  }
}

declare module com {
  export module facebook {
    export class FacebookServiceException extends com.facebook.FacebookException {
      public static class: java.lang.Class<com.facebook.FacebookServiceException>;
      public constructor(throwable: java.lang.Throwable);
      public toString(): string;
      public constructor(format: string, args: androidNative.Array<any>);
      public constructor();
      public constructor(message: string, throwable: java.lang.Throwable);
      public constructor(requestError: com.facebook.FacebookRequestError, errorMessage: string);
      public constructor(this_: string);
      public getRequestError(): com.facebook.FacebookRequestError;
    }
    export module FacebookServiceException {
      export class Companion {
        public static class: java.lang.Class<com.facebook.FacebookServiceException.Companion>;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class GraphRequest {
      public static class: java.lang.Class<com.facebook.GraphRequest>;
      public static MAXIMUM_BATCH_SIZE: number = 50;
      public static TAG: string;
      public static ACCESS_TOKEN_PARAM: string = 'access_token';
      public static FIELDS_PARAM: string = 'fields';
      public setHttpMethod(value: com.facebook.HttpMethod): void;
      public static newPostRequestWithBundle(accessToken: com.facebook.AccessToken, graphPath: string, parameters: globalAndroid.os.Bundle, callback: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
      public static newMyFriendsRequest(accessToken: com.facebook.AccessToken, callback: com.facebook.GraphRequest.GraphJSONArrayCallback): com.facebook.GraphRequest;
      public static newUploadPhotoRequest(accessToken: com.facebook.AccessToken, graphPath: string, file: java.io.File, caption: string, params: globalAndroid.os.Bundle, callback: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
      public constructor(accessToken: com.facebook.AccessToken, graphPath: string, parameters: globalAndroid.os.Bundle, httpMethod: com.facebook.HttpMethod);
      public setAccessToken(set: com.facebook.AccessToken): void;
      public static newMeRequest(accessToken: com.facebook.AccessToken, callback: com.facebook.GraphRequest.GraphJSONObjectCallback): com.facebook.GraphRequest;
      public getCallback(): com.facebook.GraphRequest.Callback;
      public constructor(accessToken: com.facebook.AccessToken, graphPath: string, parameters: globalAndroid.os.Bundle, httpMethod: com.facebook.HttpMethod, callback: com.facebook.GraphRequest.Callback, version: string);
      public setBatchEntryOmitResultOnSuccess(set: boolean): void;
      public getTag(): any;
      public constructor(accessToken: com.facebook.AccessToken, overriddenURL: java.net.URL);
      public setBatchEntryName(set: string): void;
      public static executeBatchAsync(requests: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
      public getParameters(): globalAndroid.os.Bundle;
      public getBatchEntryDependsOn(): string;
      public constructor();
      public getGraphObject(): org.json.JSONObject;
      public static toHttpConnection(requests: java.util.Collection<com.facebook.GraphRequest>): java.net.HttpURLConnection;
      public static executeBatchAndWait(requests: androidNative.Array<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
      public static getDefaultBatchApplicationId(): string;
      public constructor(accessToken: com.facebook.AccessToken, graphPath: string, parameters: globalAndroid.os.Bundle);
      public static toHttpConnection(requests: androidNative.Array<com.facebook.GraphRequest>): java.net.HttpURLConnection;
      public setTag(set: any): void;
      public static serializeToUrlConnection$facebook_core_release(requests: com.facebook.GraphRequestBatch, connection: java.net.HttpURLConnection): void;
      public setVersion(set: string): void;
      public setForceApplicationRequest(forceOverride: boolean): void;
      public setParameters(set: globalAndroid.os.Bundle): void;
      public static newDeleteObjectRequest(accessToken: com.facebook.AccessToken, id: string, callback: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
      public setCallback(this_: com.facebook.GraphRequest.Callback): void;
      public static executeBatchAndWait(requests: java.util.Collection<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
      public executeAndWait(): com.facebook.GraphResponse;
      public static newUploadPhotoRequest(accessToken: com.facebook.AccessToken, graphPath: string, image: globalAndroid.graphics.Bitmap, caption: string, params: globalAndroid.os.Bundle, callback: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
      public getUrlForSingleRequest(): string;
      public static executeConnectionAndWait(connection: java.net.HttpURLConnection, requests: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
      public static newPlacesSearchRequest(accessToken: com.facebook.AccessToken, location: globalAndroid.location.Location, radiusInMeters: number, resultsLimit: number, searchText: string, callback: com.facebook.GraphRequest.GraphJSONArrayCallback): com.facebook.GraphRequest;
      public static newCustomAudienceThirdPartyIdRequest(accessToken: com.facebook.AccessToken, context: globalAndroid.content.Context, applicationId: string, callback: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
      public constructor(accessToken: com.facebook.AccessToken, graphPath: string, parameters: globalAndroid.os.Bundle, httpMethod: com.facebook.HttpMethod, callback: com.facebook.GraphRequest.Callback);
      public static setDefaultBatchApplicationId(applicationId: string): void;
      public static newPostRequest(accessToken: com.facebook.AccessToken, graphPath: string, graphObject: org.json.JSONObject, callback: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
      public static executeBatchAndWait(requests: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
      public static executeAndWait(request: com.facebook.GraphRequest): com.facebook.GraphResponse;
      public static toHttpConnection(requests: com.facebook.GraphRequestBatch): java.net.HttpURLConnection;
      public static executeBatchAsync(requests: androidNative.Array<com.facebook.GraphRequest>): com.facebook.GraphRequestAsyncTask;
      public static executeConnectionAsync(connection: java.net.HttpURLConnection, requests: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
      public static runCallbacks$facebook_core_release(requests: com.facebook.GraphRequestBatch, responses: java.util.List<com.facebook.GraphResponse>): void;
      public getBatchEntryOmitResultOnSuccess(): boolean;
      public static newUploadPhotoRequest(accessToken: com.facebook.AccessToken, graphPath: string, photoUri: globalAndroid.net.Uri, caption: string, params: globalAndroid.os.Bundle, callback: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
      public getRelativeUrlForBatchedRequest(): string;
      public setBatchEntryDependsOn(set: string): void;
      public static newCustomAudienceThirdPartyIdRequest(accessToken: com.facebook.AccessToken, context: globalAndroid.content.Context, callback: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
      public setGraphPath(set: string): void;
      public static executeBatchAsync(requests: java.util.Collection<com.facebook.GraphRequest>): com.facebook.GraphRequestAsyncTask;
      public static executeConnectionAndWait(connection: java.net.HttpURLConnection, requests: java.util.Collection<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
      public executeAsync(): com.facebook.GraphRequestAsyncTask;
      public static newGraphPathRequest(accessToken: com.facebook.AccessToken, graphPath: string, callback: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
      public setGraphObject(set: org.json.JSONObject): void;
      public toString(): string;
      public constructor(accessToken: com.facebook.AccessToken);
      public constructor(accessToken: com.facebook.AccessToken, graphPath: string);
      public getAccessToken(): com.facebook.AccessToken;
      public getHttpMethod(): com.facebook.HttpMethod;
      public static validateFieldsParamForGetRequests$facebook_core_release(requests: com.facebook.GraphRequestBatch): void;
      public getBatchEntryName(): string;
      public getVersion(): string;
      public getGraphPath(): string;
      public static executeConnectionAsync(callbackHandler: globalAndroid.os.Handler, connection: java.net.HttpURLConnection, requests: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
    }
    export module GraphRequest {
      export class Attachment {
        public static class: java.lang.Class<com.facebook.GraphRequest.Attachment>;
        public constructor(request: com.facebook.GraphRequest, value: any);
        public getRequest(): com.facebook.GraphRequest;
        public getValue(): any;
      }
      export class Callback {
        public static class: java.lang.Class<com.facebook.GraphRequest.Callback>;
        /**
         * Constructs a new instance of the com.facebook.GraphRequest$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onCompleted(param0: com.facebook.GraphResponse): void });
        public constructor();
        public onCompleted(param0: com.facebook.GraphResponse): void;
      }
      export class Companion {
        public static class: java.lang.Class<com.facebook.GraphRequest.Companion>;
        public executeConnectionAndWait(connection: java.net.HttpURLConnection, requests: java.util.Collection<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
        public newMyFriendsRequest(this_: com.facebook.AccessToken, accessToken: com.facebook.GraphRequest.GraphJSONArrayCallback): com.facebook.GraphRequest;
        public executeBatchAsync(requests: java.util.Collection<com.facebook.GraphRequest>): com.facebook.GraphRequestAsyncTask;
        public newCustomAudienceThirdPartyIdRequest(accessToken: com.facebook.AccessToken, context: globalAndroid.content.Context, callback: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
        public executeBatchAsync(requests: androidNative.Array<com.facebook.GraphRequest>): com.facebook.GraphRequestAsyncTask;
        public toHttpConnection(requests: androidNative.Array<com.facebook.GraphRequest>): java.net.HttpURLConnection;
        public getDefaultBatchApplicationId(): string;
        public newPostRequestWithBundle(accessToken: com.facebook.AccessToken, graphPath: string, parameters: globalAndroid.os.Bundle, callback: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
        public executeBatchAndWait(requests: androidNative.Array<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
        public setDefaultBatchApplicationId(applicationId: string): void;
        public executeAndWait(this_: com.facebook.GraphRequest): com.facebook.GraphResponse;
        public newGraphPathRequest(accessToken: com.facebook.AccessToken, graphPath: string, callback: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
        public executeConnectionAsync(this_: globalAndroid.os.Handler, callbackHandler: java.net.HttpURLConnection, connection: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
        public serializeToUrlConnection$facebook_core_release(max: com.facebook.GraphRequestBatch, progressMap: java.net.HttpURLConnection): void;
        public executeConnectionAndWait(numRequests: java.net.HttpURLConnection, this_: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
        public newCustomAudienceThirdPartyIdRequest(applicationId: com.facebook.AccessToken, endpoint: globalAndroid.content.Context, attributionIdentifiers: string, parameters: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
        public toHttpConnection(e: com.facebook.GraphRequestBatch): java.net.HttpURLConnection;
        public newPlacesSearchRequest(wrapper: com.facebook.AccessToken, this_: globalAndroid.location.Location, accessToken: number, location: number, radiusInMeters: string, resultsLimit: com.facebook.GraphRequest.GraphJSONArrayCallback): com.facebook.GraphRequest;
        public executeBatchAsync(this_: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
        public validateFieldsParamForGetRequests$facebook_core_release(this_: com.facebook.GraphRequestBatch): void;
        public toHttpConnection(requests: java.util.Collection<com.facebook.GraphRequest>): java.net.HttpURLConnection;
        public executeConnectionAsync(connection: java.net.HttpURLConnection, requests: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
        public newPostRequest(this_: com.facebook.AccessToken, accessToken: string, graphPath: org.json.JSONObject, graphObject: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
        public executeBatchAndWait(requests: java.util.Collection<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
        public newMeRequest(this_: com.facebook.AccessToken, accessToken: com.facebook.GraphRequest.GraphJSONObjectCallback): com.facebook.GraphRequest;
        public executeBatchAndWait(responses: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
        public newUploadPhotoRequest(parameters: com.facebook.AccessToken, this_: string, accessToken: java.io.File, graphPath: string, file: globalAndroid.os.Bundle, caption: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
        public newDeleteObjectRequest(accessToken: com.facebook.AccessToken, id: string, callback: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
        public newUploadPhotoRequest(this_: com.facebook.AccessToken, accessToken: string, graphPath: globalAndroid.net.Uri, photoUri: string, caption: globalAndroid.os.Bundle, params: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
        public runCallbacks$facebook_core_release(i: com.facebook.GraphRequestBatch, runnable: java.util.List<com.facebook.GraphResponse>): void;
        public newUploadPhotoRequest(this_: com.facebook.AccessToken, accessToken: string, graphPath: globalAndroid.graphics.Bitmap, image: string, caption: globalAndroid.os.Bundle, params: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
      }
      export class GraphJSONArrayCallback {
        public static class: java.lang.Class<com.facebook.GraphRequest.GraphJSONArrayCallback>;
        /**
         * Constructs a new instance of the com.facebook.GraphRequest$GraphJSONArrayCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onCompleted(param0: org.json.JSONArray, param1: com.facebook.GraphResponse): void });
        public constructor();
        public onCompleted(param0: org.json.JSONArray, param1: com.facebook.GraphResponse): void;
      }
      export class GraphJSONObjectCallback {
        public static class: java.lang.Class<com.facebook.GraphRequest.GraphJSONObjectCallback>;
        /**
         * Constructs a new instance of the com.facebook.GraphRequest$GraphJSONObjectCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onCompleted(param0: org.json.JSONObject, param1: com.facebook.GraphResponse): void });
        public constructor();
        public onCompleted(param0: org.json.JSONObject, param1: com.facebook.GraphResponse): void;
      }
      export class KeyValueSerializer {
        public static class: java.lang.Class<com.facebook.GraphRequest.KeyValueSerializer>;
        /**
         * Constructs a new instance of the com.facebook.GraphRequest$KeyValueSerializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { writeString(param0: string, param1: string): void });
        public constructor();
        public writeString(param0: string, param1: string): void;
      }
      export class OnProgressCallback extends com.facebook.GraphRequest.Callback {
        public static class: java.lang.Class<com.facebook.GraphRequest.OnProgressCallback>;
        /**
         * Constructs a new instance of the com.facebook.GraphRequest$OnProgressCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onProgress(param0: number, param1: number): void; onCompleted(param0: com.facebook.GraphResponse): void });
        public constructor();
        public onCompleted(param0: com.facebook.GraphResponse): void;
        public onProgress(param0: number, param1: number): void;
      }
      export class ParcelableResourceWithMimeType<RESOURCE> extends globalAndroid.os.Parcelable {
        public static class: java.lang.Class<com.facebook.GraphRequest.ParcelableResourceWithMimeType<any>>;
        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.GraphRequest.ParcelableResourceWithMimeType<any>>;
        public getResource(): any;
        public constructor(resource: any, mimeType: string);
        public getMimeType(): string;
        public describeContents(): number;
        public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
      }
      export module ParcelableResourceWithMimeType {
        export class Companion {
          public static class: java.lang.Class<com.facebook.GraphRequest.ParcelableResourceWithMimeType.Companion>;
        }
      }
      export class Serializer extends com.facebook.GraphRequest.KeyValueSerializer {
        public static class: java.lang.Class<com.facebook.GraphRequest.Serializer>;
        public writeLine(format: string, args: androidNative.Array<any>): void;
        public writeBitmap(key: string, bitmap: globalAndroid.graphics.Bitmap): void;
        public writeRecordBoundary(): void;
        public writeString(key: string, value: string): void;
        public write(format: string, args: androidNative.Array<any>): void;
        public constructor(outputStream: java.io.OutputStream, logger: com.facebook.internal.Logger, useUrlEncode: boolean);
        public writeString(param0: string, param1: string): void;
        public writeContentUri(inputStream: string, mimeType: globalAndroid.net.Uri, totalBytes: string): void;
        public writeFile(mimeType: string, totalBytes: globalAndroid.os.ParcelFileDescriptor, this_: string): void;
        public writeObject(mimeType: string, this_: any, key: com.facebook.GraphRequest): void;
        public writeContentDisposition(name: string, filename: string, contentType: string): void;
        public writeBytes(key: string, bytes: androidNative.Array<number>): void;
        public writeRequestsAsJson(i: string, request: org.json.JSONArray, requestOutputStream: java.util.Collection<com.facebook.GraphRequest>): void;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class GraphRequestAsyncTask extends globalAndroid.os.AsyncTask<java.lang.Void, java.lang.Void, java.util.List<any>> {
      public static class: java.lang.Class<com.facebook.GraphRequestAsyncTask>;
      public constructor(requests: com.facebook.GraphRequestBatch);
      public constructor(connection: java.net.HttpURLConnection, requests: java.util.Collection<com.facebook.GraphRequest>);
      public constructor(requests: androidNative.Array<com.facebook.GraphRequest>);
      public constructor(requests: java.util.Collection<com.facebook.GraphRequest>);
      public toString(): string;
      public getException(): java.lang.Exception;
      public constructor(connection: java.net.HttpURLConnection, requests: androidNative.Array<com.facebook.GraphRequest>);
      public doInBackground(this_: androidNative.Array<java.lang.Void>): java.util.List<com.facebook.GraphResponse>;
      public onPostExecute(this_: java.util.List<com.facebook.GraphResponse>): void;
      public getRequests(): com.facebook.GraphRequestBatch;
      public onPreExecute(): void;
      public constructor(connection: java.net.HttpURLConnection, requests: com.facebook.GraphRequestBatch);
    }
    export module GraphRequestAsyncTask {
      export class Companion {
        public static class: java.lang.Class<com.facebook.GraphRequestAsyncTask.Companion>;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class GraphRequestBatch extends java.util.AbstractList<com.facebook.GraphRequest> {
      public static class: java.lang.Class<com.facebook.GraphRequestBatch>;
      public set(index: number, element: com.facebook.GraphRequest): com.facebook.GraphRequest;
      public setBatchApplicationId(set: string): void;
      public removeCallback(callback: com.facebook.GraphRequestBatch.Callback): void;
      public add(index: number, element: com.facebook.GraphRequest): void;
      public getCallbackHandler(): globalAndroid.os.Handler;
      public removeAt(index: number): com.facebook.GraphRequest;
      public contains(element: com.facebook.GraphRequest): boolean;
      public getSize(): number;
      public constructor(requests: com.facebook.GraphRequestBatch);
      public constructor(requests: androidNative.Array<com.facebook.GraphRequest>);
      public contains(element: any): boolean;
      public getTimeout(): number;
      public lastIndexOf(element: any): number;
      public getCallbacks(): java.util.List<com.facebook.GraphRequestBatch.Callback>;
      public getBatchApplicationId(): string;
      public add(element: com.facebook.GraphRequest): boolean;
      public clear(): void;
      public setTimeout(this_: number): void;
      public size(): number;
      public indexOf(element: com.facebook.GraphRequest): number;
      public addCallback(callback: com.facebook.GraphRequestBatch.Callback): void;
      public indexOf(element: any): number;
      public constructor();
      public executeAsync(): com.facebook.GraphRequestAsyncTask;
      public getId(): string;
      public constructor(requests: java.util.Collection<com.facebook.GraphRequest>);
      public lastIndexOf(element: com.facebook.GraphRequest): number;
      public setCallbackHandler(set: globalAndroid.os.Handler): void;
      public remove(element: com.facebook.GraphRequest): boolean;
      public remove(index: number): com.facebook.GraphRequest;
      public remove(element: any): boolean;
      public getRequests(): java.util.List<com.facebook.GraphRequest>;
      public get(index: number): com.facebook.GraphRequest;
      public executeAndWait(): java.util.List<com.facebook.GraphResponse>;
    }
    export module GraphRequestBatch {
      export class Callback {
        public static class: java.lang.Class<com.facebook.GraphRequestBatch.Callback>;
        /**
         * Constructs a new instance of the com.facebook.GraphRequestBatch$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onBatchCompleted(param0: com.facebook.GraphRequestBatch): void });
        public constructor();
        public onBatchCompleted(param0: com.facebook.GraphRequestBatch): void;
      }
      export class Companion {
        public static class: java.lang.Class<com.facebook.GraphRequestBatch.Companion>;
      }
      export class OnProgressCallback extends com.facebook.GraphRequestBatch.Callback {
        public static class: java.lang.Class<com.facebook.GraphRequestBatch.OnProgressCallback>;
        /**
         * Constructs a new instance of the com.facebook.GraphRequestBatch$OnProgressCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onBatchProgress(param0: com.facebook.GraphRequestBatch, param1: number, param2: number): void; onBatchCompleted(param0: com.facebook.GraphRequestBatch): void });
        public constructor();
        public onBatchProgress(param0: com.facebook.GraphRequestBatch, param1: number, param2: number): void;
        public onBatchCompleted(param0: com.facebook.GraphRequestBatch): void;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class GraphResponse {
      public static class: java.lang.Class<com.facebook.GraphResponse>;
      public static NON_JSON_RESPONSE_PROPERTY: string = 'FACEBOOK_NON_JSON_RESULT';
      public static SUCCESS_KEY: string = 'success';
      public static createResponsesFromStream$facebook_core_release(stream: java.io.InputStream, connection: java.net.HttpURLConnection, requests: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
      public getJSONArray(): org.json.JSONArray;
      public getRequest(): com.facebook.GraphRequest;
      public static createResponsesFromString$facebook_core_release(responseString: string, connection: java.net.HttpURLConnection, requests: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
      public getConnection(): java.net.HttpURLConnection;
      public getRawResponse(): string;
      public constructor(request: com.facebook.GraphRequest, connection: java.net.HttpURLConnection, rawResponse: string, graphObjects: org.json.JSONArray);
      public getJsonArray(): org.json.JSONArray;
      public static fromHttpConnection$facebook_core_release(connection: java.net.HttpURLConnection, requests: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
      public getJSONObject(): org.json.JSONObject;
      public getRequestForPagedResults(e: com.facebook.GraphResponse.PagingDirection): com.facebook.GraphRequest;
      public static constructErrorResponses(requests: java.util.List<com.facebook.GraphRequest>, connection: java.net.HttpURLConnection, error: com.facebook.FacebookException): java.util.List<com.facebook.GraphResponse>;
      public getJsonObject(): org.json.JSONObject;
      public toString(): string;
      public constructor(request: com.facebook.GraphRequest, connection: java.net.HttpURLConnection, rawResponse: string, graphObject: org.json.JSONObject);
      public constructor(request: com.facebook.GraphRequest, connection: java.net.HttpURLConnection, rawResponse: string, graphObject: org.json.JSONObject, graphObjectArray: org.json.JSONArray, error: com.facebook.FacebookRequestError);
      public getError(): com.facebook.FacebookRequestError;
      public constructor(request: com.facebook.GraphRequest, connection: java.net.HttpURLConnection, error: com.facebook.FacebookRequestError);
    }
    export module GraphResponse {
      export class Companion {
        public static class: java.lang.Class<com.facebook.GraphResponse.Companion>;
        public createResponsesFromString$facebook_core_release(resultObject: string, responses: java.net.HttpURLConnection, this_: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
        public fromHttpConnection$facebook_core_release(facebookException: java.net.HttpURLConnection, exception: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
        public createResponsesFromStream$facebook_core_release(this_: java.io.InputStream, stream: java.net.HttpURLConnection, connection: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
        public constructErrorResponses(it: java.util.List<com.facebook.GraphRequest>, item$iv$iv: java.net.HttpURLConnection, $i$f$mapTo: com.facebook.FacebookException): java.util.List<com.facebook.GraphResponse>;
      }
      export class PagingDirection {
        public static class: java.lang.Class<com.facebook.GraphResponse.PagingDirection>;
        public static NEXT: com.facebook.GraphResponse.PagingDirection;
        public static PREVIOUS: com.facebook.GraphResponse.PagingDirection;
        public static valueOf(value: string): com.facebook.GraphResponse.PagingDirection;
        public static values(): androidNative.Array<com.facebook.GraphResponse.PagingDirection>;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class HttpMethod {
      public static class: java.lang.Class<com.facebook.HttpMethod>;
      public static GET: com.facebook.HttpMethod;
      public static POST: com.facebook.HttpMethod;
      public static DELETE: com.facebook.HttpMethod;
      public static valueOf(value: string): com.facebook.HttpMethod;
      public static values(): androidNative.Array<com.facebook.HttpMethod>;
    }
  }
}

declare module com {
  export module facebook {
    export class LegacyTokenHelper {
      public static class: java.lang.Class<com.facebook.LegacyTokenHelper>;
      public static TOKEN_KEY: string = 'com.facebook.TokenCachingStrategy.Token';
      public static EXPIRATION_DATE_KEY: string = 'com.facebook.TokenCachingStrategy.ExpirationDate';
      public static LAST_REFRESH_DATE_KEY: string = 'com.facebook.TokenCachingStrategy.LastRefreshDate';
      public static TOKEN_SOURCE_KEY: string = 'com.facebook.TokenCachingStrategy.AccessTokenSource';
      public static PERMISSIONS_KEY: string = 'com.facebook.TokenCachingStrategy.Permissions';
      public static DECLINED_PERMISSIONS_KEY: string = 'com.facebook.TokenCachingStrategy.DeclinedPermissions';
      public static EXPIRED_PERMISSIONS_KEY: string = 'com.facebook.TokenCachingStrategy.ExpiredPermissions';
      public static APPLICATION_ID_KEY: string = 'com.facebook.TokenCachingStrategy.ApplicationId';
      public static DEFAULT_CACHE_KEY: string = 'com.facebook.SharedPreferencesTokenCachingStrategy.DEFAULT_KEY';
      public static getExpirationDate(bundle: globalAndroid.os.Bundle): java.util.Date;
      public clear(): void;
      public static putPermissions(bundle: globalAndroid.os.Bundle, value: java.util.Collection<string>): void;
      public static getPermissions(bundle: globalAndroid.os.Bundle): java.util.Set<string>;
      public constructor(context: globalAndroid.content.Context);
      public static putExpirationDate(bundle: globalAndroid.os.Bundle, value: java.util.Date): void;
      public static getSource(bundle: globalAndroid.os.Bundle): com.facebook.AccessTokenSource;
      public static putExpirationMilliseconds(bundle: globalAndroid.os.Bundle, value: number): void;
      public constructor(applicationContext: globalAndroid.content.Context, this_: string);
      public load(): globalAndroid.os.Bundle;
      public save(key: globalAndroid.os.Bundle): void;
      public static putSource(bundle: globalAndroid.os.Bundle, value: com.facebook.AccessTokenSource): void;
      public static putLastRefreshDate(bundle: globalAndroid.os.Bundle, value: java.util.Date): void;
      public static putExpiredPermissions(bundle: globalAndroid.os.Bundle, value: java.util.Collection<string>): void;
      public static putLastRefreshMilliseconds(bundle: globalAndroid.os.Bundle, value: number): void;
      public static putDeclinedPermissions(bundle: globalAndroid.os.Bundle, value: java.util.Collection<string>): void;
      public static getLastRefreshDate(bundle: globalAndroid.os.Bundle): java.util.Date;
      public static getLastRefreshMilliseconds(bundle: globalAndroid.os.Bundle): number;
      public static getApplicationId(bundle: globalAndroid.os.Bundle): string;
      public static putApplicationId(bundle: globalAndroid.os.Bundle, value: string): void;
      public static putToken(bundle: globalAndroid.os.Bundle, value: string): void;
      public static getToken(bundle: globalAndroid.os.Bundle): string;
      public static hasTokenInformation(bundle: globalAndroid.os.Bundle): boolean;
      public static getExpirationMilliseconds(bundle: globalAndroid.os.Bundle): number;
    }
    export module LegacyTokenHelper {
      export class Companion {
        public static class: java.lang.Class<com.facebook.LegacyTokenHelper.Companion>;
        public putPermissions(bundle: globalAndroid.os.Bundle, value: java.util.Collection<string>): void;
        public putLastRefreshDate(bundle: globalAndroid.os.Bundle, value: java.util.Date): void;
        public putToken(bundle: globalAndroid.os.Bundle, value: string): void;
        public getLastRefreshMilliseconds(bundle: globalAndroid.os.Bundle): number;
        public hasTokenInformation(expiresMilliseconds: globalAndroid.os.Bundle): boolean;
        public getLastRefreshDate(bundle: globalAndroid.os.Bundle): java.util.Date;
        public putLastRefreshMilliseconds(bundle: globalAndroid.os.Bundle, value: number): void;
        public getExpirationDate(bundle: globalAndroid.os.Bundle): java.util.Date;
        public putExpirationDate(bundle: globalAndroid.os.Bundle, value: java.util.Date): void;
        public putExpirationMilliseconds(bundle: globalAndroid.os.Bundle, value: number): void;
        public getPermissions(this_: globalAndroid.os.Bundle): java.util.Set<string>;
        public putDeclinedPermissions(bundle: globalAndroid.os.Bundle, value: java.util.Collection<string>): void;
        public getApplicationId(bundle: globalAndroid.os.Bundle): string;
        public putApplicationId(bundle: globalAndroid.os.Bundle, value: string): void;
        public putExpiredPermissions(bundle: globalAndroid.os.Bundle, value: java.util.Collection<string>): void;
        public getExpirationMilliseconds(bundle: globalAndroid.os.Bundle): number;
        public putSource(bundle: globalAndroid.os.Bundle, value: com.facebook.AccessTokenSource): void;
        public getSource(this_: globalAndroid.os.Bundle): com.facebook.AccessTokenSource;
        public getToken(bundle: globalAndroid.os.Bundle): string;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class LoggingBehavior {
      public static class: java.lang.Class<com.facebook.LoggingBehavior>;
      public static REQUESTS: com.facebook.LoggingBehavior;
      public static INCLUDE_ACCESS_TOKENS: com.facebook.LoggingBehavior;
      public static INCLUDE_RAW_RESPONSES: com.facebook.LoggingBehavior;
      public static CACHE: com.facebook.LoggingBehavior;
      public static APP_EVENTS: com.facebook.LoggingBehavior;
      public static DEVELOPER_ERRORS: com.facebook.LoggingBehavior;
      public static GRAPH_API_DEBUG_WARNING: com.facebook.LoggingBehavior;
      public static GRAPH_API_DEBUG_INFO: com.facebook.LoggingBehavior;
      public static values(): androidNative.Array<com.facebook.LoggingBehavior>;
      public static valueOf(value: string): com.facebook.LoggingBehavior;
    }
  }
}

declare module com {
  export module facebook {
    export class Profile {
      public static class: java.lang.Class<com.facebook.Profile>;
      public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.Profile>;
      public static fetchProfileForCurrentAccessToken(): void;
      public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
      public static setCurrentProfile(profile: com.facebook.Profile): void;
      public constructor(pictureUriString: org.json.JSONObject);
      public toJSONObject(): org.json.JSONObject;
      public getId(): string;
      public equals(other: any): boolean;
      public getMiddleName(): string;
      public getName(): string;
      public constructor(id: string, firstName: string, middleName: string, lastName: string, name: string, linkUri: globalAndroid.net.Uri);
      public getFirstName(): string;
      public constructor(id: string, firstName: string, middleName: string, lastName: string, name: string, linkUri: globalAndroid.net.Uri, pictureUri: globalAndroid.net.Uri);
      public describeContents(): number;
      public getLastName(): string;
      public getProfilePictureUri(this_: number, width: number): globalAndroid.net.Uri;
      public static getCurrentProfile(): com.facebook.Profile;
      public getLinkUri(): globalAndroid.net.Uri;
      public getPictureUri(): globalAndroid.net.Uri;
      public hashCode(): number;
    }
    export module Profile {
      export class Companion {
        public static class: java.lang.Class<com.facebook.Profile.Companion>;
        public fetchProfileForCurrentAccessToken(): void;
        public getCurrentProfile(): com.facebook.Profile;
        public setCurrentProfile(profile: com.facebook.Profile): void;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class ProfileCache {
      public static class: java.lang.Class<com.facebook.ProfileCache>;
      public static CACHED_PROFILE_KEY: string = 'com.facebook.ProfileManager.CachedProfile';
      public static SHARED_PREFERENCES_NAME: string = 'com.facebook.AccessTokenManager.SharedPreferences';
      public clear(): void;
      public load(): com.facebook.Profile;
      public constructor();
      public save(this_: com.facebook.Profile): void;
    }
    export module ProfileCache {
      export class Companion {
        public static class: java.lang.Class<com.facebook.ProfileCache.Companion>;
      }
    }
  }
}

declare module com {
  export module facebook {
    export class ProfileManager {
      public static class: java.lang.Class<com.facebook.ProfileManager>;
      public static ACTION_CURRENT_PROFILE_CHANGED: string = 'com.facebook.sdk.ACTION_CURRENT_PROFILE_CHANGED';
      public static EXTRA_OLD_PROFILE: string = 'com.facebook.sdk.EXTRA_OLD_PROFILE';
      public static EXTRA_NEW_PROFILE: string = 'com.facebook.sdk.EXTRA_NEW_PROFILE';
      public constructor(localBroadcastManager: androidx.localbroadcastmanager.content.LocalBroadcastManager, profileCache: com.facebook.ProfileCache);
      public static getInstance(): com.facebook.ProfileManager;
      public loadCurrentProfile(): boolean;
      public getCurrentProfile(): com.facebook.Profile;
      public setCurrentProfile(value: com.facebook.Profile): void;
    }
    export module ProfileManager {
      export class Companion {
        public static class: java.lang.Class<com.facebook.ProfileManager.Companion>;
        public getInstance(): com.facebook.ProfileManager;
      }
    }
  }
}

declare module com {
  export module facebook {
    export abstract class ProfileTracker {
      public static class: java.lang.Class<com.facebook.ProfileTracker>;
      public startTracking(): void;
      public stopTracking(): void;
      public constructor();
      public isTracking(): boolean;
      public onCurrentProfileChanged(param0: com.facebook.Profile, param1: com.facebook.Profile): void;
    }
    export module ProfileTracker {
      export class ProfileBroadcastReceiver {
        public static class: java.lang.Class<com.facebook.ProfileTracker.ProfileBroadcastReceiver>;
        public onReceive(newProfile: globalAndroid.content.Context, this_: globalAndroid.content.Intent): void;
        public constructor(this$0: com.facebook.ProfileTracker);
      }
    }
  }
}

declare module com {
  export module facebook {
    export class ProgressNoopOutputStream implements com.facebook.RequestOutputStream {
      public static class: java.lang.Class<com.facebook.ProgressNoopOutputStream>;
      public write(buffer: androidNative.Array<number>, offset: number, length: number): void;
      public setCurrentRequest(param0: com.facebook.GraphRequest): void;
      public getProgressMap(): java.util.Map<com.facebook.GraphRequest, com.facebook.RequestProgress>;
      public getMaxProgress(): number;
      public write(buffer: androidNative.Array<number>): void;
      public constructor(callbackHandler: globalAndroid.os.Handler);
      public setCurrentRequest(currentRequest: com.facebook.GraphRequest): void;
      public write(oneByte: number): void;
      public addProgress(currentRequest: number): void;
    }
  }
}

declare module com {
  export module facebook {
    export class ProgressOutputStream implements com.facebook.RequestOutputStream {
      public static class: java.lang.Class<com.facebook.ProgressOutputStream>;
      public write(buffer: androidNative.Array<number>, offset: number, length: number): void;
      public setCurrentRequest(param0: com.facebook.GraphRequest): void;
      public getMaxProgress(): number;
      public constructor(out: java.io.OutputStream, requests: com.facebook.GraphRequestBatch, progressMap: java.util.Map<com.facebook.GraphRequest, com.facebook.RequestProgress>, maxProgress: number);
      public getBatchProgress(): number;
      public write(buffer: androidNative.Array<number>): void;
      public setCurrentRequest(request: com.facebook.GraphRequest): void;
      public write(oneByte: number): void;
      public close(): void;
    }
  }
}

declare module com {
  export module facebook {
    export class RequestOutputStream {
      public static class: java.lang.Class<com.facebook.RequestOutputStream>;
      /**
       * Constructs a new instance of the com.facebook.RequestOutputStream interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { setCurrentRequest(param0: com.facebook.GraphRequest): void });
      public constructor();
      public setCurrentRequest(param0: com.facebook.GraphRequest): void;
    }
  }
}

declare module com {
  export module facebook {
    export class RequestProgress {
      public static class: java.lang.Class<com.facebook.RequestProgress>;
      public constructor(callbackHandler: globalAndroid.os.Handler, request: com.facebook.GraphRequest);
      public getProgress(): number;
      public reportProgress(): void;
      public getMaxProgress(): number;
      public addToMax(size: number): void;
      public addProgress(size: number): void;
    }
  }
}

declare module com {
  export module facebook {
    export class UserSettingsManager {
      public static class: java.lang.Class<com.facebook.UserSettingsManager>;
      public static INSTANCE: com.facebook.UserSettingsManager;
      public static setAdvertiserIDCollectionEnabled(flag: boolean): void;
      public static getAutoLogAppEventsEnabled(): boolean;
      public static getCodelessSetupEnabled(): boolean;
      public static setAutoLogAppEventsEnabled(flag: boolean): void;
      public static getMonitorEnabled(): boolean;
      public static logIfAutoAppLinkEnabled(): void;
      public static setAutoInitEnabled(flag: boolean): void;
      public static getAutoInitEnabled(): boolean;
      public static getAdvertiserIDCollectionEnabled(): boolean;
      public static setMonitorEnabled(flag: boolean): void;
    }
    export module UserSettingsManager {
      export class UserSetting {
        public static class: java.lang.Class<com.facebook.UserSettingsManager.UserSetting>;
        public setDefaultVal(set: boolean): void;
        public constructor(defaultVal: boolean, key: string);
        public setValue(set: java.lang.Boolean): void;
        public getDefaultVal(): boolean;
        public setLastTS(set: number): void;
        public getValue(): java.lang.Boolean;
        public setKey(set: string): void;
        public getKey(): string;
        public getLastTS(): number;
        public getValue(): boolean;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class AccessTokenAppIdPair {
        public static class: java.lang.Class<com.facebook.appevents.AccessTokenAppIdPair>;
        public constructor(accessTokenString: string, applicationId: string);
        public getAccessTokenString(): string;
        public hashCode(): number;
        public getApplicationId(): string;
        public equals(o: any): boolean;
        public constructor(accessToken: com.facebook.AccessToken);
      }
      export module AccessTokenAppIdPair {
        export class Companion {
          public static class: java.lang.Class<com.facebook.appevents.AccessTokenAppIdPair.Companion>;
        }
        export class SerializationProxyV1 {
          public static class: java.lang.Class<com.facebook.appevents.AccessTokenAppIdPair.SerializationProxyV1>;
          public constructor(accessTokenString: string, appId: string);
        }
        export module SerializationProxyV1 {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.AccessTokenAppIdPair.SerializationProxyV1.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class AnalyticsUserIDStore {
        public static class: java.lang.Class<com.facebook.appevents.AnalyticsUserIDStore>;
        public static INSTANCE: com.facebook.appevents.AnalyticsUserIDStore;
        public static initStore(): void;
        public static setUserID(id: string): void;
        public static getUserID(): string;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class AppEvent {
        public static class: java.lang.Class<com.facebook.appevents.AppEvent>;
        public getJSONObject(): org.json.JSONObject;
        public getOperationalJsonObject(): org.json.JSONObject;
        public isImplicit(): boolean;
        public getOperationalJSONObject(): org.json.JSONObject;
        public constructor(contextName: string, eventName: string, valueToSum: java.lang.Double, parameters: globalAndroid.os.Bundle, isImplicitlyLogged: boolean, isInBackground: boolean, currentSessionId: java.util.UUID, operationalParameters: com.facebook.appevents.OperationalData);
        public getJsonObject(): org.json.JSONObject;
        public getIsImplicit(): boolean;
        public getName(): string;
        public isChecksumValid(): boolean;
        public toString(): string;
        public getOperationalJSONObject(type: com.facebook.appevents.OperationalDataEnum): org.json.JSONObject;
      }
      export module AppEvent {
        export class Companion {
          public static class: java.lang.Class<com.facebook.appevents.AppEvent.Companion>;
          public validateIdentifier(synchronizedAppEvent$Companion$validateIdentifier$2: string): void;
        }
        export class SerializationProxyV2 {
          public static class: java.lang.Class<com.facebook.appevents.AppEvent.SerializationProxyV2>;
          public constructor(jsonString: string, operationalJsonString: string, isImplicit: boolean, inBackground: boolean, checksum: string);
        }
        export module SerializationProxyV2 {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.AppEvent.SerializationProxyV2.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class AppEventCollection {
        public static class: java.lang.Class<com.facebook.appevents.AppEventCollection>;
        public addEvent(accessTokenAppIdPair: com.facebook.appevents.AccessTokenAppIdPair, appEvent: com.facebook.appevents.AppEvent): void;
        public addPersistedEvents(state: com.facebook.appevents.PersistedEvents): void;
        public keySet(): java.util.Set<com.facebook.appevents.AccessTokenAppIdPair>;
        public getEventCount(): number;
        public constructor();
        public get(accessTokenAppIdPair: com.facebook.appevents.AccessTokenAppIdPair): com.facebook.appevents.SessionEventsState;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class AppEventDiskStore {
        public static class: java.lang.Class<com.facebook.appevents.AppEventDiskStore>;
        public static INSTANCE: com.facebook.appevents.AppEventDiskStore;
        public static readAndClearStore(): com.facebook.appevents.PersistedEvents;
        public static saveEventsToDisk$facebook_core_release(t: com.facebook.appevents.PersistedEvents): void;
      }
      export module AppEventDiskStore {
        export class MovedClassObjectInputStream {
          public static class: java.lang.Class<com.facebook.appevents.AppEventDiskStore.MovedClassObjectInputStream>;
          public readClassDescriptor(): java.io.ObjectStreamClass;
          public constructor(inputStream: java.io.InputStream);
        }
        export module MovedClassObjectInputStream {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.AppEventDiskStore.MovedClassObjectInputStream.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class AppEventQueue {
        public static class: java.lang.Class<com.facebook.appevents.AppEventQueue>;
        public static INSTANCE: com.facebook.appevents.AppEventQueue;
        public static handleResponse(jsonArray: com.facebook.appevents.AccessTokenAppIdPair, exc: com.facebook.GraphRequest, eventsJsonString: com.facebook.GraphResponse, prettyPrintedEvents: com.facebook.appevents.SessionEventsState, error: com.facebook.appevents.FlushStatistics): void;
        public static sendEventsToServer(request: com.facebook.appevents.FlushReason, flushResults: com.facebook.appevents.AppEventCollection): com.facebook.appevents.FlushStatistics;
        public static buildRequests(request: com.facebook.appevents.AppEventCollection, accessTokenAppId: com.facebook.appevents.FlushStatistics): java.util.List<com.facebook.GraphRequest>;
        public static add(accessTokenAppId: com.facebook.appevents.AccessTokenAppIdPair, appEvent: com.facebook.appevents.AppEvent): void;
        public static flushAndWait(e: com.facebook.appevents.FlushReason): void;
        public static persistToDisk(): void;
        public static getKeySet(): java.util.Set<com.facebook.appevents.AccessTokenAppIdPair>;
        public static flush(reason: com.facebook.appevents.FlushReason): void;
        public static buildRequestForSession(applicationId: com.facebook.appevents.AccessTokenAppIdPair, fetchedAppSettings: com.facebook.appevents.SessionEventsState, postRequest: boolean, requestParameters: com.facebook.appevents.FlushStatistics): com.facebook.GraphRequest;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class AppEventStore {
        public static class: java.lang.Class<com.facebook.appevents.AppEventStore>;
        public static INSTANCE: com.facebook.appevents.AppEventStore;
        public static persistEvents(sessionEventsState: com.facebook.appevents.AppEventCollection): void;
        public static persistEvents(persistedEvents: com.facebook.appevents.AccessTokenAppIdPair, accessTokenAppIdPair: com.facebook.appevents.SessionEventsState): void;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class AppEventsConstants {
        public static class: java.lang.Class<com.facebook.appevents.AppEventsConstants>;
        public static INSTANCE: com.facebook.appevents.AppEventsConstants;
        public static EVENT_NAME_ACTIVATED_APP: string = 'fb_mobile_activate_app';
        public static EVENT_NAME_DEACTIVATED_APP: string = 'fb_mobile_deactivate_app';
        public static EVENT_NAME_SESSION_INTERRUPTIONS: string = 'fb_mobile_app_interruptions';
        public static EVENT_NAME_TIME_BETWEEN_SESSIONS: string = 'fb_mobile_time_between_sessions';
        public static EVENT_NAME_COMPLETED_REGISTRATION: string = 'fb_mobile_complete_registration';
        public static EVENT_NAME_VIEWED_CONTENT: string = 'fb_mobile_content_view';
        public static EVENT_NAME_SEARCHED: string = 'fb_mobile_search';
        public static EVENT_NAME_RATED: string = 'fb_mobile_rate';
        public static EVENT_NAME_COMPLETED_TUTORIAL: string = 'fb_mobile_tutorial_completion';
        public static EVENT_NAME_PUSH_TOKEN_OBTAINED: string = 'fb_mobile_obtain_push_token';
        public static EVENT_NAME_ADDED_TO_CART: string = 'fb_mobile_add_to_cart';
        public static EVENT_NAME_ADDED_TO_WISHLIST: string = 'fb_mobile_add_to_wishlist';
        public static EVENT_NAME_INITIATED_CHECKOUT: string = 'fb_mobile_initiated_checkout';
        public static EVENT_NAME_ADDED_PAYMENT_INFO: string = 'fb_mobile_add_payment_info';
        public static EVENT_NAME_PURCHASED: string = 'fb_mobile_purchase';
        public static EVENT_NAME_ACHIEVED_LEVEL: string = 'fb_mobile_level_achieved';
        public static EVENT_NAME_UNLOCKED_ACHIEVEMENT: string = 'fb_mobile_achievement_unlocked';
        public static EVENT_NAME_SPENT_CREDITS: string = 'fb_mobile_spent_credits';
        public static EVENT_NAME_CONTACT: string = 'Contact';
        public static EVENT_NAME_CUSTOMIZE_PRODUCT: string = 'CustomizeProduct';
        public static EVENT_NAME_DONATE: string = 'Donate';
        public static EVENT_NAME_FIND_LOCATION: string = 'FindLocation';
        public static EVENT_NAME_SCHEDULE: string = 'Schedule';
        public static EVENT_NAME_START_TRIAL: string = 'StartTrial';
        public static EVENT_NAME_SUBMIT_APPLICATION: string = 'SubmitApplication';
        public static EVENT_NAME_SUBSCRIBE: string = 'Subscribe';
        public static EVENT_NAME_AD_IMPRESSION: string = 'AdImpression';
        public static EVENT_NAME_AD_CLICK: string = 'AdClick';
        public static EVENT_NAME_LIVE_STREAMING_START: string = 'fb_sdk_live_streaming_start';
        public static EVENT_NAME_LIVE_STREAMING_STOP: string = 'fb_sdk_live_streaming_stop';
        public static EVENT_NAME_LIVE_STREAMING_PAUSE: string = 'fb_sdk_live_streaming_pause';
        public static EVENT_NAME_LIVE_STREAMING_RESUME: string = 'fb_sdk_live_streaming_resume';
        public static EVENT_NAME_LIVE_STREAMING_ERROR: string = 'fb_sdk_live_streaming_error';
        public static EVENT_NAME_LIVE_STREAMING_UPDATE_STATUS: string = 'fb_sdk_live_streaming_update_status';
        public static EVENT_NAME_PRODUCT_CATALOG_UPDATE: string = 'fb_mobile_catalog_update';
        public static EVENT_PARAM_LIVE_STREAMING_PREV_STATUS: string = 'live_streaming_prev_status';
        public static EVENT_PARAM_LIVE_STREAMING_STATUS: string = 'live_streaming_status';
        public static EVENT_PARAM_LIVE_STREAMING_ERROR: string = 'live_streaming_error';
        public static EVENT_PARAM_CURRENCY: string = 'fb_currency';
        public static EVENT_PARAM_REGISTRATION_METHOD: string = 'fb_registration_method';
        public static EVENT_PARAM_CONTENT_TYPE: string = 'fb_content_type';
        public static EVENT_PARAM_CONTENT: string = 'fb_content';
        public static EVENT_PARAM_CONTENT_ID: string = 'fb_content_id';
        public static EVENT_PARAM_SEARCH_STRING: string = 'fb_search_string';
        public static EVENT_PARAM_SUCCESS: string = 'fb_success';
        public static EVENT_PARAM_MAX_RATING_VALUE: string = 'fb_max_rating_value';
        public static EVENT_PARAM_PAYMENT_INFO_AVAILABLE: string = 'fb_payment_info_available';
        public static EVENT_PARAM_NUM_ITEMS: string = 'fb_num_items';
        public static EVENT_PARAM_LEVEL: string = 'fb_level';
        public static EVENT_PARAM_DESCRIPTION: string = 'fb_description';
        public static EVENT_PARAM_SOURCE_APPLICATION: string = 'fb_mobile_launch_source';
        public static EVENT_PARAM_PACKAGE_FP: string = 'fb_mobile_pckg_fp';
        public static EVENT_PARAM_APP_CERT_HASH: string = 'fb_mobile_app_cert_hash';
        public static EVENT_PARAM_VALUE_YES: string = '1';
        public static EVENT_PARAM_VALUE_NO: string = '0';
        public static EVENT_PARAM_AD_TYPE: string = 'ad_type';
        public static EVENT_PARAM_ORDER_ID: string = 'fb_order_id';
        public static EVENT_PARAM_VALUE_TO_SUM: string = '_valueToSum';
        public static EVENT_PARAM_PRODUCT_CUSTOM_LABEL_0: string = 'fb_product_custom_label_0';
        public static EVENT_PARAM_PRODUCT_CUSTOM_LABEL_1: string = 'fb_product_custom_label_1';
        public static EVENT_PARAM_PRODUCT_CUSTOM_LABEL_2: string = 'fb_product_custom_label_2';
        public static EVENT_PARAM_PRODUCT_CUSTOM_LABEL_3: string = 'fb_product_custom_label_3';
        public static EVENT_PARAM_PRODUCT_CUSTOM_LABEL_4: string = 'fb_product_custom_label_4';
        public static EVENT_PARAM_PRODUCT_CATEGORY: string = 'fb_product_category';
        public static EVENT_PARAM_PRODUCT_APPLINK_IOS_URL: string = 'fb_product_applink_ios_url';
        public static EVENT_PARAM_PRODUCT_APPLINK_IOS_APP_STORE_ID: string = 'fb_product_applink_ios_app_store_id';
        public static EVENT_PARAM_PRODUCT_APPLINK_IOS_APP_NAME: string = 'fb_product_applink_ios_app_name';
        public static EVENT_PARAM_PRODUCT_APPLINK_IPHONE_URL: string = 'fb_product_applink_iphone_url';
        public static EVENT_PARAM_PRODUCT_APPLINK_IPHONE_APP_STORE_ID: string = 'fb_product_applink_iphone_app_store_id';
        public static EVENT_PARAM_PRODUCT_APPLINK_IPHONE_APP_NAME: string = 'fb_product_applink_iphone_app_name';
        public static EVENT_PARAM_PRODUCT_APPLINK_IPAD_URL: string = 'fb_product_applink_ipad_url';
        public static EVENT_PARAM_PRODUCT_APPLINK_IPAD_APP_STORE_ID: string = 'fb_product_applink_ipad_app_store_id';
        public static EVENT_PARAM_PRODUCT_APPLINK_IPAD_APP_NAME: string = 'fb_product_applink_ipad_app_name';
        public static EVENT_PARAM_PRODUCT_APPLINK_ANDROID_URL: string = 'fb_product_applink_android_url';
        public static EVENT_PARAM_PRODUCT_APPLINK_ANDROID_PACKAGE: string = 'fb_product_applink_android_package';
        public static EVENT_PARAM_PRODUCT_APPLINK_ANDROID_APP_NAME: string = 'fb_product_applink_android_app_name';
        public static EVENT_PARAM_PRODUCT_APPLINK_WINDOWS_PHONE_URL: string = 'fb_product_applink_windows_phone_url';
        public static EVENT_PARAM_PRODUCT_APPLINK_WINDOWS_PHONE_APP_ID: string = 'fb_product_applink_windows_phone_app_id';
        public static EVENT_PARAM_PRODUCT_APPLINK_WINDOWS_PHONE_APP_NAME: string = 'fb_product_applink_windows_phone_app_name';
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class AppEventsLogger {
        public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger>;
        public static ACTION_APP_EVENTS_FLUSHED: string = 'com.facebook.sdk.APP_EVENTS_FLUSHED';
        public static APP_EVENTS_EXTRA_NUM_EVENTS_FLUSHED: string = 'com.facebook.sdk.APP_EVENTS_NUM_EVENTS_FLUSHED';
        public static APP_EVENTS_EXTRA_FLUSH_RESULT: string = 'com.facebook.sdk.APP_EVENTS_FLUSH_RESULT';
        public static setUserData(email: string, firstName: string, lastName: string, phone: string, dateOfBirth: string, gender: string, city: string, state: string, zip: string, country: string): void;
        public logPushNotificationOpen(payload: globalAndroid.os.Bundle, action: string): void;
        public isValidForAccessToken(accessToken: com.facebook.AccessToken): boolean;
        public flush(): void;
        public static activateApp(application: globalAndroid.app.Application): void;
        public logPurchase(purchaseAmount: java.math.BigDecimal, currency: java.util.Currency, parameters: globalAndroid.os.Bundle): void;
        public static newLogger(context: globalAndroid.content.Context): com.facebook.appevents.AppEventsLogger;
        public static getFlushBehavior(): com.facebook.appevents.AppEventsLogger.FlushBehavior;
        public static setFlushBehavior(flushBehavior: com.facebook.appevents.AppEventsLogger.FlushBehavior): void;
        public logEvent(eventName: string, parameters: globalAndroid.os.Bundle): void;
        public getApplicationId(): string;
        public logPushNotificationOpen(payload: globalAndroid.os.Bundle): void;
        public logEvent(eventName: string): void;
        public static augmentWebView(webView: globalAndroid.webkit.WebView, context: globalAndroid.content.Context): void;
        public static newLogger(context: globalAndroid.content.Context, applicationId: string): com.facebook.appevents.AppEventsLogger;
        public static getUserID(): string;
        public static clearUserData(): void;
        public static activateApp(application: globalAndroid.app.Application, applicationId: string): void;
        public logPurchase(purchaseAmount: java.math.BigDecimal, currency: java.util.Currency): void;
        public static newLogger(context: globalAndroid.content.Context, accessToken: com.facebook.AccessToken): com.facebook.appevents.AppEventsLogger;
        public static setPushNotificationsRegistrationId(registrationId: string): void;
        public static setUserID(userID: string): void;
        public static getAnonymousAppDeviceGUID(context: globalAndroid.content.Context): string;
        public logEvent(eventName: string, valueToSum: number, parameters: globalAndroid.os.Bundle): void;
        public static newLogger(context: globalAndroid.content.Context, applicationId: string, accessToken: com.facebook.AccessToken): com.facebook.appevents.AppEventsLogger;
        public static initializeLib(context: globalAndroid.content.Context, applicationId: string): void;
        public logProductItem(itemID: string, availability: com.facebook.appevents.AppEventsLogger.ProductAvailability, condition: com.facebook.appevents.AppEventsLogger.ProductCondition, description: string, imageLink: string, link: string, title: string, priceAmount: java.math.BigDecimal, currency: java.util.Currency, gtin: string, mpn: string, brand: string, parameters: globalAndroid.os.Bundle): void;
        public static setInstallReferrer(referrer: string): void;
        public logEvent(eventName: string, valueToSum: number): void;
        public static getUserData(): string;
        public static clearUserID(): void;
        public static onContextStop(): void;
      }
      export module AppEventsLogger {
        export class Companion {
          public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger.Companion>;
          public setUserID(userID: string): void;
          public getUserID(): string;
          public getUserData(): string;
          public getAnonymousAppDeviceGUID(context: globalAndroid.content.Context): string;
          public newLogger(context: globalAndroid.content.Context, applicationId: string, accessToken: com.facebook.AccessToken): com.facebook.appevents.AppEventsLogger;
          public augmentWebView(webView: globalAndroid.webkit.WebView, context: globalAndroid.content.Context): void;
          public activateApp(application: globalAndroid.app.Application, applicationId: string): void;
          public newLogger(context: globalAndroid.content.Context, applicationId: string): com.facebook.appevents.AppEventsLogger;
          public setPushNotificationsRegistrationId(registrationId: string): void;
          public activateApp(application: globalAndroid.app.Application): void;
          public newLogger(context: globalAndroid.content.Context, accessToken: com.facebook.AccessToken): com.facebook.appevents.AppEventsLogger;
          public setFlushBehavior(flushBehavior: com.facebook.appevents.AppEventsLogger.FlushBehavior): void;
          public setUserData(email: string, firstName: string, lastName: string, phone: string, dateOfBirth: string, gender: string, city: string, state: string, zip: string, country: string): void;
          public clearUserData(): void;
          public onContextStop(): void;
          public newLogger(context: globalAndroid.content.Context): com.facebook.appevents.AppEventsLogger;
          public clearUserID(): void;
          public initializeLib(context: globalAndroid.content.Context, applicationId: string): void;
          public getFlushBehavior(): com.facebook.appevents.AppEventsLogger.FlushBehavior;
          public setInstallReferrer(referrer: string): void;
        }
        export class FlushBehavior {
          public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger.FlushBehavior>;
          public static AUTO: com.facebook.appevents.AppEventsLogger.FlushBehavior;
          public static EXPLICIT_ONLY: com.facebook.appevents.AppEventsLogger.FlushBehavior;
          public static valueOf(value: string): com.facebook.appevents.AppEventsLogger.FlushBehavior;
          public static values(): androidNative.Array<com.facebook.appevents.AppEventsLogger.FlushBehavior>;
        }
        export class ProductAvailability {
          public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger.ProductAvailability>;
          public static IN_STOCK: com.facebook.appevents.AppEventsLogger.ProductAvailability;
          public static OUT_OF_STOCK: com.facebook.appevents.AppEventsLogger.ProductAvailability;
          public static PREORDER: com.facebook.appevents.AppEventsLogger.ProductAvailability;
          public static AVALIABLE_FOR_ORDER: com.facebook.appevents.AppEventsLogger.ProductAvailability;
          public static DISCONTINUED: com.facebook.appevents.AppEventsLogger.ProductAvailability;
          public static valueOf(value: string): com.facebook.appevents.AppEventsLogger.ProductAvailability;
          public static values(): androidNative.Array<com.facebook.appevents.AppEventsLogger.ProductAvailability>;
        }
        export class ProductCondition {
          public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger.ProductCondition>;
          public static NEW: com.facebook.appevents.AppEventsLogger.ProductCondition;
          public static REFURBISHED: com.facebook.appevents.AppEventsLogger.ProductCondition;
          public static USED: com.facebook.appevents.AppEventsLogger.ProductCondition;
          public static valueOf(value: string): com.facebook.appevents.AppEventsLogger.ProductCondition;
          public static values(): androidNative.Array<com.facebook.appevents.AppEventsLogger.ProductCondition>;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class AppEventsLoggerImpl {
        public static class: java.lang.Class<com.facebook.appevents.AppEventsLoggerImpl>;
        public static APP_EVENTS_KILLSWITCH: string = 'app_events_killswitch';
        public static getInstallReferrer(): string;
        public logPurchaseImplicitly(purchaseAmount: java.math.BigDecimal, currency: java.util.Currency, parameters: globalAndroid.os.Bundle, operationalData: com.facebook.appevents.OperationalData): void;
        public constructor(context: globalAndroid.content.Context, applicationId: string, accessToken: com.facebook.AccessToken);
        public constructor(accessToken: string, this_: string, activityName: com.facebook.AccessToken);
        public flush(): void;
        public logPurchase(purchaseAmount: java.math.BigDecimal, currency: java.util.Currency, parameters: globalAndroid.os.Bundle): void;
        public static getFlushBehavior(): com.facebook.appevents.AppEventsLogger.FlushBehavior;
        public logPurchase(this_: java.math.BigDecimal, purchaseAmount: java.util.Currency, currency: globalAndroid.os.Bundle, parameters: boolean, isImplicitlyLogged: com.facebook.appevents.OperationalData): void;
        public static setFlushBehavior(flushBehavior: com.facebook.appevents.AppEventsLogger.FlushBehavior): void;
        public logEvent(eventName: string, parameters: globalAndroid.os.Bundle): void;
        public getApplicationId(): string;
        public logEvent(eventName: string): void;
        public static augmentWebView(webView: globalAndroid.webkit.WebView, context: globalAndroid.content.Context): void;
        public static activateApp(application: globalAndroid.app.Application, applicationId: string): void;
        public logEvent(dedupeParameters: string, newParameters: java.lang.Double, newOperationalData: globalAndroid.os.Bundle, purchaseAmount: boolean, currency: java.util.UUID, event: com.facebook.appevents.OperationalData): void;
        public static addImplicitPurchaseParameters(params: globalAndroid.os.Bundle, operationalData: com.facebook.appevents.OperationalData): any;
        public logPurchase(purchaseAmount: java.math.BigDecimal, currency: java.util.Currency): void;
        public logEventImplicitly(this_: string, eventName: java.math.BigDecimal, purchaseAmount: java.util.Currency, currency: globalAndroid.os.Bundle, parameters: com.facebook.appevents.OperationalData): void;
        public static getPushNotificationsRegistrationId(): string;
        public logSdkEvent(eventName: string, valueToSum: java.lang.Double, parameters: globalAndroid.os.Bundle): void;
        public static setPushNotificationsRegistrationId(registrationId: string): void;
        public static getAnonymousAppDeviceGUID(context: globalAndroid.content.Context): string;
        public isValidForAccessToken(this_: com.facebook.AccessToken): boolean;
        public logEvent(eventName: string, valueToSum: number, parameters: globalAndroid.os.Bundle): void;
        public static initializeLib(context: globalAndroid.content.Context, applicationId: string): void;
        public static getAnalyticsExecutor(): java.util.concurrent.Executor;
        public static setInstallReferrer(referrer: string): void;
        public static functionDEPRECATED(extraMsg: string): void;
        public logEvent(eventName: string, valueToSum: number): void;
        public logEventFromSE(this_: string, eventName: string): void;
        public logEventImplicitly(eventName: string, valueToSum: java.lang.Double, parameters: globalAndroid.os.Bundle): void;
        public static onContextStop(): void;
        public logProductItem(this_: string, itemID: com.facebook.appevents.AppEventsLogger.ProductAvailability, availability: com.facebook.appevents.AppEventsLogger.ProductCondition, condition: string, description: string, imageLink: string, link: string, title: java.math.BigDecimal, priceAmount: java.util.Currency, currency: string, gtin: string, mpn: string, brand: globalAndroid.os.Bundle): void;
        public logPushNotificationOpen(facebookPayload: globalAndroid.os.Bundle, campaignId: string): void;
      }
      export module AppEventsLoggerImpl {
        export class Companion {
          public static class: java.lang.Class<com.facebook.appevents.AppEventsLoggerImpl.Companion>;
          public setFlushBehavior(this_: com.facebook.appevents.AppEventsLogger.FlushBehavior): void;
          public getPushNotificationsRegistrationId(): string;
          public setPushNotificationsRegistrationId(synchronizedAppEventsLoggerImpl$Companion$setPushNotificationsRegistrationId$1: string): void;
          public functionDEPRECATED(extraMsg: string): void;
          public addImplicitPurchaseParameters(modifiedOperationalData: globalAndroid.os.Bundle, modifiedParamsAndData: com.facebook.appevents.OperationalData): any;
          public eagerFlush(): void;
          public initializeLib(this_: globalAndroid.content.Context, context: string): void;
          public onContextStop(): void;
          public getAnalyticsExecutor(): java.util.concurrent.Executor;
          public getInstallReferrer(): string;
          public setInstallReferrer(preferences: string): void;
          public getFlushBehavior(): com.facebook.appevents.AppEventsLogger.FlushBehavior;
          public augmentWebView(thisCollection$iv: globalAndroid.webkit.WebView, $this$toTypedArray$iv: globalAndroid.content.Context): void;
          public activateApp(this_: globalAndroid.app.Application, application: string): void;
          public getAnonymousAppDeviceGUID(synchronizedAppEventsLoggerImpl$Companion$getAnonymousAppDeviceGUID$1: globalAndroid.content.Context): string;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class AppEventsManager {
        public static class: java.lang.Class<com.facebook.appevents.AppEventsManager>;
        public static INSTANCE: com.facebook.appevents.AppEventsManager;
        public static start(): void;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class FacebookSDKJSInterface {
        public static class: java.lang.Class<com.facebook.appevents.FacebookSDKJSInterface>;
        public constructor(context: globalAndroid.content.Context);
        public sendEvent(parameters: string, this_: string, pixelId: string): void;
        public getProtocol(): string;
      }
      export module FacebookSDKJSInterface {
        export class Companion {
          public static class: java.lang.Class<com.facebook.appevents.FacebookSDKJSInterface.Companion>;
          public getTAG(): string;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class FlushReason {
        public static class: java.lang.Class<com.facebook.appevents.FlushReason>;
        public static EXPLICIT: com.facebook.appevents.FlushReason;
        public static TIMER: com.facebook.appevents.FlushReason;
        public static SESSION_CHANGE: com.facebook.appevents.FlushReason;
        public static PERSISTED_EVENTS: com.facebook.appevents.FlushReason;
        public static EVENT_THRESHOLD: com.facebook.appevents.FlushReason;
        public static EAGER_FLUSHING_EVENT: com.facebook.appevents.FlushReason;
        public static values(): androidNative.Array<com.facebook.appevents.FlushReason>;
        public static valueOf(value: string): com.facebook.appevents.FlushReason;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class FlushResult {
        public static class: java.lang.Class<com.facebook.appevents.FlushResult>;
        public static SUCCESS: com.facebook.appevents.FlushResult;
        public static SERVER_ERROR: com.facebook.appevents.FlushResult;
        public static NO_CONNECTIVITY: com.facebook.appevents.FlushResult;
        public static UNKNOWN_ERROR: com.facebook.appevents.FlushResult;
        public static values(): androidNative.Array<com.facebook.appevents.FlushResult>;
        public static valueOf(value: string): com.facebook.appevents.FlushResult;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class FlushStatistics {
        public static class: java.lang.Class<com.facebook.appevents.FlushStatistics>;
        public getResult(): com.facebook.appevents.FlushResult;
        public setResult(set: com.facebook.appevents.FlushResult): void;
        public getNumEvents(): number;
        public constructor();
        public setNumEvents(set: number): void;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class InternalAppEventsLogger {
        public static class: java.lang.Class<com.facebook.appevents.InternalAppEventsLogger>;
        public logChangedSettingsEvent(eventName: globalAndroid.os.Bundle): void;
        public static getPushNotificationsRegistrationId(): string;
        public static setInternalUserData(ud: java.util.Map<string, string>): void;
        public constructor(context: globalAndroid.content.Context);
        public constructor(context: globalAndroid.content.Context, applicationId: string);
        public logPurchaseImplicitly(purchaseAmount: java.math.BigDecimal, currency: java.util.Currency, parameters: globalAndroid.os.Bundle, operationalData: com.facebook.appevents.OperationalData): void;
        public logEventFromSE(eventName: string, buttonText: string): void;
        public constructor(activityName: string, applicationId: string, accessToken: com.facebook.AccessToken);
        public logEvent(eventName: string, valueToSum: number, parameters: globalAndroid.os.Bundle): void;
        public flush(): void;
        public logEventImplicitly(eventName: string, purchaseAmount: java.math.BigDecimal, currency: java.util.Currency, parameters: globalAndroid.os.Bundle, operationalData: com.facebook.appevents.OperationalData): void;
        public static getAnalyticsExecutor(): java.util.concurrent.Executor;
        public static createInstance(context: globalAndroid.content.Context, applicationId: string): com.facebook.appevents.InternalAppEventsLogger;
        public static createInstance(context: globalAndroid.content.Context): com.facebook.appevents.InternalAppEventsLogger;
        public static setUserData(userData: globalAndroid.os.Bundle): void;
        public static createInstance(activityName: string, applicationId: string, accessToken: com.facebook.AccessToken): com.facebook.appevents.InternalAppEventsLogger;
        public static getFlushBehavior(): com.facebook.appevents.AppEventsLogger.FlushBehavior;
        public logEvent(eventName: string, parameters: globalAndroid.os.Bundle): void;
        public logEventImplicitly(eventName: string, valueToSum: java.lang.Double, parameters: globalAndroid.os.Bundle): void;
        public logEventImplicitly(eventName: string, parameters: globalAndroid.os.Bundle): void;
        public constructor(loggerImpl: com.facebook.appevents.AppEventsLoggerImpl);
        public logEventImplicitly(eventName: string): void;
      }
      export module InternalAppEventsLogger {
        export class Companion {
          public static class: java.lang.Class<com.facebook.appevents.InternalAppEventsLogger.Companion>;
          public setInternalUserData(ud: java.util.Map<string, string>): void;
          public getPushNotificationsRegistrationId(): string;
          public getAnalyticsExecutor(): java.util.concurrent.Executor;
          public setUserData(userData: globalAndroid.os.Bundle): void;
          public createInstance(context: globalAndroid.content.Context): com.facebook.appevents.InternalAppEventsLogger;
          public createInstance(activityName: string, applicationId: string, accessToken: com.facebook.AccessToken): com.facebook.appevents.InternalAppEventsLogger;
          public createInstance(context: globalAndroid.content.Context, applicationId: string): com.facebook.appevents.InternalAppEventsLogger;
          public getFlushBehavior(): com.facebook.appevents.AppEventsLogger.FlushBehavior;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class OperationalData {
        public static class: java.lang.Class<com.facebook.appevents.OperationalData>;
        public copy(): com.facebook.appevents.OperationalData;
        public addParameter(type: com.facebook.appevents.OperationalDataEnum, key: string, value: any): void;
        public getParameter(type: com.facebook.appevents.OperationalDataEnum, key: string): any;
        public constructor();
        public toJSON(): org.json.JSONObject;
      }
      export module OperationalData {
        export class Companion {
          public static class: java.lang.Class<com.facebook.appevents.OperationalData.Companion>;
          public addParameterAndReturn(modifiedParams: com.facebook.appevents.OperationalDataEnum, modifiedOperationalData: string, this_: string, typeOfParameter: globalAndroid.os.Bundle, key: com.facebook.appevents.OperationalData): any;
          public addParameter(this_: com.facebook.appevents.OperationalDataEnum, typeOfParameter: string, key: string, value: globalAndroid.os.Bundle, customEventsParams: com.facebook.appevents.OperationalData): void;
          public getParameter(eventValue: com.facebook.appevents.OperationalDataEnum, this_: string, typeOfParameter: globalAndroid.os.Bundle, key: com.facebook.appevents.OperationalData): any;
          public getParameterClassification(operationalAndCustomParametersForType: com.facebook.appevents.OperationalDataEnum, this_: string): com.facebook.appevents.ParameterClassification;
        }
        export module Companion {
          export class WhenMappings {
            public static class: java.lang.Class<com.facebook.appevents.OperationalData.Companion.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class OperationalDataEnum {
        public static class: java.lang.Class<com.facebook.appevents.OperationalDataEnum>;
        public static IAPParameters: com.facebook.appevents.OperationalDataEnum;
        public static values(): androidNative.Array<com.facebook.appevents.OperationalDataEnum>;
        public getValue(): string;
        public static valueOf(value: string): com.facebook.appevents.OperationalDataEnum;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class ParameterClassification {
        public static class: java.lang.Class<com.facebook.appevents.ParameterClassification>;
        public static CustomData: com.facebook.appevents.ParameterClassification;
        public static OperationalData: com.facebook.appevents.ParameterClassification;
        public static CustomAndOperationalData: com.facebook.appevents.ParameterClassification;
        public getValue(): string;
        public static valueOf(value: string): com.facebook.appevents.ParameterClassification;
        public static values(): androidNative.Array<com.facebook.appevents.ParameterClassification>;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class PersistedEvents {
        public static class: java.lang.Class<com.facebook.appevents.PersistedEvents>;
        public get(accessTokenAppIdPair: com.facebook.appevents.AccessTokenAppIdPair): java.util.List<com.facebook.appevents.AppEvent>;
        public containsKey(accessTokenAppIdPair: com.facebook.appevents.AccessTokenAppIdPair): boolean;
        public keySet(): java.util.Set<com.facebook.appevents.AccessTokenAppIdPair>;
        public entrySet(): java.util.Set<java.util.Map.Entry<com.facebook.appevents.AccessTokenAppIdPair, java.util.List<com.facebook.appevents.AppEvent>>>;
        public addEvents(accessTokenAppIdPair: com.facebook.appevents.AccessTokenAppIdPair, appEvents: java.util.List<com.facebook.appevents.AppEvent>): void;
        public constructor();
        public constructor(appEventMap: java.util.HashMap<com.facebook.appevents.AccessTokenAppIdPair, java.util.List<com.facebook.appevents.AppEvent>>);
      }
      export module PersistedEvents {
        export class Companion {
          public static class: java.lang.Class<com.facebook.appevents.PersistedEvents.Companion>;
        }
        export class SerializationProxyV1 {
          public static class: java.lang.Class<com.facebook.appevents.PersistedEvents.SerializationProxyV1>;
          public constructor(proxyEvents: java.util.HashMap<com.facebook.appevents.AccessTokenAppIdPair, java.util.List<com.facebook.appevents.AppEvent>>);
        }
        export module SerializationProxyV1 {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.PersistedEvents.SerializationProxyV1.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class SessionEventsState {
        public static class: java.lang.Class<com.facebook.appevents.SessionEventsState>;
        public clearInFlightAndStats(moveToAccumulated: boolean): void;
        public accumulatePersistedEvents(events: java.util.List<com.facebook.appevents.AppEvent>): void;
        public constructor(attributionIdentifiers: com.facebook.internal.AttributionIdentifiers, anonymousAppDeviceGUID: string);
        public getAccumulatedEventCount(): number;
        public populateRequest(synchronizedSessionEventsState$populateRequest$1: com.facebook.GraphRequest, synchronizedSessionEventsState$populateRequest$1: globalAndroid.content.Context, numSkipped: boolean, jsonArray: boolean): number;
        public addEvent(event: com.facebook.appevents.AppEvent): void;
        public getEventsToPersist(): java.util.List<com.facebook.appevents.AppEvent>;
      }
      export module SessionEventsState {
        export class Companion {
          public static class: java.lang.Class<com.facebook.appevents.SessionEventsState.Companion>;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export class UserDataStore {
        public static class: java.lang.Class<com.facebook.appevents.UserDataStore>;
        public static INSTANCE: com.facebook.appevents.UserDataStore;
        public static EMAIL: string = 'em';
        public static FIRST_NAME: string = 'fn';
        public static LAST_NAME: string = 'ln';
        public static PHONE: string = 'ph';
        public static DATE_OF_BIRTH: string = 'db';
        public static GENDER: string = 'ge';
        public static CITY: string = 'ct';
        public static STATE: string = 'st';
        public static ZIP: string = 'zp';
        public static COUNTRY: string = 'country';
        public static getHashedUserData$facebook_core_release(): string;
        public static setInternalUd(trimUserDataStore$setInternalUd$value$1: java.util.Map<string, string>): void;
        public static clear(): void;
        public static setUserDataAndHash(ud: string, email: string, firstName: string, lastName: string, phone: string, dateOfBirth: string, gender: string, city: string, state: string, zip: string): void;
        public static initStore(): void;
        public static setUserDataAndHash(ud: globalAndroid.os.Bundle): void;
        public static getAllHashedUserData(): string;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module aam {
        export class MetadataIndexer {
          public static class: java.lang.Class<com.facebook.appevents.aam.MetadataIndexer>;
          public static INSTANCE: com.facebook.appevents.aam.MetadataIndexer;
          public static onActivityResumed(activity: globalAndroid.app.Activity): void;
          public static enable(): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module aam {
        export class MetadataMatcher {
          public static class: java.lang.Class<com.facebook.appevents.aam.MetadataMatcher>;
          public static INSTANCE: com.facebook.appevents.aam.MetadataMatcher;
          public static matchIndicator(indicator: java.util.List<string>, indicators: java.util.List<string>): boolean;
          public static getAroundViewIndicators(child: globalAndroid.view.View): java.util.List<string>;
          public static matchValue(text: string, rule: string): boolean;
          public static getCurrentViewIndicators($i$f$toTypedArray: globalAndroid.view.View): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module aam {
        export class MetadataRule {
          public static class: java.lang.Class<com.facebook.appevents.aam.MetadataRule>;
          public static getEnabledRuleNames(): java.util.Set<string>;
          public static updateRules(rulesFromServer: string): void;
          public getName(): string;
          public getValRule(): string;
          public getKeyRules(): java.util.List<string>;
          public static getRules(): java.util.Set<com.facebook.appevents.aam.MetadataRule>;
        }
        export module MetadataRule {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.aam.MetadataRule.Companion>;
            public getEnabledRuleNames(): java.util.Set<string>;
            public getRules(): java.util.Set<com.facebook.appevents.aam.MetadataRule>;
            public updateRules(this_: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module aam {
        export class MetadataViewObserver {
          public static class: java.lang.Class<com.facebook.appevents.aam.MetadataViewObserver>;
          public static stopTrackingActivity(activity: globalAndroid.app.Activity): void;
          public onGlobalFocusChanged(oldView: globalAndroid.view.View, newView: globalAndroid.view.View): void;
          public static startTrackingActivity(activity: globalAndroid.app.Activity): void;
        }
        export module MetadataViewObserver {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.aam.MetadataViewObserver.Companion>;
            public startTrackingActivity(answer$iv: globalAndroid.app.Activity): void;
            public stopTrackingActivity(this_: globalAndroid.app.Activity): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module cloudbridge {
        export class AppEventType {
          public static class: java.lang.Class<com.facebook.appevents.cloudbridge.AppEventType>;
          public static MOBILE_APP_INSTALL: com.facebook.appevents.cloudbridge.AppEventType;
          public static CUSTOM: com.facebook.appevents.cloudbridge.AppEventType;
          public static OTHER: com.facebook.appevents.cloudbridge.AppEventType;
          public static valueOf(value: string): com.facebook.appevents.cloudbridge.AppEventType;
          public static values(): androidNative.Array<com.facebook.appevents.cloudbridge.AppEventType>;
        }
        export module AppEventType {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.cloudbridge.AppEventType.Companion>;
            public invoke($this$invoke_u24lambda_u240: string): com.facebook.appevents.cloudbridge.AppEventType;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module cloudbridge {
        export class AppEventUserAndAppDataField {
          public static class: java.lang.Class<com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField>;
          public static ANON_ID: com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          public static APP_USER_ID: com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          public static ADVERTISER_ID: com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          public static PAGE_ID: com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          public static PAGE_SCOPED_USER_ID: com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          public static USER_DATA: com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          public static ADV_TE: com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          public static APP_TE: com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          public static CONSIDER_VIEWS: com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          public static DEVICE_TOKEN: com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          public static EXT_INFO: com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          public static INCLUDE_DWELL_DATA: com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          public static INCLUDE_VIDEO_DATA: com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          public static INSTALL_REFERRER: com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          public static INSTALLER_PACKAGE: com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          public static RECEIPT_DATA: com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          public static URL_SCHEMES: com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          public static valueOf(value: string): com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          public static values(): androidNative.Array<com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField>;
          public getRawValue(): string;
        }
        export module AppEventUserAndAppDataField {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField.Companion>;
            public invoke(it: string): com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module cloudbridge {
        export class AppEventsCAPIManager {
          public static class: java.lang.Class<com.facebook.appevents.cloudbridge.AppEventsCAPIManager>;
          public static INSTANCE: com.facebook.appevents.cloudbridge.AppEventsCAPIManager;
          public isEnabled$facebook_core_release(): boolean;
          public setEnabled$facebook_core_release(set: boolean): void;
          public static getSavedCloudBridgeCredentials$facebook_core_release(): java.util.Map<string, any>;
          public setSavedCloudBridgeCredentials$facebook_core_release(context: java.util.Map<string, any>): void;
          public getCAPIGSettingsFromGraphResponse$facebook_core_release(cbCredentials: com.facebook.GraphResponse): void;
          public static enable(): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module cloudbridge {
        export class AppEventsConversionsAPITransformer {
          public static class: java.lang.Class<com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer>;
          public static INSTANCE: com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer;
          public static TAG: string = 'AppEventsConversionsAPITransformer';
          public static customEventTransformations: java.util.Map<com.facebook.appevents.cloudbridge.CustomEventField, com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.SectionCustomEventFieldMapping>;
          public static standardEventTransformations: java.util.Map<string, com.facebook.appevents.cloudbridge.ConversionsAPIEventName>;
          public static transformValue$facebook_core_release(e: string, e: any): any;
          public static transformEvents$facebook_core_release(foreachAppEventsConversionsAPITransformer$transformEvents$1: string): java.util.ArrayList<java.util.Map<string, any>>;
          public transformAndUpdateAppAndUserData$facebook_core_release(this_: java.util.Map<string, any>, userData: java.util.Map<string, any>, appData: com.facebook.appevents.cloudbridge.AppEventUserAndAppDataField, field: any): void;
          public conversionsAPICompatibleEvent$facebook_core_release(appData: java.util.Map<string, any>): java.util.List<java.util.Map<string, any>>;
          public combineCommonFields$facebook_core_release(this_: java.util.Map<string, any>, userData: java.util.Map<string, any>, appData: java.util.Map<string, any>): java.util.Map<string, any>;
          public combineAllTransformedData$facebook_core_release(this_: com.facebook.appevents.cloudbridge.AppEventType, eventType: java.util.Map<string, any>, userData: java.util.Map<string, any>, appData: java.util.Map<string, any>, restOfData: java.util.List<any>, customEvents: any): java.util.List<java.util.Map<string, any>>;
        }
        export module AppEventsConversionsAPITransformer {
          export class DataProcessingParameterName {
            public static class: java.lang.Class<com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.DataProcessingParameterName>;
            public static OPTIONS: com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.DataProcessingParameterName;
            public static COUNTRY: com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.DataProcessingParameterName;
            public static STATE: com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.DataProcessingParameterName;
            public static values(): androidNative.Array<com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.DataProcessingParameterName>;
            public getRawValue(): string;
            public static valueOf(value: string): com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.DataProcessingParameterName;
          }
          export module DataProcessingParameterName {
            export class Companion {
              public static class: java.lang.Class<com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.DataProcessingParameterName.Companion>;
              public invoke(it: string): com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.DataProcessingParameterName;
            }
          }
          export class SectionCustomEventFieldMapping {
            public static class: java.lang.Class<com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.SectionCustomEventFieldMapping>;
            public constructor(section: com.facebook.appevents.cloudbridge.ConversionsAPISection, field: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField);
            public component1(): com.facebook.appevents.cloudbridge.ConversionsAPISection;
            public setField(set: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField): void;
            public equals(other: any): boolean;
            public setSection(set: com.facebook.appevents.cloudbridge.ConversionsAPISection): void;
            public getSection(): com.facebook.appevents.cloudbridge.ConversionsAPISection;
            public hashCode(): number;
            public copy(section: com.facebook.appevents.cloudbridge.ConversionsAPISection, field: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField): com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.SectionCustomEventFieldMapping;
            public getField(): com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
            public toString(): string;
            public component2(): com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          }
          export class SectionFieldMapping {
            public static class: java.lang.Class<com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.SectionFieldMapping>;
            public component1(): com.facebook.appevents.cloudbridge.ConversionsAPISection;
            public equals(other: any): boolean;
            public setField(set: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField): void;
            public constructor(section: com.facebook.appevents.cloudbridge.ConversionsAPISection, field: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField);
            public setSection(set: com.facebook.appevents.cloudbridge.ConversionsAPISection): void;
            public getSection(): com.facebook.appevents.cloudbridge.ConversionsAPISection;
            public hashCode(): number;
            public copy(section: com.facebook.appevents.cloudbridge.ConversionsAPISection, field: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField): com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.SectionFieldMapping;
            public component2(): com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
            public getField(): com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
            public toString(): string;
          }
          export class ValueTransformationType {
            public static class: java.lang.Class<com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.ValueTransformationType>;
            public static ARRAY: com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.ValueTransformationType;
            public static BOOL: com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.ValueTransformationType;
            public static INT: com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.ValueTransformationType;
            public static values(): androidNative.Array<com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.ValueTransformationType>;
            public static valueOf(value: string): com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.ValueTransformationType;
          }
          export module ValueTransformationType {
            export class Companion {
              public static class: java.lang.Class<com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.ValueTransformationType.Companion>;
              public invoke($this$invoke_u24lambda_u240: string): com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.ValueTransformationType;
            }
          }
          export class WhenMappings {
            public static class: java.lang.Class<com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformer.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module cloudbridge {
        export class AppEventsConversionsAPITransformerWebRequests {
          public static class: java.lang.Class<com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformerWebRequests>;
          public static INSTANCE: com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformerWebRequests;
          public static MAX_CACHED_TRANSFORMED_EVENTS: number = 1000;
          public static credentials: com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformerWebRequests.CloudBridgeCredentials;
          public static transformedEvents: java.util.List<java.util.Map<string, any>>;
          public static MAX_RETRY_COUNT: number = 5;
          public static getCredentials(): string;
          public getCurrentRetryCount$facebook_core_release(): number;
          public getCredentials$facebook_core_release(): com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformerWebRequests.CloudBridgeCredentials;
          public setTransformedEvents$facebook_core_release(set: java.util.List<java.util.Map<string, any>>): void;
          public appendEvents$facebook_core_release(this_: java.util.List<any>): void;
          public static configure(datasetID: string, url: string, accessKey: string): void;
          public getTransformedEvents$facebook_core_release(): java.util.List<java.util.Map<string, any>>;
          public setCurrentRetryCount$facebook_core_release(set: number): void;
          public makeHttpRequest$facebook_core_release(key: string, element$iv: string, $i$f$forEach: string, $this$forEach$iv: java.util.Map<string, string>, alsoAppEventsConversionsAPITransformerWebRequests$makeHttpRequest$2$1: number, it: any): void;
          public setCredentials$facebook_core_release(set: com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformerWebRequests.CloudBridgeCredentials): void;
          public static transformGraphRequestAndSendToCAPIGEndPoint(request: com.facebook.GraphRequest): void;
          public handleError$facebook_core_release(responseCode: java.lang.Integer, processedEvents: java.util.List<any>, maxRetryCount: number): void;
        }
        export module AppEventsConversionsAPITransformerWebRequests {
          export class CloudBridgeCredentials {
            public static class: java.lang.Class<com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformerWebRequests.CloudBridgeCredentials>;
            public getDatasetID(): string;
            public component3(): string;
            public equals(other: any): boolean;
            public getCloudBridgeURL(): string;
            public component2(): string;
            public copy(datasetID: string, cloudBridgeURL: string, accessKey: string): com.facebook.appevents.cloudbridge.AppEventsConversionsAPITransformerWebRequests.CloudBridgeCredentials;
            public component1(): string;
            public hashCode(): number;
            public getAccessKey(): string;
            public constructor(datasetID: string, cloudBridgeURL: string, accessKey: string);
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module cloudbridge {
        export class ConversionsAPICustomEventField {
          public static class: java.lang.Class<com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField>;
          public static VALUE_TO_SUM: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          public static EVENT_TIME: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          public static EVENT_NAME: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          public static CONTENT_IDS: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          public static CONTENTS: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          public static CONTENT_TYPE: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          public static DESCRIPTION: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          public static LEVEL: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          public static MAX_RATING_VALUE: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          public static NUM_ITEMS: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          public static PAYMENT_INFO_AVAILABLE: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          public static REGISTRATION_METHOD: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          public static SEARCH_STRING: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          public static SUCCESS: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          public static ORDER_ID: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          public static AD_TYPE: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          public static CURRENCY: com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          public static valueOf(value: string): com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField;
          public static values(): androidNative.Array<com.facebook.appevents.cloudbridge.ConversionsAPICustomEventField>;
          public getRawValue(): string;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module cloudbridge {
        export class ConversionsAPIEventName {
          public static class: java.lang.Class<com.facebook.appevents.cloudbridge.ConversionsAPIEventName>;
          public static UNLOCKED_ACHIEVEMENT: com.facebook.appevents.cloudbridge.ConversionsAPIEventName;
          public static ACTIVATED_APP: com.facebook.appevents.cloudbridge.ConversionsAPIEventName;
          public static ADDED_PAYMENT_INFO: com.facebook.appevents.cloudbridge.ConversionsAPIEventName;
          public static ADDED_TO_CART: com.facebook.appevents.cloudbridge.ConversionsAPIEventName;
          public static ADDED_TO_WISHLIST: com.facebook.appevents.cloudbridge.ConversionsAPIEventName;
          public static COMPLETED_REGISTRATION: com.facebook.appevents.cloudbridge.ConversionsAPIEventName;
          public static VIEWED_CONTENT: com.facebook.appevents.cloudbridge.ConversionsAPIEventName;
          public static INITIATED_CHECKOUT: com.facebook.appevents.cloudbridge.ConversionsAPIEventName;
          public static ACHIEVED_LEVEL: com.facebook.appevents.cloudbridge.ConversionsAPIEventName;
          public static PURCHASED: com.facebook.appevents.cloudbridge.ConversionsAPIEventName;
          public static RATED: com.facebook.appevents.cloudbridge.ConversionsAPIEventName;
          public static SEARCHED: com.facebook.appevents.cloudbridge.ConversionsAPIEventName;
          public static SPENT_CREDITS: com.facebook.appevents.cloudbridge.ConversionsAPIEventName;
          public static COMPLETED_TUTORIAL: com.facebook.appevents.cloudbridge.ConversionsAPIEventName;
          public static values(): androidNative.Array<com.facebook.appevents.cloudbridge.ConversionsAPIEventName>;
          public static valueOf(value: string): com.facebook.appevents.cloudbridge.ConversionsAPIEventName;
          public getRawValue(): string;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module cloudbridge {
        export class ConversionsAPISection {
          public static class: java.lang.Class<com.facebook.appevents.cloudbridge.ConversionsAPISection>;
          public static USER_DATA: com.facebook.appevents.cloudbridge.ConversionsAPISection;
          public static APP_DATA: com.facebook.appevents.cloudbridge.ConversionsAPISection;
          public static CUSTOM_DATA: com.facebook.appevents.cloudbridge.ConversionsAPISection;
          public static CUSTOM_EVENTS: com.facebook.appevents.cloudbridge.ConversionsAPISection;
          public static values(): androidNative.Array<com.facebook.appevents.cloudbridge.ConversionsAPISection>;
          public static valueOf(value: string): com.facebook.appevents.cloudbridge.ConversionsAPISection;
          public getRawValue(): string;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module cloudbridge {
        export class ConversionsAPIUserAndAppDataField {
          public static class: java.lang.Class<com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField>;
          public static ANON_ID: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
          public static FB_LOGIN_ID: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
          public static MAD_ID: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
          public static PAGE_ID: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
          public static PAGE_SCOPED_USER_ID: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
          public static USER_DATA: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
          public static ADV_TE: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
          public static APP_TE: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
          public static CONSIDER_VIEWS: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
          public static DEVICE_TOKEN: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
          public static EXT_INFO: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
          public static INCLUDE_DWELL_DATA: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
          public static INCLUDE_VIDEO_DATA: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
          public static INSTALL_REFERRER: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
          public static INSTALLER_PACKAGE: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
          public static RECEIPT_DATA: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
          public static URL_SCHEMES: com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
          public static valueOf(value: string): com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField;
          public static values(): androidNative.Array<com.facebook.appevents.cloudbridge.ConversionsAPIUserAndAppDataField>;
          public getRawValue(): string;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module cloudbridge {
        export class CustomEventField {
          public static class: java.lang.Class<com.facebook.appevents.cloudbridge.CustomEventField>;
          public static EVENT_TIME: com.facebook.appevents.cloudbridge.CustomEventField;
          public static EVENT_NAME: com.facebook.appevents.cloudbridge.CustomEventField;
          public static VALUE_TO_SUM: com.facebook.appevents.cloudbridge.CustomEventField;
          public static CONTENT_IDS: com.facebook.appevents.cloudbridge.CustomEventField;
          public static CONTENTS: com.facebook.appevents.cloudbridge.CustomEventField;
          public static CONTENT_TYPE: com.facebook.appevents.cloudbridge.CustomEventField;
          public static DESCRIPTION: com.facebook.appevents.cloudbridge.CustomEventField;
          public static LEVEL: com.facebook.appevents.cloudbridge.CustomEventField;
          public static MAX_RATING_VALUE: com.facebook.appevents.cloudbridge.CustomEventField;
          public static NUM_ITEMS: com.facebook.appevents.cloudbridge.CustomEventField;
          public static PAYMENT_INFO_AVAILABLE: com.facebook.appevents.cloudbridge.CustomEventField;
          public static REGISTRATION_METHOD: com.facebook.appevents.cloudbridge.CustomEventField;
          public static SEARCH_STRING: com.facebook.appevents.cloudbridge.CustomEventField;
          public static SUCCESS: com.facebook.appevents.cloudbridge.CustomEventField;
          public static ORDER_ID: com.facebook.appevents.cloudbridge.CustomEventField;
          public static AD_TYPE: com.facebook.appevents.cloudbridge.CustomEventField;
          public static CURRENCY: com.facebook.appevents.cloudbridge.CustomEventField;
          public static values(): androidNative.Array<com.facebook.appevents.cloudbridge.CustomEventField>;
          public static valueOf(value: string): com.facebook.appevents.cloudbridge.CustomEventField;
          public getRawValue(): string;
        }
        export module CustomEventField {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.cloudbridge.CustomEventField.Companion>;
            public invoke(it: string): com.facebook.appevents.cloudbridge.CustomEventField;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module cloudbridge {
        export class OtherEventConstants {
          public static class: java.lang.Class<com.facebook.appevents.cloudbridge.OtherEventConstants>;
          public static EVENT: com.facebook.appevents.cloudbridge.OtherEventConstants;
          public static ACTION_SOURCE: com.facebook.appevents.cloudbridge.OtherEventConstants;
          public static APP: com.facebook.appevents.cloudbridge.OtherEventConstants;
          public static MOBILE_APP_INSTALL: com.facebook.appevents.cloudbridge.OtherEventConstants;
          public static INSTALL_EVENT_TIME: com.facebook.appevents.cloudbridge.OtherEventConstants;
          public static valueOf(value: string): com.facebook.appevents.cloudbridge.OtherEventConstants;
          public static values(): androidNative.Array<com.facebook.appevents.cloudbridge.OtherEventConstants>;
          public getRawValue(): string;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module cloudbridge {
        export class SettingsAPIFields {
          public static class: java.lang.Class<com.facebook.appevents.cloudbridge.SettingsAPIFields>;
          public static URL: com.facebook.appevents.cloudbridge.SettingsAPIFields;
          public static ENABLED: com.facebook.appevents.cloudbridge.SettingsAPIFields;
          public static DATASETID: com.facebook.appevents.cloudbridge.SettingsAPIFields;
          public static ACCESSKEY: com.facebook.appevents.cloudbridge.SettingsAPIFields;
          public static valueOf(value: string): com.facebook.appevents.cloudbridge.SettingsAPIFields;
          public static values(): androidNative.Array<com.facebook.appevents.cloudbridge.SettingsAPIFields>;
          public getRawValue(): string;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module codeless {
        export class CodelessLoggingEventListener {
          public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessLoggingEventListener>;
          public static INSTANCE: com.facebook.appevents.codeless.CodelessLoggingEventListener;
          public static getOnClickListener(mapping: com.facebook.appevents.codeless.internal.EventBinding, rootView: globalAndroid.view.View, hostView: globalAndroid.view.View): com.facebook.appevents.codeless.CodelessLoggingEventListener.AutoLoggingOnClickListener;
          public static logEvent$facebook_core_release(eventName: com.facebook.appevents.codeless.internal.EventBinding, parameters: globalAndroid.view.View, mapping: globalAndroid.view.View): void;
          public static getOnItemClickListener(mapping: com.facebook.appevents.codeless.internal.EventBinding, rootView: globalAndroid.view.View, hostView: globalAndroid.widget.AdapterView<any>): com.facebook.appevents.codeless.CodelessLoggingEventListener.AutoLoggingOnItemClickListener;
          public updateParameters$facebook_core_release(this_: globalAndroid.os.Bundle): void;
        }
        export module CodelessLoggingEventListener {
          export class AutoLoggingOnClickListener {
            public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessLoggingEventListener.AutoLoggingOnClickListener>;
            public getSupportCodelessLogging(): boolean;
            public onClick(hostViewValue: globalAndroid.view.View): void;
            public constructor(mapping: com.facebook.appevents.codeless.internal.EventBinding, rootView: globalAndroid.view.View, hostView: globalAndroid.view.View);
            public setSupportCodelessLogging(set: boolean): void;
          }
          export class AutoLoggingOnItemClickListener {
            public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessLoggingEventListener.AutoLoggingOnItemClickListener>;
            public getSupportCodelessLogging(): boolean;
            public onItemClick(hostViewValue: globalAndroid.widget.AdapterView<any>, this_: globalAndroid.view.View, parent: number, view: number): void;
            public constructor(mapping: com.facebook.appevents.codeless.internal.EventBinding, rootView: globalAndroid.view.View, hostView: globalAndroid.widget.AdapterView<any>);
            public setSupportCodelessLogging(set: boolean): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module codeless {
        export class CodelessManager {
          public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessManager>;
          public static INSTANCE: com.facebook.appevents.codeless.CodelessManager;
          public static onActivityResumed(sensorManager: globalAndroid.app.Activity): void;
          public static disable(): void;
          public static updateAppIndexing$facebook_core_release(appIndexingEnabled: boolean): void;
          public static onActivityDestroyed(activity: globalAndroid.app.Activity): void;
          public static getCurrentDeviceSessionID$facebook_core_release(): string;
          public static getIsAppIndexingEnabled$facebook_core_release(): boolean;
          public static enable(): void;
          public static onActivityPaused(activity: globalAndroid.app.Activity): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module codeless {
        export class CodelessMatcher {
          public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessMatcher>;
          public destroy(activity: globalAndroid.app.Activity): void;
          public static getParameters(mapping: com.facebook.appevents.codeless.internal.EventBinding, rootView: globalAndroid.view.View, hostView: globalAndroid.view.View): globalAndroid.os.Bundle;
          public add(it: globalAndroid.app.Activity): void;
          public static getInstance(): com.facebook.appevents.codeless.CodelessMatcher;
          public remove(activity: globalAndroid.app.Activity): void;
        }
        export module CodelessMatcher {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessMatcher.Companion>;
            public getParameters(view: com.facebook.appevents.codeless.internal.EventBinding, matchedViews: globalAndroid.view.View, pathType: globalAndroid.view.View): globalAndroid.os.Bundle;
            public getInstance(): com.facebook.appevents.codeless.CodelessMatcher;
          }
          export class MatchedView {
            public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessMatcher.MatchedView>;
            public constructor(view: globalAndroid.view.View, viewMapKey: string);
            public getView(): globalAndroid.view.View;
            public getViewMapKey(): string;
          }
          export class ViewMatcher {
            public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessMatcher.ViewMatcher>;
            public constructor(rootView: globalAndroid.view.View, handler: globalAndroid.os.Handler, listenerSet: java.util.HashSet<string>, activityName: string);
            public run(): void;
            public static findViewByPath(mapping: com.facebook.appevents.codeless.internal.EventBinding, view: globalAndroid.view.View, path: java.util.List<com.facebook.appevents.codeless.internal.PathComponent>, level: number, index: number, mapKey: string): java.util.List<com.facebook.appevents.codeless.CodelessMatcher.MatchedView>;
            public onScrollChanged(): void;
            public onGlobalLayout(): void;
          }
          export module ViewMatcher {
            export class Companion {
              public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessMatcher.ViewMatcher.Companion>;
              public findViewByPath(matchedViews: com.facebook.appevents.codeless.internal.EventBinding, i: globalAndroid.view.View, visibleViews: java.util.List<com.facebook.appevents.codeless.internal.PathComponent>, childCount: number, parent: number, pathElement: string): java.util.List<com.facebook.appevents.codeless.CodelessMatcher.MatchedView>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module codeless {
        export class RCTCodelessLoggingEventListener {
          public static class: java.lang.Class<com.facebook.appevents.codeless.RCTCodelessLoggingEventListener>;
          public static INSTANCE: com.facebook.appevents.codeless.RCTCodelessLoggingEventListener;
          public static getOnTouchListener(mapping: com.facebook.appevents.codeless.internal.EventBinding, rootView: globalAndroid.view.View, hostView: globalAndroid.view.View): com.facebook.appevents.codeless.RCTCodelessLoggingEventListener.AutoLoggingOnTouchListener;
        }
        export module RCTCodelessLoggingEventListener {
          export class AutoLoggingOnTouchListener {
            public static class: java.lang.Class<com.facebook.appevents.codeless.RCTCodelessLoggingEventListener.AutoLoggingOnTouchListener>;
            public getSupportCodelessLogging(): boolean;
            public onTouch(hostViewValue: globalAndroid.view.View, this_: globalAndroid.view.MotionEvent): boolean;
            public constructor(mapping: com.facebook.appevents.codeless.internal.EventBinding, rootView: globalAndroid.view.View, hostView: globalAndroid.view.View);
            public setSupportCodelessLogging(set: boolean): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module codeless {
        export class ViewIndexer {
          public static class: java.lang.Class<com.facebook.appevents.codeless.ViewIndexer>;
          public unschedule(): void;
          public static sendToServerUnityInstance(tree: string): void;
          public static buildAppIndexingRequest(appIndex: string, accessToken: com.facebook.AccessToken, appId: string, requestType: string): com.facebook.GraphRequest;
          public constructor(activity: globalAndroid.app.Activity);
          public schedule(): void;
          public processRequest(jsonRes: com.facebook.GraphRequest, e: string): void;
        }
        export module ViewIndexer {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.codeless.ViewIndexer.Companion>;
            public sendToServerUnityInstance(tree: string): void;
            public buildAppIndexingRequest(requestParameters: string, this_: com.facebook.AccessToken, appIndex: string, accessToken: string): com.facebook.GraphRequest;
          }
          export class ScreenshotTaker extends java.util.concurrent.Callable<string> {
            public static class: java.lang.Class<com.facebook.appevents.codeless.ViewIndexer.ScreenshotTaker>;
            public call(): string;
            public constructor(rootView: globalAndroid.view.View);
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module codeless {
        export class ViewIndexingTrigger {
          public static class: java.lang.Class<com.facebook.appevents.codeless.ViewIndexingTrigger>;
          public onSensorChanged(x: globalAndroid.hardware.SensorEvent): void;
          public setOnShakeListener(listener: com.facebook.appevents.codeless.ViewIndexingTrigger.OnShakeListener): void;
          public constructor();
          public onAccuracyChanged(sensor: globalAndroid.hardware.Sensor, accuracy: number): void;
        }
        export module ViewIndexingTrigger {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.codeless.ViewIndexingTrigger.Companion>;
          }
          export class OnShakeListener {
            public static class: java.lang.Class<com.facebook.appevents.codeless.ViewIndexingTrigger.OnShakeListener>;
            /**
             * Constructs a new instance of the com.facebook.appevents.codeless.ViewIndexingTrigger$OnShakeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onShake(): void });
            public constructor();
            public onShake(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module codeless {
        export module internal {
          export class Constants {
            public static class: java.lang.Class<com.facebook.appevents.codeless.internal.Constants>;
            public static INSTANCE: com.facebook.appevents.codeless.internal.Constants;
            public static MAX_TREE_DEPTH: number = 25;
            public static IS_CODELESS_EVENT_KEY: string = '_is_fb_codeless';
            public static EVENT_MAPPING_PATH_TYPE_KEY: string = 'path_type';
            public static PATH_TYPE_RELATIVE: string = 'relative';
            public static PATH_TYPE_ABSOLUTE: string = 'absolute';
            public static PLATFORM: string = 'android';
            public static APP_INDEXING_SCHEDULE_INTERVAL_MS: number = 1000;
            public static APP_INDEXING_ENABLED: string = 'is_app_indexing_enabled';
            public static DEVICE_SESSION_ID: string = 'device_session_id';
            public static EXTINFO: string = 'extinfo';
            public static APP_INDEXING: string = 'app_indexing';
            public static BUTTON_SAMPLING: string = 'button_sampling';
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module codeless {
        export module internal {
          export class EventBinding {
            public static class: java.lang.Class<com.facebook.appevents.codeless.internal.EventBinding>;
            public getAppVersion(): string;
            public getViewParameters(): java.util.List<com.facebook.appevents.codeless.internal.ParameterComponent>;
            public getActivityName(): string;
            public getEventName(): string;
            public getMethod(): com.facebook.appevents.codeless.internal.EventBinding.MappingMethod;
            public static parseArray(array: org.json.JSONArray): java.util.List<com.facebook.appevents.codeless.internal.EventBinding>;
            public getComponentId(): string;
            public getViewPath(): java.util.List<com.facebook.appevents.codeless.internal.PathComponent>;
            public static getInstanceFromJson(mapping: org.json.JSONObject): com.facebook.appevents.codeless.internal.EventBinding;
            public constructor(eventName: string, method: com.facebook.appevents.codeless.internal.EventBinding.MappingMethod, type: com.facebook.appevents.codeless.internal.EventBinding.ActionType, appVersion: string, path: java.util.List<com.facebook.appevents.codeless.internal.PathComponent>, parameters: java.util.List<com.facebook.appevents.codeless.internal.ParameterComponent>, componentId: string, pathType: string, activityName: string);
            public getPathType(): string;
            public getType(): com.facebook.appevents.codeless.internal.EventBinding.ActionType;
          }
          export module EventBinding {
            export class ActionType {
              public static class: java.lang.Class<com.facebook.appevents.codeless.internal.EventBinding.ActionType>;
              public static CLICK: com.facebook.appevents.codeless.internal.EventBinding.ActionType;
              public static SELECTED: com.facebook.appevents.codeless.internal.EventBinding.ActionType;
              public static TEXT_CHANGED: com.facebook.appevents.codeless.internal.EventBinding.ActionType;
              public static valueOf(value: string): com.facebook.appevents.codeless.internal.EventBinding.ActionType;
              public static values(): androidNative.Array<com.facebook.appevents.codeless.internal.EventBinding.ActionType>;
            }
            export class Companion {
              public static class: java.lang.Class<com.facebook.appevents.codeless.internal.EventBinding.Companion>;
              public parseArray(i: org.json.JSONArray): java.util.List<com.facebook.appevents.codeless.internal.EventBinding>;
              public getInstanceFromJson(component: org.json.JSONObject): com.facebook.appevents.codeless.internal.EventBinding;
            }
            export class MappingMethod {
              public static class: java.lang.Class<com.facebook.appevents.codeless.internal.EventBinding.MappingMethod>;
              public static MANUAL: com.facebook.appevents.codeless.internal.EventBinding.MappingMethod;
              public static INFERENCE: com.facebook.appevents.codeless.internal.EventBinding.MappingMethod;
              public static valueOf(value: string): com.facebook.appevents.codeless.internal.EventBinding.MappingMethod;
              public static values(): androidNative.Array<com.facebook.appevents.codeless.internal.EventBinding.MappingMethod>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module codeless {
        export module internal {
          export class ParameterComponent {
            public static class: java.lang.Class<com.facebook.appevents.codeless.internal.ParameterComponent>;
            public getValue(): string;
            public constructor(i: org.json.JSONObject);
            public getPath(): java.util.List<com.facebook.appevents.codeless.internal.PathComponent>;
            public getName(): string;
            public getPathType(): string;
          }
          export module ParameterComponent {
            export class Companion {
              public static class: java.lang.Class<com.facebook.appevents.codeless.internal.ParameterComponent.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module codeless {
        export module internal {
          export class PathComponent {
            public static class: java.lang.Class<com.facebook.appevents.codeless.internal.PathComponent>;
            public constructor(component: org.json.JSONObject);
            public getHint(): string;
            public getMatchBitmask(): number;
            public getTag(): string;
            public getClassName(): string;
            public getIndex(): number;
            public getDescription(): string;
            public getText(): string;
            public getId(): number;
          }
          export module PathComponent {
            export class Companion {
              public static class: java.lang.Class<com.facebook.appevents.codeless.internal.PathComponent.Companion>;
            }
            export class MatchBitmaskType {
              public static class: java.lang.Class<com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType>;
              public static ID: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
              public static TEXT: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
              public static TAG: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
              public static DESCRIPTION: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
              public static HINT: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
              public static valueOf(value: string): com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
              public static values(): androidNative.Array<com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType>;
              public getValue(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module codeless {
        export module internal {
          export class SensitiveUserDataUtils {
            public static class: java.lang.Class<com.facebook.appevents.codeless.internal.SensitiveUserDataUtils>;
            public static INSTANCE: com.facebook.appevents.codeless.internal.SensitiveUserDataUtils;
            public static isSensitiveUserData(view: globalAndroid.view.View): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module codeless {
        export module internal {
          export class UnityReflection {
            public static class: java.lang.Class<com.facebook.appevents.codeless.internal.UnityReflection>;
            public static INSTANCE: com.facebook.appevents.codeless.internal.UnityReflection;
            public static captureViewHierarchy(): void;
            public static sendEventMapping(eventMapping: string): void;
            public static sendMessage(method: string, e: string, unityObject: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module codeless {
        export module internal {
          export class ViewHierarchy {
            public static class: java.lang.Class<com.facebook.appevents.codeless.internal.ViewHierarchy>;
            public static INSTANCE: com.facebook.appevents.codeless.internal.ViewHierarchy;
            public static getExistingOnClickListener(listenerInfoField: globalAndroid.view.View): globalAndroid.view.View.OnClickListener;
            public static setOnClickListener(listenerInfoField: globalAndroid.view.View, listenerField: globalAndroid.view.View.OnClickListener): void;
            public static getClassTypeBitmask(bitmask: globalAndroid.view.View): number;
            public isRCTButton(touchTargetView: globalAndroid.view.View, className: globalAndroid.view.View): boolean;
            public static updateAppearanceOfView(textView: globalAndroid.view.View, typeface: org.json.JSONObject, byteArrayOutputStream: number): void;
            public static getDictionaryOfView(child: globalAndroid.view.View): org.json.JSONObject;
            public static getExistingOnTouchListener(listenerInfoField: globalAndroid.view.View): globalAndroid.view.View.OnTouchListener;
            public static updateBasicInfoOfView(text: globalAndroid.view.View, hint: org.json.JSONObject): void;
            public static getChildrenOfView(i: globalAndroid.view.View): java.util.List<globalAndroid.view.View>;
            public static getParentOfView(parent: globalAndroid.view.View): globalAndroid.view.ViewGroup;
            public static getHintOfView(hintObj: globalAndroid.view.View): string;
            public static getTextOfView(isOn: globalAndroid.view.View): string;
            public static findRCTRootView(viewParent: globalAndroid.view.View): globalAndroid.view.View;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module eventdeactivation {
        export class EventDeactivationManager {
          public static class: java.lang.Class<com.facebook.appevents.eventdeactivation.EventDeactivationManager>;
          public static INSTANCE: com.facebook.appevents.eventdeactivation.EventDeactivationManager;
          public static processDeprecatedParameters(key: java.util.Map<string, string>, filter: string): void;
          public static processEvents(event: java.util.List<com.facebook.appevents.AppEvent>): void;
          public static enable(): void;
        }
        export module EventDeactivationManager {
          export class DeprecatedParamFilter {
            public static class: java.lang.Class<com.facebook.appevents.eventdeactivation.EventDeactivationManager.DeprecatedParamFilter>;
            public getEventName(): string;
            public setDeprecateParams(set: java.util.List<string>): void;
            public setEventName(set: string): void;
            public constructor(eventName: string, deprecateParams: java.util.List<string>);
            public getDeprecateParams(): java.util.List<string>;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module gps {
        export class GpsCapabilityChecker {
          public static class: java.lang.Class<com.facebook.appevents.gps.GpsCapabilityChecker>;
          public static INSTANCE: com.facebook.appevents.gps.GpsCapabilityChecker;
          public static useOutcomeReceiver(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module gps {
        export class GpsDebugLogger {
          public static class: java.lang.Class<com.facebook.appevents.gps.GpsDebugLogger>;
          public log(eventName: string, parameters: globalAndroid.os.Bundle): void;
          public constructor(context: globalAndroid.content.Context);
        }
        export module GpsDebugLogger {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.gps.GpsDebugLogger.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module gps {
        export module ara {
          export class GpsAraTriggersManager {
            public static class: java.lang.Class<com.facebook.appevents.gps.ara.GpsAraTriggersManager>;
            public static INSTANCE: com.facebook.appevents.gps.ara.GpsAraTriggersManager;
            public static enable(): void;
            public registerTriggerAsync(applicationId: string, event: com.facebook.appevents.AppEvent): void;
            public registerTrigger($this$registerTrigger_u24lambda_u241: string, outcomeReceiver: com.facebook.appevents.AppEvent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module gps {
        export module pa {
          export class PACustomAudienceClient {
            public static class: java.lang.Class<com.facebook.appevents.gps.pa.PACustomAudienceClient>;
            public static INSTANCE: com.facebook.appevents.gps.pa.PACustomAudienceClient;
            public static enable(): void;
            public joinCustomAudience($i$f$toUri: string, $this$toUri$iv: com.facebook.appevents.AppEvent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module iap {
        export class InAppPurchase {
          public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchase>;
          public getAmount(): number;
          public toString(): string;
          public component1(): string;
          public copy(eventName: string, amount: number, currency: java.util.Currency): com.facebook.appevents.iap.InAppPurchase;
          public constructor(eventName: string, amount: number, currency: java.util.Currency);
          public equals(other: any): boolean;
          public component2(): number;
          public getEventName(): string;
          public component3(): java.util.Currency;
          public hashCode(): number;
          public getCurrency(): java.util.Currency;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module iap {
        export class InAppPurchaseActivityLifecycleTracker {
          public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseActivityLifecycleTracker>;
          public static INSTANCE: com.facebook.appevents.iap.InAppPurchaseActivityLifecycleTracker;
          public static startIapLogging(billingClientVersion: com.facebook.appevents.iap.InAppPurchaseUtils.BillingClientVersion): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module iap {
        export class InAppPurchaseAutoLogger {
          public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseAutoLogger>;
          public static INSTANCE: com.facebook.appevents.iap.InAppPurchaseAutoLogger;
          public static startIapLogging(billingClientWrapper: globalAndroid.content.Context, context: com.facebook.appevents.iap.InAppPurchaseUtils.BillingClientVersion): void;
          public getFailedToCreateWrapper(): java.util.concurrent.atomic.AtomicBoolean;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module iap {
        export class InAppPurchaseBillingClientWrapper {
          public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseBillingClientWrapper>;
          /**
           * Constructs a new instance of the com.facebook.appevents.iap.InAppPurchaseBillingClientWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getBillingClient(): any; queryPurchases(param0: com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType, param1: java.lang.Runnable): void; queryPurchaseHistory(param0: com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType, param1: java.lang.Runnable): void });
          public constructor();
          public getBillingClient(): any;
          public queryPurchases(param0: com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType, param1: java.lang.Runnable): void;
          public queryPurchaseHistory(param0: com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType, param1: java.lang.Runnable): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module iap {
        export class InAppPurchaseBillingClientWrapperV2V4 extends com.facebook.appevents.iap.InAppPurchaseBillingClientWrapper {
          public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseBillingClientWrapperV2V4>;
          public getBillingClient(): any;
          public queryPurchaseHistory(this_: com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType, productType: java.lang.Runnable): void;
          public queryPurchases(this_: com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType, productType: java.lang.Runnable): void;
          public static getOrCreateInstance(context: globalAndroid.content.Context): com.facebook.appevents.iap.InAppPurchaseBillingClientWrapperV2V4;
          public queryPurchases(param0: com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType, param1: java.lang.Runnable): void;
          public queryPurchaseHistory(param0: com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType, param1: java.lang.Runnable): void;
        }
        export module InAppPurchaseBillingClientWrapperV2V4 {
          export class BillingClientStateListenerWrapper {
            public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseBillingClientWrapperV2V4.BillingClientStateListenerWrapper>;
            public invoke(billingResultClazz: any, billingResultGetResponseCodeMethod: java.lang.reflect.Method, responseCode: androidNative.Array<any>): any;
            public constructor(runnable: java.lang.Runnable);
          }
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseBillingClientWrapperV2V4.Companion>;
            public getIapPurchaseDetailsMap(): java.util.Map<string, org.json.JSONObject>;
            public getSubsPurchaseDetailsMap(): java.util.Map<string, org.json.JSONObject>;
            public getSkuDetailsMap(): java.util.Map<string, org.json.JSONObject>;
            public isServiceConnected(): java.util.concurrent.atomic.AtomicBoolean;
            public getOrCreateInstance(context: globalAndroid.content.Context): com.facebook.appevents.iap.InAppPurchaseBillingClientWrapperV2V4;
          }
          export class PurchaseHistoryResponseListenerWrapper {
            public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseBillingClientWrapperV2V4.PurchaseHistoryResponseListenerWrapper>;
            public constructor(this$0: com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType, skuType: java.lang.Runnable);
            public invoke(purchaseHistoryJson: any, skuID: java.lang.reflect.Method, purchaseHistoryObject: androidNative.Array<any>): void;
          }
          export class PurchasesUpdatedListenerWrapper {
            public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseBillingClientWrapperV2V4.PurchasesUpdatedListenerWrapper>;
            public invoke(proxy: any, m: java.lang.reflect.Method, args: androidNative.Array<any>): any;
            public constructor();
          }
          export class SkuDetailsResponseListenerWrapper {
            public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseBillingClientWrapperV2V4.SkuDetailsResponseListenerWrapper>;
            public invoke(skuJson: any, skuID: java.lang.reflect.Method, skuDetail: androidNative.Array<any>): void;
            public constructor(this$0: java.lang.Runnable);
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module iap {
        export class InAppPurchaseBillingClientWrapperV5V7 extends com.facebook.appevents.iap.InAppPurchaseBillingClientWrapper {
          public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseBillingClientWrapperV5V7>;
          public getBillingClient(): any;
          public queryPurchaseHistory(this_: com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType, productType: java.lang.Runnable): void;
          public static getOrCreateInstance(context: globalAndroid.content.Context): com.facebook.appevents.iap.InAppPurchaseBillingClientWrapperV5V7;
          public queryPurchases(this_: com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType, productType: java.lang.Runnable): void;
          public getOriginalJson(matchResult: string): string;
          public queryPurchases(param0: com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType, param1: java.lang.Runnable): void;
          public queryPurchaseHistory(param0: com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType, param1: java.lang.Runnable): void;
        }
        export module InAppPurchaseBillingClientWrapperV5V7 {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseBillingClientWrapperV5V7.Companion>;
            public getIapPurchaseDetailsMap(): java.util.Map<string, org.json.JSONObject>;
            public invoke(proxy: any, m: java.lang.reflect.Method, args: androidNative.Array<any>): any;
            public getOrCreateInstance(context: globalAndroid.content.Context): com.facebook.appevents.iap.InAppPurchaseBillingClientWrapperV5V7;
            public getSubsPurchaseDetailsMap(): java.util.Map<string, org.json.JSONObject>;
            public isServiceConnected(): java.util.concurrent.atomic.AtomicBoolean;
            public getProductDetailsMap(): java.util.Map<string, org.json.JSONObject>;
          }
          export class ListenerWrapper {
            public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseBillingClientWrapperV5V7.ListenerWrapper>;
            public invoke(proxy: any, m: java.lang.reflect.Method, listenerArgs: androidNative.Array<any>): any;
            public constructor(this$0: androidNative.Array<any>);
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module iap {
        export class InAppPurchaseConstants {
          public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseConstants>;
          public static INSTANCE: com.facebook.appevents.iap.InAppPurchaseConstants;
          public static PRODUCT_ID: string = 'productId';
          public static PACKAGE_NAME: string = 'packageName';
          public static CLASSNAME_BILLING_CLIENT: string = 'com.android.billingclient.api.BillingClient';
          public static CLASSNAME_PURCHASE: string = 'com.android.billingclient.api.Purchase';
          public static CLASSNAME_PURCHASE_HISTORY_RECORD: string = 'com.android.billingclient.api.PurchaseHistoryRecord';
          public static CLASSNAME_BILLING_RESULT: string = 'com.android.billingclient.api.BillingResult';
          public static CLASSNAME_BILLING_CLIENT_BUILDER: string = 'com.android.billingclient.api.BillingClient$Builder';
          public static CLASSNAME_BILLING_CLIENT_STATE_LISTENER: string = 'com.android.billingclient.api.BillingClientStateListener';
          public static CLASSNAME_PURCHASE_HISTORY_RESPONSE_LISTENER: string = 'com.android.billingclient.api.PurchaseHistoryResponseListener';
          public static METHOD_GET_RESPONSE_CODE: string = 'getResponseCode';
          public static METHOD_GET_ORIGINAL_JSON: string = 'getOriginalJson';
          public static METHOD_QUERY_PURCHASE_HISTORY_ASYNC: string = 'queryPurchaseHistoryAsync';
          public static METHOD_NEW_BUILDER: string = 'newBuilder';
          public static METHOD_BUILD: string = 'build';
          public static METHOD_ENABLE_PENDING_PURCHASES: string = 'enablePendingPurchases';
          public static METHOD_SET_LISTENER: string = 'setListener';
          public static METHOD_START_CONNECTION: string = 'startConnection';
          public static METHOD_ON_BILLING_SETUP_FINISHED: string = 'onBillingSetupFinished';
          public static METHOD_ON_BILLING_SERVICE_DISCONNECTED: string = 'onBillingServiceDisconnected';
          public static METHOD_ON_PURCHASE_HISTORY_RESPONSE: string = 'onPurchaseHistoryResponse';
          public static CLASSNAME_PURCHASES_RESULT: string = 'com.android.billingclient.api.Purchase$PurchasesResult';
          public static CLASSNAME_SKU_DETAILS: string = 'com.android.billingclient.api.SkuDetails';
          public static CLASSNAME_SKU_DETAILS_RESPONSE_LISTENER: string = 'com.android.billingclient.api.SkuDetailsResponseListener';
          public static CLASSNAME_PURCHASE_UPDATED_LISTENER: string = 'com.android.billingclient.api.PurchasesUpdatedListener';
          public static METHOD_QUERY_PURCHASES: string = 'queryPurchases';
          public static METHOD_GET_PURCHASE_LIST: string = 'getPurchasesList';
          public static METHOD_QUERY_SKU_DETAILS_ASYNC: string = 'querySkuDetailsAsync';
          public static METHOD_ON_SKU_DETAILS_RESPONSE: string = 'onSkuDetailsResponse';
          public static CLASSNAME_PRODUCT_DETAILS: string = 'com.android.billingclient.api.ProductDetails';
          public static CLASSNAME_QUERY_PRODUCT_DETAILS_PARAMS_PRODUCT: string = 'com.android.billingclient.api.QueryProductDetailsParams$Product';
          public static CLASSNAME_PURCHASES_UPDATED_LISTENER: string = 'com.android.billingclient.api.PurchasesUpdatedListener';
          public static CLASSNAME_PRODUCT_DETAILS_RESPONSE_LISTENER: string = 'com.android.billingclient.api.ProductDetailsResponseListener';
          public static CLASSNAME_PURCHASES_RESPONSE_LISTENER: string = 'com.android.billingclient.api.PurchasesResponseListener';
          public static CLASSNAME_PENDING_PURCHASES_PARAMS: string = 'com.android.billingclient.api.PendingPurchasesParams';
          public static CLASSNAME_QUERY_PRODUCT_DETAILS_PARAMS: string = 'com.android.billingclient.api.QueryProductDetailsParams';
          public static CLASSNAME_QUERY_PURCHASE_HISTORY_PARAMS: string = 'com.android.billingclient.api.QueryPurchaseHistoryParams';
          public static CLASSNAME_QUERY_PURCHASES_PARAMS: string = 'com.android.billingclient.api.QueryPurchasesParams';
          public static CLASSNAME_QUERY_PRODUCT_DETAILS_PARAMS_BUILDER: string = 'com.android.billingclient.api.QueryProductDetailsParams$Builder';
          public static CLASSNAME_QUERY_PURCHASE_HISTORY_PARAMS_BUILDER: string = 'com.android.billingclient.api.QueryPurchaseHistoryParams$Builder';
          public static CLASSNAME_QUERY_PURCHASES_PARAMS_BUILDER: string = 'com.android.billingclient.api.QueryPurchasesParams$Builder';
          public static CLASSNAME_PENDING_PURCHASES_PARAMS_BUILDER: string = 'com.android.billingclient.api.PendingPurchasesParams$Builder';
          public static CLASSNAME_QUERY_PRODUCT_DETAILS_PARAMS_PRODUCT_BUILDER: string = 'com.android.billingclient.api.QueryProductDetailsParams$Product$Builder';
          public static METHOD_SET_PRODUCT_ID: string = 'setProductId';
          public static METHOD_SET_PRODUCT_TYPE: string = 'setProductType';
          public static METHOD_SET_PRODUCT_LIST: string = 'setProductList';
          public static METHOD_GET_DEBUG_MESSAGE: string = 'getDebugMessage';
          public static METHOD_TO_STRING: string = 'toString';
          public static METHOD_QUERY_PURCHASES_ASYNC: string = 'queryPurchasesAsync';
          public static METHOD_QUERY_PRODUCT_DETAILS_ASYNC: string = 'queryProductDetailsAsync';
          public static METHOD_ON_QUERY_PURCHASES_RESPONSE: string = 'onQueryPurchasesResponse';
          public static METHOD_ON_PRODUCT_DETAILS_RESPONSE: string = 'onProductDetailsResponse';
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module iap {
        export class InAppPurchaseDedupeConfig {
          public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseDedupeConfig>;
          public static INSTANCE: com.facebook.appevents.iap.InAppPurchaseDedupeConfig;
          public getCurrencyParameterEquivalents(): java.util.List<string>;
          public getDedupeWindow(): number;
          public getTestDedupeParameters(values: boolean): java.util.List<any>;
          public getDedupeParameters(values: boolean): java.util.List<any>;
          public getValueOfManualEvent(equivalent: java.lang.Double, valueParameters: globalAndroid.os.Bundle): java.lang.Double;
          public getCurrencyOfManualEvent(equivalent: globalAndroid.os.Bundle): java.util.Currency;
          public addDedupeParameters(newOperationalData: globalAndroid.os.Bundle, value: globalAndroid.os.Bundle, key: com.facebook.appevents.OperationalData): any;
          public getValueParameterEquivalents(): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module iap {
        export class InAppPurchaseEventManager {
          public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseEventManager>;
          public static INSTANCE: com.facebook.appevents.iap.InAppPurchaseEventManager;
          public static asInterface(args: globalAndroid.content.Context, context: globalAndroid.os.IBinder): any;
          public static getPurchasesInapp(context: globalAndroid.content.Context, inAppBillingObj: any): java.util.ArrayList<string>;
          public static clearSkuDetailsCache(): void;
          public static getSkuDetails(sku: globalAndroid.content.Context, skuDetailsMap: java.util.ArrayList<string>, unresolvedSkuList: any, context: boolean): java.util.Map<string, string>;
          public static getPurchaseHistoryInapp(purchases: globalAndroid.content.Context, iapClass: any): java.util.ArrayList<string>;
          public hasFreeTrialPeirod(freeTrialPeriod: string): boolean;
          public static getPurchasesSubs(context: globalAndroid.content.Context, inAppBillingObj: any): java.util.ArrayList<string>;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module iap {
        export class InAppPurchaseLoggerManager {
          public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseLoggerManager>;
          public static INSTANCE: com.facebook.appevents.iap.InAppPurchaseLoggerManager;
          public static deleteOldCacheHistory(): void;
          public static updateLatestPossiblePurchaseTime(): void;
          public cacheDeDupPurchase$facebook_core_release(key: java.util.Map<string, org.json.JSONObject>, purchaseJson: boolean): java.util.Map<string, org.json.JSONObject>;
          public constructLoggingReadyMap$facebook_core_release(key: java.util.Map<string, any>, purchaseDetail: java.util.Map<string, any>, purchaseResultMap: string): java.util.Map<string, string>;
          public static migrateOldCacheHistory(): void;
          public static setAppHasBeenLaunchedWithNewIAP(): void;
          public static getIsFirstAppLaunchWithNewIAP(): boolean;
          public static filterPurchaseLogging(deduped: java.util.Map<string, org.json.JSONObject>, loggingReady: java.util.Map<string, any>, purchaseDetailsMap: boolean, skuDetailsMap: string, isSubscription: com.facebook.appevents.iap.InAppPurchaseUtils.BillingClientVersion, packageName: boolean): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module iap {
        export class InAppPurchaseManager {
          public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseManager>;
          public static INSTANCE: com.facebook.appevents.iap.InAppPurchaseManager;
          public static startTracking(): void;
          public static getSpecificBillingLibraryVersion(): string;
          public static enableAutoLogging(): void;
          public getDedupeParameter(equivalentParameter: globalAndroid.os.Bundle, parameterInNewEvent: com.facebook.appevents.OperationalData, parameter: globalAndroid.os.Bundle, dedupeParameters: com.facebook.appevents.OperationalData, this_: boolean, newPurchaseParameters: boolean): string;
          public static performDedupe(potentialTestDedupeParameter: java.util.List<com.facebook.appevents.iap.InAppPurchase>, candidateTime: number, candidateParameters: boolean, candidateOperationalData: java.util.List<any>): globalAndroid.os.Bundle;
        }
        export module InAppPurchaseManager {
          export class WhenMappings {
            public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseManager.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module iap {
        export class InAppPurchaseSkuDetailsWrapper {
          public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseSkuDetailsWrapper>;
          public constructor(skuDetailsParamsClazz: java.lang.Class<any>, builderClazz: java.lang.Class<any>, newBuilderMethod: java.lang.reflect.Method, setTypeMethod: java.lang.reflect.Method, setSkusListMethod: java.lang.reflect.Method, buildMethod: java.lang.reflect.Method);
          public static getOrCreateInstance(): com.facebook.appevents.iap.InAppPurchaseSkuDetailsWrapper;
          public getSkuDetailsParams(this_: com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType, productType: java.util.List<string>): any;
          public getSkuDetailsParamsClazz(): java.lang.Class<any>;
        }
        export module InAppPurchaseSkuDetailsWrapper {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseSkuDetailsWrapper.Companion>;
            public getOrCreateInstance(): com.facebook.appevents.iap.InAppPurchaseSkuDetailsWrapper;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module iap {
        export class InAppPurchaseUtils {
          public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseUtils>;
          public static INSTANCE: com.facebook.appevents.iap.InAppPurchaseUtils;
          public static getClassFromContext$facebook_core_release(e: globalAndroid.content.Context, context: string): java.lang.Class<any>;
          public static getClass(e: string): java.lang.Class<any>;
          public static getMethod(e: java.lang.Class<any>, clazz: string, methodName: androidNative.Array<java.lang.Class<any>>): java.lang.reflect.Method;
          public static invokeMethod(obj: java.lang.Class<any>, clazz: java.lang.reflect.Method, method: any, obj: androidNative.Array<any>): any;
          public static getDeclaredMethod$facebook_core_release(e: java.lang.Class<any>, clazz: string, methodName: androidNative.Array<java.lang.Class<any>>): java.lang.reflect.Method;
        }
        export module InAppPurchaseUtils {
          export class BillingClientVersion {
            public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseUtils.BillingClientVersion>;
            public static NONE: com.facebook.appevents.iap.InAppPurchaseUtils.BillingClientVersion;
            public static V1: com.facebook.appevents.iap.InAppPurchaseUtils.BillingClientVersion;
            public static V2_V4: com.facebook.appevents.iap.InAppPurchaseUtils.BillingClientVersion;
            public static V5_V7: com.facebook.appevents.iap.InAppPurchaseUtils.BillingClientVersion;
            public static values(): androidNative.Array<com.facebook.appevents.iap.InAppPurchaseUtils.BillingClientVersion>;
            public static valueOf(value: string): com.facebook.appevents.iap.InAppPurchaseUtils.BillingClientVersion;
            public getType(): string;
          }
          export class IAPProductType {
            public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType>;
            public static INAPP: com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType;
            public static SUBS: com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType;
            public static values(): androidNative.Array<com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType>;
            public getType(): string;
            public static valueOf(value: string): com.facebook.appevents.iap.InAppPurchaseUtils.IAPProductType;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module integrity {
        export class BannedParamManager {
          public static class: java.lang.Class<com.facebook.appevents.integrity.BannedParamManager>;
          public static INSTANCE: com.facebook.appevents.integrity.BannedParamManager;
          public static disable(): void;
          public static processFilterBannedParams(forEachBannedParamManager$processFilterBannedParams$1: globalAndroid.os.Bundle): void;
          public static enable(): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module integrity {
        export class BlocklistEventsManager {
          public static class: java.lang.Class<com.facebook.appevents.integrity.BlocklistEventsManager>;
          public static INSTANCE: com.facebook.appevents.integrity.BlocklistEventsManager;
          public static disable(): void;
          public static isInBlocklist(eventName: string): boolean;
          public static enable(): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module integrity {
        export class IntegrityManager {
          public static class: java.lang.Class<com.facebook.appevents.integrity.IntegrityManager>;
          public static INSTANCE: com.facebook.appevents.integrity.IntegrityManager;
          public static INTEGRITY_TYPE_NONE: string = 'none';
          public static INTEGRITY_TYPE_ADDRESS: string = 'address';
          public static INTEGRITY_TYPE_HEALTH: string = 'health';
          public static processParameters(value: java.util.Map<string, string>): void;
          public static enable(): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module integrity {
        export class MACARuleMatchingManager {
          public static class: java.lang.Class<com.facebook.appevents.integrity.MACARuleMatchingManager>;
          public static INSTANCE: com.facebook.appevents.integrity.MACARuleMatchingManager;
          public static isMatchCCRule(thisRes: string, i: globalAndroid.os.Bundle): boolean;
          public static getKey(its: org.json.JSONObject): string;
          public static stringComparison(arr: string, anyMACARuleMatchingManager$stringComparison$1: org.json.JSONObject, str: globalAndroid.os.Bundle): boolean;
          public static getMatchPropertyIDs(entry: globalAndroid.os.Bundle): string;
          public static removeGeneratedInfo(k: globalAndroid.os.Bundle): void;
          public static enable(): void;
          public static getStringArrayList(i: org.json.JSONArray): java.util.ArrayList<string>;
          public static processParameters(params: globalAndroid.os.Bundle, event: string): void;
          public static generateInfo(params: globalAndroid.os.Bundle, event: string): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module integrity {
        export class ProtectedModeManager {
          public static class: java.lang.Class<com.facebook.appevents.integrity.ProtectedModeManager>;
          public static INSTANCE: com.facebook.appevents.integrity.ProtectedModeManager;
          public static isEnabled(): boolean;
          public static disable(): void;
          public static enable(): void;
          public static processParametersForProtectedMode(forEachProtectedModeManager$processParametersForProtectedMode$1: globalAndroid.os.Bundle): void;
          public getDefaultStandardParameterNames(): java.util.HashSet<string>;
          public protectedModeIsApplied(parameters: globalAndroid.os.Bundle): boolean;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module integrity {
        export class RedactedEventsManager {
          public static class: java.lang.Class<com.facebook.appevents.integrity.RedactedEventsManager>;
          public static INSTANCE: com.facebook.appevents.integrity.RedactedEventsManager;
          public static disable(): void;
          public static processEventsRedaction(RedactedEventsManager$processEventsRedaction$1: string): string;
          public static enable(): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module integrity {
        export class SensitiveParamsManager {
          public static class: java.lang.Class<com.facebook.appevents.integrity.SensitiveParamsManager>;
          public static INSTANCE: com.facebook.appevents.integrity.SensitiveParamsManager;
          public static disable(): void;
          public static processFilterSensitiveParams(key: globalAndroid.os.Bundle, sensitiveParamsForEvent: string): void;
          public static enable(): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module integrity {
        export class StdParamsEnforcementManager {
          public static class: java.lang.Class<com.facebook.appevents.integrity.StdParamsEnforcementManager>;
          public static INSTANCE: com.facebook.appevents.integrity.StdParamsEnforcementManager;
          public static processFilterParamSchemaBlocking(value: globalAndroid.os.Bundle): void;
          public static disable(): void;
          public static enable(): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module internal {
        export class ActivityLifecycleTracker {
          public static class: java.lang.Class<com.facebook.appevents.internal.ActivityLifecycleTracker>;
          public static INSTANCE: com.facebook.appevents.internal.ActivityLifecycleTracker;
          public static isInBackground(): boolean;
          public static getCurrentSessionGuid(): java.util.UUID;
          public static onActivityCreated(activity: globalAndroid.app.Activity): void;
          public static isTracking(): boolean;
          public static onActivityResumed(currentTime: globalAndroid.app.Activity): void;
          public static startTracking(application: globalAndroid.app.Application, appId: string): void;
          public static getCurrentActivity(): globalAndroid.app.Activity;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module internal {
        export class AppEventUtility {
          public static class: java.lang.Class<com.facebook.appevents.internal.AppEventUtility>;
          public static INSTANCE: com.facebook.appevents.internal.AppEventUtility;
          public static assertIsNotMainThread(): void;
          public static getRootView(window: globalAndroid.app.Activity): globalAndroid.view.View;
          public static getAppVersion(): string;
          public static normalizePrice(firstValue: string): number;
          public static assertIsMainThread(): void;
          public static bytesToHex(b: androidNative.Array<number>): string;
          public static isEmulator(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module internal {
        export class AppEventsLoggerUtility {
          public static class: java.lang.Class<com.facebook.appevents.internal.AppEventsLoggerUtility>;
          public static INSTANCE: com.facebook.appevents.internal.AppEventsLoggerUtility;
          public static getJSONObjectForGraphAPICall(e: com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType, key: com.facebook.internal.AttributionIdentifiers, it: string, publishParams: boolean, externalAnalyticsUserId: globalAndroid.content.Context): org.json.JSONObject;
        }
        export module AppEventsLoggerUtility {
          export class GraphAPIActivityType {
            public static class: java.lang.Class<com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType>;
            public static MOBILE_INSTALL_EVENT: com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType;
            public static CUSTOM_APP_EVENTS: com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType;
            public static valueOf(value: string): com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType;
            public static values(): androidNative.Array<com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType>;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module internal {
        export class AppLinkManager {
          public static class: java.lang.Class<com.facebook.appevents.internal.AppLinkManager>;
          public static APPLINK_INFO: string = 'com.facebook.sdk.APPLINK_INFO';
          public static APPLINK_DATA_KEY: string = 'al_applink_data';
          public static CAMPAIGN_IDS_KEY: string = 'campaign_ids';
          public getCampaignIDFromIntentExtra(this_: globalAndroid.content.Intent): string;
          public getInfo(key: string): string;
          public processCampaignIds(this_: globalAndroid.net.Uri, uri: globalAndroid.content.Intent): void;
          public setupLifecycleListener(application: globalAndroid.app.Application): void;
          public handleURL(this_: globalAndroid.app.Activity): void;
          public getCampaignIDFromUri(_: globalAndroid.net.Uri): string;
        }
        export module AppLinkManager {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.internal.AppLinkManager.Companion>;
            public getInstance(): com.facebook.appevents.internal.AppLinkManager;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module internal {
        export class AutomaticAnalyticsLogger {
          public static class: java.lang.Class<com.facebook.appevents.internal.AutomaticAnalyticsLogger>;
          public static INSTANCE: com.facebook.appevents.internal.AutomaticAnalyticsLogger;
          public static logPurchase(loggingParameters: string, logAsSubs: string, eventName: boolean, dedupeParameters: com.facebook.appevents.iap.InAppPurchaseUtils.BillingClientVersion, purchase: boolean): void;
          public static getPurchaseDedupeParameters(purchaseParams: java.util.List<com.facebook.appevents.internal.AutomaticAnalyticsLogger.PurchaseLoggingParameters>): globalAndroid.os.Bundle;
          public static isImplicitPurchaseLoggingEnabled(): boolean;
          public static logActivateAppEvent(): void;
          public static logActivityTimeSpentEvent(logger: string, params: number): void;
          public static getSubscriptionDedupeParameters(inAppPurchase: java.util.List<com.facebook.appevents.internal.AutomaticAnalyticsLogger.PurchaseLoggingParameters>, purchaseParams: string): globalAndroid.os.Bundle;
        }
        export module AutomaticAnalyticsLogger {
          export class PurchaseLoggingParameters {
            public static class: java.lang.Class<com.facebook.appevents.internal.AutomaticAnalyticsLogger.PurchaseLoggingParameters>;
            public setCurrency(set: java.util.Currency): void;
            public getPurchaseAmount(): java.math.BigDecimal;
            public setOperationalData(set: com.facebook.appevents.OperationalData): void;
            public setPurchaseAmount(set: java.math.BigDecimal): void;
            public getCurrency(): java.util.Currency;
            public getParam(): globalAndroid.os.Bundle;
            public setParam(set: globalAndroid.os.Bundle): void;
            public getOperationalData(): com.facebook.appevents.OperationalData;
            public constructor(purchaseAmount: java.math.BigDecimal, currency: java.util.Currency, param: globalAndroid.os.Bundle, operationalData: com.facebook.appevents.OperationalData);
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module internal {
        export class Constants {
          public static class: java.lang.Class<com.facebook.appevents.internal.Constants>;
          public static INSTANCE: com.facebook.appevents.internal.Constants;
          public static LOG_TIME_APP_EVENT_KEY: string = '_logTime';
          public static EVENT_NAME_EVENT_KEY: string = '_eventName';
          public static EVENT_NAME_PURCHASE_RESTORED: string = 'fb_mobile_purchase_restored';
          public static EVENT_NAME_SUBSCRIPTION_RESTORED: string = 'SubscriptionRestore';
          public static AA_TIME_SPENT_EVENT_NAME: string = 'fb_aa_time_spent_on_view';
          public static AA_TIME_SPENT_SCREEN_PARAMETER_NAME: string = 'fb_aa_time_spent_view_name';
          public static IAP_PRODUCT_ID: string = 'fb_iap_product_id';
          public static IAP_PURCHASE_TIME: string = 'fb_iap_purchase_time';
          public static IAP_PURCHASE_TOKEN: string = 'fb_iap_purchase_token';
          public static IAP_PRODUCT_TYPE: string = 'fb_iap_product_type';
          public static IAP_PRODUCT_TITLE: string = 'fb_iap_product_title';
          public static IAP_PRODUCT_DESCRIPTION: string = 'fb_iap_product_description';
          public static IAP_PACKAGE_NAME: string = 'fb_iap_package_name';
          public static IAP_SUBSCRIPTION_AUTORENEWING: string = 'fb_iap_subs_auto_renewing';
          public static IAP_SUBSCRIPTION_PERIOD: string = 'fb_iap_subs_period';
          public static IAP_FREE_TRIAL_PERIOD: string = 'fb_free_trial_period';
          public static IAP_INTRO_PRICE_AMOUNT_MICROS: string = 'fb_intro_price_amount_micros';
          public static IAP_INTRO_PRICE_CYCLES: string = 'fb_intro_price_cycles';
          public static IAP_AUTOLOG_IMPLEMENTATION: string = 'fb_iap_sdk_supported_library_versions';
          public static IAP_INTRO_PERIOD: string = 'fb_intro_period';
          public static IAP_BASE_PLAN: string = 'fb_iap_base_plan';
          public static IAP_BILLING_LIBRARY_VERSION: string = 'fb_iap_client_library_version';
          public static IAP_NON_DEDUPED_EVENT_TIME: string = 'fb_iap_non_deduped_event_time';
          public static IAP_ACTUAL_DEDUP_RESULT: string = 'fb_iap_actual_dedup_result';
          public static IAP_ACTUAL_DEDUP_KEY_USED: string = 'fb_iap_actual_dedup_key_used';
          public static IAP_TEST_DEDUP_RESULT: string = 'fb_iap_test_dedup_result';
          public static IAP_TEST_DEDUP_KEY_USED: string = 'fb_iap_test_dedup_key_used';
          public static GP_IAP_PRODUCT_ID: string = 'productId';
          public static GP_IAP_PURCHASE_TIME: string = 'purchaseTime';
          public static GP_IAP_PURCHASE_TOKEN: string = 'purchaseToken';
          public static GP_IAP_PACKAGE_NAME: string = 'packageName';
          public static GP_IAP_TITLE: string = 'title';
          public static GP_IAP_DESCRIPTION: string = 'description';
          public static GP_IAP_TYPE: string = 'type';
          public static GP_IAP_AUTORENEWING: string = 'autoRenewing';
          public static GP_IAP_SUBSCRIPTION_PERIOD: string = 'subscriptionPeriod';
          public static GP_IAP_PRICE_AMOUNT_MICROS_V2V4: string = 'price_amount_micros';
          public static GP_IAP_PRICE_CURRENCY_CODE_V2V4: string = 'price_currency_code';
          public static GP_IAP_INTRODUCTORY_PRICE_CYCLES: string = 'introductoryPriceCycles';
          public static GP_IAP_INTRODUCTORY_PRICE_PERIOD: string = 'introductoryPricePeriod';
          public static GP_IAP_INTRODUCTORY_PRICE_AMOUNT_MICROS: string = 'introductoryPriceAmountMicros';
          public static GP_IAP_FREE_TRIAL_PERIOD: string = 'freeTrialPeriod';
          public static GP_IAP_ONE_TIME_PURCHASE_OFFER_DETAILS: string = 'oneTimePurchaseOfferDetails';
          public static GP_IAP_PRICE_AMOUNT_MICROS_V5V7: string = 'priceAmountMicros';
          public static GP_IAP_PRICE_CURRENCY_CODE_V5V7: string = 'priceCurrencyCode';
          public static GP_IAP_SUBSCRIPTION_OFFER_DETAILS: string = 'subscriptionOfferDetails';
          public static GP_IAP_SUBSCRIPTION_PRICING_PHASES: string = 'pricingPhases';
          public static GP_IAP_RECURRENCE_MODE: string = 'recurrenceMode';
          public static GP_IAP_BILLING_PERIOD: string = 'billingPeriod';
          public static GP_IAP_BASE_PLAN_ID: string = 'basePlanId';
          public static GP_IAP_OFFER_ID: string = 'offerId';
          public static EVENT_PARAM_PRODUCT_ITEM_ID: string = 'fb_product_item_id';
          public static EVENT_PARAM_PRODUCT_AVAILABILITY: string = 'fb_product_availability';
          public static EVENT_PARAM_PRODUCT_CONDITION: string = 'fb_product_condition';
          public static EVENT_PARAM_PRODUCT_DESCRIPTION: string = 'fb_product_description';
          public static EVENT_PARAM_PRODUCT_IMAGE_LINK: string = 'fb_product_image_link';
          public static EVENT_PARAM_PRODUCT_LINK: string = 'fb_product_link';
          public static EVENT_PARAM_PRODUCT_TITLE: string = 'fb_product_title';
          public static EVENT_PARAM_PRODUCT_GTIN: string = 'fb_product_gtin';
          public static EVENT_PARAM_PRODUCT_MPN: string = 'fb_product_mpn';
          public static EVENT_PARAM_PRODUCT_BRAND: string = 'fb_product_brand';
          public static EVENT_PARAM_PRODUCT_PRICE_AMOUNT: string = 'fb_product_price_amount';
          public static EVENT_PARAM_PRODUCT_PRICE_CURRENCY: string = 'fb_product_price_currency';
          public static EVENT_PARAM_IS_AUTOLOG_APP_EVENTS_ENABLED: string = 'is_autolog_app_events_enabled';
          public static EVENT_PARAM_IS_IMPLICIT_PURCHASE_LOGGING_ENABLED: string = 'is_implicit_purchase_logging_enabled';
          public static GPS_PA_SUCCEED: string = 'gps_pa_succeed';
          public static GPS_PA_FAILED: string = 'gps_pa_failed';
          public static GPS_PA_FAILED_REASON: string = 'gps_pa_failed_reason';
          public static GPS_ARA_SUCCEED: string = 'gps_ara_succeed';
          public static GPS_ARA_FAILED: string = 'gps_ara_failed';
          public static GPS_ARA_FAILED_REASON: string = 'gps_ara_failed_reason';
          public static getDefaultAppEventsSessionTimeoutInSeconds(): number;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module internal {
        export class FileDownloadTask extends globalAndroid.os.AsyncTask<string, java.lang.Void, java.lang.Boolean> {
          public static class: java.lang.Class<com.facebook.appevents.internal.FileDownloadTask>;
          public onPostExecute(isSuccess: boolean): void;
          public constructor(uriStr: string, destFile: java.io.File, onSuccess: com.facebook.appevents.internal.FileDownloadTask.Callback);
          public doInBackground(conn: androidNative.Array<string>): java.lang.Boolean;
        }
        export module FileDownloadTask {
          export class Callback {
            public static class: java.lang.Class<com.facebook.appevents.internal.FileDownloadTask.Callback>;
            /**
             * Constructs a new instance of the com.facebook.appevents.internal.FileDownloadTask$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onComplete(param0: java.io.File): void });
            public constructor();
            public onComplete(param0: java.io.File): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module internal {
        export class HashUtils {
          public static class: java.lang.Class<com.facebook.appevents.internal.HashUtils>;
          public static INSTANCE: com.facebook.appevents.internal.HashUtils;
          public static computeChecksum(path: string): string;
          public static computeChecksumWithPackageManager(mapHashUtils$computeChecksumWithPackageManager$trustedInstaller$1: globalAndroid.content.Context, it: java.lang.Long): string;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module internal {
        export class SessionInfo {
          public static class: java.lang.Class<com.facebook.appevents.internal.SessionInfo>;
          public getDiskRestoreTime(): java.lang.Long;
          public getSourceApplicationInfo(): com.facebook.appevents.internal.SourceApplicationInfo;
          public static getStoredSessionInfo(): com.facebook.appevents.internal.SessionInfo;
          public getInterruptionCount(): number;
          public constructor(sessionStartTime: java.lang.Long, sessionLastEventTime: java.lang.Long, sessionId: java.util.UUID);
          public getSessionId(): java.util.UUID;
          public static clearSavedSessionFromDisk(): void;
          public setSessionId(set: java.util.UUID): void;
          public incrementInterruptionCount(): void;
          public writeSessionToDisk(): void;
          public getSessionLastEventTime(): java.lang.Long;
          public getSessionLength(): number;
          public getSessionStartTime(): java.lang.Long;
          public setDiskRestoreTime(set: java.lang.Long): void;
          public setSessionLastEventTime(set: java.lang.Long): void;
          public constructor(sessionStartTime: java.lang.Long, sessionLastEventTime: java.lang.Long);
          public setSourceApplicationInfo(set: com.facebook.appevents.internal.SourceApplicationInfo): void;
        }
        export module SessionInfo {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.internal.SessionInfo.Companion>;
            public getStoredSessionInfo(): com.facebook.appevents.internal.SessionInfo;
            public clearSavedSessionFromDisk(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module internal {
        export class SessionLogger {
          public static class: java.lang.Class<com.facebook.appevents.internal.SessionLogger>;
          public static INSTANCE: com.facebook.appevents.internal.SessionLogger;
          public static logDeactivateApp(interruptionDurationMillis: string, sessionLength: com.facebook.appevents.internal.SessionInfo, eventParams: string): void;
          public static logActivateApp(sourAppInfoStr: string, eventParams: com.facebook.appevents.internal.SourceApplicationInfo, logger: string, activityName: globalAndroid.content.Context): void;
          public static getQuantaIndex(quantaIndex: number): number;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module internal {
        export class SourceApplicationInfo {
          public static class: java.lang.Class<com.facebook.appevents.internal.SourceApplicationInfo>;
          public writeSourceApplicationInfoToDisk(): void;
          public toString(): string;
          public static clearSavedSourceApplicationInfoFromDisk(): void;
          public getCallingApplicationPackage(): string;
          public static getStoredSourceApplicatioInfo(): com.facebook.appevents.internal.SourceApplicationInfo;
          public isOpenedByAppLink(): boolean;
        }
        export module SourceApplicationInfo {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.internal.SourceApplicationInfo.Companion>;
            public clearSavedSourceApplicationInfoFromDisk(): void;
            public getStoredSourceApplicatioInfo(): com.facebook.appevents.internal.SourceApplicationInfo;
          }
          export class Factory {
            public static class: java.lang.Class<com.facebook.appevents.internal.SourceApplicationInfo.Factory>;
            public static INSTANCE: com.facebook.appevents.internal.SourceApplicationInfo.Factory;
            public static create(appLinkReferrerPackage: globalAndroid.app.Activity): com.facebook.appevents.internal.SourceApplicationInfo;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module internal {
        export class ViewHierarchyConstants {
          public static class: java.lang.Class<com.facebook.appevents.internal.ViewHierarchyConstants>;
          public static INSTANCE: com.facebook.appevents.internal.ViewHierarchyConstants;
          public static ID_KEY: string = 'id';
          public static CLASS_NAME_KEY: string = 'classname';
          public static CLASS_TYPE_BITMASK_KEY: string = 'classtypebitmask';
          public static TEXT_KEY: string = 'text';
          public static DESC_KEY: string = 'description';
          public static DIMENSION_KEY: string = 'dimension';
          public static IS_USER_INPUT_KEY: string = 'is_user_input';
          public static TAG_KEY: string = 'tag';
          public static CHILDREN_VIEW_KEY: string = 'childviews';
          public static HINT_KEY: string = 'hint';
          public static DIMENSION_TOP_KEY: string = 'top';
          public static DIMENSION_LEFT_KEY: string = 'left';
          public static DIMENSION_WIDTH_KEY: string = 'width';
          public static DIMENSION_HEIGHT_KEY: string = 'height';
          public static DIMENSION_SCROLL_X_KEY: string = 'scrollx';
          public static DIMENSION_SCROLL_Y_KEY: string = 'scrolly';
          public static DIMENSION_VISIBILITY_KEY: string = 'visibility';
          public static TEXT_SIZE: string = 'font_size';
          public static TEXT_IS_BOLD: string = 'is_bold';
          public static TEXT_IS_ITALIC: string = 'is_italic';
          public static TEXT_STYLE: string = 'text_style';
          public static ICON_BITMAP: string = 'icon_image';
          public static INPUT_TYPE_KEY: string = 'inputtype';
          public static IS_INTERACTED_KEY: string = 'is_interacted';
          public static SCREEN_NAME_KEY: string = 'screenname';
          public static VIEW_KEY: string = 'view';
          public static ENGLISH: string = 'ENGLISH';
          public static GERMAN: string = 'GERMAN';
          public static SPANISH: string = 'SPANISH';
          public static JAPANESE: string = 'JAPANESE';
          public static VIEW_CONTENT: string = 'VIEW_CONTENT';
          public static SEARCH: string = 'SEARCH';
          public static ADD_TO_CART: string = 'ADD_TO_CART';
          public static ADD_TO_WISHLIST: string = 'ADD_TO_WISHLIST';
          public static INITIATE_CHECKOUT: string = 'INITIATE_CHECKOUT';
          public static ADD_PAYMENT_INFO: string = 'ADD_PAYMENT_INFO';
          public static PURCHASE: string = 'PURCHASE';
          public static LEAD: string = 'LEAD';
          public static COMPLETE_REGISTRATION: string = 'COMPLETE_REGISTRATION';
          public static BUTTON_TEXT: string = 'BUTTON_TEXT';
          public static PAGE_TITLE: string = 'PAGE_TITLE';
          public static RESOLVED_DOCUMENT_LINK: string = 'RESOLVED_DOCUMENT_LINK';
          public static BUTTON_ID: string = 'BUTTON_ID';
          public static TEXTVIEW_BITMASK: number = 0;
          public static IMAGEVIEW_BITMASK: number = 1;
          public static BUTTON_BITMASK: number = 2;
          public static CLICKABLE_VIEW_BITMASK: number = 5;
          public static REACT_NATIVE_BUTTON_BITMASK: number = 6;
          public static ADAPTER_VIEW_ITEM_BITMASK: number = 9;
          public static LABEL_BITMASK: number = 10;
          public static INPUT_BITMASK: number = 11;
          public static PICKER_BITMASK: number = 12;
          public static SWITCH_BITMASK: number = 13;
          public static RADIO_GROUP_BITMASK: number = 14;
          public static CHECKBOX_BITMASK: number = 15;
          public static RATINGBAR_BITMASK: number = 16;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module ml {
        export class MTensor {
          public static class: java.lang.Class<com.facebook.appevents.ml.MTensor>;
          public getShape(i: number): number;
          public getShapeSize(): number;
          public getData(): androidNative.Array<number>;
          public reshape(newData: androidNative.Array<number>): void;
          public constructor(shape: androidNative.Array<number>);
        }
        export module MTensor {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.ml.MTensor.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module ml {
        export class Model {
          public static class: java.lang.Class<com.facebook.appevents.ml.Model>;
          public predictOnMTML(c0: com.facebook.appevents.ml.MTensor, c1: androidNative.Array<string>, c2: string): com.facebook.appevents.ml.MTensor;
        }
        export module Model {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.ml.Model.Companion>;
            public build(this_: java.io.File): com.facebook.appevents.ml.Model;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module ml {
        export class ModelManager {
          public static class: java.lang.Class<com.facebook.appevents.ml.ModelManager>;
          public static INSTANCE: com.facebook.appevents.ml.ModelManager;
          public static MODEL_REQUEST_INTERVAL_MILLISECONDS: number = 259200000;
          public static getRuleFile(handler: com.facebook.appevents.ml.ModelManager.Task): java.io.File;
          public static enable(): void;
          public static predict(n: com.facebook.appevents.ml.ModelManager.Task, handler: androidNative.Array<androidNative.Array<number>>, model: androidNative.Array<string>): androidNative.Array<string>;
        }
        export module ModelManager {
          export class Task {
            public static class: java.lang.Class<com.facebook.appevents.ml.ModelManager.Task>;
            public static MTML_INTEGRITY_DETECT: com.facebook.appevents.ml.ModelManager.Task;
            public static MTML_APP_EVENT_PREDICTION: com.facebook.appevents.ml.ModelManager.Task;
            public static valueOf(value: string): com.facebook.appevents.ml.ModelManager.Task;
            public toKey(): string;
            public static values(): androidNative.Array<com.facebook.appevents.ml.ModelManager.Task>;
            public toUseCase(): string;
          }
          export module Task {
            export class WhenMappings {
              public static class: java.lang.Class<com.facebook.appevents.ml.ModelManager.Task.WhenMappings>;
            }
          }
          export class TaskHandler {
            public static class: java.lang.Class<com.facebook.appevents.ml.ModelManager.TaskHandler>;
            public setRuleUri(set: string): void;
            public setRuleFile(set: java.io.File): void;
            public getRuleUri(): string;
            public getRuleFile(): java.io.File;
            public getThresholds(): androidNative.Array<number>;
            public setAssetUri(set: string): void;
            public getModel(): com.facebook.appevents.ml.Model;
            public setThresholds(set: androidNative.Array<number>): void;
            public getUseCase(): string;
            public getVersionId(): number;
            public setVersionId(set: number): void;
            public getAssetUri(): string;
            public constructor(useCase: string, assetUri: string, ruleUri: string, versionId: number, thresholds: androidNative.Array<number>);
            public setOnPostExecute(onPostExecute: java.lang.Runnable): com.facebook.appevents.ml.ModelManager.TaskHandler;
            public setModel(set: com.facebook.appevents.ml.Model): void;
            public setUseCase(set: string): void;
          }
          export module TaskHandler {
            export class Companion {
              public static class: java.lang.Class<com.facebook.appevents.ml.ModelManager.TaskHandler.Companion>;
              public build(assetUri: org.json.JSONObject): com.facebook.appevents.ml.ModelManager.TaskHandler;
              public execute(this_: com.facebook.appevents.ml.ModelManager.TaskHandler, master: java.util.List<com.facebook.appevents.ml.ModelManager.TaskHandler>): void;
              public execute(handler: com.facebook.appevents.ml.ModelManager.TaskHandler): void;
            }
          }
          export class WhenMappings {
            public static class: java.lang.Class<com.facebook.appevents.ml.ModelManager.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module ml {
        export class Operator {
          public static class: java.lang.Class<com.facebook.appevents.ml.Operator>;
          public static INSTANCE: com.facebook.appevents.ml.Operator;
          public static embedding(j: androidNative.Array<string>, vectorizedText: number, i: com.facebook.appevents.ml.MTensor): com.facebook.appevents.ml.MTensor;
          public static transpose3D(k: com.facebook.appevents.ml.MTensor): com.facebook.appevents.ml.MTensor;
          public static dense(j: com.facebook.appevents.ml.MTensor, i: com.facebook.appevents.ml.MTensor, exampleSize: com.facebook.appevents.ml.MTensor): com.facebook.appevents.ml.MTensor;
          public static maxPool1D(r: com.facebook.appevents.ml.MTensor, yIndex: number): com.facebook.appevents.ml.MTensor;
          public static conv1D(k: com.facebook.appevents.ml.MTensor, m: com.facebook.appevents.ml.MTensor): com.facebook.appevents.ml.MTensor;
          public static transpose2D(j: com.facebook.appevents.ml.MTensor): com.facebook.appevents.ml.MTensor;
          public static addmv(k: com.facebook.appevents.ml.MTensor, j: com.facebook.appevents.ml.MTensor): void;
          public static flatten(i: com.facebook.appevents.ml.MTensor, i: number): void;
          public static relu(i: com.facebook.appevents.ml.MTensor): void;
          public static concatenate(i: androidNative.Array<com.facebook.appevents.ml.MTensor>): com.facebook.appevents.ml.MTensor;
          public static softmax(i: com.facebook.appevents.ml.MTensor): void;
          public static mul(k: com.facebook.appevents.ml.MTensor, j: com.facebook.appevents.ml.MTensor): com.facebook.appevents.ml.MTensor;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module ml {
        export class Utils {
          public static class: java.lang.Class<com.facebook.appevents.ml.Utils>;
          public static INSTANCE: com.facebook.appevents.ml.Utils;
          public vectorize(ret: string, normalizedStr: number): androidNative.Array<number>;
          public normalizeString(it: string): string;
          public static getMlDir(): java.io.File;
          public static parseModelWeights(i: java.io.File): java.util.Map<string, com.facebook.appevents.ml.MTensor>;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module ondeviceprocessing {
        export class OnDeviceProcessingManager {
          public static class: java.lang.Class<com.facebook.appevents.ondeviceprocessing.OnDeviceProcessingManager>;
          public static INSTANCE: com.facebook.appevents.ondeviceprocessing.OnDeviceProcessingManager;
          public static sendCustomEventAsync(applicationId: string, event: com.facebook.appevents.AppEvent): void;
          public static sendInstallEventAsync(context: string, applicationId: string): void;
          public static isOnDeviceProcessingEnabled(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module ondeviceprocessing {
        export class RemoteServiceParametersHelper {
          public static class: java.lang.Class<com.facebook.appevents.ondeviceprocessing.RemoteServiceParametersHelper>;
          public static INSTANCE: com.facebook.appevents.ondeviceprocessing.RemoteServiceParametersHelper;
          public static buildEventsBundle(filteredEventsJson: com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.EventType, eventBundle: string, eventType: java.util.List<com.facebook.appevents.AppEvent>): globalAndroid.os.Bundle;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module ondeviceprocessing {
        export class RemoteServiceWrapper {
          public static class: java.lang.Class<com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper>;
          public static INSTANCE: com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper;
          public static RECEIVER_SERVICE_ACTION: string = 'ReceiverService';
          public static RECEIVER_SERVICE_PACKAGE: string = 'com.facebook.katana';
          public static RECEIVER_SERVICE_PACKAGE_WAKIZASHI: string = 'com.facebook.wakizashi';
          public static sendCustomEvents(applicationId: string, appEvents: java.util.List<com.facebook.appevents.AppEvent>): com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.ServiceResult;
          public static isServiceAvailable(): boolean;
          public static sendInstallEvent(applicationId: string): com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.ServiceResult;
        }
        export module RemoteServiceWrapper {
          export class EventType {
            public static class: java.lang.Class<com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.EventType>;
            public static MOBILE_APP_INSTALL: com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.EventType;
            public static CUSTOM_APP_EVENTS: com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.EventType;
            public static values(): androidNative.Array<com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.EventType>;
            public static valueOf(value: string): com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.EventType;
            public toString(): string;
          }
          export class RemoteServiceConnection {
            public static class: java.lang.Class<com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.RemoteServiceConnection>;
            public onNullBinding(name: globalAndroid.content.ComponentName): void;
            public constructor();
            public getBinder(): globalAndroid.os.IBinder;
            public onServiceDisconnected(name: globalAndroid.content.ComponentName): void;
            public onServiceConnected(name: globalAndroid.content.ComponentName, serviceBinder: globalAndroid.os.IBinder): void;
          }
          export class ServiceResult {
            public static class: java.lang.Class<com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.ServiceResult>;
            public static OPERATION_SUCCESS: com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.ServiceResult;
            public static SERVICE_NOT_AVAILABLE: com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.ServiceResult;
            public static SERVICE_ERROR: com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.ServiceResult;
            public static values(): androidNative.Array<com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.ServiceResult>;
            public static valueOf(value: string): com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.ServiceResult;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module restrictivedatafilter {
        export class RestrictiveDataManager {
          public static class: java.lang.Class<com.facebook.appevents.restrictivedatafilter.RestrictiveDataManager>;
          public static INSTANCE: com.facebook.appevents.restrictivedatafilter.RestrictiveDataManager;
          public static processEvent(eventName: string): string;
          public static enable(): void;
          public static processParameters(type: java.util.Map<string, string>, key: string): void;
        }
        export module RestrictiveDataManager {
          export class RestrictiveParamFilter {
            public static class: java.lang.Class<com.facebook.appevents.restrictivedatafilter.RestrictiveDataManager.RestrictiveParamFilter>;
            public constructor(eventName: string, restrictiveParams: java.util.Map<string, string>);
            public getRestrictiveParams(): java.util.Map<string, string>;
            public getEventName(): string;
            public setEventName(set: string): void;
            public setRestrictiveParams(set: java.util.Map<string, string>): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module suggestedevents {
        export class FeatureExtractor {
          public static class: java.lang.Class<com.facebook.appevents.suggestedevents.FeatureExtractor>;
          public static INSTANCE: com.facebook.appevents.suggestedevents.FeatureExtractor;
          public static initialize(inputStream: java.io.File): void;
          public static getDenseFeatures(viewTree: org.json.JSONObject, screenName: string): androidNative.Array<number>;
          public static getTextFeature(buttonText: string, activityName: string, appName: string): string;
          public static isInitialized(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module suggestedevents {
        export class PredictionHistoryManager {
          public static class: java.lang.Class<com.facebook.appevents.suggestedevents.PredictionHistoryManager>;
          public static INSTANCE: com.facebook.appevents.suggestedevents.PredictionHistoryManager;
          public static queryEvent(pathID: string): string;
          public static addPrediction(pathID: string, predictedEvent: string): void;
          public static getPathID(currentPath: globalAndroid.view.View, view: string): string;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module suggestedevents {
        export class SuggestedEventViewHierarchy {
          public static class: java.lang.Class<com.facebook.appevents.suggestedevents.SuggestedEventViewHierarchy>;
          public static INSTANCE: com.facebook.appevents.suggestedevents.SuggestedEventViewHierarchy;
          public static getTextOfViewRecursively(text: globalAndroid.view.View): string;
          public static updateBasicInfo(text: globalAndroid.view.View, hint: org.json.JSONObject): void;
          public static getAllClickableViews(viewClass: globalAndroid.view.View): java.util.List<globalAndroid.view.View>;
          public static getDictionaryOfView(childInfo: globalAndroid.view.View, child: globalAndroid.view.View): org.json.JSONObject;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module suggestedevents {
        export class SuggestedEventsManager {
          public static class: java.lang.Class<com.facebook.appevents.suggestedevents.SuggestedEventsManager>;
          public static INSTANCE: com.facebook.appevents.suggestedevents.SuggestedEventsManager;
          public static isEnabled(): boolean;
          public populateEventsFromRawJsonString$facebook_core_release(jsonArray: string): void;
          public static trackActivity(activity: globalAndroid.app.Activity): void;
          public static isEligibleEvents$facebook_core_release(event: string): boolean;
          public static isProductionEvents$facebook_core_release(event: string): boolean;
          public static enable(): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module suggestedevents {
        export class ViewObserver {
          public static class: java.lang.Class<com.facebook.appevents.suggestedevents.ViewObserver>;
          public static stopTrackingActivity(activity: globalAndroid.app.Activity): void;
          public onGlobalLayout(): void;
          public static startTrackingActivity(activity: globalAndroid.app.Activity): void;
        }
        export module ViewObserver {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.suggestedevents.ViewObserver.Companion>;
            public startTrackingActivity(answer$iv: globalAndroid.app.Activity): void;
            public stopTrackingActivity(this_: globalAndroid.app.Activity): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module appevents {
      export module suggestedevents {
        export class ViewOnClickListener {
          public static class: java.lang.Class<com.facebook.appevents.suggestedevents.ViewOnClickListener>;
          public static OTHER_EVENT: string = 'other';
          public onClick(view: globalAndroid.view.View): void;
          public static attachListener$facebook_core_release(hostView: globalAndroid.view.View, rootView: globalAndroid.view.View, activityName: string): void;
        }
        export module ViewOnClickListener {
          export class Companion {
            public static class: java.lang.Class<com.facebook.appevents.suggestedevents.ViewOnClickListener.Companion>;
            public attachListener$facebook_core_release(this_: globalAndroid.view.View, hostView: globalAndroid.view.View, rootView: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module core {
      export class BuildConfig {
        public static class: java.lang.Class<com.facebook.core.BuildConfig>;
        public static DEBUG: boolean = 0;
        public static LIBRARY_PACKAGE_NAME: string = 'com.facebook.core';
        public static BUILD_TYPE: string = 'release';
        public constructor();
      }
    }
  }
}

declare module com {
  export module facebook {
    export module core {
      export class Core {
        public static class: java.lang.Class<com.facebook.core.Core>;
        public constructor();
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class AnalyticsEvents {
        public static class: java.lang.Class<com.facebook.internal.AnalyticsEvents>;
        public static INSTANCE: com.facebook.internal.AnalyticsEvents;
        public static EVENT_NATIVE_LOGIN_DIALOG_COMPLETE: string = 'fb_dialogs_native_login_dialog_complete';
        public static EVENT_NATIVE_LOGIN_DIALOG_START: string = 'fb_dialogs_native_login_dialog_start';
        public static EVENT_WEB_LOGIN_COMPLETE: string = 'fb_dialogs_web_login_dialog_complete';
        public static EVENT_FRIEND_PICKER_USAGE: string = 'fb_friend_picker_usage';
        public static EVENT_PLACE_PICKER_USAGE: string = 'fb_place_picker_usage';
        public static EVENT_LOGIN_VIEW_USAGE: string = 'fb_login_view_usage';
        public static EVENT_USER_SETTINGS_USAGE: string = 'fb_user_settings_vc_usage';
        public static EVENT_NATIVE_DIALOG_START: string = 'fb_native_dialog_start';
        public static EVENT_NATIVE_DIALOG_COMPLETE: string = 'fb_native_dialog_complete';
        public static PARAMETER_WEB_LOGIN_E2E: string = 'fb_web_login_e2e';
        public static PARAMETER_WEB_LOGIN_SWITCHBACK_TIME: string = 'fb_web_login_switchback_time';
        public static PARAMETER_APP_ID: string = 'app_id';
        public static PARAMETER_CALL_ID: string = 'call_id';
        public static PARAMETER_ACTION_ID: string = 'action_id';
        public static PARAMETER_NATIVE_LOGIN_DIALOG_START_TIME: string = 'fb_native_login_dialog_start_time';
        public static PARAMETER_NATIVE_LOGIN_DIALOG_COMPLETE_TIME: string = 'fb_native_login_dialog_complete_time';
        public static PARAMETER_DIALOG_OUTCOME: string = 'fb_dialog_outcome';
        public static PARAMETER_DIALOG_OUTCOME_VALUE_COMPLETED: string = 'Completed';
        public static PARAMETER_DIALOG_OUTCOME_VALUE_UNKNOWN: string = 'Unknown';
        public static PARAMETER_DIALOG_OUTCOME_VALUE_CANCELLED: string = 'Cancelled';
        public static PARAMETER_DIALOG_OUTCOME_VALUE_FAILED: string = 'Failed';
        public static EVENT_NATIVE_DIALOG_TYPE_SHARE: string = 'fb_dialogs_present_share';
        public static EVENT_NATIVE_DIALOG_TYPE_MESSAGE: string = 'fb_dialogs_present_message';
        public static EVENT_NATIVE_DIALOG_TYPE_OG_SHARE: string = 'fb_dialogs_present_share_og';
        public static EVENT_NATIVE_DIALOG_TYPE_OG_MESSAGE: string = 'fb_dialogs_present_message_og';
        public static EVENT_NATIVE_DIALOG_TYPE_PHOTO_SHARE: string = 'fb_dialogs_present_share_photo';
        public static EVENT_NATIVE_DIALOG_TYPE_PHOTO_MESSAGE: string = 'fb_dialogs_present_message_photo';
        public static EVENT_NATIVE_DIALOG_TYPE_VIDEO_SHARE: string = 'fb_dialogs_present_share_video';
        public static EVENT_NATIVE_DIALOG_TYPE_LIKE: string = 'fb_dialogs_present_like';
        public static EVENT_LIKE_VIEW_CANNOT_PRESENT_DIALOG: string = 'fb_like_control_cannot_present_dialog';
        public static EVENT_LIKE_VIEW_DID_LIKE: string = 'fb_like_control_did_like';
        public static EVENT_LIKE_VIEW_DID_PRESENT_DIALOG: string = 'fb_like_control_did_present_dialog';
        public static EVENT_LIKE_VIEW_DID_PRESENT_FALLBACK: string = 'fb_like_control_did_present_fallback_dialog';
        public static EVENT_LIKE_VIEW_DID_UNLIKE: string = 'fb_like_control_did_unlike';
        public static EVENT_LIKE_VIEW_DID_UNDO_QUICKLY: string = 'fb_like_control_did_undo_quickly';
        public static EVENT_LIKE_VIEW_DIALOG_DID_SUCCEED: string = 'fb_like_control_dialog_did_succeed';
        public static EVENT_LIKE_VIEW_ERROR: string = 'fb_like_control_error';
        public static PARAMETER_LIKE_VIEW_STYLE: string = 'style';
        public static PARAMETER_LIKE_VIEW_AUXILIARY_POSITION: string = 'auxiliary_position';
        public static PARAMETER_LIKE_VIEW_HORIZONTAL_ALIGNMENT: string = 'horizontal_alignment';
        public static PARAMETER_LIKE_VIEW_OBJECT_ID: string = 'object_id';
        public static PARAMETER_LIKE_VIEW_OBJECT_TYPE: string = 'object_type';
        public static PARAMETER_LIKE_VIEW_CURRENT_ACTION: string = 'current_action';
        public static PARAMETER_LIKE_VIEW_ERROR_JSON: string = 'error';
        public static PARAMETER_SHARE_OUTCOME: string = 'fb_share_dialog_outcome';
        public static PARAMETER_SHARE_OUTCOME_SUCCEEDED: string = 'succeeded';
        public static PARAMETER_SHARE_OUTCOME_CANCELLED: string = 'cancelled';
        public static PARAMETER_SHARE_OUTCOME_ERROR: string = 'error';
        public static PARAMETER_SHARE_OUTCOME_UNKNOWN: string = 'unknown';
        public static PARAMETER_SHARE_ERROR_MESSAGE: string = 'error_message';
        public static PARAMETER_SHARE_DIALOG_SHOW: string = 'fb_share_dialog_show';
        public static PARAMETER_SHARE_DIALOG_SHOW_WEB: string = 'web';
        public static PARAMETER_SHARE_DIALOG_SHOW_NATIVE: string = 'native';
        public static PARAMETER_SHARE_DIALOG_SHOW_AUTOMATIC: string = 'automatic';
        public static PARAMETER_SHARE_DIALOG_SHOW_UNKNOWN: string = 'unknown';
        public static PARAMETER_SHARE_DIALOG_CONTENT_TYPE: string = 'fb_share_dialog_content_type';
        public static PARAMETER_SHARE_DIALOG_CONTENT_UUID: string = 'fb_share_dialog_content_uuid';
        public static PARAMETER_SHARE_DIALOG_CONTENT_PAGE_ID: string = 'fb_share_dialog_content_page_id';
        public static PARAMETER_SHARE_DIALOG_CONTENT_VIDEO: string = 'video';
        public static PARAMETER_SHARE_DIALOG_CONTENT_PHOTO: string = 'photo';
        public static PARAMETER_SHARE_DIALOG_CONTENT_STATUS: string = 'status';
        public static PARAMETER_SHARE_DIALOG_CONTENT_UNKNOWN: string = 'unknown';
        public static EVENT_SHARE_RESULT: string = 'fb_share_dialog_result';
        public static EVENT_SHARE_DIALOG_SHOW: string = 'fb_share_dialog_show';
        public static EVENT_SHARE_MESSENGER_DIALOG_SHOW: string = 'fb_messenger_share_dialog_show';
        public static EVENT_LIKE_BUTTON_CREATE: string = 'fb_like_button_create';
        public static EVENT_LOGIN_BUTTON_CREATE: string = 'fb_login_button_create';
        public static EVENT_SHARE_BUTTON_CREATE: string = 'fb_share_button_create';
        public static EVENT_SEND_BUTTON_CREATE: string = 'fb_send_button_create';
        public static EVENT_SHARE_BUTTON_DID_TAP: string = 'fb_share_button_did_tap';
        public static EVENT_SEND_BUTTON_DID_TAP: string = 'fb_send_button_did_tap';
        public static EVENT_LIKE_BUTTON_DID_TAP: string = 'fb_like_button_did_tap';
        public static EVENT_LOGIN_BUTTON_DID_TAP: string = 'fb_login_button_did_tap';
        public static EVENT_DEVICE_SHARE_BUTTON_CREATE: string = 'fb_device_share_button_create';
        public static EVENT_DEVICE_SHARE_BUTTON_DID_TAP: string = 'fb_device_share_button_did_tap';
        public static EVENT_SMART_LOGIN_SERVICE: string = 'fb_smart_login_service';
        public static EVENT_SDK_INITIALIZE: string = 'fb_sdk_initialize';
        public static PARAMETER_SHARE_MESSENGER_GENERIC_TEMPLATE: string = 'GenericTemplate';
        public static PARAMETER_SHARE_MESSENGER_MEDIA_TEMPLATE: string = 'MediaTemplate';
        public static EVENT_FOA_LOGIN_BUTTON_CREATE: string = 'foa_login_button_create';
        public static EVENT_FOA_LOGIN_BUTTON_DID_TAP: string = 'foa_login_button_did_tap';
        public static EVENT_FOA_DISAMBIGUATION_DIALOG_FB_DID_TAP: string = 'foa_disambiguation_dialog_fb_did_tap';
        public static EVENT_FOA_DISAMBIGUATION_DIALOG_IG_DID_TAP: string = 'foa_disambiguation_dialog_ig_did_tap';
        public static EVENT_FOA_DISAMBIGUATION_DIALOG_CANCELLED: string = 'foa_disambiguation_dialog_cancelled';
        public static EVENT_FOA_FB_LOGIN_BUTTON_CREATE: string = 'foa_fb_login_button_create';
        public static EVENT_FOA_FB_LOGIN_BUTTON_DID_TAP: string = 'foa_fb_login_button_did_tap';
        public static EVENT_FOA_IG_LOGIN_BUTTON_CREATE: string = 'foa_ig_login_button_create';
        public static EVENT_FOA_IG_LOGIN_BUTTON_DID_TAP: string = 'foa_ig_login_button_did_tap';
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class AttributionIdentifiers {
        public static class: java.lang.Class<com.facebook.internal.AttributionIdentifiers>;
        public static ATTRIBUTION_ID_CONTENT_PROVIDER: string = 'com.facebook.katana.provider.AttributionIdProvider';
        public static cachedIdentifiers: com.facebook.internal.AttributionIdentifiers;
        public static isTrackingLimited(context: globalAndroid.content.Context): boolean;
        public getAndroidInstallerPackage(): string;
        public getAndroidAdvertiserId(): string;
        public isTrackingLimited(): boolean;
        public getAttributionId(): string;
        public constructor();
        public static getAttributionIdentifiers(context: globalAndroid.content.Context): com.facebook.internal.AttributionIdentifiers;
      }
      export module AttributionIdentifiers {
        export class Companion {
          public static class: java.lang.Class<com.facebook.internal.AttributionIdentifiers.Companion>;
          public getAttributionIdentifiers(cachedIdentifiers: globalAndroid.content.Context): com.facebook.internal.AttributionIdentifiers;
          public isTrackingLimited(this_: globalAndroid.content.Context): boolean;
        }
        export class GoogleAdInfo {
          public static class: java.lang.Class<com.facebook.internal.AttributionIdentifiers.GoogleAdInfo>;
          public getAdvertiserId(): string;
          public isTrackingLimited(): boolean;
          public asBinder(): globalAndroid.os.IBinder;
          public constructor(binder: globalAndroid.os.IBinder);
        }
        export module GoogleAdInfo {
          export class Companion {
            public static class: java.lang.Class<com.facebook.internal.AttributionIdentifiers.GoogleAdInfo.Companion>;
          }
        }
        export class GoogleAdServiceConnection {
          public static class: java.lang.Class<com.facebook.internal.AttributionIdentifiers.GoogleAdServiceConnection>;
          public onServiceDisconnected(name: globalAndroid.content.ComponentName): void;
          public constructor();
          public getBinder(): globalAndroid.os.IBinder;
          public onServiceConnected(name: globalAndroid.content.ComponentName, service: globalAndroid.os.IBinder): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class BoltsMeasurementEventListener {
        public static class: java.lang.Class<com.facebook.internal.BoltsMeasurementEventListener>;
        public onReceive(key: globalAndroid.content.Context, logger: globalAndroid.content.Intent): void;
        public static getInstance(context: globalAndroid.content.Context): com.facebook.internal.BoltsMeasurementEventListener;
        public finalize(): void;
      }
      export module BoltsMeasurementEventListener {
        export class Companion {
          public static class: java.lang.Class<com.facebook.internal.BoltsMeasurementEventListener.Companion>;
          public getInstance(this_: globalAndroid.content.Context): com.facebook.internal.BoltsMeasurementEventListener;
          public getMEASUREMENT_EVENT_NOTIFICATION_NAME$facebook_core_release(): string;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class BundleJSONConverter {
        public static class: java.lang.Class<com.facebook.internal.BundleJSONConverter>;
        public static INSTANCE: com.facebook.internal.BundleJSONConverter;
        public static convertToJSON(stringValue: globalAndroid.os.Bundle): org.json.JSONObject;
        public static convertToBundle(key: org.json.JSONObject): globalAndroid.os.Bundle;
      }
      export module BundleJSONConverter {
        export class Setter {
          public static class: java.lang.Class<com.facebook.internal.BundleJSONConverter.Setter>;
          /**
           * Constructs a new instance of the com.facebook.internal.BundleJSONConverter$Setter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { setOnBundle(param0: globalAndroid.os.Bundle, param1: string, param2: any): void; setOnJSON(param0: org.json.JSONObject, param1: string, param2: any): void });
          public constructor();
          public setOnJSON(param0: org.json.JSONObject, param1: string, param2: any): void;
          public setOnBundle(param0: globalAndroid.os.Bundle, param1: string, param2: any): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class CallbackManagerImpl extends com.facebook.CallbackManager {
        public static class: java.lang.Class<com.facebook.internal.CallbackManagerImpl>;
        public registerCallback(requestCode: number, callback: com.facebook.internal.CallbackManagerImpl.Callback): void;
        public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
        public unregisterCallback(requestCode: number): void;
        public static registerStaticCallback(requestCode: number, callback: com.facebook.internal.CallbackManagerImpl.Callback): void;
        public onActivityResult(this_: number, requestCode: number, resultCode: globalAndroid.content.Intent): boolean;
        public constructor();
      }
      export module CallbackManagerImpl {
        export class Callback {
          public static class: java.lang.Class<com.facebook.internal.CallbackManagerImpl.Callback>;
          /**
           * Constructs a new instance of the com.facebook.internal.CallbackManagerImpl$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onActivityResult(param0: number, param1: globalAndroid.content.Intent): boolean });
          public constructor();
          public onActivityResult(param0: number, param1: globalAndroid.content.Intent): boolean;
        }
        export class Companion {
          public static class: java.lang.Class<com.facebook.internal.CallbackManagerImpl.Companion>;
          public registerStaticCallback(requestCode: number, callback: com.facebook.internal.CallbackManagerImpl.Callback): void;
        }
        export class RequestCodeOffset {
          public static class: java.lang.Class<com.facebook.internal.CallbackManagerImpl.RequestCodeOffset>;
          public static Login: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
          public static Share: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
          public static Message: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
          public static Like: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
          public static GameRequest: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
          public static AppGroupCreate: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
          public static AppGroupJoin: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
          public static AppInvite: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
          public static DeviceShare: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
          public static GamingFriendFinder: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
          public static GamingGroupIntegration: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
          public static Referral: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
          public static GamingContextCreate: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
          public static GamingContextSwitch: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
          public static GamingContextChoose: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
          public static TournamentShareDialog: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
          public static TournamentJoinDialog: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
          public static values(): androidNative.Array<com.facebook.internal.CallbackManagerImpl.RequestCodeOffset>;
          public static valueOf(value: string): com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
          public toRequestCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class FacebookInitProvider {
        public static class: java.lang.Class<com.facebook.internal.FacebookInitProvider>;
        public insert(uri: globalAndroid.net.Uri, values: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
        public query(uri: globalAndroid.net.Uri, projection: androidNative.Array<string>, selection: string, selectionArgs: androidNative.Array<string>, sortOrder: string): globalAndroid.database.Cursor;
        public delete(uri: globalAndroid.net.Uri, selection: string, selectionArgs: androidNative.Array<string>): number;
        public update(uri: globalAndroid.net.Uri, values: globalAndroid.content.ContentValues, selection: string, selectionArgs: androidNative.Array<string>): number;
        public onCreate(): boolean;
        public getType(uri: globalAndroid.net.Uri): string;
        public constructor();
      }
      export module FacebookInitProvider {
        export class Companion {
          public static class: java.lang.Class<com.facebook.internal.FacebookInitProvider.Companion>;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class FacebookRequestErrorClassification {
        public static class: java.lang.Class<com.facebook.internal.FacebookRequestErrorClassification>;
        public static EC_SERVICE_UNAVAILABLE: number = 2;
        public static EC_APP_TOO_MANY_CALLS: number = 4;
        public static EC_RATE: number = 9;
        public static EC_USER_TOO_MANY_CALLS: number = 17;
        public static EC_INVALID_SESSION: number = 102;
        public static EC_INVALID_TOKEN: number = 190;
        public static EC_APP_NOT_INSTALLED: number = 412;
        public static EC_TOO_MANY_USER_ACTION_CALLS: number = 341;
        public static ESC_APP_NOT_INSTALLED: number = 458;
        public static ESC_APP_INACTIVE: number = 493;
        public static KEY_RECOVERY_MESSAGE: string = 'recovery_message';
        public static KEY_NAME: string = 'name';
        public static KEY_OTHER: string = 'other';
        public static KEY_TRANSIENT: string = 'transient';
        public static KEY_LOGIN_RECOVERABLE: string = 'login_recoverable';
        public getLoginRecoverableErrors(): java.util.Map<java.lang.Integer, java.util.Set<java.lang.Integer>>;
        public static getDefaultErrorClassification(): com.facebook.internal.FacebookRequestErrorClassification;
        public getTransientErrors(): java.util.Map<java.lang.Integer, java.util.Set<java.lang.Integer>>;
        public getOtherErrors(): java.util.Map<java.lang.Integer, java.util.Set<java.lang.Integer>>;
        public constructor(otherErrors: java.util.Map<java.lang.Integer, any>, transientErrors: java.util.Map<java.lang.Integer, any>, loginRecoverableErrors: java.util.Map<java.lang.Integer, any>, otherRecoveryMessage: string, transientRecoveryMessage: string, loginRecoverableRecoveryMessage: string);
        public classify(subCodes: number, subCodes: number, this_: boolean): com.facebook.FacebookRequestError.Category;
        public getRecoveryMessage(category: com.facebook.FacebookRequestError.Category): string;
        public static createFromJSON(jsonArray: org.json.JSONArray): com.facebook.internal.FacebookRequestErrorClassification;
      }
      export module FacebookRequestErrorClassification {
        export class Companion {
          public static class: java.lang.Class<com.facebook.internal.FacebookRequestErrorClassification.Companion>;
          public createFromJSON(name: org.json.JSONArray): com.facebook.internal.FacebookRequestErrorClassification;
          public getDefaultErrorClassification(): com.facebook.internal.FacebookRequestErrorClassification;
        }
        export class WhenMappings {
          public static class: java.lang.Class<com.facebook.internal.FacebookRequestErrorClassification.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class FacebookSignatureValidator {
        public static class: java.lang.Class<com.facebook.internal.FacebookSignatureValidator>;
        public static INSTANCE: com.facebook.internal.FacebookSignatureValidator;
        public static validateSignature(allFacebookSignatureValidator$validateSignature$1: globalAndroid.content.Context, it: string): boolean;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class FeatureManager {
        public static class: java.lang.Class<com.facebook.internal.FeatureManager>;
        public static INSTANCE: com.facebook.internal.FeatureManager;
        public static disableFeature(feature: com.facebook.internal.FeatureManager.Feature): void;
        public static isEnabled(version: com.facebook.internal.FeatureManager.Feature): boolean;
        public static getFeature(v: string): com.facebook.internal.FeatureManager.Feature;
        public static checkFeature(feature: com.facebook.internal.FeatureManager.Feature, callback: com.facebook.internal.FeatureManager.Callback): void;
      }
      export module FeatureManager {
        export class Callback {
          public static class: java.lang.Class<com.facebook.internal.FeatureManager.Callback>;
          /**
           * Constructs a new instance of the com.facebook.internal.FeatureManager$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCompleted(param0: boolean): void });
          public constructor();
          public onCompleted(param0: boolean): void;
        }
        export class Feature {
          public static class: java.lang.Class<com.facebook.internal.FeatureManager.Feature>;
          public static Unknown: com.facebook.internal.FeatureManager.Feature;
          public static Core: com.facebook.internal.FeatureManager.Feature;
          public static AppEvents: com.facebook.internal.FeatureManager.Feature;
          public static CodelessEvents: com.facebook.internal.FeatureManager.Feature;
          public static CloudBridge: com.facebook.internal.FeatureManager.Feature;
          public static RestrictiveDataFiltering: com.facebook.internal.FeatureManager.Feature;
          public static AAM: com.facebook.internal.FeatureManager.Feature;
          public static PrivacyProtection: com.facebook.internal.FeatureManager.Feature;
          public static SuggestedEvents: com.facebook.internal.FeatureManager.Feature;
          public static IntelligentIntegrity: com.facebook.internal.FeatureManager.Feature;
          public static ModelRequest: com.facebook.internal.FeatureManager.Feature;
          public static ProtectedMode: com.facebook.internal.FeatureManager.Feature;
          public static MACARuleMatching: com.facebook.internal.FeatureManager.Feature;
          public static BlocklistEvents: com.facebook.internal.FeatureManager.Feature;
          public static FilterRedactedEvents: com.facebook.internal.FeatureManager.Feature;
          public static FilterSensitiveParams: com.facebook.internal.FeatureManager.Feature;
          public static StdParamEnforcement: com.facebook.internal.FeatureManager.Feature;
          public static BannedParamFiltering: com.facebook.internal.FeatureManager.Feature;
          public static EventDeactivation: com.facebook.internal.FeatureManager.Feature;
          public static OnDeviceEventProcessing: com.facebook.internal.FeatureManager.Feature;
          public static OnDevicePostInstallEventProcessing: com.facebook.internal.FeatureManager.Feature;
          public static IapLogging: com.facebook.internal.FeatureManager.Feature;
          public static IapLoggingLib2: com.facebook.internal.FeatureManager.Feature;
          public static IapLoggingLib5To7: com.facebook.internal.FeatureManager.Feature;
          public static AndroidManualImplicitPurchaseDedupe: com.facebook.internal.FeatureManager.Feature;
          public static AndroidManualImplicitSubsDedupe: com.facebook.internal.FeatureManager.Feature;
          public static AndroidIAPSubscriptionAutoLogging: com.facebook.internal.FeatureManager.Feature;
          public static Instrument: com.facebook.internal.FeatureManager.Feature;
          public static CrashReport: com.facebook.internal.FeatureManager.Feature;
          public static CrashShield: com.facebook.internal.FeatureManager.Feature;
          public static ThreadCheck: com.facebook.internal.FeatureManager.Feature;
          public static ErrorReport: com.facebook.internal.FeatureManager.Feature;
          public static AnrReport: com.facebook.internal.FeatureManager.Feature;
          public static Monitoring: com.facebook.internal.FeatureManager.Feature;
          public static ServiceUpdateCompliance: com.facebook.internal.FeatureManager.Feature;
          public static Megatron: com.facebook.internal.FeatureManager.Feature;
          public static Elora: com.facebook.internal.FeatureManager.Feature;
          public static GPSARATriggers: com.facebook.internal.FeatureManager.Feature;
          public static GPSPACAProcessing: com.facebook.internal.FeatureManager.Feature;
          public static Login: com.facebook.internal.FeatureManager.Feature;
          public static ChromeCustomTabsPrefetching: com.facebook.internal.FeatureManager.Feature;
          public static IgnoreAppSwitchToLoggedOut: com.facebook.internal.FeatureManager.Feature;
          public static BypassAppSwitch: com.facebook.internal.FeatureManager.Feature;
          public static Share: com.facebook.internal.FeatureManager.Feature;
          public toString(): string;
          public getParent(): com.facebook.internal.FeatureManager.Feature;
          public static valueOf(value: string): com.facebook.internal.FeatureManager.Feature;
          public static values(): androidNative.Array<com.facebook.internal.FeatureManager.Feature>;
          public toKey(): string;
        }
        export module Feature {
          export class Companion {
            public static class: java.lang.Class<com.facebook.internal.FeatureManager.Feature.Companion>;
            public fromInt(this_: number): com.facebook.internal.FeatureManager.Feature;
          }
          export class WhenMappings {
            public static class: java.lang.Class<com.facebook.internal.FeatureManager.Feature.WhenMappings>;
          }
        }
        export class WhenMappings {
          public static class: java.lang.Class<com.facebook.internal.FeatureManager.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class FetchedAppGateKeepersManager {
        public static class: java.lang.Class<com.facebook.internal.FetchedAppGateKeepersManager>;
        public static INSTANCE: com.facebook.internal.FetchedAppGateKeepersManager;
        public loadAppGateKeepersAsync(): void;
        public static loadAppGateKeepersAsync(je: com.facebook.internal.FetchedAppGateKeepersManager.Callback): void;
        public static resetRuntimeGateKeeperCache(): void;
        public static getGateKeeperForKey(map: string, name: string, applicationId: boolean): boolean;
        public getGateKeepersForApplication(it: string): java.util.Map<string, java.lang.Boolean>;
        public static queryAppGateKeepers(response: string, context: boolean): org.json.JSONObject;
        public static parseAppGateKeepersFromJSON$facebook_core_release(gk: string, je: org.json.JSONObject): org.json.JSONObject;
        public static setRuntimeGateKeeper(applicationId: string, gateKeeper: com.facebook.internal.gatekeeper.GateKeeper): void;
      }
      export module FetchedAppGateKeepersManager {
        export class Callback {
          public static class: java.lang.Class<com.facebook.internal.FetchedAppGateKeepersManager.Callback>;
          /**
           * Constructs a new instance of the com.facebook.internal.FetchedAppGateKeepersManager$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCompleted(): void });
          public constructor();
          public onCompleted(): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class FetchedAppSettings {
        public static class: java.lang.Class<com.facebook.internal.FetchedAppSettings>;
        public getSensitiveParams(): org.json.JSONArray;
        public getSmartLoginMenuIconURL(): string;
        public getProdDedupeParameters(): java.util.List<any>;
        public static getDialogFeatureConfig(applicationId: string, actionName: string, featureName: string): com.facebook.internal.FetchedAppSettings.DialogFeatureConfig;
        public getRestrictiveDataSetting(): string;
        public getIAPAutomaticLoggingEnabled(): boolean;
        public getCodelessEventsEnabled(): boolean;
        public getPurchaseValueDedupeParameters(): java.util.List<string>;
        public getProtectedModeStandardParamsSetting(): org.json.JSONArray;
        public getSmartLoginOptions(): java.util.EnumSet<com.facebook.internal.SmartLoginOption>;
        public getMACARuleMatchingSetting(): org.json.JSONArray;
        public getTrackUninstallEnabled(): boolean;
        public constructor(
          supportsImplicitLogging: boolean,
          nuxContent: string,
          nuxEnabled: boolean,
          sessionTimeoutInSeconds: number,
          smartLoginOptions: java.util.EnumSet<com.facebook.internal.SmartLoginOption>,
          dialogConfigurations: java.util.Map<string, any>,
          automaticLoggingEnabled: boolean,
          errorClassification: com.facebook.internal.FacebookRequestErrorClassification,
          smartLoginBookmarkIconURL: string,
          smartLoginMenuIconURL: string,
          iAPAutomaticLoggingEnabled: boolean,
          codelessEventsEnabled: boolean,
          eventBindings: org.json.JSONArray,
          sdkUpdateMessage: string,
          trackUninstallEnabled: boolean,
          monitorViaDialogEnabled: boolean,
          rawAamRules: string,
          suggestedEventsSetting: string,
          restrictiveDataSetting: string,
          protectedModeStandardParamsSetting: org.json.JSONArray,
          MACARuleMatchingSetting: org.json.JSONArray,
          migratedAutoLogValues: java.util.Map<string, java.lang.Boolean>,
          blocklistEvents: org.json.JSONArray,
          redactedEvents: org.json.JSONArray,
          sensitiveParams: org.json.JSONArray,
          schemaRestrictions: org.json.JSONArray,
          bannedParams: org.json.JSONArray,
          currencyDedupeParameters: java.util.List<string>,
          purchaseValueDedupeParameters: java.util.List<string>,
          prodDedupeParameters: java.util.List<any>,
          testDedupeParameters: java.util.List<any>,
          dedupeWindow: java.lang.Long
        );
        public getSchemaRestrictions(): org.json.JSONArray;
        public getMonitorViaDialogEnabled(): boolean;
        public getAutomaticLoggingEnabled(): boolean;
        public getSmartLoginBookmarkIconURL(): string;
        public getSuggestedEventsSetting(): string;
        public getDedupeWindow(): java.lang.Long;
        public getRawAamRules(): string;
        public getErrorClassification(): com.facebook.internal.FacebookRequestErrorClassification;
        public getMigratedAutoLogValues(): java.util.Map<string, java.lang.Boolean>;
        public getTestDedupeParameters(): java.util.List<any>;
        public getEventBindings(): org.json.JSONArray;
        public getSdkUpdateMessage(): string;
        public getBannedParams(): org.json.JSONArray;
        public getNuxContent(): string;
        public getBlocklistEvents(): org.json.JSONArray;
        public getSessionTimeoutInSeconds(): number;
        public getCurrencyDedupeParameters(): java.util.List<string>;
        public getDialogConfigurations(): java.util.Map<string, java.util.Map<string, com.facebook.internal.FetchedAppSettings.DialogFeatureConfig>>;
        public getNuxEnabled(): boolean;
        public supportsImplicitLogging(): boolean;
        public getRedactedEvents(): org.json.JSONArray;
      }
      export module FetchedAppSettings {
        export class Companion {
          public static class: java.lang.Class<com.facebook.internal.FetchedAppSettings.Companion>;
          public getDialogFeatureConfig(featureMap: string, this_: string, applicationId: string): com.facebook.internal.FetchedAppSettings.DialogFeatureConfig;
        }
        export class DialogFeatureConfig {
          public static class: java.lang.Class<com.facebook.internal.FetchedAppSettings.DialogFeatureConfig>;
          public getFeatureName(): string;
          public getFallbackUrl(): globalAndroid.net.Uri;
          public getVersionSpec(): androidNative.Array<number>;
          public getDialogName(): string;
        }
        export module DialogFeatureConfig {
          export class Companion {
            public static class: java.lang.Class<com.facebook.internal.FetchedAppSettings.DialogFeatureConfig.Companion>;
            public parseDialogConfig(components: org.json.JSONObject): com.facebook.internal.FetchedAppSettings.DialogFeatureConfig;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class FetchedAppSettingsManager {
        public static class: java.lang.Class<com.facebook.internal.FetchedAppSettingsManager>;
        public static INSTANCE: com.facebook.internal.FetchedAppSettingsManager;
        public static AUTO_LOG_APP_EVENTS_DEFAULT_FIELD: string = 'auto_log_app_events_default';
        public static AUTO_LOG_APP_EVENT_ENABLED_FIELD: string = 'auto_log_app_events_enabled';
        public static getAppSettingsWithoutQuery(applicationId: string): com.facebook.internal.FetchedAppSettings;
        public parseAppSettingsFromJSON$facebook_core_release(errorClassification: string, featureBitmask: org.json.JSONObject): com.facebook.internal.FetchedAppSettings;
        public static queryAppSettings(response: string, fetchedAppSettings: boolean): com.facebook.internal.FetchedAppSettings;
        public static getAppSettingsAsync(callback: com.facebook.internal.FetchedAppSettingsManager.FetchedAppSettingsCallback): void;
        public static loadAppSettingsAsync(): void;
        public static getCachedMigratedAutoLogValuesInAppSettings(): java.util.Map<string, java.lang.Boolean>;
        public static setIsUnityInit(flag: boolean): void;
      }
      export module FetchedAppSettingsManager {
        export class FetchAppSettingState {
          public static class: java.lang.Class<com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState>;
          public static NOT_LOADED: com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState;
          public static LOADING: com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState;
          public static SUCCESS: com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState;
          public static ERROR: com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState;
          public static values(): androidNative.Array<com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState>;
          public static valueOf(value: string): com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState;
        }
        export class FetchedAppSettingsCallback {
          public static class: java.lang.Class<com.facebook.internal.FetchedAppSettingsManager.FetchedAppSettingsCallback>;
          /**
           * Constructs a new instance of the com.facebook.internal.FetchedAppSettingsManager$FetchedAppSettingsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSuccess(param0: com.facebook.internal.FetchedAppSettings): void; onError(): void });
          public constructor();
          public onSuccess(param0: com.facebook.internal.FetchedAppSettings): void;
          public onError(): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class FileLruCache {
        public static class: java.lang.Class<com.facebook.internal.FileLruCache>;
        public interceptAndPut(this_: string, key: java.io.InputStream): java.io.InputStream;
        public openPutStream(key: string): java.io.OutputStream;
        public get(key: string): java.io.InputStream;
        public get(header: string, header: string): java.io.InputStream;
        public openPutStream(header: string, e: string): java.io.OutputStream;
        public getLocation(): string;
        public sizeInBytesForTest(): number;
        public toString(): string;
        public constructor(tag: string, limits: com.facebook.internal.FileLruCache.Limits);
        public clearCache(): void;
      }
      export module FileLruCache {
        export class BufferFile {
          public static class: java.lang.Class<com.facebook.internal.FileLruCache.BufferFile>;
          public static INSTANCE: com.facebook.internal.FileLruCache.BufferFile;
          public excludeBufferFiles(): java.io.FilenameFilter;
          public newFile(this_: java.io.File): java.io.File;
          public deleteAll(filesToDelete: java.io.File): void;
          public excludeNonBufferFiles(): java.io.FilenameFilter;
        }
        export class CloseCallbackOutputStream {
          public static class: java.lang.Class<com.facebook.internal.FileLruCache.CloseCallbackOutputStream>;
          public getCallback(): com.facebook.internal.FileLruCache.StreamCloseCallback;
          public write(buffer: androidNative.Array<number>): void;
          public write(buffer: androidNative.Array<number>, offset: number, count: number): void;
          public getInnerStream(): java.io.OutputStream;
          public close(): void;
          public constructor(innerStream: java.io.OutputStream, callback: com.facebook.internal.FileLruCache.StreamCloseCallback);
          public flush(): void;
          public write(oneByte: number): void;
        }
        export class Companion {
          public static class: java.lang.Class<com.facebook.internal.FileLruCache.Companion>;
          public getTAG(): string;
        }
        export class CopyingInputStream {
          public static class: java.lang.Class<com.facebook.internal.FileLruCache.CopyingInputStream>;
          public available(): number;
          public read(): number;
          public reset(): void;
          public getOutput(): java.io.OutputStream;
          public read(this_: androidNative.Array<number>, buffer: number, offset: number): number;
          public read(this_: androidNative.Array<number>): number;
          public markSupported(): boolean;
          public close(): void;
          public constructor(input: java.io.InputStream, output: java.io.OutputStream);
          public skip(buffer: number): number;
          public getInput(): java.io.InputStream;
          public mark(readlimit: number): void;
        }
        export class Limits {
          public static class: java.lang.Class<com.facebook.internal.FileLruCache.Limits>;
          public setFileCount(value: number): void;
          public constructor();
          public setByteCount(value: number): void;
          public getFileCount(): number;
          public getByteCount(): number;
        }
        export class ModifiedFile extends java.lang.Comparable<com.facebook.internal.FileLruCache.ModifiedFile> {
          public static class: java.lang.Class<com.facebook.internal.FileLruCache.ModifiedFile>;
          public constructor(file: java.io.File);
          public compareTo(another: com.facebook.internal.FileLruCache.ModifiedFile): number;
          public getFile(): java.io.File;
          public equals(another: any): boolean;
          public hashCode(): number;
          public getModified(): number;
        }
        export module ModifiedFile {
          export class Companion {
            public static class: java.lang.Class<com.facebook.internal.FileLruCache.ModifiedFile.Companion>;
          }
        }
        export class StreamCloseCallback {
          public static class: java.lang.Class<com.facebook.internal.FileLruCache.StreamCloseCallback>;
          /**
           * Constructs a new instance of the com.facebook.internal.FileLruCache$StreamCloseCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onClose(): void });
          public constructor();
          public onClose(): void;
        }
        export class StreamHeader {
          public static class: java.lang.Class<com.facebook.internal.FileLruCache.StreamHeader>;
          public static INSTANCE: com.facebook.internal.FileLruCache.StreamHeader;
          public writeHeader(headerBytes: java.io.OutputStream, this_: org.json.JSONObject): void;
          public readHeader(b: java.io.InputStream): org.json.JSONObject;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class ImageDownloader {
        public static class: java.lang.Class<com.facebook.internal.ImageDownloader>;
        public static INSTANCE: com.facebook.internal.ImageDownloader;
        public static downloadAsync(synchronizedImageDownloader$downloadAsync$1: com.facebook.internal.ImageRequest): void;
        public getPendingRequests(): java.util.Map<com.facebook.internal.ImageDownloader.RequestKey, com.facebook.internal.ImageDownloader.DownloaderContext>;
        public static cancelRequest(workItem: com.facebook.internal.ImageRequest): boolean;
        public static clearCache(): void;
        public static prioritizeRequest(synchronizedImageDownloader$prioritizeRequest$1: com.facebook.internal.ImageRequest): void;
      }
      export module ImageDownloader {
        export class CacheReadWorkItem {
          public static class: java.lang.Class<com.facebook.internal.ImageDownloader.CacheReadWorkItem>;
          public run(): void;
          public constructor(key: com.facebook.internal.ImageDownloader.RequestKey, allowCachedRedirects: boolean);
        }
        export class DownloadImageWorkItem {
          public static class: java.lang.Class<com.facebook.internal.ImageDownloader.DownloadImageWorkItem>;
          public constructor(key: com.facebook.internal.ImageDownloader.RequestKey);
          public run(): void;
        }
        export class DownloaderContext {
          public static class: java.lang.Class<com.facebook.internal.ImageDownloader.DownloaderContext>;
          public setRequest(set: com.facebook.internal.ImageRequest): void;
          public isCancelled(): boolean;
          public getWorkItem(): com.facebook.internal.WorkQueue.WorkItem;
          public setCancelled(set: boolean): void;
          public getRequest(): com.facebook.internal.ImageRequest;
          public constructor(request: com.facebook.internal.ImageRequest);
          public setWorkItem(set: com.facebook.internal.WorkQueue.WorkItem): void;
        }
        export class RequestKey {
          public static class: java.lang.Class<com.facebook.internal.ImageDownloader.RequestKey>;
          public constructor(uri: globalAndroid.net.Uri, tag: any);
          public getTag(): any;
          public equals(isEqual: any): boolean;
          public getUri(): globalAndroid.net.Uri;
          public setUri(set: globalAndroid.net.Uri): void;
          public setTag(set: any): void;
          public hashCode(): number;
        }
        export module RequestKey {
          export class Companion {
            public static class: java.lang.Class<com.facebook.internal.ImageDownloader.RequestKey.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class ImageRequest {
        public static class: java.lang.Class<com.facebook.internal.ImageRequest>;
        public static UNSPECIFIED_DIMENSION: number = 0;
        public static getProfilePictureUri(userId: string, width: number, height: number): globalAndroid.net.Uri;
        public static getProfilePictureUri(userId: string, width: number, height: number, accessToken: string): globalAndroid.net.Uri;
        public getContext(): globalAndroid.content.Context;
        public getImageUri(): globalAndroid.net.Uri;
        public getCallerTag(): any;
        public getAllowCachedRedirects(): boolean;
        public getCallback(): com.facebook.internal.ImageRequest.Callback;
        public isCachedRedirectAllowed(): boolean;
      }
      export module ImageRequest {
        export class Builder {
          public static class: java.lang.Class<com.facebook.internal.ImageRequest.Builder>;
          public constructor(context: globalAndroid.content.Context, imageUri: globalAndroid.net.Uri);
          public setCallerTag(callerTag: any): com.facebook.internal.ImageRequest.Builder;
          public toString(): string;
          public setAllowCachedRedirects(allowCachedRedirects: boolean): com.facebook.internal.ImageRequest.Builder;
          public equals(other: any): boolean;
          public setCallback(callback: com.facebook.internal.ImageRequest.Callback): com.facebook.internal.ImageRequest.Builder;
          public build(): com.facebook.internal.ImageRequest;
          public hashCode(): number;
          public copy(context: globalAndroid.content.Context, imageUri: globalAndroid.net.Uri): com.facebook.internal.ImageRequest.Builder;
        }
        export class Callback {
          public static class: java.lang.Class<com.facebook.internal.ImageRequest.Callback>;
          /**
           * Constructs a new instance of the com.facebook.internal.ImageRequest$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCompleted(param0: com.facebook.internal.ImageResponse): void });
          public constructor();
          public onCompleted(param0: com.facebook.internal.ImageResponse): void;
        }
        export class Companion {
          public static class: java.lang.Class<com.facebook.internal.ImageRequest.Companion>;
          public getProfilePictureUri(userId: string, width: number, height: number): globalAndroid.net.Uri;
          public getProfilePictureUri(width: string, height: number, builder: number, this_: string): globalAndroid.net.Uri;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class ImageResponse {
        public static class: java.lang.Class<com.facebook.internal.ImageResponse>;
        public constructor(request: com.facebook.internal.ImageRequest, error: java.lang.Exception, isCachedRedirect: boolean, bitmap: globalAndroid.graphics.Bitmap);
        public getRequest(): com.facebook.internal.ImageRequest;
        public isCachedRedirect(): boolean;
        public getBitmap(): globalAndroid.graphics.Bitmap;
        public getError(): java.lang.Exception;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class ImageResponseCache {
        public static class: java.lang.Class<com.facebook.internal.ImageResponseCache>;
        public static INSTANCE: com.facebook.internal.ImageResponseCache;
        public getTAG(): string;
        public static getCache(): com.facebook.internal.FileLruCache;
        public static interceptAndCacheImageStream(cache: java.net.HttpURLConnection): java.io.InputStream;
        public static clearCache(): void;
        public static getCachedImageStream(cache: globalAndroid.net.Uri): java.io.InputStream;
      }
      export module ImageResponseCache {
        export class BufferedHttpInputStream {
          public static class: java.lang.Class<com.facebook.internal.ImageResponseCache.BufferedHttpInputStream>;
          public constructor(stream: java.io.InputStream, connection: java.net.HttpURLConnection);
          public setConnection(set: java.net.HttpURLConnection): void;
          public getConnection(): java.net.HttpURLConnection;
          public close(): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class InstallReferrerUtil {
        public static class: java.lang.Class<com.facebook.internal.InstallReferrerUtil>;
        public static INSTANCE: com.facebook.internal.InstallReferrerUtil;
        public static tryUpdateReferrerInfo(callback: com.facebook.internal.InstallReferrerUtil.Callback): void;
      }
      export module InstallReferrerUtil {
        export class Callback {
          public static class: java.lang.Class<com.facebook.internal.InstallReferrerUtil.Callback>;
          /**
           * Constructs a new instance of the com.facebook.internal.InstallReferrerUtil$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onReceiveReferrerUrl(param0: string): void });
          public constructor();
          public onReceiveReferrerUrl(param0: string): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class InternalSettings {
        public static class: java.lang.Class<com.facebook.internal.InternalSettings>;
        public static INSTANCE: com.facebook.internal.InternalSettings;
        public static getCustomUserAgent(): string;
        public static setCustomUserAgent(value: string): void;
        public static isUnityApp(): boolean;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class LockOnGetVariable<T> extends java.lang.Object {
        public static class: java.lang.Class<com.facebook.internal.LockOnGetVariable<any>>;
        public constructor(value: T);
        public constructor(callable: java.util.concurrent.Callable<T>);
        public getValue(): T;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class Logger {
        public static class: java.lang.Class<com.facebook.internal.Logger>;
        public static LOG_TAG_BASE: string = 'FacebookSDK.';
        public getContents(): string;
        public append(string: string): void;
        public logString(string: string): void;
        public static registerAccessToken(accessToken: string): void;
        public static log(behavior: com.facebook.LoggingBehavior, tag: string, format: string, args: androidNative.Array<any>): void;
        public getPriority(): number;
        public append(stringBuilder: java.lang.StringBuilder): void;
        public static log(behavior: com.facebook.LoggingBehavior, tag: string, string: string): void;
        public constructor(behavior: com.facebook.LoggingBehavior, tag: string);
        public setPriority(value: number): void;
        public static log(behavior: com.facebook.LoggingBehavior, priority: number, tag: string, string: string): void;
        public static registerStringToReplace(original: string, replace: string): void;
        public static log(behavior: com.facebook.LoggingBehavior, priority: number, tag: string, format: string, args: androidNative.Array<any>): void;
        public append(format: string, args: androidNative.Array<any>): void;
        public log(): void;
        public appendKeyValue(key: string, value: any): void;
      }
      export module Logger {
        export class Companion {
          public static class: java.lang.Class<com.facebook.internal.Logger.Companion>;
          public log(string: com.facebook.LoggingBehavior, this_: number, behavior: string, priority: string): void;
          public registerAccessToken(accessToken: string): void;
          public log(behavior: com.facebook.LoggingBehavior, tag: string, string: string): void;
          public log(this_: com.facebook.LoggingBehavior, behavior: number, priority: string, tag: string, format: androidNative.Array<any>): void;
          public log(this_: com.facebook.LoggingBehavior, behavior: string, tag: string, format: androidNative.Array<any>): void;
          public registerStringToReplace(original: string, replace: string): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class NativeAppCallAttachmentStore {
        public static class: java.lang.Class<com.facebook.internal.NativeAppCallAttachmentStore>;
        public static INSTANCE: com.facebook.internal.NativeAppCallAttachmentStore;
        public static ATTACHMENTS_DIR_NAME: string = 'com.facebook.NativeAppCallAttachmentStore.files';
        public static getAttachmentFile(e: java.util.UUID, dir: string, callId: boolean): java.io.File;
        public static cleanupAllAttachments(): void;
        public static ensureAttachmentsDirectoryExists(): java.io.File;
        public static createAttachment(callId: java.util.UUID, attachmentUri: globalAndroid.net.Uri): com.facebook.internal.NativeAppCallAttachmentStore.Attachment;
        public static cleanupAttachmentsForCall(dir: java.util.UUID): void;
        public static addAttachments(file: java.util.Collection<com.facebook.internal.NativeAppCallAttachmentStore.Attachment>): void;
        public static getAttachmentsDirectoryForCall(dir: java.util.UUID, callId: boolean): java.io.File;
        public static openAttachment(e: java.util.UUID, callId: string): java.io.File;
        public static createAttachment(callId: java.util.UUID, attachmentBitmap: globalAndroid.graphics.Bitmap): com.facebook.internal.NativeAppCallAttachmentStore.Attachment;
        public static getAttachmentsDirectory(): java.io.File;
      }
      export module NativeAppCallAttachmentStore {
        export class Attachment {
          public static class: java.lang.Class<com.facebook.internal.NativeAppCallAttachmentStore.Attachment>;
          public setContentUri(set: boolean): void;
          public getOriginalUri(): globalAndroid.net.Uri;
          public constructor($this$_init__u24lambda_u240: java.util.UUID, scheme: globalAndroid.graphics.Bitmap, this_: globalAndroid.net.Uri);
          public getCallId(): java.util.UUID;
          public getAttachmentName(): string;
          public getBitmap(): globalAndroid.graphics.Bitmap;
          public getAttachmentUrl(): string;
          public setShouldCreateFile(set: boolean): void;
          public isContentUri(): boolean;
          public getShouldCreateFile(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class NativeProtocol {
        public static class: java.lang.Class<com.facebook.internal.NativeProtocol>;
        public static INSTANCE: com.facebook.internal.NativeProtocol;
        public static NO_PROTOCOL_AVAILABLE: number = -1;
        public static FACEBOOK_PROXY_AUTH_PERMISSIONS_KEY: string = 'scope';
        public static FACEBOOK_PROXY_AUTH_APP_ID_KEY: string = 'client_id';
        public static FACEBOOK_PROXY_AUTH_E2E_KEY: string = 'e2e';
        public static FACEBOOK_SDK_VERSION_KEY: string = 'facebook_sdk_version';
        public static INTENT_ACTION_PLATFORM_ACTIVITY: string = 'com.facebook.platform.PLATFORM_ACTIVITY';
        public static INTENT_ACTION_PLATFORM_SERVICE: string = 'com.facebook.platform.PLATFORM_SERVICE';
        public static PROTOCOL_VERSION_20121101: number = 20121101;
        public static PROTOCOL_VERSION_20130502: number = 20130502;
        public static PROTOCOL_VERSION_20130618: number = 20130618;
        public static PROTOCOL_VERSION_20131024: number = 20131024;
        public static PROTOCOL_VERSION_20131107: number = 20131107;
        public static PROTOCOL_VERSION_20140204: number = 20140204;
        public static PROTOCOL_VERSION_20140313: number = 20140313;
        public static PROTOCOL_VERSION_20140324: number = 20140324;
        public static PROTOCOL_VERSION_20140701: number = 20140701;
        public static PROTOCOL_VERSION_20141001: number = 20141001;
        public static PROTOCOL_VERSION_20141028: number = 20141028;
        public static PROTOCOL_VERSION_20141107: number = 20141107;
        public static PROTOCOL_VERSION_20141218: number = 20141218;
        public static PROTOCOL_VERSION_20150401: number = 20150401;
        public static PROTOCOL_VERSION_20150702: number = 20150702;
        public static PROTOCOL_VERSION_20160327: number = 20160327;
        public static PROTOCOL_VERSION_20161017: number = 20161017;
        public static PROTOCOL_VERSION_20170213: number = 20170213;
        public static PROTOCOL_VERSION_20170411: number = 20170411;
        public static PROTOCOL_VERSION_20170417: number = 20170417;
        public static PROTOCOL_VERSION_20171115: number = 20171115;
        public static PROTOCOL_VERSION_20210906: number = 20210906;
        public static EXTRA_PROTOCOL_VERSION: string = 'com.facebook.platform.protocol.PROTOCOL_VERSION';
        public static EXTRA_PROTOCOL_ACTION: string = 'com.facebook.platform.protocol.PROTOCOL_ACTION';
        public static EXTRA_PROTOCOL_CALL_ID: string = 'com.facebook.platform.protocol.CALL_ID';
        public static EXTRA_GET_INSTALL_DATA_PACKAGE: string = 'com.facebook.platform.extra.INSTALLDATA_PACKAGE';
        public static EXTRA_PROTOCOL_BRIDGE_ARGS: string = 'com.facebook.platform.protocol.BRIDGE_ARGS';
        public static EXTRA_PROTOCOL_METHOD_ARGS: string = 'com.facebook.platform.protocol.METHOD_ARGS';
        public static EXTRA_PROTOCOL_METHOD_RESULTS: string = 'com.facebook.platform.protocol.RESULT_ARGS';
        public static BRIDGE_ARG_APP_NAME_STRING: string = 'app_name';
        public static BRIDGE_ARG_ACTION_ID_STRING: string = 'action_id';
        public static BRIDGE_ARG_ERROR_BUNDLE: string = 'error';
        public static EXTRA_DIALOG_COMPLETE_KEY: string = 'com.facebook.platform.extra.DID_COMPLETE';
        public static EXTRA_DIALOG_COMPLETION_GESTURE_KEY: string = 'com.facebook.platform.extra.COMPLETION_GESTURE';
        public static RESULT_ARGS_DIALOG_COMPLETE_KEY: string = 'didComplete';
        public static RESULT_ARGS_DIALOG_COMPLETION_GESTURE_KEY: string = 'completionGesture';
        public static MESSAGE_GET_ACCESS_TOKEN_REQUEST: number = 65536;
        public static MESSAGE_GET_ACCESS_TOKEN_REPLY: number = 65537;
        public static MESSAGE_GET_PROTOCOL_VERSIONS_REQUEST: number = 65538;
        public static MESSAGE_GET_PROTOCOL_VERSIONS_REPLY: number = 65539;
        public static MESSAGE_GET_INSTALL_DATA_REQUEST: number = 65540;
        public static MESSAGE_GET_INSTALL_DATA_REPLY: number = 65541;
        public static MESSAGE_GET_LIKE_STATUS_REQUEST: number = 65542;
        public static MESSAGE_GET_LIKE_STATUS_REPLY: number = 65543;
        public static MESSAGE_GET_AK_SEAMLESS_TOKEN_REQUEST: number = 65544;
        public static MESSAGE_GET_AK_SEAMLESS_TOKEN_REPLY: number = 65545;
        public static MESSAGE_GET_LOGIN_STATUS_REQUEST: number = 65546;
        public static MESSAGE_GET_LOGIN_STATUS_REPLY: number = 65547;
        public static EXTRA_PROTOCOL_VERSIONS: string = 'com.facebook.platform.extra.PROTOCOL_VERSIONS';
        public static ACTION_FEED_DIALOG: string = 'com.facebook.platform.action.request.FEED_DIALOG';
        public static ACTION_MESSAGE_DIALOG: string = 'com.facebook.platform.action.request.MESSAGE_DIALOG';
        public static ACTION_OGACTIONPUBLISH_DIALOG: string = 'com.facebook.platform.action.request.OGACTIONPUBLISH_DIALOG';
        public static ACTION_OGMESSAGEPUBLISH_DIALOG: string = 'com.facebook.platform.action.request.OGMESSAGEPUBLISH_DIALOG';
        public static ACTION_LIKE_DIALOG: string = 'com.facebook.platform.action.request.LIKE_DIALOG';
        public static ACTION_APPINVITE_DIALOG: string = 'com.facebook.platform.action.request.APPINVITES_DIALOG';
        public static ACTION_CAMERA_EFFECT: string = 'com.facebook.platform.action.request.CAMERA_EFFECT';
        public static ACTION_SHARE_STORY: string = 'com.facebook.platform.action.request.SHARE_STORY';
        public static EXTRA_PERMISSIONS: string = 'com.facebook.platform.extra.PERMISSIONS';
        public static EXTRA_APPLICATION_ID: string = 'com.facebook.platform.extra.APPLICATION_ID';
        public static EXTRA_APPLICATION_NAME: string = 'com.facebook.platform.extra.APPLICATION_NAME';
        public static EXTRA_USER_ID: string = 'com.facebook.platform.extra.USER_ID';
        public static EXTRA_LOGGER_REF: string = 'com.facebook.platform.extra.LOGGER_REF';
        public static EXTRA_TOAST_DURATION_MS: string = 'com.facebook.platform.extra.EXTRA_TOAST_DURATION_MS';
        public static EXTRA_GRAPH_API_VERSION: string = 'com.facebook.platform.extra.GRAPH_API_VERSION';
        public static EXTRA_NONCE: string = 'com.facebook.platform.extra.NONCE';
        public static EXTRA_ACCESS_TOKEN: string = 'com.facebook.platform.extra.ACCESS_TOKEN';
        public static EXTRA_EXPIRES_SECONDS_SINCE_EPOCH: string = 'com.facebook.platform.extra.EXPIRES_SECONDS_SINCE_EPOCH';
        public static EXTRA_DATA_ACCESS_EXPIRATION_TIME: string = 'com.facebook.platform.extra.EXTRA_DATA_ACCESS_EXPIRATION_TIME';
        public static EXTRA_AUTHENTICATION_TOKEN: string = 'com.facebook.platform.extra.ID_TOKEN';
        public static RESULT_ARGS_ACCESS_TOKEN: string = 'access_token';
        public static RESULT_ARGS_GRAPH_DOMAIN: string = 'graph_domain';
        public static RESULT_ARGS_SIGNED_REQUEST: string = 'signed request';
        public static RESULT_ARGS_EXPIRES_SECONDS_SINCE_EPOCH: string = 'expires_seconds_since_epoch';
        public static RESULT_ARGS_PERMISSIONS: string = 'permissions';
        public static OPEN_GRAPH_CREATE_OBJECT_KEY: string = 'fbsdk:create_object';
        public static IMAGE_USER_GENERATED_KEY: string = 'user_generated';
        public static IMAGE_URL_KEY: string = 'url';
        public static STATUS_ERROR_TYPE: string = 'com.facebook.platform.status.ERROR_TYPE';
        public static STATUS_ERROR_DESCRIPTION: string = 'com.facebook.platform.status.ERROR_DESCRIPTION';
        public static STATUS_ERROR_CODE: string = 'com.facebook.platform.status.ERROR_CODE';
        public static STATUS_ERROR_SUBCODE: string = 'com.facebook.platform.status.ERROR_SUBCODE';
        public static STATUS_ERROR_JSON: string = 'com.facebook.platform.status.ERROR_JSON';
        public static BRIDGE_ARG_ERROR_TYPE: string = 'error_type';
        public static BRIDGE_ARG_ERROR_DESCRIPTION: string = 'error_description';
        public static BRIDGE_ARG_ERROR_CODE: string = 'error_code';
        public static BRIDGE_ARG_ERROR_SUBCODE: string = 'error_subcode';
        public static BRIDGE_ARG_ERROR_JSON: string = 'error_json';
        public static ERROR_UNKNOWN_ERROR: string = 'UnknownError';
        public static ERROR_PROTOCOL_ERROR: string = 'ProtocolError';
        public static ERROR_USER_CANCELED: string = 'UserCanceled';
        public static ERROR_APPLICATION_ERROR: string = 'ApplicationError';
        public static ERROR_NETWORK_ERROR: string = 'NetworkError';
        public static ERROR_PERMISSION_DENIED: string = 'PermissionDenied';
        public static ERROR_SERVICE_DISABLED: string = 'ServiceDisabled';
        public static WEB_DIALOG_URL: string = 'url';
        public static WEB_DIALOG_ACTION: string = 'action';
        public static WEB_DIALOG_PARAMS: string = 'params';
        public static WEB_DIALOG_IS_FALLBACK: string = 'is_fallback';
        public static AUDIENCE_ME: string = 'only_me';
        public static AUDIENCE_FRIENDS: string = 'friends';
        public static AUDIENCE_EVERYONE: string = 'everyone';
        public static getExceptionFromErrorData(type: globalAndroid.os.Bundle): com.facebook.FacebookException;
        public static getErrorDataFromResultIntent(bridgeArgs: globalAndroid.content.Intent): globalAndroid.os.Bundle;
        public static createBundleForException(errorBundle: com.facebook.FacebookException): globalAndroid.os.Bundle;
        public static createProtocolResultIntent(callId: globalAndroid.content.Intent, resultIntent: globalAndroid.os.Bundle, bridgeArguments: com.facebook.FacebookException): globalAndroid.content.Intent;
        public static validateServiceIntent(resolveInfo: globalAndroid.content.Context, context: globalAndroid.content.Intent, intent: com.facebook.internal.NativeProtocol.NativeAppInfo): globalAndroid.content.Intent;
        public static validateActivityIntent(resolveInfo: globalAndroid.content.Context, context: globalAndroid.content.Intent, intent: com.facebook.internal.NativeProtocol.NativeAppInfo): globalAndroid.content.Intent;
        public static createPlatformActivityIntent(appInfo: globalAndroid.content.Context, intent: string, context: string, callId: com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult, action: globalAndroid.os.Bundle): globalAndroid.content.Intent;
        public static computeLatestAvailableVersionFromVersionSpec(fbAppVersion: java.util.TreeSet<java.lang.Integer>, versionSpecIndex: number, fbAppVersionsIterator: androidNative.Array<number>): number;
        public static isVersionCompatibleWithBucketedIntent(version: number): boolean;
        public static createPlatformServiceIntent(intent: globalAndroid.content.Context): globalAndroid.content.Intent;
        public static getCallIdFromIntent(bridgeArgs: globalAndroid.content.Intent): java.util.UUID;
        public static getSuccessResultsFromIntent(version: globalAndroid.content.Intent): globalAndroid.os.Bundle;
        public static getBridgeArgumentsFromIntent(version: globalAndroid.content.Intent): globalAndroid.os.Bundle;
        public static getMethodArgumentsFromIntent(version: globalAndroid.content.Intent): globalAndroid.os.Bundle;
        public static createInstagramIntent(appInfo: globalAndroid.content.Context, intent: string, context: java.util.Collection<string>, applicationId: string, permissions: boolean, e2e: boolean, isRerequest: com.facebook.login.DefaultAudience, isForPublish: string, defaultAudience: string, clientState: string, authType: boolean, messengerPageId: boolean, resetMessengerState: boolean): globalAndroid.content.Intent;
        public static getLatestAvailableProtocolVersionForAction(appInfoList: string, action: androidNative.Array<number>): com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult;
        public static isErrorResult(bridgeArgs: globalAndroid.content.Intent): boolean;
        public static getProtocolVersionFromIntent(intent: globalAndroid.content.Intent): number;
        public static setupProtocolRequestIntent(bridgeArguments: globalAndroid.content.Intent, methodArguments: string, applicationId: string, applicationName: number, intent: globalAndroid.os.Bundle): void;
        public static updateAllAvailableProtocolVersionsAsync(): void;
        public static createProxyAuthIntents(mapNotNullNativeProtocol$createProxyAuthIntents$1: globalAndroid.content.Context, it: string, letCollectionsKt___CollectionsKt$mapNotNullTo$1$1$iv$iv: java.util.Collection<string>, it$iv$iv: string, forEachCollectionsKt___CollectionsKt$mapNotNullTo$1$iv$iv: boolean, element$iv$iv: boolean, element$iv$iv$iv: com.facebook.login.DefaultAudience, $i$f$forEach: string, $this$forEach$iv$iv$iv: string, $i$f$mapNotNullTo: boolean, $this$mapNotNullTo$iv$iv: string, destination$iv$iv: boolean, $i$f$mapNotNull: boolean, $this$mapNotNull$iv: boolean, context: string, applicationId: string, permissions: string): java.util.List<globalAndroid.content.Intent>;
        public static getLatestKnownVersion(): number;
        public static getLatestAvailableProtocolVersionForService(minimumVersion: number): number;
      }
      export module NativeProtocol {
        export class EffectTestAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
          public static class: java.lang.Class<com.facebook.internal.NativeProtocol.EffectTestAppInfo>;
          public getPackage(): string;
          public constructor();
          public getLoginActivity(): string;
          public getLoginActivity(): java.lang.Void;
        }
        export class InstagramAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
          public static class: java.lang.Class<com.facebook.internal.NativeProtocol.InstagramAppInfo>;
          public getPackage(): string;
          public constructor();
          public getResponseType(): string;
          public getLoginActivity(): string;
        }
        export class KatanaAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
          public static class: java.lang.Class<com.facebook.internal.NativeProtocol.KatanaAppInfo>;
          public getPackage(): string;
          public constructor();
          public getLoginActivity(): string;
          public onAvailableVersionsNullOrEmpty(): void;
        }
        export class MessengerAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
          public static class: java.lang.Class<com.facebook.internal.NativeProtocol.MessengerAppInfo>;
          public getPackage(): string;
          public constructor();
          public getLoginActivity(): string;
          public getLoginActivity(): java.lang.Void;
        }
        export abstract class NativeAppInfo {
          public static class: java.lang.Class<com.facebook.internal.NativeProtocol.NativeAppInfo>;
          public getPackage(): string;
          public constructor();
          public getResponseType(): string;
          public getLoginActivity(): string;
          public fetchAvailableVersions(force: boolean): void;
          public onAvailableVersionsNullOrEmpty(): void;
          public getAvailableVersions(): java.util.TreeSet<java.lang.Integer>;
        }
        export class ProtocolVersionQueryResult {
          public static class: java.lang.Class<com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult>;
          public static createEmpty(): com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult;
          public getProtocolVersion(): number;
          public static create(nativeAppInfo: com.facebook.internal.NativeProtocol.NativeAppInfo, protocolVersion: number): com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult;
          public getAppInfo(): com.facebook.internal.NativeProtocol.NativeAppInfo;
        }
        export module ProtocolVersionQueryResult {
          export class Companion {
            public static class: java.lang.Class<com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult.Companion>;
            public createEmpty(): com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult;
            public create(this_: com.facebook.internal.NativeProtocol.NativeAppInfo, nativeAppInfo: number): com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult;
          }
        }
        export class WakizashiAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
          public static class: java.lang.Class<com.facebook.internal.NativeProtocol.WakizashiAppInfo>;
          public getPackage(): string;
          public constructor();
          public getLoginActivity(): string;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class ProfileInformationCache {
        public static class: java.lang.Class<com.facebook.internal.ProfileInformationCache>;
        public static INSTANCE: com.facebook.internal.ProfileInformationCache;
        public static putProfileInformation(key: string, value: org.json.JSONObject): void;
        public static getProfileInformation(accessToken: string): org.json.JSONObject;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class ServerProtocol {
        public static class: java.lang.Class<com.facebook.internal.ServerProtocol>;
        public static INSTANCE: com.facebook.internal.ServerProtocol;
        public static DIALOG_PATH: string = 'dialog/';
        public static DIALOG_PARAM_ACCESS_TOKEN: string = 'access_token';
        public static DIALOG_PARAM_APP_ID: string = 'app_id';
        public static DIALOG_PARAM_AUTH_TYPE: string = 'auth_type';
        public static DIALOG_PARAM_CBT: string = 'cbt';
        public static DIALOG_PARAM_CLIENT_ID: string = 'client_id';
        public static DIALOG_PARAM_CODE_CHALLENGE: string = 'code_challenge';
        public static DIALOG_PARAM_CODE_CHALLENGE_METHOD: string = 'code_challenge_method';
        public static DIALOG_PARAM_CODE_REDIRECT_URI: string = 'code_redirect_uri';
        public static DIALOG_PARAM_CUSTOM_TABS_PREFETCHING: string = 'cct_prefetching';
        public static DIALOG_PARAM_DISPLAY: string = 'display';
        public static DIALOG_PARAM_DISPLAY_TOUCH: string = 'touch';
        public static DIALOG_PARAM_E2E: string = 'e2e';
        public static DIALOG_PARAM_AUTHENTICATION_TOKEN: string = 'id_token';
        public static DIALOG_PARAM_IES: string = 'ies';
        public static DIALOG_PARAM_LEGACY_OVERRIDE: string = 'legacy_override';
        public static DIALOG_PARAM_LOGIN_BEHAVIOR: string = 'login_behavior';
        public static DIALOG_PARAM_NONCE: string = 'nonce';
        public static DIALOG_PARAM_REDIRECT_URI: string = 'redirect_uri';
        public static DIALOG_PARAM_RESPONSE_TYPE: string = 'response_type';
        public static DIALOG_PARAM_RETURN_SCOPES: string = 'return_scopes';
        public static DIALOG_PARAM_SCOPE: string = 'scope';
        public static DIALOG_PARAM_SSO_DEVICE: string = 'sso';
        public static DIALOG_PARAM_DEFAULT_AUDIENCE: string = 'default_audience';
        public static DIALOG_PARAM_SDK_VERSION: string = 'sdk';
        public static DIALOG_PARAM_STATE: string = 'state';
        public static DIALOG_PARAM_FAIL_ON_LOGGED_OUT: string = 'fail_on_logged_out';
        public static DIALOG_PARAM_CCT_OVER_LOGGED_OUT_APP_SWITCH: string = 'cct_over_app_switch';
        public static DIALOG_PARAM_MESSENGER_PAGE_ID: string = 'messenger_page_id';
        public static DIALOG_PARAM_RESET_MESSENGER_STATE: string = 'reset_messenger_state';
        public static DIALOG_REREQUEST_AUTH_TYPE: string = 'rerequest';
        public static DIALOG_PARAM_FX_APP: string = 'fx_app';
        public static DIALOG_PARAM_SKIP_DEDUPE: string = 'skip_dedupe';
        public static DIALOG_RESPONSE_TYPE_CODE: string = 'code,signed_request,graph_domain';
        public static DIALOG_RESPONSE_TYPE_TOKEN_AND_SCOPES: string = 'token,signed_request,graph_domain,granted_scopes';
        public static DIALOG_RESPONSE_TYPE_TOKEN_AND_SIGNED_REQUEST: string = 'token,signed_request,graph_domain';
        public static DIALOG_RESPONSE_TYPE_ID_TOKEN_AND_SIGNED_REQUEST: string = 'id_token,token,signed_request,graph_domain';
        public static DIALOG_RETURN_SCOPES_TRUE: string = 'true';
        public static DIALOG_REDIRECT_URI: string = 'fbconnect://success';
        public static DIALOG_REDIRECT_CHROME_OS_URI: string = 'fbconnect://chrome_os_success';
        public static DIALOG_CANCEL_URI: string = 'fbconnect://cancel';
        public static FALLBACK_DIALOG_PARAM_APP_ID: string = 'app_id';
        public static FALLBACK_DIALOG_PARAM_BRIDGE_ARGS: string = 'bridge_args';
        public static FALLBACK_DIALOG_PARAM_KEY_HASH: string = 'android_key_hash';
        public static FALLBACK_DIALOG_PARAM_METHOD_ARGS: string = 'method_args';
        public static FALLBACK_DIALOG_PARAM_METHOD_RESULTS: string = 'method_results';
        public static FALLBACK_DIALOG_PARAM_VERSION: string = 'version';
        public static FALLBACK_DIALOG_DISPLAY_VALUE_TOUCH: string = 'touch';
        public static INSTAGRAM_OAUTH_PATH: string = 'oauth/authorize';
        public static getGraphUrlBase(): string;
        public static getInstagramDialogAuthority(): string;
        public static getGraphVideoUrlBase(): string;
        public static getQueryParamsForPlatformActivityIntentWebFallback(bridgeArgsJSON: string, methodArgsJSON: number, je: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
        public static getErrorsProxyAuthDisabled(): java.util.Collection<string>;
        public static getErrorsUserCanceled(): java.util.Collection<string>;
        public static getDefaultAPIVersion(): string;
        public static getDialogAuthority(): string;
        public static getGamingDialogAuthority(): string;
        public static getFacebookGraphUrlBase(): string;
        public static getErrorConnectionFailure(): string;
        public static getGraphUrlBaseForSubdomain(subdomain: string): string;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class SmartLoginOption {
        public static class: java.lang.Class<com.facebook.internal.SmartLoginOption>;
        public static None: com.facebook.internal.SmartLoginOption;
        public static Enabled: com.facebook.internal.SmartLoginOption;
        public static RequireConfirm: com.facebook.internal.SmartLoginOption;
        public static values(): androidNative.Array<com.facebook.internal.SmartLoginOption>;
        public getValue(): number;
        public static parseOptions(bitmask: number): java.util.EnumSet<com.facebook.internal.SmartLoginOption>;
        public static valueOf(value: string): com.facebook.internal.SmartLoginOption;
      }
      export module SmartLoginOption {
        export class Companion {
          public static class: java.lang.Class<com.facebook.internal.SmartLoginOption.Companion>;
          public parseOptions(result: number): java.util.EnumSet<com.facebook.internal.SmartLoginOption>;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class UrlRedirectCache {
        public static class: java.lang.Class<com.facebook.internal.UrlRedirectCache>;
        public static INSTANCE: com.facebook.internal.UrlRedirectCache;
        public static cacheUriRedirect(cache: globalAndroid.net.Uri, e: globalAndroid.net.Uri): void;
        public static getCache(): com.facebook.internal.FileLruCache;
        public static getRedirectedUri(buffer: globalAndroid.net.Uri): globalAndroid.net.Uri;
        public static clearCache(): void;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class Utility {
        public static class: java.lang.Class<com.facebook.internal.Utility>;
        public static INSTANCE: com.facebook.internal.Utility;
        public static LOG_TAG: string = 'FacebookSDK';
        public static DEFAULT_STREAM_BUFFER_SIZE: number = 8192;
        public static setAppEventExtendedDeviceInfoParameters(pi: org.json.JSONObject, e: globalAndroid.content.Context): void;
        public static isDataProcessingRestricted(): boolean;
        public setLocale(set: java.util.Locale): void;
        public static getAppName(applicationName: globalAndroid.content.Context): string;
        public static readNonnullStringMapFromParcel(key: globalAndroid.os.Parcel): java.util.Map<string, string>;
        public static clearFacebookCookies(context: globalAndroid.content.Context): void;
        public static writeNonnullStringMapToParcel(key: globalAndroid.os.Parcel, value: java.util.Map<string, string>): void;
        public static safeGetStringFromResponse(response: org.json.JSONObject, propertyName: string): string;
        public static putNonEmptyString(b: globalAndroid.os.Bundle, key: string, value: string): void;
        public static parseUrlQueryString($i$f$toTypedArray: string): globalAndroid.os.Bundle;
        public static getResourceLocale(): java.util.Locale;
        public static getBundleLongAsDate(e: globalAndroid.os.Bundle, secondsFromBase: string, secondsObject: java.util.Date): java.util.Date;
        public static isContentUri(uri: globalAndroid.net.Uri): boolean;
        public static readStringMapFromParcel(i: globalAndroid.os.Parcel): java.util.Map<string, string>;
        public static disconnectQuietly(connection: java.net.URLConnection): void;
        public static convertJSONObjectToStringMap(key: org.json.JSONObject): java.util.Map<string, string>;
        public static sha256hash(key: string): string;
        public static putJSONValueInBundle(bundle: globalAndroid.os.Bundle, key: string, value: any): boolean;
        public static convertJSONArrayToHashSet(element: org.json.JSONArray): java.util.HashSet<string>;
        public static stringsEqualOrEmpty(aEmpty: string, bEmpty: string): boolean;
        public static convertJSONArrayToList(i: org.json.JSONArray): java.util.List<string>;
        public static sha256hash(bytes: androidNative.Array<number>): string;
        public static getGraphMeRequestWithCacheAsync(cachedValue: string, graphCallback: com.facebook.internal.Utility.GraphMeRequestWithCacheCallback): void;
        public setCarrierName(set: string): void;
        public getCarrierName(): string;
        public static writeStringMapToParcel(key: globalAndroid.os.Parcel, value: java.util.Map<string, string>): void;
        public static tryGetJSONArrayFromResponse(response: org.json.JSONObject, propertyKey: string): org.json.JSONArray;
        public setAvailableExternalStorageGB(set: number): void;
        public getVersionName(): string;
        public static jsonArrayToSet(i: org.json.JSONArray): java.util.Set<string>;
        public static jsonStrToMap(key: string): java.util.Map<string, string>;
        public static sha1hash(key: string): string;
        public static isAutoAppLinkSetup(): boolean;
        public getDeviceTimeZoneName(): string;
        public static putCommaSeparatedStringList(commaSeparated: globalAndroid.os.Bundle, b: string, key: java.util.List<string>): void;
        public static isFileUri(uri: globalAndroid.net.Uri): boolean;
        public static logd(tag: string, msg: string): void;
        public static putUri(b: globalAndroid.os.Bundle, key: string, uri: globalAndroid.net.Uri): void;
        public static logd(tag: string, e: java.lang.Exception): void;
        public static invokeMethodQuietly(ex: any, ex: java.lang.reflect.Method, receiver: androidNative.Array<any>): any;
        public static getCurrentLocale(): java.util.Locale;
        public static getContentSize(sizeIndex: globalAndroid.net.Uri): number;
        public getLocale(): java.util.Locale;
        public static runOnNonUiThread(runnable: java.lang.Runnable): void;
        public static logd(tag: string, msg: string, t: java.lang.Throwable): void;
        public static isWebUri(uri: globalAndroid.net.Uri): boolean;
        public static getUriString(uri: globalAndroid.net.Uri): string;
        public setVersionName(set: string): void;
        public static getMethodQuietly(ex: java.lang.Class<any>, clazz: string, methodName: androidNative.Array<java.lang.Class<any>>): java.lang.reflect.Method;
        public static isChromeOS(isChromeOS: globalAndroid.content.Context): boolean;
        public static setAppEventAttributionParameters(userData: org.json.JSONObject, campaignIDs: com.facebook.internal.AttributionIdentifiers, params: string, attributionIdentifiers: boolean, anonymousAppDeviceGUID: globalAndroid.content.Context): void;
        public getAvailableExternalStorageGB(): number;
        public static copyAndCloseInputStream(alsoUtility$copyAndCloseInputStream$1: java.io.InputStream, it: java.io.OutputStream): number;
        public static areObjectsEqual(a: any, b: any): boolean;
        public static mustFixWindowParamsForAutofill(context: globalAndroid.content.Context): boolean;
        public static tryGetJSONObjectFromResponse(response: org.json.JSONObject, propertyKey: string): org.json.JSONObject;
        public static isCurrentAccessToken(token: com.facebook.AccessToken): boolean;
        public static generateRandomString(r: number): string;
        public static getStringPropertyAsJSON(tokener: org.json.JSONObject, jsonObject: string, value: string): any;
        public static getGraphDomainFromTokenDomain(facebookDomain: string): string;
        public static md5hash(key: string): string;
        public static awaitGetGraphMeRequestWithCache(cachedValue: string): org.json.JSONObject;
        public static getMetadataApplicationId(context: globalAndroid.content.Context): string;
        public static getActivityName(context: globalAndroid.content.Context): string;
        public static mapToJsonStr(key: java.util.Map<string, string>): string;
        public setDeviceTimeZoneName(set: string): void;
        public static isNullOrEmpty(c: java.util.Collection<any>): boolean;
        public static convertJSONObjectToHashMap(value: org.json.JSONObject): java.util.Map<string, any>;
        public static getDataProcessingOptions(): org.json.JSONObject;
        public static getAppVersion(): string;
        public static isAutofillAvailable(afm: globalAndroid.content.Context): boolean;
        public static buildUri(parameter: string, key: string, builder: globalAndroid.os.Bundle): globalAndroid.net.Uri;
        public static coerceValueIfNullOrEmpty(s: string, valueIfNullOrEmpty: string): string;
        public static sha1hash(bytes: androidNative.Array<number>): string;
        public static getMethodQuietly(clazz: string, ex: string, className: androidNative.Array<java.lang.Class<any>>): java.lang.reflect.Method;
        public static readStreamToString(alsoUtility$readStreamToString$1: java.io.InputStream): string;
        public static jsonArrayToStringList(i: org.json.JSONArray): java.util.List<string>;
        public static isNullOrEmpty(s: string): boolean;
        public static closeQuietly(closeable: java.io.Closeable): void;
      }
      export module Utility {
        export class GraphMeRequestWithCacheCallback {
          public static class: java.lang.Class<com.facebook.internal.Utility.GraphMeRequestWithCacheCallback>;
          /**
           * Constructs a new instance of the com.facebook.internal.Utility$GraphMeRequestWithCacheCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSuccess(param0: org.json.JSONObject): void; onFailure(param0: com.facebook.FacebookException): void });
          public constructor();
          public onFailure(param0: com.facebook.FacebookException): void;
          public onSuccess(param0: org.json.JSONObject): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class Validate {
        public static class: java.lang.Class<com.facebook.internal.Validate>;
        public static INSTANCE: com.facebook.internal.Validate;
        public static CUSTOM_TAB_REDIRECT_URI_PREFIX: string = 'fbconnect://cct.';
        public static notNull(arg: any, name: string): void;
        public static hasCustomTabRedirectActivity(intent: globalAndroid.content.Context, activityInfo: string): boolean;
        public static notEmpty(requireValidate$notEmpty$1: java.util.Collection<any>, container: string): void;
        public static containsNoNulls(item: java.util.Collection<any>, container: string): void;
        public static notNullOrEmpty(requireValidate$notNullOrEmpty$1: string, arg: string): string;
        public static notEmptyAndContainsNoNulls(container: java.util.Collection<any>, name: string): void;
        public static hasContentProvider(checkNotNullValidate$hasContentProvider$1: globalAndroid.content.Context): void;
        public static hasInternetPermissions(context: globalAndroid.content.Context): void;
        public static notEmpty(requireValidate$notEmpty$2: string, arg: string): void;
        public static containsNoNullOrEmpty(requireValidate$containsNoNullOrEmpty$1: java.util.Collection<string>, item: string): void;
        public static runningOnUiThread(): void;
        public static hasChangeWifiStatePermission(context: globalAndroid.content.Context): boolean;
        public static hasAppID(): string;
        public static hasFacebookActivity(context: globalAndroid.content.Context): void;
        public static hasFacebookActivity(componentName: globalAndroid.content.Context, checkValidate$hasFacebookActivity$1: boolean): void;
        public static hasInternetPermissions(checkValidate$hasInternetPermissions$1: globalAndroid.content.Context, context: boolean): void;
        public static hasPermission(context: globalAndroid.content.Context, permission: string): boolean;
        public static hasWiFiPermission(context: globalAndroid.content.Context): boolean;
        public static oneOf(value: any, arg: string, name: androidNative.Array<any>): void;
        public static hasLocationPermission(context: globalAndroid.content.Context): boolean;
        public static hasClientToken(): string;
        public static sdkInitialized(): void;
        public static hasBluetoothPermission(context: globalAndroid.content.Context): boolean;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export class WorkQueue {
        public static class: java.lang.Class<com.facebook.internal.WorkQueue>;
        public static DEFAULT_MAX_CONCURRENT: number = 8;
        public addActiveWorkItem(node: java.lang.Runnable, this_: boolean): com.facebook.internal.WorkQueue.WorkItem;
        public constructor(maxConcurrent: number, executor: java.util.concurrent.Executor);
        public validate(): void;
        public constructor(maxConcurrent: number);
        public constructor();
        public addActiveWorkItem(callback: java.lang.Runnable): com.facebook.internal.WorkQueue.WorkItem;
      }
      export module WorkQueue {
        export class Companion {
          public static class: java.lang.Class<com.facebook.internal.WorkQueue.Companion>;
        }
        export class WorkItem {
          public static class: java.lang.Class<com.facebook.internal.WorkQueue.WorkItem>;
          /**
           * Constructs a new instance of the com.facebook.internal.WorkQueue$WorkItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { cancel(): boolean; isRunning(): boolean; moveToFront(): void });
          public constructor();
          public cancel(): boolean;
          public isRunning(): boolean;
          public moveToFront(): void;
        }
        export class WorkNode extends com.facebook.internal.WorkQueue.WorkItem {
          public static class: java.lang.Class<com.facebook.internal.WorkQueue.WorkNode>;
          public getNext(): com.facebook.internal.WorkQueue.WorkNode;
          public cancel(): boolean;
          public addToList(this_: com.facebook.internal.WorkQueue.WorkNode, list: boolean): com.facebook.internal.WorkQueue.WorkNode;
          public getCallback(): java.lang.Runnable;
          public isRunning(): boolean;
          public removeFromList(this_: com.facebook.internal.WorkQueue.WorkNode): com.facebook.internal.WorkQueue.WorkNode;
          public constructor(this$0: java.lang.Runnable);
          public setRunning(set: boolean): void;
          public verify(shouldBeRunning: boolean): void;
          public moveToFront(): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module gatekeeper {
        export class GateKeeper {
          public static class: java.lang.Class<com.facebook.internal.gatekeeper.GateKeeper>;
          public toString(): string;
          public component1(): string;
          public getName(): string;
          public getValue(): boolean;
          public equals(other: any): boolean;
          public copy(name: string, value: boolean): com.facebook.internal.gatekeeper.GateKeeper;
          public hashCode(): number;
          public component2(): boolean;
          public constructor(name: string, value: boolean);
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module gatekeeper {
        export class GateKeeperRuntimeCache {
          public static class: java.lang.Class<com.facebook.internal.gatekeeper.GateKeeperRuntimeCache>;
          public getGateKeeper(appId: string, name: string): com.facebook.internal.gatekeeper.GateKeeper;
          public resetCache(appId: string): void;
          public dumpGateKeepers(it: string): java.util.List<com.facebook.internal.gatekeeper.GateKeeper>;
          public setGateKeeper(appId: string, gateKeeper: com.facebook.internal.gatekeeper.GateKeeper): void;
          public getGateKeeperValue(appId: string, name: string, defaultValue: boolean): boolean;
          public constructor();
          public setGateKeeperValue(appId: string, name: string, value: boolean): void;
          public setGateKeepers(it: string, element$iv: java.util.List<com.facebook.internal.gatekeeper.GateKeeper>): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module instrument {
        export class ExceptionAnalyzer {
          public static class: java.lang.Class<com.facebook.internal.instrument.ExceptionAnalyzer>;
          public static INSTANCE: com.facebook.internal.instrument.ExceptionAnalyzer;
          public static isDebug$facebook_core_release(): boolean;
          public sendExceptionAnalysisReports$facebook_core_release(): void;
          public static enable(): void;
          public static execute(forEachExceptionAnalyzer$execute$1: java.lang.Throwable): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module instrument {
        export class InstrumentData {
          public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentData>;
          public toString(): string;
          public save(): void;
          public isValid(): boolean;
          public clear(): void;
          public compareTo(dts: com.facebook.internal.instrument.InstrumentData): number;
        }
        export module InstrumentData {
          export class Builder {
            public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentData.Builder>;
            public static INSTANCE: com.facebook.internal.instrument.InstrumentData.Builder;
            public static load(file: java.io.File): com.facebook.internal.instrument.InstrumentData;
            public static build(anrCause: string, st: string): com.facebook.internal.instrument.InstrumentData;
            public static build(e: java.lang.Throwable, t: com.facebook.internal.instrument.InstrumentData.Type): com.facebook.internal.instrument.InstrumentData;
            public static build(features: org.json.JSONArray): com.facebook.internal.instrument.InstrumentData;
          }
          export class Companion {
            public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentData.Companion>;
          }
          export class Type {
            public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentData.Type>;
            public static Unknown: com.facebook.internal.instrument.InstrumentData.Type;
            public static Analysis: com.facebook.internal.instrument.InstrumentData.Type;
            public static AnrReport: com.facebook.internal.instrument.InstrumentData.Type;
            public static CrashReport: com.facebook.internal.instrument.InstrumentData.Type;
            public static CrashShield: com.facebook.internal.instrument.InstrumentData.Type;
            public static ThreadCheck: com.facebook.internal.instrument.InstrumentData.Type;
            public static valueOf(value: string): com.facebook.internal.instrument.InstrumentData.Type;
            public static values(): androidNative.Array<com.facebook.internal.instrument.InstrumentData.Type>;
            public toString(): string;
            public getLogPrefix(): string;
          }
          export module Type {
            export class WhenMappings {
              public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentData.Type.WhenMappings>;
            }
          }
          export class WhenMappings {
            public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentData.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module instrument {
        export class InstrumentManager {
          public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentManager>;
          public static INSTANCE: com.facebook.internal.instrument.InstrumentManager;
          public static start(): void;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module instrument {
        export class InstrumentUtility {
          public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentUtility>;
          public static INSTANCE: com.facebook.internal.instrument.InstrumentUtility;
          public static ANALYSIS_REPORT_PREFIX: string = 'analysis_log_';
          public static ANR_REPORT_PREFIX: string = 'anr_log_';
          public static CRASH_REPORT_PREFIX: string = 'crash_log_';
          public static CRASH_SHIELD_PREFIX: string = 'shield_log_';
          public static THREAD_CHECK_PREFIX: string = 'thread_check_log_';
          public static ERROR_REPORT_PREFIX: string = 'error_log_';
          public static isFromFbOrMeta(element: java.lang.StackTraceElement): boolean;
          public static deleteFile(reportDir: string): boolean;
          public static getInstrumentReportDir(): java.io.File;
          public static getStackTrace(element: java.lang.Thread): string;
          public static getStackTrace(element: java.lang.Throwable): string;
          public static getCause(e: java.lang.Throwable): string;
          public static listExceptionReportFiles(): androidNative.Array<java.io.File>;
          public static readFile(content: string, e: boolean): org.json.JSONObject;
          public static isSDKRelatedThread(forEachInstrumentUtility$isSDKRelatedThread$1: java.lang.Thread): boolean;
          public static listExceptionAnalysisReportFiles(): androidNative.Array<java.io.File>;
          public static listAnrReportFiles(): androidNative.Array<java.io.File>;
          public static sendReports(k: string, it: org.json.JSONArray, dataProcessingOptions: com.facebook.GraphRequest.Callback): void;
          public static writeFile(reportDir: string, file: string): void;
          public static isSDKRelatedException(element: java.lang.Throwable): boolean;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module instrument {
        export module anrreport {
          export class ANRDetector {
            public static class: java.lang.Class<com.facebook.internal.instrument.anrreport.ANRDetector>;
            public static INSTANCE: com.facebook.internal.instrument.anrreport.ANRDetector;
            public static start(): void;
            public static checkProcessError(mainThread: globalAndroid.app.ActivityManager): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module instrument {
        export module anrreport {
          export class ANRHandler {
            public static class: java.lang.Class<com.facebook.internal.instrument.anrreport.ANRHandler>;
            public static INSTANCE: com.facebook.internal.instrument.anrreport.ANRHandler;
            public static enable(): void;
            public static sendANRReports(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module instrument {
        export module crashreport {
          export class CrashHandler {
            public static class: java.lang.Class<com.facebook.internal.instrument.crashreport.CrashHandler>;
            public static enable(): void;
            public uncaughtException(t: java.lang.Thread, e: java.lang.Throwable): void;
          }
          export module CrashHandler {
            export class Companion {
              public static class: java.lang.Class<com.facebook.internal.instrument.crashreport.CrashHandler.Companion>;
              public enable(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module instrument {
        export module crashshield {
          export class AutoHandleExceptions {
            public static class: java.lang.Class<com.facebook.internal.instrument.crashshield.AutoHandleExceptions>;
            /**
             * Constructs a new instance of the com.facebook.internal.instrument.crashshield.AutoHandleExceptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module instrument {
        export module crashshield {
          export class CrashShieldHandler {
            public static class: java.lang.Class<com.facebook.internal.instrument.crashshield.CrashShieldHandler>;
            public static INSTANCE: com.facebook.internal.instrument.crashshield.CrashShieldHandler;
            public static isObjectCrashing(o: any): boolean;
            public static enable(): void;
            public static isDebug(): boolean;
            public static methodFinished(o: any): void;
            public static resetCrashingObjects(): void;
            public static reset(): void;
            public static scheduleCrashInDebug(e: java.lang.Throwable): void;
            public static disable(): void;
            public static handleThrowable(e: java.lang.Throwable, o: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module instrument {
        export module crashshield {
          export class NoAutoExceptionHandling {
            public static class: java.lang.Class<com.facebook.internal.instrument.crashshield.NoAutoExceptionHandling>;
            /**
             * Constructs a new instance of the com.facebook.internal.instrument.crashshield.NoAutoExceptionHandling interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module instrument {
        export module errorreport {
          export class ErrorReportData {
            public static class: java.lang.Class<com.facebook.internal.instrument.errorreport.ErrorReportData>;
            public getParameters(): org.json.JSONObject;
            public compareTo(dts: com.facebook.internal.instrument.errorreport.ErrorReportData): number;
            public constructor(message: string);
            public save(): void;
            public clear(): void;
            public constructor(this_: java.io.File);
            public toString(): string;
            public isValid(): boolean;
          }
          export module ErrorReportData {
            export class Companion {
              public static class: java.lang.Class<com.facebook.internal.instrument.errorreport.ErrorReportData.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module instrument {
        export module errorreport {
          export class ErrorReportHandler {
            public static class: java.lang.Class<com.facebook.internal.instrument.errorreport.ErrorReportHandler>;
            public static INSTANCE: com.facebook.internal.instrument.errorreport.ErrorReportHandler;
            public static save(errorReport: string): void;
            public static enable(): void;
            public static listErrorReportFiles(): androidNative.Array<java.io.File>;
            public static sendErrorReports(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module instrument {
        export module threadcheck {
          export class ThreadCheckHandler {
            public static class: java.lang.Class<com.facebook.internal.instrument.threadcheck.ThreadCheckHandler>;
            public static INSTANCE: com.facebook.internal.instrument.threadcheck.ThreadCheckHandler;
            public static enable(): void;
            public static workerThreadViolationDetected(clazz: java.lang.Class<any>, methodName: string, methodDesc: string): void;
            public static uiThreadViolationDetected(clazz: java.lang.Class<any>, methodName: string, methodDesc: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module qualityvalidation {
        export class Excuse {
          public static class: java.lang.Class<com.facebook.internal.qualityvalidation.Excuse>;
          /**
           * Constructs a new instance of the com.facebook.internal.qualityvalidation.Excuse interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { type(): string; reason(): string });
          public constructor();
          public reason(): string;
          public type(): string;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module qualityvalidation {
        export class ExcusesForDesignViolations {
          public static class: java.lang.Class<com.facebook.internal.qualityvalidation.ExcusesForDesignViolations>;
          /**
           * Constructs a new instance of the com.facebook.internal.qualityvalidation.ExcusesForDesignViolations interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { value(): androidNative.Array<com.facebook.internal.qualityvalidation.Excuse> });
          public constructor();
          public value(): androidNative.Array<com.facebook.internal.qualityvalidation.Excuse>;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module security {
        export class CertificateUtil {
          public static class: java.lang.Class<com.facebook.internal.security.CertificateUtil>;
          public static INSTANCE: com.facebook.internal.security.CertificateUtil;
          public static DELIMITER: string = ':';
          public static getCertificateHash(signature: globalAndroid.content.Context): string;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module internal {
      export module security {
        export class OidcSecurityUtil {
          public static class: java.lang.Class<com.facebook.internal.security.OidcSecurityUtil>;
          public static INSTANCE: com.facebook.internal.security.OidcSecurityUtil;
          public static SIGNATURE_ALGORITHM_SHA256: string = 'SHA256withRSA';
          public static TIMEOUT_IN_MILLISECONDS: number = 5000;
          public static getRawKeyFromEndPoint(withLockOidcSecurityUtil$getRawKeyFromEndPoint$2: string): string;
          public getOPENID_KEYS_PATH(): string;
          public static verify(sig: java.security.PublicKey, decodedSignature: string, _ex: string): boolean;
          public static getPublicKeyFromString(pubKeyString: string): java.security.PublicKey;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module login {
      export class DefaultAudience {
        public static class: java.lang.Class<com.facebook.login.DefaultAudience>;
        public static NONE: com.facebook.login.DefaultAudience;
        public static ONLY_ME: com.facebook.login.DefaultAudience;
        public static FRIENDS: com.facebook.login.DefaultAudience;
        public static EVERYONE: com.facebook.login.DefaultAudience;
        public static values(): androidNative.Array<com.facebook.login.DefaultAudience>;
        public getNativeProtocolAudience(): string;
        public static valueOf(value: string): com.facebook.login.DefaultAudience;
      }
    }
  }
}

declare module com {
  export module facebook {
    export module login {
      export class LoginTargetApp {
        public static class: java.lang.Class<com.facebook.login.LoginTargetApp>;
        public static FACEBOOK: com.facebook.login.LoginTargetApp;
        public static INSTAGRAM: com.facebook.login.LoginTargetApp;
        public static values(): androidNative.Array<com.facebook.login.LoginTargetApp>;
        public static valueOf(value: string): com.facebook.login.LoginTargetApp;
        public static fromString(stringValue: string): com.facebook.login.LoginTargetApp;
        public toString(): string;
      }
      export module LoginTargetApp {
        export class Companion {
          public static class: java.lang.Class<com.facebook.login.LoginTargetApp.Companion>;
          public fromString(this_: string): com.facebook.login.LoginTargetApp;
        }
      }
    }
  }
}

declare module com {
  export module facebook {
    export module ppml {
      export module receiver {
        export class IReceiverService {
          public static class: java.lang.Class<com.facebook.ppml.receiver.IReceiverService>;
          /**
           * Constructs a new instance of the com.facebook.ppml.receiver.IReceiverService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { sendEvents(param0: globalAndroid.os.Bundle): number });
          public constructor();
          public static DESCRIPTOR: string = 'com.facebook.ppml.receiver.IReceiverService';
          public sendEvents(param0: globalAndroid.os.Bundle): number;
        }
        export module IReceiverService {
          export class Default extends com.facebook.ppml.receiver.IReceiverService {
            public static class: java.lang.Class<com.facebook.ppml.receiver.IReceiverService.Default>;
            public constructor();
            public sendEvents(param0: globalAndroid.os.Bundle): number;
            public sendEvents(eventsBundle: globalAndroid.os.Bundle): number;
            public asBinder(): globalAndroid.os.IBinder;
          }
          export abstract class Stub implements com.facebook.ppml.receiver.IReceiverService {
            public static class: java.lang.Class<com.facebook.ppml.receiver.IReceiverService.Stub>;
            public onTransact(_result: number, this_: globalAndroid.os.Parcel, code: globalAndroid.os.Parcel, data: number): boolean;
            public constructor();
            public static asInterface(obj: globalAndroid.os.IBinder): com.facebook.ppml.receiver.IReceiverService;
            public sendEvents(param0: globalAndroid.os.Bundle): number;
            public asBinder(): globalAndroid.os.IBinder;
          }
          export module Stub {
            export class Proxy extends com.facebook.ppml.receiver.IReceiverService {
              public static class: java.lang.Class<com.facebook.ppml.receiver.IReceiverService.Stub.Proxy>;
              public getInterfaceDescriptor(): string;
              public sendEvents(param0: globalAndroid.os.Bundle): number;
              public asBinder(): globalAndroid.os.IBinder;
              public sendEvents(_result: globalAndroid.os.Bundle): number;
            }
          }
          export class _Parcel {
            public static class: java.lang.Class<com.facebook.ppml.receiver.IReceiverService._Parcel>;
            public constructor();
          }
        }
      }
    }
  }
}

//Generics information:
//android.adservices.common.AdServicesOutcomeReceiver:2
//com.facebook.GraphRequest.ParcelableResourceWithMimeType:1
//com.facebook.internal.LockOnGetVariable:1

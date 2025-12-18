"use strict";
// TODO: Switch all the constants to actual enums.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VanillaGameplayUIProfile = exports.VanillaGameplayContainerItemType = exports.VanillaGameplayContainerChestType = exports.PlayerRelation = exports.PlayerPermissionLevel = exports.RealmsStoriesTimelineOptInStatus = exports.FriendFavoriteStatus = exports.FriendPresence = exports.RealmPlayerRoleEnum = exports.StorageType = exports.KeyboardType = exports.Controller = exports.Platform = exports.ARVRPlatform = exports.InputMethod = exports.HandheldDeviceType = exports.ScreenType = exports.LeaveRealmsServerError = exports.JoinRealmsServerError = void 0;
exports.reverseNumericEnumMapping = reverseNumericEnumMapping;
exports.JoinRealmsServerError = {
    RealmsAPIUnavailable: 0,
    AlreadyMember: 1,
    RealmExpired: 2,
    RealmClosed: 3,
    BadInvite: 4,
    BlockedInvite: 5,
    InviteLinkNotFound: 6,
    UnexpectedServerResponse: 7,
    AnonymousAccount: 8,
};
exports.LeaveRealmsServerError = {
    RealmsAPIUnavailable: 0,
    ErrorTaskInProgress: 1,
    UnknownError: 2,
    Success: 3,
    Unknown: 4,
};
exports.ScreenType = {
    TV_SCREEN_TYPE: 0,
    DESKTOP_SCREEN_TYPE: 1,
    HANDHELD_SCREEN_TYPE: 2,
    /**
     * @deprecated This was removed in 1.21.110.25.
     */
    VR_SCREEN_TYPE: 3,
};
exports.HandheldDeviceType = {
    PHONE: 0,
    TABLET: 1,
};
exports.InputMethod = {
    GAMEPAD: 0,
    TOUCH: 1,
    MOUSE: 2,
    MOTION: 3,
    KEYBOARD: 4,
};
/**
 * @deprecated This was removed in 1.21.100.21.
 */
exports.ARVRPlatform = {
    ARVR_None: 0,
    ARVR_Rift: 1,
    ARVR_Holographic: 2,
    ARVR_WindowsMR: 3,
    ARVR_PSVR: 4,
    ARVR_GearVR: 5,
    ARVR_DesktopXR: 6,
};
/**
 * The platform export type enum.
 *
 * There a second platform enum export type in-game that includes all the removed entries and unsupported ones too (ex. `Linux`), that one is only used for the world players list facet.
 */
exports.Platform = {
    IOS: 0,
    GOOGLE: 1,
    AMAZON_HANDHELD: 2,
    UWP: 3,
    XBOX: 4,
    NX_HANDHELD: 5,
    PS4: 6,
    WIN32: 7,
    MACOS: 8,
    NX_TV: 9,
    PS5: 10,
};
exports.Controller = {
    XBOX: 0,
    PS: 1,
    STEAM: 2,
    SWITCH: 3,
    QUEST: 4,
};
exports.KeyboardType = {
    Standard: 0,
    FullKeyboard: 1,
};
exports.StorageType = {
    NONE: 0,
    EXTERNAL: 1,
    APPDATA: 2,
};
exports.RealmPlayerRoleEnum = {
    NONMEMBER: -1,
    VISITOR: 0,
    MEMBER: 1,
    OPERATOR: 2,
    OWNER: 3,
};
exports.FriendPresence = {
    Unknown: 0,
    Online: 1,
    Away: 2,
    Offline: 3,
};
exports.FriendFavoriteStatus = {
    UNKNOWN: 0,
    FAVORITE: 1,
    NOT_FAVORITE: 2,
};
exports.RealmsStoriesTimelineOptInStatus = {
    OptedIn: 0,
    OptedOut: 1,
    None: 2,
};
exports.PlayerPermissionLevel = {
    Visitor: 0,
    Member: 1,
    Operator: 2,
    Custom: 3,
};
exports.PlayerRelation = {
    Self: 0,
    TwoWayFriend: 1,
    Following: 2,
    Follower: 3,
    Stranger: 4,
    Unknown: 5,
};
// TODO
// export enum PlayerRelation {
//     Self = 0,
//     TwoWayFriend = 1,
//     Following = 2,
//     Follower = 3,
//     Stranger = 4,
//     Unknown = 5,
// }
// export type PlayerRelation_Type<Mode extends "enum" | "keys" | "values" = "enum"> = ConstNumberObjectEnumToEnumMappingType<
//     NumberEnumToObject<typeof PlayerRelation>,
//     Mode
// >;
exports.VanillaGameplayContainerChestType = {
    Chest: 0,
    TrappedChest: 1,
    CopperChest: 2,
    Barrel: 3,
    EnderChest: 4,
    ShulkerBox: 5,
};
exports.VanillaGameplayContainerItemType = {
    Normal: 0,
    CreativeRecipe: 1,
    SurvivalRecipe: 2,
    RecipePreview: 3,
    Ghost: 4,
};
exports.VanillaGameplayUIProfile = {
    Classic: 0,
    Pocket: 1,
    None: 2,
};
/**
 * Reverses a numeric enum mapping.
 *
 * @param object The enum mapping to reverse.
 * @returns The reversed enum mapping.
 *
 * @example
 * ```ts
 * reverseNumericEnumMapping({ 0: "a", 1: "b", 2: "c" }); // { a: 0, b: 1, c: 2 }
 * ```
 */
function reverseNumericEnumMapping(object) {
    return Object.fromEntries(Object.entries(object).map(([key, value]) => [value, typeof value === "string" ? Number(key) : key]));
}
//# sourceMappingURL=index.js.map
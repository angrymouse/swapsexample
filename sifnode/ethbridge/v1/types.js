"use strict";
exports.__esModule = true;
exports.GenesisState = exports.PeggyTokens = exports.EthBridgeClaim = exports.claimTypeToJSON = exports.claimTypeFromJSON = exports.ClaimType = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = require("long");
var _m0 = require("protobufjs/minimal");
exports.protobufPackage = "sifnode.ethbridge.v1";
/** Claim type enum */
var ClaimType;
(function (ClaimType) {
    /** CLAIM_TYPE_UNSPECIFIED - Unspecified claim type */
    ClaimType[ClaimType["CLAIM_TYPE_UNSPECIFIED"] = 0] = "CLAIM_TYPE_UNSPECIFIED";
    /** CLAIM_TYPE_BURN - Burn claim type */
    ClaimType[ClaimType["CLAIM_TYPE_BURN"] = 1] = "CLAIM_TYPE_BURN";
    /** CLAIM_TYPE_LOCK - Lock claim type */
    ClaimType[ClaimType["CLAIM_TYPE_LOCK"] = 2] = "CLAIM_TYPE_LOCK";
    ClaimType[ClaimType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClaimType = exports.ClaimType || (exports.ClaimType = {}));
function claimTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CLAIM_TYPE_UNSPECIFIED":
            return ClaimType.CLAIM_TYPE_UNSPECIFIED;
        case 1:
        case "CLAIM_TYPE_BURN":
            return ClaimType.CLAIM_TYPE_BURN;
        case 2:
        case "CLAIM_TYPE_LOCK":
            return ClaimType.CLAIM_TYPE_LOCK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClaimType.UNRECOGNIZED;
    }
}
exports.claimTypeFromJSON = claimTypeFromJSON;
function claimTypeToJSON(object) {
    switch (object) {
        case ClaimType.CLAIM_TYPE_UNSPECIFIED:
            return "CLAIM_TYPE_UNSPECIFIED";
        case ClaimType.CLAIM_TYPE_BURN:
            return "CLAIM_TYPE_BURN";
        case ClaimType.CLAIM_TYPE_LOCK:
            return "CLAIM_TYPE_LOCK";
        default:
            return "UNKNOWN";
    }
}
exports.claimTypeToJSON = claimTypeToJSON;
function createBaseEthBridgeClaim() {
    return {
        ethereumChainId: long_1["default"].ZERO,
        bridgeContractAddress: "",
        nonce: long_1["default"].ZERO,
        symbol: "",
        tokenContractAddress: "",
        ethereumSender: "",
        cosmosReceiver: "",
        validatorAddress: "",
        amount: "",
        claimType: 0
    };
}
exports.EthBridgeClaim = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.ethereumChainId.isZero()) {
            writer.uint32(8).int64(message.ethereumChainId);
        }
        if (message.bridgeContractAddress !== "") {
            writer.uint32(18).string(message.bridgeContractAddress);
        }
        if (!message.nonce.isZero()) {
            writer.uint32(24).int64(message.nonce);
        }
        if (message.symbol !== "") {
            writer.uint32(34).string(message.symbol);
        }
        if (message.tokenContractAddress !== "") {
            writer.uint32(42).string(message.tokenContractAddress);
        }
        if (message.ethereumSender !== "") {
            writer.uint32(50).string(message.ethereumSender);
        }
        if (message.cosmosReceiver !== "") {
            writer.uint32(58).string(message.cosmosReceiver);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(66).string(message.validatorAddress);
        }
        if (message.amount !== "") {
            writer.uint32(74).string(message.amount);
        }
        if (message.claimType !== 0) {
            writer.uint32(80).int32(message.claimType);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEthBridgeClaim();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ethereumChainId = reader.int64();
                    break;
                case 2:
                    message.bridgeContractAddress = reader.string();
                    break;
                case 3:
                    message.nonce = reader.int64();
                    break;
                case 4:
                    message.symbol = reader.string();
                    break;
                case 5:
                    message.tokenContractAddress = reader.string();
                    break;
                case 6:
                    message.ethereumSender = reader.string();
                    break;
                case 7:
                    message.cosmosReceiver = reader.string();
                    break;
                case 8:
                    message.validatorAddress = reader.string();
                    break;
                case 9:
                    message.amount = reader.string();
                    break;
                case 10:
                    message.claimType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            ethereumChainId: isSet(object.ethereumChainId)
                ? long_1["default"].fromString(object.ethereumChainId)
                : long_1["default"].ZERO,
            bridgeContractAddress: isSet(object.bridgeContractAddress)
                ? String(object.bridgeContractAddress)
                : "",
            nonce: isSet(object.nonce) ? long_1["default"].fromString(object.nonce) : long_1["default"].ZERO,
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            tokenContractAddress: isSet(object.tokenContractAddress)
                ? String(object.tokenContractAddress)
                : "",
            ethereumSender: isSet(object.ethereumSender)
                ? String(object.ethereumSender)
                : "",
            cosmosReceiver: isSet(object.cosmosReceiver)
                ? String(object.cosmosReceiver)
                : "",
            validatorAddress: isSet(object.validatorAddress)
                ? String(object.validatorAddress)
                : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            claimType: isSet(object.claimType)
                ? claimTypeFromJSON(object.claimType)
                : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.ethereumChainId !== undefined &&
            (obj.ethereumChainId = (message.ethereumChainId || long_1["default"].ZERO).toString());
        message.bridgeContractAddress !== undefined &&
            (obj.bridgeContractAddress = message.bridgeContractAddress);
        message.nonce !== undefined &&
            (obj.nonce = (message.nonce || long_1["default"].ZERO).toString());
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.tokenContractAddress !== undefined &&
            (obj.tokenContractAddress = message.tokenContractAddress);
        message.ethereumSender !== undefined &&
            (obj.ethereumSender = message.ethereumSender);
        message.cosmosReceiver !== undefined &&
            (obj.cosmosReceiver = message.cosmosReceiver);
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.amount !== undefined && (obj.amount = message.amount);
        message.claimType !== undefined &&
            (obj.claimType = claimTypeToJSON(message.claimType));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseEthBridgeClaim();
        message.ethereumChainId =
            object.ethereumChainId !== undefined && object.ethereumChainId !== null
                ? long_1["default"].fromValue(object.ethereumChainId)
                : long_1["default"].ZERO;
        message.bridgeContractAddress = (_a = object.bridgeContractAddress) !== null && _a !== void 0 ? _a : "";
        message.nonce =
            object.nonce !== undefined && object.nonce !== null
                ? long_1["default"].fromValue(object.nonce)
                : long_1["default"].ZERO;
        message.symbol = (_b = object.symbol) !== null && _b !== void 0 ? _b : "";
        message.tokenContractAddress = (_c = object.tokenContractAddress) !== null && _c !== void 0 ? _c : "";
        message.ethereumSender = (_d = object.ethereumSender) !== null && _d !== void 0 ? _d : "";
        message.cosmosReceiver = (_e = object.cosmosReceiver) !== null && _e !== void 0 ? _e : "";
        message.validatorAddress = (_f = object.validatorAddress) !== null && _f !== void 0 ? _f : "";
        message.amount = (_g = object.amount) !== null && _g !== void 0 ? _g : "";
        message.claimType = (_h = object.claimType) !== null && _h !== void 0 ? _h : 0;
        return message;
    }
};
function createBasePeggyTokens() {
    return { tokens: [] };
}
exports.PeggyTokens = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.tokens; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePeggyTokens();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokens.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            tokens: Array.isArray(object === null || object === void 0 ? void 0 : object.tokens)
                ? object.tokens.map(function (e) { return String(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.tokens) {
            obj.tokens = message.tokens.map(function (e) { return e; });
        }
        else {
            obj.tokens = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBasePeggyTokens();
        message.tokens = ((_a = object.tokens) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseGenesisState() {
    return { cethReceiveAccount: "", peggyTokens: [] };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.cethReceiveAccount !== "") {
            writer.uint32(10).string(message.cethReceiveAccount);
        }
        for (var _i = 0, _a = message.peggyTokens; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cethReceiveAccount = reader.string();
                    break;
                case 2:
                    message.peggyTokens.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            cethReceiveAccount: isSet(object.cethReceiveAccount)
                ? String(object.cethReceiveAccount)
                : "",
            peggyTokens: Array.isArray(object === null || object === void 0 ? void 0 : object.peggyTokens)
                ? object.peggyTokens.map(function (e) { return String(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.cethReceiveAccount !== undefined &&
            (obj.cethReceiveAccount = message.cethReceiveAccount);
        if (message.peggyTokens) {
            obj.peggyTokens = message.peggyTokens.map(function (e) { return e; });
        }
        else {
            obj.peggyTokens = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGenesisState();
        message.cethReceiveAccount = (_a = object.cethReceiveAccount) !== null && _a !== void 0 ? _a : "";
        message.peggyTokens = ((_b = object.peggyTokens) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    }
};
if (_m0.util.Long !== long_1["default"]) {
    _m0.util.Long = long_1["default"];
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}

"use strict";
exports.__esModule = true;
exports.EventPolicy = exports.LiquidityProviderData = exports.WhiteList = exports.PmtpEpoch = exports.LiquidityUnlock = exports.LiquidityProvider = exports.Pool = exports.Asset = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = require("long");
var _m0 = require("protobufjs/minimal");
exports.protobufPackage = "sifnode.clp.v1";
function createBaseAsset() {
    return { symbol: "" };
}
exports.Asset = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.symbol !== "") {
            writer.uint32(10).string(message.symbol);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAsset();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
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
            symbol: isSet(object.symbol) ? String(object.symbol) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.symbol !== undefined && (obj.symbol = message.symbol);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAsset();
        message.symbol = (_a = object.symbol) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBasePool() {
    return {
        externalAsset: undefined,
        nativeAssetBalance: "",
        externalAssetBalance: "",
        poolUnits: "",
        swapPriceNative: "",
        swapPriceExternal: ""
    };
}
exports.Pool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.externalAsset !== undefined) {
            exports.Asset.encode(message.externalAsset, writer.uint32(10).fork()).ldelim();
        }
        if (message.nativeAssetBalance !== "") {
            writer.uint32(18).string(message.nativeAssetBalance);
        }
        if (message.externalAssetBalance !== "") {
            writer.uint32(26).string(message.externalAssetBalance);
        }
        if (message.poolUnits !== "") {
            writer.uint32(34).string(message.poolUnits);
        }
        if (message.swapPriceNative !== "") {
            writer.uint32(42).string(message.swapPriceNative);
        }
        if (message.swapPriceExternal !== "") {
            writer.uint32(50).string(message.swapPriceExternal);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalAsset = exports.Asset.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nativeAssetBalance = reader.string();
                    break;
                case 3:
                    message.externalAssetBalance = reader.string();
                    break;
                case 4:
                    message.poolUnits = reader.string();
                    break;
                case 5:
                    message.swapPriceNative = reader.string();
                    break;
                case 6:
                    message.swapPriceExternal = reader.string();
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
            externalAsset: isSet(object.externalAsset)
                ? exports.Asset.fromJSON(object.externalAsset)
                : undefined,
            nativeAssetBalance: isSet(object.nativeAssetBalance)
                ? String(object.nativeAssetBalance)
                : "",
            externalAssetBalance: isSet(object.externalAssetBalance)
                ? String(object.externalAssetBalance)
                : "",
            poolUnits: isSet(object.poolUnits) ? String(object.poolUnits) : "",
            swapPriceNative: isSet(object.swapPriceNative)
                ? String(object.swapPriceNative)
                : "",
            swapPriceExternal: isSet(object.swapPriceExternal)
                ? String(object.swapPriceExternal)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.externalAsset !== undefined &&
            (obj.externalAsset = message.externalAsset
                ? exports.Asset.toJSON(message.externalAsset)
                : undefined);
        message.nativeAssetBalance !== undefined &&
            (obj.nativeAssetBalance = message.nativeAssetBalance);
        message.externalAssetBalance !== undefined &&
            (obj.externalAssetBalance = message.externalAssetBalance);
        message.poolUnits !== undefined && (obj.poolUnits = message.poolUnits);
        message.swapPriceNative !== undefined &&
            (obj.swapPriceNative = message.swapPriceNative);
        message.swapPriceExternal !== undefined &&
            (obj.swapPriceExternal = message.swapPriceExternal);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBasePool();
        message.externalAsset =
            object.externalAsset !== undefined && object.externalAsset !== null
                ? exports.Asset.fromPartial(object.externalAsset)
                : undefined;
        message.nativeAssetBalance = (_a = object.nativeAssetBalance) !== null && _a !== void 0 ? _a : "";
        message.externalAssetBalance = (_b = object.externalAssetBalance) !== null && _b !== void 0 ? _b : "";
        message.poolUnits = (_c = object.poolUnits) !== null && _c !== void 0 ? _c : "";
        message.swapPriceNative = (_d = object.swapPriceNative) !== null && _d !== void 0 ? _d : "";
        message.swapPriceExternal = (_e = object.swapPriceExternal) !== null && _e !== void 0 ? _e : "";
        return message;
    }
};
function createBaseLiquidityProvider() {
    return {
        asset: undefined,
        liquidityProviderUnits: "",
        liquidityProviderAddress: "",
        unlocks: []
    };
}
exports.LiquidityProvider = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.asset !== undefined) {
            exports.Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
        }
        if (message.liquidityProviderUnits !== "") {
            writer.uint32(18).string(message.liquidityProviderUnits);
        }
        if (message.liquidityProviderAddress !== "") {
            writer.uint32(26).string(message.liquidityProviderAddress);
        }
        for (var _i = 0, _a = message.unlocks; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.LiquidityUnlock.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLiquidityProvider();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.asset = exports.Asset.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.liquidityProviderUnits = reader.string();
                    break;
                case 3:
                    message.liquidityProviderAddress = reader.string();
                    break;
                case 4:
                    message.unlocks.push(exports.LiquidityUnlock.decode(reader, reader.uint32()));
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
            asset: isSet(object.asset) ? exports.Asset.fromJSON(object.asset) : undefined,
            liquidityProviderUnits: isSet(object.liquidityProviderUnits)
                ? String(object.liquidityProviderUnits)
                : "",
            liquidityProviderAddress: isSet(object.liquidityProviderAddress)
                ? String(object.liquidityProviderAddress)
                : "",
            unlocks: Array.isArray(object === null || object === void 0 ? void 0 : object.unlocks)
                ? object.unlocks.map(function (e) { return exports.LiquidityUnlock.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.asset !== undefined &&
            (obj.asset = message.asset ? exports.Asset.toJSON(message.asset) : undefined);
        message.liquidityProviderUnits !== undefined &&
            (obj.liquidityProviderUnits = message.liquidityProviderUnits);
        message.liquidityProviderAddress !== undefined &&
            (obj.liquidityProviderAddress = message.liquidityProviderAddress);
        if (message.unlocks) {
            obj.unlocks = message.unlocks.map(function (e) {
                return e ? exports.LiquidityUnlock.toJSON(e) : undefined;
            });
        }
        else {
            obj.unlocks = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseLiquidityProvider();
        message.asset =
            object.asset !== undefined && object.asset !== null
                ? exports.Asset.fromPartial(object.asset)
                : undefined;
        message.liquidityProviderUnits = (_a = object.liquidityProviderUnits) !== null && _a !== void 0 ? _a : "";
        message.liquidityProviderAddress = (_b = object.liquidityProviderAddress) !== null && _b !== void 0 ? _b : "";
        message.unlocks =
            ((_c = object.unlocks) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.LiquidityUnlock.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseLiquidityUnlock() {
    return { requestHeight: long_1["default"].ZERO, units: "" };
}
exports.LiquidityUnlock = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.requestHeight.isZero()) {
            writer.uint32(8).int64(message.requestHeight);
        }
        if (message.units !== "") {
            writer.uint32(18).string(message.units);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLiquidityUnlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestHeight = reader.int64();
                    break;
                case 2:
                    message.units = reader.string();
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
            requestHeight: isSet(object.requestHeight)
                ? long_1["default"].fromString(object.requestHeight)
                : long_1["default"].ZERO,
            units: isSet(object.units) ? String(object.units) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.requestHeight !== undefined &&
            (obj.requestHeight = (message.requestHeight || long_1["default"].ZERO).toString());
        message.units !== undefined && (obj.units = message.units);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseLiquidityUnlock();
        message.requestHeight =
            object.requestHeight !== undefined && object.requestHeight !== null
                ? long_1["default"].fromValue(object.requestHeight)
                : long_1["default"].ZERO;
        message.units = (_a = object.units) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBasePmtpEpoch() {
    return { epochCounter: long_1["default"].ZERO, blockCounter: long_1["default"].ZERO };
}
exports.PmtpEpoch = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.epochCounter.isZero()) {
            writer.uint32(8).int64(message.epochCounter);
        }
        if (!message.blockCounter.isZero()) {
            writer.uint32(16).int64(message.blockCounter);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePmtpEpoch();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochCounter = reader.int64();
                    break;
                case 2:
                    message.blockCounter = reader.int64();
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
            epochCounter: isSet(object.epochCounter)
                ? long_1["default"].fromString(object.epochCounter)
                : long_1["default"].ZERO,
            blockCounter: isSet(object.blockCounter)
                ? long_1["default"].fromString(object.blockCounter)
                : long_1["default"].ZERO
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.epochCounter !== undefined &&
            (obj.epochCounter = (message.epochCounter || long_1["default"].ZERO).toString());
        message.blockCounter !== undefined &&
            (obj.blockCounter = (message.blockCounter || long_1["default"].ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBasePmtpEpoch();
        message.epochCounter =
            object.epochCounter !== undefined && object.epochCounter !== null
                ? long_1["default"].fromValue(object.epochCounter)
                : long_1["default"].ZERO;
        message.blockCounter =
            object.blockCounter !== undefined && object.blockCounter !== null
                ? long_1["default"].fromValue(object.blockCounter)
                : long_1["default"].ZERO;
        return message;
    }
};
function createBaseWhiteList() {
    return { validatorList: [] };
}
exports.WhiteList = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.validatorList; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWhiteList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorList.push(reader.string());
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
            validatorList: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorList)
                ? object.validatorList.map(function (e) { return String(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.validatorList) {
            obj.validatorList = message.validatorList.map(function (e) { return e; });
        }
        else {
            obj.validatorList = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseWhiteList();
        message.validatorList = ((_a = object.validatorList) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseLiquidityProviderData() {
    return {
        liquidityProvider: undefined,
        nativeAssetBalance: "",
        externalAssetBalance: ""
    };
}
exports.LiquidityProviderData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.liquidityProvider !== undefined) {
            exports.LiquidityProvider.encode(message.liquidityProvider, writer.uint32(10).fork()).ldelim();
        }
        if (message.nativeAssetBalance !== "") {
            writer.uint32(18).string(message.nativeAssetBalance);
        }
        if (message.externalAssetBalance !== "") {
            writer.uint32(26).string(message.externalAssetBalance);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLiquidityProviderData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidityProvider = exports.LiquidityProvider.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nativeAssetBalance = reader.string();
                    break;
                case 3:
                    message.externalAssetBalance = reader.string();
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
            liquidityProvider: isSet(object.liquidityProvider)
                ? exports.LiquidityProvider.fromJSON(object.liquidityProvider)
                : undefined,
            nativeAssetBalance: isSet(object.nativeAssetBalance)
                ? String(object.nativeAssetBalance)
                : "",
            externalAssetBalance: isSet(object.externalAssetBalance)
                ? String(object.externalAssetBalance)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.liquidityProvider !== undefined &&
            (obj.liquidityProvider = message.liquidityProvider
                ? exports.LiquidityProvider.toJSON(message.liquidityProvider)
                : undefined);
        message.nativeAssetBalance !== undefined &&
            (obj.nativeAssetBalance = message.nativeAssetBalance);
        message.externalAssetBalance !== undefined &&
            (obj.externalAssetBalance = message.externalAssetBalance);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseLiquidityProviderData();
        message.liquidityProvider =
            object.liquidityProvider !== undefined &&
                object.liquidityProvider !== null
                ? exports.LiquidityProvider.fromPartial(object.liquidityProvider)
                : undefined;
        message.nativeAssetBalance = (_a = object.nativeAssetBalance) !== null && _a !== void 0 ? _a : "";
        message.externalAssetBalance = (_b = object.externalAssetBalance) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseEventPolicy() {
    return { eventType: "", pmtpPeriodStartBlock: "", pmtpPeriodEndBlock: "" };
}
exports.EventPolicy = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.eventType !== "") {
            writer.uint32(10).string(message.eventType);
        }
        if (message.pmtpPeriodStartBlock !== "") {
            writer.uint32(18).string(message.pmtpPeriodStartBlock);
        }
        if (message.pmtpPeriodEndBlock !== "") {
            writer.uint32(26).string(message.pmtpPeriodEndBlock);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventPolicy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventType = reader.string();
                    break;
                case 2:
                    message.pmtpPeriodStartBlock = reader.string();
                    break;
                case 3:
                    message.pmtpPeriodEndBlock = reader.string();
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
            eventType: isSet(object.eventType) ? String(object.eventType) : "",
            pmtpPeriodStartBlock: isSet(object.pmtpPeriodStartBlock)
                ? String(object.pmtpPeriodStartBlock)
                : "",
            pmtpPeriodEndBlock: isSet(object.pmtpPeriodEndBlock)
                ? String(object.pmtpPeriodEndBlock)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.eventType !== undefined && (obj.eventType = message.eventType);
        message.pmtpPeriodStartBlock !== undefined &&
            (obj.pmtpPeriodStartBlock = message.pmtpPeriodStartBlock);
        message.pmtpPeriodEndBlock !== undefined &&
            (obj.pmtpPeriodEndBlock = message.pmtpPeriodEndBlock);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEventPolicy();
        message.eventType = (_a = object.eventType) !== null && _a !== void 0 ? _a : "";
        message.pmtpPeriodStartBlock = (_b = object.pmtpPeriodStartBlock) !== null && _b !== void 0 ? _b : "";
        message.pmtpPeriodEndBlock = (_c = object.pmtpPeriodEndBlock) !== null && _c !== void 0 ? _c : "";
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

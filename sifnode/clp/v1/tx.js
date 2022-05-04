"use strict";
exports.__esModule = true;
exports.MsgClientImpl = exports.MsgAddRewardPeriodResponse = exports.MsgAddRewardPeriodRequest = exports.MsgUpdateRewardsParamsResponse = exports.MsgUpdateRewardsParamsRequest = exports.MsgUnlockLiquidityResponse = exports.MsgUnlockLiquidityRequest = exports.MsgDecommissionPoolResponse = exports.MsgDecommissionPool = exports.MsgSwapResponse = exports.MsgSwap = exports.MsgUpdatePmtpParamsResponse = exports.MsgUpdatePmtpParams = exports.MsgModifyPmtpRatesResponse = exports.MsgModifyPmtpRates = exports.MsgAddLiquidityResponse = exports.MsgAddLiquidity = exports.MsgCreatePoolResponse = exports.MsgCreatePool = exports.MsgRemoveLiquidityUnitsResponse = exports.MsgRemoveLiquidityUnits = exports.MsgRemoveLiquidityResponse = exports.MsgRemoveLiquidity = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = require("long");
var _m0 = require("protobufjs/minimal");
var types_1 = require("../../../sifnode/clp/v1/types");
var params_1 = require("../../../sifnode/clp/v1/params");
exports.protobufPackage = "sifnode.clp.v1";
function createBaseMsgRemoveLiquidity() {
    return {
        signer: "",
        externalAsset: undefined,
        wBasisPoints: "",
        asymmetry: ""
    };
}
exports.MsgRemoveLiquidity = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.externalAsset !== undefined) {
            types_1.Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
        }
        if (message.wBasisPoints !== "") {
            writer.uint32(26).string(message.wBasisPoints);
        }
        if (message.asymmetry !== "") {
            writer.uint32(34).string(message.asymmetry);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgRemoveLiquidity();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
                    message.externalAsset = types_1.Asset.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.wBasisPoints = reader.string();
                    break;
                case 4:
                    message.asymmetry = reader.string();
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            externalAsset: isSet(object.externalAsset)
                ? types_1.Asset.fromJSON(object.externalAsset)
                : undefined,
            wBasisPoints: isSet(object.wBasisPoints)
                ? String(object.wBasisPoints)
                : "",
            asymmetry: isSet(object.asymmetry) ? String(object.asymmetry) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.signer !== undefined && (obj.signer = message.signer);
        message.externalAsset !== undefined &&
            (obj.externalAsset = message.externalAsset
                ? types_1.Asset.toJSON(message.externalAsset)
                : undefined);
        message.wBasisPoints !== undefined &&
            (obj.wBasisPoints = message.wBasisPoints);
        message.asymmetry !== undefined && (obj.asymmetry = message.asymmetry);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgRemoveLiquidity();
        message.signer = (_a = object.signer) !== null && _a !== void 0 ? _a : "";
        message.externalAsset =
            object.externalAsset !== undefined && object.externalAsset !== null
                ? types_1.Asset.fromPartial(object.externalAsset)
                : undefined;
        message.wBasisPoints = (_b = object.wBasisPoints) !== null && _b !== void 0 ? _b : "";
        message.asymmetry = (_c = object.asymmetry) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseMsgRemoveLiquidityResponse() {
    return {};
}
exports.MsgRemoveLiquidityResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgRemoveLiquidityResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgRemoveLiquidityResponse();
        return message;
    }
};
function createBaseMsgRemoveLiquidityUnits() {
    return { signer: "", externalAsset: undefined, withdrawUnits: "" };
}
exports.MsgRemoveLiquidityUnits = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.externalAsset !== undefined) {
            types_1.Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
        }
        if (message.withdrawUnits !== "") {
            writer.uint32(26).string(message.withdrawUnits);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgRemoveLiquidityUnits();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
                    message.externalAsset = types_1.Asset.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.withdrawUnits = reader.string();
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            externalAsset: isSet(object.externalAsset)
                ? types_1.Asset.fromJSON(object.externalAsset)
                : undefined,
            withdrawUnits: isSet(object.withdrawUnits)
                ? String(object.withdrawUnits)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.signer !== undefined && (obj.signer = message.signer);
        message.externalAsset !== undefined &&
            (obj.externalAsset = message.externalAsset
                ? types_1.Asset.toJSON(message.externalAsset)
                : undefined);
        message.withdrawUnits !== undefined &&
            (obj.withdrawUnits = message.withdrawUnits);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgRemoveLiquidityUnits();
        message.signer = (_a = object.signer) !== null && _a !== void 0 ? _a : "";
        message.externalAsset =
            object.externalAsset !== undefined && object.externalAsset !== null
                ? types_1.Asset.fromPartial(object.externalAsset)
                : undefined;
        message.withdrawUnits = (_b = object.withdrawUnits) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseMsgRemoveLiquidityUnitsResponse() {
    return {};
}
exports.MsgRemoveLiquidityUnitsResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgRemoveLiquidityUnitsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgRemoveLiquidityUnitsResponse();
        return message;
    }
};
function createBaseMsgCreatePool() {
    return {
        signer: "",
        externalAsset: undefined,
        nativeAssetAmount: "",
        externalAssetAmount: ""
    };
}
exports.MsgCreatePool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.externalAsset !== undefined) {
            types_1.Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
        }
        if (message.nativeAssetAmount !== "") {
            writer.uint32(26).string(message.nativeAssetAmount);
        }
        if (message.externalAssetAmount !== "") {
            writer.uint32(34).string(message.externalAssetAmount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreatePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
                    message.externalAsset = types_1.Asset.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nativeAssetAmount = reader.string();
                    break;
                case 4:
                    message.externalAssetAmount = reader.string();
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            externalAsset: isSet(object.externalAsset)
                ? types_1.Asset.fromJSON(object.externalAsset)
                : undefined,
            nativeAssetAmount: isSet(object.nativeAssetAmount)
                ? String(object.nativeAssetAmount)
                : "",
            externalAssetAmount: isSet(object.externalAssetAmount)
                ? String(object.externalAssetAmount)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.signer !== undefined && (obj.signer = message.signer);
        message.externalAsset !== undefined &&
            (obj.externalAsset = message.externalAsset
                ? types_1.Asset.toJSON(message.externalAsset)
                : undefined);
        message.nativeAssetAmount !== undefined &&
            (obj.nativeAssetAmount = message.nativeAssetAmount);
        message.externalAssetAmount !== undefined &&
            (obj.externalAssetAmount = message.externalAssetAmount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgCreatePool();
        message.signer = (_a = object.signer) !== null && _a !== void 0 ? _a : "";
        message.externalAsset =
            object.externalAsset !== undefined && object.externalAsset !== null
                ? types_1.Asset.fromPartial(object.externalAsset)
                : undefined;
        message.nativeAssetAmount = (_b = object.nativeAssetAmount) !== null && _b !== void 0 ? _b : "";
        message.externalAssetAmount = (_c = object.externalAssetAmount) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseMsgCreatePoolResponse() {
    return {};
}
exports.MsgCreatePoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreatePoolResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgCreatePoolResponse();
        return message;
    }
};
function createBaseMsgAddLiquidity() {
    return {
        signer: "",
        externalAsset: undefined,
        nativeAssetAmount: "",
        externalAssetAmount: ""
    };
}
exports.MsgAddLiquidity = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.externalAsset !== undefined) {
            types_1.Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
        }
        if (message.nativeAssetAmount !== "") {
            writer.uint32(26).string(message.nativeAssetAmount);
        }
        if (message.externalAssetAmount !== "") {
            writer.uint32(34).string(message.externalAssetAmount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAddLiquidity();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
                    message.externalAsset = types_1.Asset.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nativeAssetAmount = reader.string();
                    break;
                case 4:
                    message.externalAssetAmount = reader.string();
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            externalAsset: isSet(object.externalAsset)
                ? types_1.Asset.fromJSON(object.externalAsset)
                : undefined,
            nativeAssetAmount: isSet(object.nativeAssetAmount)
                ? String(object.nativeAssetAmount)
                : "",
            externalAssetAmount: isSet(object.externalAssetAmount)
                ? String(object.externalAssetAmount)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.signer !== undefined && (obj.signer = message.signer);
        message.externalAsset !== undefined &&
            (obj.externalAsset = message.externalAsset
                ? types_1.Asset.toJSON(message.externalAsset)
                : undefined);
        message.nativeAssetAmount !== undefined &&
            (obj.nativeAssetAmount = message.nativeAssetAmount);
        message.externalAssetAmount !== undefined &&
            (obj.externalAssetAmount = message.externalAssetAmount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgAddLiquidity();
        message.signer = (_a = object.signer) !== null && _a !== void 0 ? _a : "";
        message.externalAsset =
            object.externalAsset !== undefined && object.externalAsset !== null
                ? types_1.Asset.fromPartial(object.externalAsset)
                : undefined;
        message.nativeAssetAmount = (_b = object.nativeAssetAmount) !== null && _b !== void 0 ? _b : "";
        message.externalAssetAmount = (_c = object.externalAssetAmount) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseMsgAddLiquidityResponse() {
    return {};
}
exports.MsgAddLiquidityResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAddLiquidityResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgAddLiquidityResponse();
        return message;
    }
};
function createBaseMsgModifyPmtpRates() {
    return { signer: "", blockRate: "", runningRate: "", endPolicy: false };
}
exports.MsgModifyPmtpRates = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.blockRate !== "") {
            writer.uint32(18).string(message.blockRate);
        }
        if (message.runningRate !== "") {
            writer.uint32(26).string(message.runningRate);
        }
        if (message.endPolicy === true) {
            writer.uint32(32).bool(message.endPolicy);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgModifyPmtpRates();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
                    message.blockRate = reader.string();
                    break;
                case 3:
                    message.runningRate = reader.string();
                    break;
                case 4:
                    message.endPolicy = reader.bool();
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            blockRate: isSet(object.blockRate) ? String(object.blockRate) : "",
            runningRate: isSet(object.runningRate) ? String(object.runningRate) : "",
            endPolicy: isSet(object.endPolicy) ? Boolean(object.endPolicy) : false
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.signer !== undefined && (obj.signer = message.signer);
        message.blockRate !== undefined && (obj.blockRate = message.blockRate);
        message.runningRate !== undefined &&
            (obj.runningRate = message.runningRate);
        message.endPolicy !== undefined && (obj.endPolicy = message.endPolicy);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseMsgModifyPmtpRates();
        message.signer = (_a = object.signer) !== null && _a !== void 0 ? _a : "";
        message.blockRate = (_b = object.blockRate) !== null && _b !== void 0 ? _b : "";
        message.runningRate = (_c = object.runningRate) !== null && _c !== void 0 ? _c : "";
        message.endPolicy = (_d = object.endPolicy) !== null && _d !== void 0 ? _d : false;
        return message;
    }
};
function createBaseMsgModifyPmtpRatesResponse() {
    return {};
}
exports.MsgModifyPmtpRatesResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgModifyPmtpRatesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgModifyPmtpRatesResponse();
        return message;
    }
};
function createBaseMsgUpdatePmtpParams() {
    return {
        signer: "",
        pmtpPeriodGovernanceRate: "",
        pmtpPeriodEpochLength: long_1["default"].ZERO,
        pmtpPeriodStartBlock: long_1["default"].ZERO,
        pmtpPeriodEndBlock: long_1["default"].ZERO
    };
}
exports.MsgUpdatePmtpParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.pmtpPeriodGovernanceRate !== "") {
            writer.uint32(18).string(message.pmtpPeriodGovernanceRate);
        }
        if (!message.pmtpPeriodEpochLength.isZero()) {
            writer.uint32(24).int64(message.pmtpPeriodEpochLength);
        }
        if (!message.pmtpPeriodStartBlock.isZero()) {
            writer.uint32(32).int64(message.pmtpPeriodStartBlock);
        }
        if (!message.pmtpPeriodEndBlock.isZero()) {
            writer.uint32(40).int64(message.pmtpPeriodEndBlock);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdatePmtpParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
                    message.pmtpPeriodGovernanceRate = reader.string();
                    break;
                case 3:
                    message.pmtpPeriodEpochLength = reader.int64();
                    break;
                case 4:
                    message.pmtpPeriodStartBlock = reader.int64();
                    break;
                case 5:
                    message.pmtpPeriodEndBlock = reader.int64();
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            pmtpPeriodGovernanceRate: isSet(object.pmtpPeriodGovernanceRate)
                ? String(object.pmtpPeriodGovernanceRate)
                : "",
            pmtpPeriodEpochLength: isSet(object.pmtpPeriodEpochLength)
                ? long_1["default"].fromString(object.pmtpPeriodEpochLength)
                : long_1["default"].ZERO,
            pmtpPeriodStartBlock: isSet(object.pmtpPeriodStartBlock)
                ? long_1["default"].fromString(object.pmtpPeriodStartBlock)
                : long_1["default"].ZERO,
            pmtpPeriodEndBlock: isSet(object.pmtpPeriodEndBlock)
                ? long_1["default"].fromString(object.pmtpPeriodEndBlock)
                : long_1["default"].ZERO
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.signer !== undefined && (obj.signer = message.signer);
        message.pmtpPeriodGovernanceRate !== undefined &&
            (obj.pmtpPeriodGovernanceRate = message.pmtpPeriodGovernanceRate);
        message.pmtpPeriodEpochLength !== undefined &&
            (obj.pmtpPeriodEpochLength = (message.pmtpPeriodEpochLength || long_1["default"].ZERO).toString());
        message.pmtpPeriodStartBlock !== undefined &&
            (obj.pmtpPeriodStartBlock = (message.pmtpPeriodStartBlock || long_1["default"].ZERO).toString());
        message.pmtpPeriodEndBlock !== undefined &&
            (obj.pmtpPeriodEndBlock = (message.pmtpPeriodEndBlock || long_1["default"].ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgUpdatePmtpParams();
        message.signer = (_a = object.signer) !== null && _a !== void 0 ? _a : "";
        message.pmtpPeriodGovernanceRate = (_b = object.pmtpPeriodGovernanceRate) !== null && _b !== void 0 ? _b : "";
        message.pmtpPeriodEpochLength =
            object.pmtpPeriodEpochLength !== undefined &&
                object.pmtpPeriodEpochLength !== null
                ? long_1["default"].fromValue(object.pmtpPeriodEpochLength)
                : long_1["default"].ZERO;
        message.pmtpPeriodStartBlock =
            object.pmtpPeriodStartBlock !== undefined &&
                object.pmtpPeriodStartBlock !== null
                ? long_1["default"].fromValue(object.pmtpPeriodStartBlock)
                : long_1["default"].ZERO;
        message.pmtpPeriodEndBlock =
            object.pmtpPeriodEndBlock !== undefined &&
                object.pmtpPeriodEndBlock !== null
                ? long_1["default"].fromValue(object.pmtpPeriodEndBlock)
                : long_1["default"].ZERO;
        return message;
    }
};
function createBaseMsgUpdatePmtpParamsResponse() {
    return {};
}
exports.MsgUpdatePmtpParamsResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdatePmtpParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgUpdatePmtpParamsResponse();
        return message;
    }
};
function createBaseMsgSwap() {
    return {
        signer: "",
        sentAsset: undefined,
        receivedAsset: undefined,
        sentAmount: "",
        minReceivingAmount: ""
    };
}
exports.MsgSwap = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.sentAsset !== undefined) {
            types_1.Asset.encode(message.sentAsset, writer.uint32(18).fork()).ldelim();
        }
        if (message.receivedAsset !== undefined) {
            types_1.Asset.encode(message.receivedAsset, writer.uint32(26).fork()).ldelim();
        }
        if (message.sentAmount !== "") {
            writer.uint32(34).string(message.sentAmount);
        }
        if (message.minReceivingAmount !== "") {
            writer.uint32(42).string(message.minReceivingAmount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSwap();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
                    message.sentAsset = types_1.Asset.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.receivedAsset = types_1.Asset.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sentAmount = reader.string();
                    break;
                case 5:
                    message.minReceivingAmount = reader.string();
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            sentAsset: isSet(object.sentAsset)
                ? types_1.Asset.fromJSON(object.sentAsset)
                : undefined,
            receivedAsset: isSet(object.receivedAsset)
                ? types_1.Asset.fromJSON(object.receivedAsset)
                : undefined,
            sentAmount: isSet(object.sentAmount) ? String(object.sentAmount) : "",
            minReceivingAmount: isSet(object.minReceivingAmount)
                ? String(object.minReceivingAmount)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.signer !== undefined && (obj.signer = message.signer);
        message.sentAsset !== undefined &&
            (obj.sentAsset = message.sentAsset
                ? types_1.Asset.toJSON(message.sentAsset)
                : undefined);
        message.receivedAsset !== undefined &&
            (obj.receivedAsset = message.receivedAsset
                ? types_1.Asset.toJSON(message.receivedAsset)
                : undefined);
        message.sentAmount !== undefined && (obj.sentAmount = message.sentAmount);
        message.minReceivingAmount !== undefined &&
            (obj.minReceivingAmount = message.minReceivingAmount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgSwap();
        message.signer = (_a = object.signer) !== null && _a !== void 0 ? _a : "";
        message.sentAsset =
            object.sentAsset !== undefined && object.sentAsset !== null
                ? types_1.Asset.fromPartial(object.sentAsset)
                : undefined;
        message.receivedAsset =
            object.receivedAsset !== undefined && object.receivedAsset !== null
                ? types_1.Asset.fromPartial(object.receivedAsset)
                : undefined;
        message.sentAmount = (_b = object.sentAmount) !== null && _b !== void 0 ? _b : "";
        message.minReceivingAmount = (_c = object.minReceivingAmount) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseMsgSwapResponse() {
    return {};
}
exports.MsgSwapResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSwapResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgSwapResponse();
        return message;
    }
};
function createBaseMsgDecommissionPool() {
    return { signer: "", symbol: "" };
}
exports.MsgDecommissionPool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDecommissionPool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.signer !== undefined && (obj.signer = message.signer);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgDecommissionPool();
        message.signer = (_a = object.signer) !== null && _a !== void 0 ? _a : "";
        message.symbol = (_b = object.symbol) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseMsgDecommissionPoolResponse() {
    return {};
}
exports.MsgDecommissionPoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDecommissionPoolResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgDecommissionPoolResponse();
        return message;
    }
};
function createBaseMsgUnlockLiquidityRequest() {
    return { signer: "", externalAsset: undefined, units: "" };
}
exports.MsgUnlockLiquidityRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.externalAsset !== undefined) {
            types_1.Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
        }
        if (message.units !== "") {
            writer.uint32(26).string(message.units);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUnlockLiquidityRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
                    message.externalAsset = types_1.Asset.decode(reader, reader.uint32());
                    break;
                case 3:
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            externalAsset: isSet(object.externalAsset)
                ? types_1.Asset.fromJSON(object.externalAsset)
                : undefined,
            units: isSet(object.units) ? String(object.units) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.signer !== undefined && (obj.signer = message.signer);
        message.externalAsset !== undefined &&
            (obj.externalAsset = message.externalAsset
                ? types_1.Asset.toJSON(message.externalAsset)
                : undefined);
        message.units !== undefined && (obj.units = message.units);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgUnlockLiquidityRequest();
        message.signer = (_a = object.signer) !== null && _a !== void 0 ? _a : "";
        message.externalAsset =
            object.externalAsset !== undefined && object.externalAsset !== null
                ? types_1.Asset.fromPartial(object.externalAsset)
                : undefined;
        message.units = (_b = object.units) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseMsgUnlockLiquidityResponse() {
    return {};
}
exports.MsgUnlockLiquidityResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUnlockLiquidityResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgUnlockLiquidityResponse();
        return message;
    }
};
function createBaseMsgUpdateRewardsParamsRequest() {
    return {
        signer: "",
        liquidityRemovalLockPeriod: long_1["default"].UZERO,
        liquidityRemovalCancelPeriod: long_1["default"].UZERO
    };
}
exports.MsgUpdateRewardsParamsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (!message.liquidityRemovalLockPeriod.isZero()) {
            writer.uint32(16).uint64(message.liquidityRemovalLockPeriod);
        }
        if (!message.liquidityRemovalCancelPeriod.isZero()) {
            writer.uint32(24).uint64(message.liquidityRemovalCancelPeriod);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateRewardsParamsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
                    message.liquidityRemovalLockPeriod = reader.uint64();
                    break;
                case 3:
                    message.liquidityRemovalCancelPeriod = reader.uint64();
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            liquidityRemovalLockPeriod: isSet(object.liquidityRemovalLockPeriod)
                ? long_1["default"].fromString(object.liquidityRemovalLockPeriod)
                : long_1["default"].UZERO,
            liquidityRemovalCancelPeriod: isSet(object.liquidityRemovalCancelPeriod)
                ? long_1["default"].fromString(object.liquidityRemovalCancelPeriod)
                : long_1["default"].UZERO
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.signer !== undefined && (obj.signer = message.signer);
        message.liquidityRemovalLockPeriod !== undefined &&
            (obj.liquidityRemovalLockPeriod = (message.liquidityRemovalLockPeriod || long_1["default"].UZERO).toString());
        message.liquidityRemovalCancelPeriod !== undefined &&
            (obj.liquidityRemovalCancelPeriod = (message.liquidityRemovalCancelPeriod || long_1["default"].UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgUpdateRewardsParamsRequest();
        message.signer = (_a = object.signer) !== null && _a !== void 0 ? _a : "";
        message.liquidityRemovalLockPeriod =
            object.liquidityRemovalLockPeriod !== undefined &&
                object.liquidityRemovalLockPeriod !== null
                ? long_1["default"].fromValue(object.liquidityRemovalLockPeriod)
                : long_1["default"].UZERO;
        message.liquidityRemovalCancelPeriod =
            object.liquidityRemovalCancelPeriod !== undefined &&
                object.liquidityRemovalCancelPeriod !== null
                ? long_1["default"].fromValue(object.liquidityRemovalCancelPeriod)
                : long_1["default"].UZERO;
        return message;
    }
};
function createBaseMsgUpdateRewardsParamsResponse() {
    return {};
}
exports.MsgUpdateRewardsParamsResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateRewardsParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgUpdateRewardsParamsResponse();
        return message;
    }
};
function createBaseMsgAddRewardPeriodRequest() {
    return { signer: "", rewardPeriods: [] };
}
exports.MsgAddRewardPeriodRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        for (var _i = 0, _a = message.rewardPeriods; _i < _a.length; _i++) {
            var v = _a[_i];
            params_1.RewardPeriod.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAddRewardPeriodRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
                    message.rewardPeriods.push(params_1.RewardPeriod.decode(reader, reader.uint32()));
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            rewardPeriods: Array.isArray(object === null || object === void 0 ? void 0 : object.rewardPeriods)
                ? object.rewardPeriods.map(function (e) { return params_1.RewardPeriod.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.signer !== undefined && (obj.signer = message.signer);
        if (message.rewardPeriods) {
            obj.rewardPeriods = message.rewardPeriods.map(function (e) {
                return e ? params_1.RewardPeriod.toJSON(e) : undefined;
            });
        }
        else {
            obj.rewardPeriods = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgAddRewardPeriodRequest();
        message.signer = (_a = object.signer) !== null && _a !== void 0 ? _a : "";
        message.rewardPeriods =
            ((_b = object.rewardPeriods) === null || _b === void 0 ? void 0 : _b.map(function (e) { return params_1.RewardPeriod.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseMsgAddRewardPeriodResponse() {
    return {};
}
exports.MsgAddRewardPeriodResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAddRewardPeriodResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgAddRewardPeriodResponse();
        return message;
    }
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.RemoveLiquidity = this.RemoveLiquidity.bind(this);
        this.RemoveLiquidityUnits = this.RemoveLiquidityUnits.bind(this);
        this.CreatePool = this.CreatePool.bind(this);
        this.AddLiquidity = this.AddLiquidity.bind(this);
        this.Swap = this.Swap.bind(this);
        this.DecommissionPool = this.DecommissionPool.bind(this);
        this.UnlockLiquidity = this.UnlockLiquidity.bind(this);
        this.UpdateRewardsParams = this.UpdateRewardsParams.bind(this);
        this.AddRewardPeriod = this.AddRewardPeriod.bind(this);
        this.ModifyPmtpRates = this.ModifyPmtpRates.bind(this);
        this.UpdatePmtpParams = this.UpdatePmtpParams.bind(this);
    }
    MsgClientImpl.prototype.RemoveLiquidity = function (request) {
        var data = exports.MsgRemoveLiquidity.encode(request).finish();
        var promise = this.rpc.request("sifnode.clp.v1.Msg", "RemoveLiquidity", data);
        return promise.then(function (data) {
            return exports.MsgRemoveLiquidityResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.RemoveLiquidityUnits = function (request) {
        var data = exports.MsgRemoveLiquidityUnits.encode(request).finish();
        var promise = this.rpc.request("sifnode.clp.v1.Msg", "RemoveLiquidityUnits", data);
        return promise.then(function (data) {
            return exports.MsgRemoveLiquidityUnitsResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.CreatePool = function (request) {
        var data = exports.MsgCreatePool.encode(request).finish();
        var promise = this.rpc.request("sifnode.clp.v1.Msg", "CreatePool", data);
        return promise.then(function (data) {
            return exports.MsgCreatePoolResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.AddLiquidity = function (request) {
        var data = exports.MsgAddLiquidity.encode(request).finish();
        var promise = this.rpc.request("sifnode.clp.v1.Msg", "AddLiquidity", data);
        return promise.then(function (data) {
            return exports.MsgAddLiquidityResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.Swap = function (request) {
        var data = exports.MsgSwap.encode(request).finish();
        var promise = this.rpc.request("sifnode.clp.v1.Msg", "Swap", data);
        return promise.then(function (data) { return exports.MsgSwapResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.DecommissionPool = function (request) {
        var data = exports.MsgDecommissionPool.encode(request).finish();
        var promise = this.rpc.request("sifnode.clp.v1.Msg", "DecommissionPool", data);
        return promise.then(function (data) {
            return exports.MsgDecommissionPoolResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.UnlockLiquidity = function (request) {
        var data = exports.MsgUnlockLiquidityRequest.encode(request).finish();
        var promise = this.rpc.request("sifnode.clp.v1.Msg", "UnlockLiquidity", data);
        return promise.then(function (data) {
            return exports.MsgUnlockLiquidityResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.UpdateRewardsParams = function (request) {
        var data = exports.MsgUpdateRewardsParamsRequest.encode(request).finish();
        var promise = this.rpc.request("sifnode.clp.v1.Msg", "UpdateRewardsParams", data);
        return promise.then(function (data) {
            return exports.MsgUpdateRewardsParamsResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.AddRewardPeriod = function (request) {
        var data = exports.MsgAddRewardPeriodRequest.encode(request).finish();
        var promise = this.rpc.request("sifnode.clp.v1.Msg", "AddRewardPeriod", data);
        return promise.then(function (data) {
            return exports.MsgAddRewardPeriodResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.ModifyPmtpRates = function (request) {
        var data = exports.MsgModifyPmtpRates.encode(request).finish();
        var promise = this.rpc.request("sifnode.clp.v1.Msg", "ModifyPmtpRates", data);
        return promise.then(function (data) {
            return exports.MsgModifyPmtpRatesResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.UpdatePmtpParams = function (request) {
        var data = exports.MsgUpdatePmtpParams.encode(request).finish();
        var promise = this.rpc.request("sifnode.clp.v1.Msg", "UpdatePmtpParams", data);
        return promise.then(function (data) {
            return exports.MsgUpdatePmtpParamsResponse.decode(new _m0.Reader(data));
        });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
if (_m0.util.Long !== long_1["default"]) {
    _m0.util.Long = long_1["default"];
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}

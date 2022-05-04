"use strict";
exports.__esModule = true;
exports.PoolMultiplier = exports.RewardPeriod = exports.PmtpParams = exports.PmtpRateParams = exports.RewardParams = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = require("long");
var _m0 = require("protobufjs/minimal");
exports.protobufPackage = "sifnode.clp.v1";
function createBaseParams() {
    return { minCreatePoolThreshold: long_1["default"].UZERO };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.minCreatePoolThreshold.isZero()) {
            writer.uint32(8).uint64(message.minCreatePoolThreshold);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minCreatePoolThreshold = reader.uint64();
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
            minCreatePoolThreshold: isSet(object.minCreatePoolThreshold)
                ? long_1["default"].fromString(object.minCreatePoolThreshold)
                : long_1["default"].UZERO
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.minCreatePoolThreshold !== undefined &&
            (obj.minCreatePoolThreshold = (message.minCreatePoolThreshold || long_1["default"].UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseParams();
        message.minCreatePoolThreshold =
            object.minCreatePoolThreshold !== undefined &&
                object.minCreatePoolThreshold !== null
                ? long_1["default"].fromValue(object.minCreatePoolThreshold)
                : long_1["default"].UZERO;
        return message;
    }
};
function createBaseRewardParams() {
    return {
        liquidityRemovalLockPeriod: long_1["default"].UZERO,
        liquidityRemovalCancelPeriod: long_1["default"].UZERO,
        rewardPeriods: []
    };
}
exports.RewardParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.liquidityRemovalLockPeriod.isZero()) {
            writer.uint32(8).uint64(message.liquidityRemovalLockPeriod);
        }
        if (!message.liquidityRemovalCancelPeriod.isZero()) {
            writer.uint32(16).uint64(message.liquidityRemovalCancelPeriod);
        }
        for (var _i = 0, _a = message.rewardPeriods; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.RewardPeriod.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRewardParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidityRemovalLockPeriod = reader.uint64();
                    break;
                case 2:
                    message.liquidityRemovalCancelPeriod = reader.uint64();
                    break;
                case 4:
                    message.rewardPeriods.push(exports.RewardPeriod.decode(reader, reader.uint32()));
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
            liquidityRemovalLockPeriod: isSet(object.liquidityRemovalLockPeriod)
                ? long_1["default"].fromString(object.liquidityRemovalLockPeriod)
                : long_1["default"].UZERO,
            liquidityRemovalCancelPeriod: isSet(object.liquidityRemovalCancelPeriod)
                ? long_1["default"].fromString(object.liquidityRemovalCancelPeriod)
                : long_1["default"].UZERO,
            rewardPeriods: Array.isArray(object === null || object === void 0 ? void 0 : object.rewardPeriods)
                ? object.rewardPeriods.map(function (e) { return exports.RewardPeriod.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.liquidityRemovalLockPeriod !== undefined &&
            (obj.liquidityRemovalLockPeriod = (message.liquidityRemovalLockPeriod || long_1["default"].UZERO).toString());
        message.liquidityRemovalCancelPeriod !== undefined &&
            (obj.liquidityRemovalCancelPeriod = (message.liquidityRemovalCancelPeriod || long_1["default"].UZERO).toString());
        if (message.rewardPeriods) {
            obj.rewardPeriods = message.rewardPeriods.map(function (e) {
                return e ? exports.RewardPeriod.toJSON(e) : undefined;
            });
        }
        else {
            obj.rewardPeriods = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRewardParams();
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
        message.rewardPeriods =
            ((_a = object.rewardPeriods) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.RewardPeriod.fromPartial(e); })) || [];
        return message;
    }
};
function createBasePmtpRateParams() {
    return {
        pmtpPeriodBlockRate: "",
        pmtpCurrentRunningRate: "",
        pmtpInterPolicyRate: ""
    };
}
exports.PmtpRateParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pmtpPeriodBlockRate !== "") {
            writer.uint32(18).string(message.pmtpPeriodBlockRate);
        }
        if (message.pmtpCurrentRunningRate !== "") {
            writer.uint32(26).string(message.pmtpCurrentRunningRate);
        }
        if (message.pmtpInterPolicyRate !== "") {
            writer.uint32(34).string(message.pmtpInterPolicyRate);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePmtpRateParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.pmtpPeriodBlockRate = reader.string();
                    break;
                case 3:
                    message.pmtpCurrentRunningRate = reader.string();
                    break;
                case 4:
                    message.pmtpInterPolicyRate = reader.string();
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
            pmtpPeriodBlockRate: isSet(object.pmtpPeriodBlockRate)
                ? String(object.pmtpPeriodBlockRate)
                : "",
            pmtpCurrentRunningRate: isSet(object.pmtpCurrentRunningRate)
                ? String(object.pmtpCurrentRunningRate)
                : "",
            pmtpInterPolicyRate: isSet(object.pmtpInterPolicyRate)
                ? String(object.pmtpInterPolicyRate)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pmtpPeriodBlockRate !== undefined &&
            (obj.pmtpPeriodBlockRate = message.pmtpPeriodBlockRate);
        message.pmtpCurrentRunningRate !== undefined &&
            (obj.pmtpCurrentRunningRate = message.pmtpCurrentRunningRate);
        message.pmtpInterPolicyRate !== undefined &&
            (obj.pmtpInterPolicyRate = message.pmtpInterPolicyRate);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBasePmtpRateParams();
        message.pmtpPeriodBlockRate = (_a = object.pmtpPeriodBlockRate) !== null && _a !== void 0 ? _a : "";
        message.pmtpCurrentRunningRate = (_b = object.pmtpCurrentRunningRate) !== null && _b !== void 0 ? _b : "";
        message.pmtpInterPolicyRate = (_c = object.pmtpInterPolicyRate) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBasePmtpParams() {
    return {
        pmtpPeriodGovernanceRate: "",
        pmtpPeriodEpochLength: long_1["default"].ZERO,
        pmtpPeriodStartBlock: long_1["default"].ZERO,
        pmtpPeriodEndBlock: long_1["default"].ZERO
    };
}
exports.PmtpParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pmtpPeriodGovernanceRate !== "") {
            writer.uint32(10).string(message.pmtpPeriodGovernanceRate);
        }
        if (!message.pmtpPeriodEpochLength.isZero()) {
            writer.uint32(16).int64(message.pmtpPeriodEpochLength);
        }
        if (!message.pmtpPeriodStartBlock.isZero()) {
            writer.uint32(24).int64(message.pmtpPeriodStartBlock);
        }
        if (!message.pmtpPeriodEndBlock.isZero()) {
            writer.uint32(32).int64(message.pmtpPeriodEndBlock);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePmtpParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pmtpPeriodGovernanceRate = reader.string();
                    break;
                case 2:
                    message.pmtpPeriodEpochLength = reader.int64();
                    break;
                case 3:
                    message.pmtpPeriodStartBlock = reader.int64();
                    break;
                case 4:
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
        var _a;
        var message = createBasePmtpParams();
        message.pmtpPeriodGovernanceRate = (_a = object.pmtpPeriodGovernanceRate) !== null && _a !== void 0 ? _a : "";
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
function createBaseRewardPeriod() {
    return {
        rewardPeriodId: "",
        rewardPeriodStartBlock: long_1["default"].UZERO,
        rewardPeriodEndBlock: long_1["default"].UZERO,
        rewardPeriodAllocation: "",
        rewardPeriodPoolMultipliers: [],
        rewardPeriodDefaultMultiplier: ""
    };
}
exports.RewardPeriod = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rewardPeriodId !== "") {
            writer.uint32(10).string(message.rewardPeriodId);
        }
        if (!message.rewardPeriodStartBlock.isZero()) {
            writer.uint32(16).uint64(message.rewardPeriodStartBlock);
        }
        if (!message.rewardPeriodEndBlock.isZero()) {
            writer.uint32(24).uint64(message.rewardPeriodEndBlock);
        }
        if (message.rewardPeriodAllocation !== "") {
            writer.uint32(34).string(message.rewardPeriodAllocation);
        }
        for (var _i = 0, _a = message.rewardPeriodPoolMultipliers; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.PoolMultiplier.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.rewardPeriodDefaultMultiplier !== "") {
            writer.uint32(50).string(message.rewardPeriodDefaultMultiplier);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRewardPeriod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardPeriodId = reader.string();
                    break;
                case 2:
                    message.rewardPeriodStartBlock = reader.uint64();
                    break;
                case 3:
                    message.rewardPeriodEndBlock = reader.uint64();
                    break;
                case 4:
                    message.rewardPeriodAllocation = reader.string();
                    break;
                case 5:
                    message.rewardPeriodPoolMultipliers.push(exports.PoolMultiplier.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.rewardPeriodDefaultMultiplier = reader.string();
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
            rewardPeriodId: isSet(object.rewardPeriodId)
                ? String(object.rewardPeriodId)
                : "",
            rewardPeriodStartBlock: isSet(object.rewardPeriodStartBlock)
                ? long_1["default"].fromString(object.rewardPeriodStartBlock)
                : long_1["default"].UZERO,
            rewardPeriodEndBlock: isSet(object.rewardPeriodEndBlock)
                ? long_1["default"].fromString(object.rewardPeriodEndBlock)
                : long_1["default"].UZERO,
            rewardPeriodAllocation: isSet(object.rewardPeriodAllocation)
                ? String(object.rewardPeriodAllocation)
                : "",
            rewardPeriodPoolMultipliers: Array.isArray(object === null || object === void 0 ? void 0 : object.rewardPeriodPoolMultipliers)
                ? object.rewardPeriodPoolMultipliers.map(function (e) {
                    return exports.PoolMultiplier.fromJSON(e);
                })
                : [],
            rewardPeriodDefaultMultiplier: isSet(object.rewardPeriodDefaultMultiplier)
                ? String(object.rewardPeriodDefaultMultiplier)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.rewardPeriodId !== undefined &&
            (obj.rewardPeriodId = message.rewardPeriodId);
        message.rewardPeriodStartBlock !== undefined &&
            (obj.rewardPeriodStartBlock = (message.rewardPeriodStartBlock || long_1["default"].UZERO).toString());
        message.rewardPeriodEndBlock !== undefined &&
            (obj.rewardPeriodEndBlock = (message.rewardPeriodEndBlock || long_1["default"].UZERO).toString());
        message.rewardPeriodAllocation !== undefined &&
            (obj.rewardPeriodAllocation = message.rewardPeriodAllocation);
        if (message.rewardPeriodPoolMultipliers) {
            obj.rewardPeriodPoolMultipliers = message.rewardPeriodPoolMultipliers.map(function (e) { return (e ? exports.PoolMultiplier.toJSON(e) : undefined); });
        }
        else {
            obj.rewardPeriodPoolMultipliers = [];
        }
        message.rewardPeriodDefaultMultiplier !== undefined &&
            (obj.rewardPeriodDefaultMultiplier =
                message.rewardPeriodDefaultMultiplier);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseRewardPeriod();
        message.rewardPeriodId = (_a = object.rewardPeriodId) !== null && _a !== void 0 ? _a : "";
        message.rewardPeriodStartBlock =
            object.rewardPeriodStartBlock !== undefined &&
                object.rewardPeriodStartBlock !== null
                ? long_1["default"].fromValue(object.rewardPeriodStartBlock)
                : long_1["default"].UZERO;
        message.rewardPeriodEndBlock =
            object.rewardPeriodEndBlock !== undefined &&
                object.rewardPeriodEndBlock !== null
                ? long_1["default"].fromValue(object.rewardPeriodEndBlock)
                : long_1["default"].UZERO;
        message.rewardPeriodAllocation = (_b = object.rewardPeriodAllocation) !== null && _b !== void 0 ? _b : "";
        message.rewardPeriodPoolMultipliers =
            ((_c = object.rewardPeriodPoolMultipliers) === null || _c === void 0 ? void 0 : _c.map(function (e) {
                return exports.PoolMultiplier.fromPartial(e);
            })) || [];
        message.rewardPeriodDefaultMultiplier =
            (_d = object.rewardPeriodDefaultMultiplier) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBasePoolMultiplier() {
    return { poolMultiplierAsset: "", multiplier: "" };
}
exports.PoolMultiplier = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.poolMultiplierAsset !== "") {
            writer.uint32(10).string(message.poolMultiplierAsset);
        }
        if (message.multiplier !== "") {
            writer.uint32(18).string(message.multiplier);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePoolMultiplier();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolMultiplierAsset = reader.string();
                    break;
                case 2:
                    message.multiplier = reader.string();
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
            poolMultiplierAsset: isSet(object.poolMultiplierAsset)
                ? String(object.poolMultiplierAsset)
                : "",
            multiplier: isSet(object.multiplier) ? String(object.multiplier) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.poolMultiplierAsset !== undefined &&
            (obj.poolMultiplierAsset = message.poolMultiplierAsset);
        message.multiplier !== undefined && (obj.multiplier = message.multiplier);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePoolMultiplier();
        message.poolMultiplierAsset = (_a = object.poolMultiplierAsset) !== null && _a !== void 0 ? _a : "";
        message.multiplier = (_b = object.multiplier) !== null && _b !== void 0 ? _b : "";
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
